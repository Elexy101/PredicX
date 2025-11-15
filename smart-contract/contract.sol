// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

/**
 * @title Predicrypto USDT - Custom USDT Token for Prediction Markets
 * @dev Total supply: 10,000,000,000 tokens
 *      Owner gets 100,000,000 tokens
 *      Users can mint 1,000,000 tokens once
 */
contract PredicryptoUSDT is ERC20, Ownable {
    uint256 public constant TOTAL_SUPPLY = 10_000_000_000 * 10**18;
    uint256 public constant OWNER_ALLOCATION = 100_000_000 * 10**18;
    uint256 public constant USER_MINT_AMOUNT = 1_000_000 * 10**18;
    
    mapping(address => bool) public hasMinted;
    
    constructor() ERC20("PredicX USDT", "pUSDT") {
        _mint(owner(), OWNER_ALLOCATION);
    }
    
    function mintUserTokens() external {
        require(!hasMinted[msg.sender], "Already minted");
        require(totalSupply() + USER_MINT_AMOUNT <= TOTAL_SUPPLY, "Max supply reached");
        
        hasMinted[msg.sender] = true;
        _mint(msg.sender, USER_MINT_AMOUNT);
    }
    
    function burn(uint256 amount) external {
        _burn(msg.sender, amount);
    }
}

/**
 * @title Predicrypto - Prediction Market Platform
 * @dev Uses custom pUSDT token, no leverage, Binance Testnet ready
 */
contract Predicrypto is ReentrancyGuard, Ownable {
    using Strings for uint256;
    
    PredicryptoUSDT public usdt;
    
    struct Prediction {
        uint256 id;
        address user;
        uint256 marketId;
        uint256 predictedPrice;
        uint256 stakeAmount;
        uint256 timestamp;
        bool resolved;
        bool won;
        uint256 prize;
        address copiedFrom;
        string copyId; // Unique copy ID for sharing
    }
    
    struct Market {
        uint256 id;
        string symbol;
        string name;
        uint256 currentPrice;
        uint256 poolSize;
        uint256 endTime;
        bool active;
    }
    
    uint256 public nextPredictionId = 1;
    uint256 public nextMarketId = 1;
    uint256 private _nonce = 0; // For random generation
    
    mapping(uint256 => Prediction) public predictions;
    mapping(uint256 => Market) public markets;
    mapping(address => uint256[]) public userPredictions;
    mapping(uint256 => uint256[]) public marketPredictions;
    mapping(uint256 => mapping(address => bool)) public participated;
    mapping(string => uint256) public copyIdToPrediction; // Map copy ID to prediction ID
    
    event MarketCreated(uint256 indexed marketId, string symbol, uint256 endTime);
    event Predicted(uint256 indexed predictionId, address indexed user, uint256 marketId, uint256 predictedPrice, uint256 stakeAmount, string copyId);
    event Copied(uint256 indexed originalId, uint256 indexed newId, address copier, string copyId);
    event Resolved(uint256 indexed predictionId, bool won, uint256 prize);
    
    constructor(address _usdt) {
        usdt = PredicryptoUSDT(_usdt);
        _createSampleMarkets();
    }
    
    function _createSampleMarkets() internal {
        _createMarket("BTC", "Bitcoin", 68500 * 1e18, 7 days);
        _createMarket("ETH", "Ethereum", 3450 * 1e18, 5 days);
        _createMarket("BNB", "Binance Coin", 602 * 1e18, 3 days);
        _createMarket("SOL", "Solana", 192 * 1e18, 4 days);
    }
    
    function _createMarket(string memory symbol, string memory name, uint256 price, uint256 duration) internal {
        uint256 id = nextMarketId++;
        markets[id] = Market({
            id: id,
            symbol: symbol,
            name: name,
            currentPrice: price,
            poolSize: 0,
            endTime: block.timestamp + duration,
            active: true
        });
        emit MarketCreated(id, symbol, block.timestamp + duration);
    }
    
    // Generate random string for copy ID
    function _generateRandomCopyId(uint256 predictionId) internal returns (string memory) {
        _nonce++;
        bytes memory chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        bytes memory randomString = new bytes(12);
        
        // Use a combination of timestamp, predictionId, and nonce for randomness
        uint256 baseRandom = uint256(keccak256(abi.encodePacked(
            block.timestamp,
            predictionId,
            _nonce,
            msg.sender
        )));
        
        for (uint256 i = 0; i < 12; i++) {
            randomString[i] = chars[baseRandom % chars.length];
            baseRandom = baseRandom / chars.length;
        }
        
        return string(abi.encodePacked("PRED-", string(randomString)));
    }
    
    // Alternative: Generate copy ID using keccak256 hash (more unique)
    function _generateHashCopyId(uint256 predictionId) internal view returns (string memory) {
        bytes32 hash = keccak256(abi.encodePacked(
            block.timestamp,
            predictionId,
            msg.sender,
            block.prevrandao
        ));
        
        bytes memory hashBytes = abi.encodePacked(hash);
        bytes memory result = new bytes(16);
        
        // Convert first 8 bytes of hash to hex string
        for (uint256 i = 0; i < 8; i++) {
            bytes1 b = hashBytes[i];
            bytes1 hi = bytes1(uint8(b) / 16);
            bytes1 lo = bytes1(uint8(b) % 16);
            result[i*2] = _char(hi);
            result[i*2+1] = _char(lo);
        }
        
        return string(abi.encodePacked("PRED-", string(result)));
    }
    
    // Helper function for hex conversion
    function _char(bytes1 b) internal pure returns (bytes1 c) {
        if (uint8(b) < 10) return bytes1(uint8(b) + 0x30);
        else return bytes1(uint8(b) + 0x37);
    }
    
    // Generate copy ID (you can choose which method to use)
    function _generateCopyId(uint256 predictionId) internal returns (string memory) {
        // Choose one of the methods:
        return _generateRandomCopyId(predictionId); // Alphanumeric
        // return _generateHashCopyId(predictionId); // Hex format
    }
    
    function createMarket(string calldata symbol, string calldata name, uint256 price, uint256 duration) external onlyOwner {
        _createMarket(symbol, name, price, duration);
    }
    
    function predict(uint256 marketId, uint256 predictedPrice, uint256 stakeAmount) external nonReentrant {
        Market storage m = markets[marketId];
        require(m.active && block.timestamp < m.endTime, "Market closed");
        require(stakeAmount > 0, "Stake > 0");
        
        require(usdt.transferFrom(msg.sender, address(this), stakeAmount), "USDT transfer failed");
        
        uint256 predId = nextPredictionId++;
        string memory copyId = _generateCopyId(predId);
        
        predictions[predId] = Prediction({
            id: predId,
            user: msg.sender,
            marketId: marketId,
            predictedPrice: predictedPrice,
            stakeAmount: stakeAmount,
            timestamp: block.timestamp,
            resolved: false,
            won: false,
            prize: 0,
            copiedFrom: address(0),
            copyId: copyId
        });
        
        copyIdToPrediction[copyId] = predId;
        m.poolSize += stakeAmount;
        marketPredictions[marketId].push(predId);
        userPredictions[msg.sender].push(predId);
        
        if (!participated[marketId][msg.sender]) {
            participated[marketId][msg.sender] = true;
        }
        
        emit Predicted(predId, msg.sender, marketId, predictedPrice, stakeAmount, copyId);
    }
    
    function copy(uint256 originalPredId, uint256 stakeAmount) external nonReentrant {
        Prediction memory orig = predictions[originalPredId];
        Market storage m = markets[orig.marketId];
        
        require(m.active && block.timestamp < m.endTime, "Market closed");
        require(!orig.resolved, "Already resolved");
        require(stakeAmount > 0, "Invalid stake");
        
        require(usdt.transferFrom(msg.sender, address(this), stakeAmount), "USDT failed");
        
        uint256 newId = nextPredictionId++;
        string memory copyId = _generateCopyId(newId);
        
        predictions[newId] = Prediction({
            id: newId,
            user: msg.sender,
            marketId: orig.marketId,
            predictedPrice: orig.predictedPrice,
            stakeAmount: stakeAmount,
            timestamp: block.timestamp,
            resolved: false,
            won: false,
            prize: 0,
            copiedFrom: orig.user,
            copyId: copyId
        });
        
        copyIdToPrediction[copyId] = newId;
        m.poolSize += stakeAmount;
        marketPredictions[orig.marketId].push(newId);
        userPredictions[msg.sender].push(newId);
        
        emit Copied(originalPredId, newId, msg.sender, copyId);
        emit Predicted(newId, msg.sender, orig.marketId, orig.predictedPrice, stakeAmount, copyId);
    }
    
    // Copy prediction using copy ID string
    function copyWithId(string calldata copyId, uint256 stakeAmount) external nonReentrant {
        uint256 originalPredId = copyIdToPrediction[copyId];
        require(originalPredId != 0, "Invalid copy ID");
        
        Prediction memory orig = predictions[originalPredId];
        Market storage m = markets[orig.marketId];
        
        require(m.active && block.timestamp < m.endTime, "Market closed");
        require(!orig.resolved, "Already resolved");
        require(stakeAmount > 0, "Invalid stake");
        
        require(usdt.transferFrom(msg.sender, address(this), stakeAmount), "USDT failed");
        
        uint256 newId = nextPredictionId++;
        string memory newCopyId = _generateCopyId(newId);
        
        predictions[newId] = Prediction({
            id: newId,
            user: msg.sender,
            marketId: orig.marketId,
            predictedPrice: orig.predictedPrice,
            stakeAmount: stakeAmount,
            timestamp: block.timestamp,
            resolved: false,
            won: false,
            prize: 0,
            copiedFrom: orig.user,
            copyId: newCopyId
        });
        
        copyIdToPrediction[newCopyId] = newId;
        m.poolSize += stakeAmount;
        marketPredictions[orig.marketId].push(newId);
        userPredictions[msg.sender].push(newId);
        
        emit Copied(originalPredId, newId, msg.sender, newCopyId);
        emit Predicted(newId, msg.sender, orig.marketId, orig.predictedPrice, stakeAmount, newCopyId);
    }
    
    // Get prediction by copy ID
    function getPredictionByCopyId(string calldata copyId) external view returns (Prediction memory) {
        uint256 predId = copyIdToPrediction[copyId];
        require(predId != 0, "Invalid copy ID");
        return predictions[predId];
    }
    
    function resolve(uint256 predictionId, uint256 actualPrice) external onlyOwner {
        Prediction storage p = predictions[predictionId];
        Market storage m = markets[p.marketId];
        
        require(!p.resolved, "Already resolved");
        require(block.timestamp >= m.endTime, "Market not ended");
        
        uint256 diff = _percentDiff(p.predictedPrice, actualPrice);
        bool won = diff <= 200; // 2% tolerance
        
        p.resolved = true;
        p.won = won;
        
        if (won) {
            uint256 totalWinnersStake = _getWinningStakes(p.marketId, actualPrice);
            require(totalWinnersStake > 0, "No winners");
            
            p.prize = (p.stakeAmount * m.poolSize) / totalWinnersStake;
            require(usdt.transfer(p.user, p.prize), "Prize failed");
        }
        
        emit Resolved(predictionId, won, p.prize);
    }
    
    function getUserPredictions(address user) external view returns (uint256[] memory) {
        return userPredictions[user];
    }
    
    function getMarketPredictions(uint256 marketId) external view returns (uint256[] memory) {
        return marketPredictions[marketId];
    }
    
    function getActiveMarkets() external view returns (Market[] memory) {
        uint256 count = 0;
        for (uint256 i = 1; i < nextMarketId; i++) {
            if (markets[i].active && block.timestamp < markets[i].endTime) count++;
        }
        
        Market[] memory active = new Market[](count);
        uint256 idx = 0;
        for (uint256 i = 1; i < nextMarketId; i++) {
            Market memory market = markets[i];
            if (market.active && block.timestamp < market.endTime) {
                active[idx++] = market;
            }
        }
        return active;
    }
    
    function _percentDiff(uint256 a, uint256 b) internal pure returns (uint256) {
        if (a == b) return 0;
        uint256 diff = a > b ? a - b : b - a;
        uint256 base = a > b ? a : b;
        return (diff * 10000) / base;
    }
    
    function _getWinningStakes(uint256 marketId, uint256 actualPrice) internal view returns (uint256 total) {
        uint256[] memory ids = marketPredictions[marketId];
        for (uint256 i = 0; i < ids.length; i++) {
            Prediction memory p = predictions[ids[i]];
            if (!p.resolved && _percentDiff(p.predictedPrice, actualPrice) <= 200) {
                total += p.stakeAmount;
            }
        }
    }
    
    function updatePrice(uint256 marketId, uint256 newPrice) external onlyOwner {
        markets[marketId].currentPrice = newPrice;
    }
    
    function closeMarket(uint256 marketId) external onlyOwner {
        markets[marketId].active = false;
    }
    
    function emergencyWithdraw() external onlyOwner {
        uint256 balance = usdt.balanceOf(address(this));
        if (balance > 0) {
            usdt.transfer(owner(), balance);
        }
    }
    
    function contractBalance() external view returns (uint256) {
        return usdt.balanceOf(address(this));
    }
}