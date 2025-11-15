        // Contract ABIs
        const USDT_ABI = [
            {
                "inputs": [],
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "spender",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "Approval",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "previousOwner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "newOwner",
                        "type": "address"
                    }
                ],
                "name": "OwnershipTransferred",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "value",
                        "type": "uint256"
                    }
                ],
                "name": "Transfer",
                "type": "event"
            },
            {
                "inputs": [],
                "name": "OWNER_ALLOCATION",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "TOTAL_SUPPLY",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "USER_MINT_AMOUNT",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "owner",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "spender",
                        "type": "address"
                    }
                ],
                "name": "allowance",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "spender",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "approve",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "account",
                        "type": "address"
                    }
                ],
                "name": "balanceOf",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "burn",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "decimals",
                "outputs": [
                    {
                        "internalType": "uint8",
                        "name": "",
                        "type": "uint8"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "spender",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "subtractedValue",
                        "type": "uint256"
                    }
                ],
                "name": "decreaseAllowance",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "name": "hasMinted",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "spender",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "addedValue",
                        "type": "uint256"
                    }
                ],
                "name": "increaseAllowance",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "mintUserTokens",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "name",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "owner",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "renounceOwnership",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "symbol",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "totalSupply",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "transfer",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "from",
                        "type": "address"
                    },
                    {
                        "internalType": "address",
                        "name": "to",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "amount",
                        "type": "uint256"
                    }
                ],
                "name": "transferFrom",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "newOwner",
                        "type": "address"
                    }
                ],
                "name": "transferOwnership",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            }
        ];
        
                const PREDICTION_ABI = [
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "_usdt",
                        "type": "address"
                    }
                ],
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "uint256",
                        "name": "originalId",
                        "type": "uint256"
                    },
                    {
                        "indexed": true,
                        "internalType": "uint256",
                        "name": "newId",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "address",
                        "name": "copier",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "string",
                        "name": "copyId",
                        "type": "string"
                    }
                ],
                "name": "Copied",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "uint256",
                        "name": "marketId",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "string",
                        "name": "symbol",
                        "type": "string"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "endTime",
                        "type": "uint256"
                    }
                ],
                "name": "MarketCreated",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "previousOwner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "newOwner",
                        "type": "address"
                    }
                ],
                "name": "OwnershipTransferred",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "uint256",
                        "name": "predictionId",
                        "type": "uint256"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "user",
                        "type": "address"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "marketId",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "predictedPrice",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "stakeAmount",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "string",
                        "name": "copyId",
                        "type": "string"
                    }
                ],
                "name": "Predicted",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "uint256",
                        "name": "predictionId",
                        "type": "uint256"
                    },
                    {
                        "indexed": false,
                        "internalType": "bool",
                        "name": "won",
                        "type": "bool"
                    },
                    {
                        "indexed": false,
                        "internalType": "uint256",
                        "name": "prize",
                        "type": "uint256"
                    }
                ],
                "name": "Resolved",
                "type": "event"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "marketId",
                        "type": "uint256"
                    }
                ],
                "name": "closeMarket",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "contractBalance",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "originalPredId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "stakeAmount",
                        "type": "uint256"
                    }
                ],
                "name": "copy",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "name": "copyIdToPrediction",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "string",
                        "name": "copyId",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "stakeAmount",
                        "type": "uint256"
                    }
                ],
                "name": "copyWithId",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "string",
                        "name": "symbol",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "price",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "duration",
                        "type": "uint256"
                    }
                ],
                "name": "createMarket",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "emergencyWithdraw",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "getActiveMarkets",
                "outputs": [
                    {
                        "components": [
                            {
                                "internalType": "uint256",
                                "name": "id",
                                "type": "uint256"
                            },
                            {
                                "internalType": "string",
                                "name": "symbol",
                                "type": "string"
                            },
                            {
                                "internalType": "string",
                                "name": "name",
                                "type": "string"
                            },
                            {
                                "internalType": "uint256",
                                "name": "currentPrice",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "poolSize",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "endTime",
                                "type": "uint256"
                            },
                            {
                                "internalType": "bool",
                                "name": "active",
                                "type": "bool"
                            }
                        ],
                        "internalType": "struct Predicrypto.Market[]",
                        "name": "",
                        "type": "tuple[]"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "marketId",
                        "type": "uint256"
                    }
                ],
                "name": "getMarketPredictions",
                "outputs": [
                    {
                        "internalType": "uint256[]",
                        "name": "",
                        "type": "uint256[]"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "string",
                        "name": "copyId",
                        "type": "string"
                    }
                ],
                "name": "getPredictionByCopyId",
                "outputs": [
                    {
                        "components": [
                            {
                                "internalType": "uint256",
                                "name": "id",
                                "type": "uint256"
                            },
                            {
                                "internalType": "address",
                                "name": "user",
                                "type": "address"
                            },
                            {
                                "internalType": "uint256",
                                "name": "marketId",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "predictedPrice",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "stakeAmount",
                                "type": "uint256"
                            },
                            {
                                "internalType": "uint256",
                                "name": "timestamp",
                                "type": "uint256"
                            },
                            {
                                "internalType": "bool",
                                "name": "resolved",
                                "type": "bool"
                            },
                            {
                                "internalType": "bool",
                                "name": "won",
                                "type": "bool"
                            },
                            {
                                "internalType": "uint256",
                                "name": "prize",
                                "type": "uint256"
                            },
                            {
                                "internalType": "address",
                                "name": "copiedFrom",
                                "type": "address"
                            },
                            {
                                "internalType": "string",
                                "name": "copyId",
                                "type": "string"
                            }
                        ],
                        "internalType": "struct Predicrypto.Prediction",
                        "name": "",
                        "type": "tuple"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "user",
                        "type": "address"
                    }
                ],
                "name": "getUserPredictions",
                "outputs": [
                    {
                        "internalType": "uint256[]",
                        "name": "",
                        "type": "uint256[]"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "name": "marketPredictions",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "name": "markets",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "id",
                        "type": "uint256"
                    },
                    {
                        "internalType": "string",
                        "name": "symbol",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "currentPrice",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "poolSize",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "endTime",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bool",
                        "name": "active",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "nextMarketId",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "nextPredictionId",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "owner",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "name": "participated",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "marketId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "predictedPrice",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "stakeAmount",
                        "type": "uint256"
                    }
                ],
                "name": "predict",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "name": "predictions",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "id",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "user",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "marketId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "predictedPrice",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "stakeAmount",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "timestamp",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bool",
                        "name": "resolved",
                        "type": "bool"
                    },
                    {
                        "internalType": "bool",
                        "name": "won",
                        "type": "bool"
                    },
                    {
                        "internalType": "uint256",
                        "name": "prize",
                        "type": "uint256"
                    },
                    {
                        "internalType": "address",
                        "name": "copiedFrom",
                        "type": "address"
                    },
                    {
                        "internalType": "string",
                        "name": "copyId",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "renounceOwnership",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "predictionId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "actualPrice",
                        "type": "uint256"
                    }
                ],
                "name": "resolve",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "newOwner",
                        "type": "address"
                    }
                ],
                "name": "transferOwnership",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "uint256",
                        "name": "marketId",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "newPrice",
                        "type": "uint256"
                    }
                ],
                "name": "updatePrice",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "usdt",
                "outputs": [
                    {
                        "internalType": "contract PredicryptoUSDT",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "name": "userPredictions",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            }
        ];
        
                // Contract addresses
                const USDT_CONTRACT_ADDRESS = "0x0D65F10fd46c6BDEb465e67510E55762941c6B76";
                const PREDICTION_CONTRACT_ADDRESS = "0x4E1760579899533653e9258DE80cb05A7171ad1A";
                const ADMIN_ADDRESS = "0x4d7bcf37c4f04f8780a40c101e7475e4132ec296";
        
                // Global variables
                let web3;
                let userAccount;
                let usdtContract;
                let predictionContract;
                let isAdmin = false;
                let realPrices = {};
                let currentMarkets = [];
                let currentMarketId = null;
                let isApproved = false;
        
                // DOM elements
                const connectWalletBtn = document.getElementById('connectWallet');
                const mintTokensBtn = document.getElementById('mintTokens');
                const approveTokensBtn = document.getElementById('approveTokens');
                const walletInfo = document.getElementById('walletInfo');
                const walletAddress = document.getElementById('walletAddress');
                const adminBadge = document.getElementById('adminBadge');
                const tokenBalance = document.getElementById('tokenBalance');
                const balanceAmount = document.getElementById('balanceAmount');
                const marketsContainer = document.getElementById('marketsContainer');
                const predictionsList = document.getElementById('predictionsList');
                const adminSection = document.getElementById('adminSection');
                const predictionModal = new bootstrap.Modal(document.getElementById('predictionModal'));
                const approveModal = new bootstrap.Modal(document.getElementById('approveModal'));
                const confirmPredictionBtn = document.getElementById('confirmPrediction');
                const confirmApproveBtn = document.getElementById('confirmApprove');
                const successNotification = document.getElementById('successNotification');
                const errorNotification = document.getElementById('errorNotification');
        
                // Initialize the app
                async function init() {
                    createParticles();
                    setupEventListeners();
                    await fetchRealPrices();
                    startPriceUpdates();
                    startTimerUpdates();
                }
        
                // Create floating particles
                function createParticles() {
                    const particlesContainer = document.getElementById('particles');
                    for (let i = 0; i < 50; i++) {
                        const particle = document.createElement('div');
                        particle.className = 'particle';
                        particle.style.width = `${Math.random() * 20 + 5}px`;
                        particle.style.height = particle.style.width;
                        particle.style.left = `${Math.random() * 100}%`;
                        particle.style.animationDuration = `${Math.random() * 20 + 10}s`;
                        particle.style.animationDelay = `${Math.random() * 5}s`;
                        particlesContainer.appendChild(particle);
                    }
                }
        
                // Initialize Web3 and connect to Binance Testnet
                async function initWeb3() {
                    if (window.ethereum) {
                        web3 = new Web3(window.ethereum);
                        try {
                            // Request account access
                            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                            userAccount = accounts[0];
                            console.log("Connected account:", userAccount);
                            
                            // Initialize contracts
                            usdtContract = new web3.eth.Contract(USDT_ABI, USDT_CONTRACT_ADDRESS);
                            predictionContract = new web3.eth.Contract(PREDICTION_ABI, PREDICTION_CONTRACT_ADDRESS);
                            
                            // Check if user is admin
                            isAdmin = (userAccount.toLowerCase() === ADMIN_ADDRESS.toLowerCase());
                            console.log("Is admin:", isAdmin);
                            
                            await updateUI();
                            showNotification('Connected to Binance Testnet!', 'success');
                            
                        } catch (error) {
                            console.error('Error connecting wallet:', error);
                            showNotification('Failed to connect wallet. Please try again.', 'error');
                        }
                    } else {
                        showNotification('Please install MetaMask!', 'error');
                    }
                }
        
                // Update UI after wallet connection
                async function updateUI() {
                    updateWalletUI();
                    
                    if (userAccount) {
                        try {
                            // Check if user has minted tokens
                            const hasMinted = await usdtContract.methods.hasMinted(userAccount).call();
                            console.log("Has minted:", hasMinted);
                            
                            // Show mint button if user hasn't minted yet
                            if (!hasMinted) {
                                mintTokensBtn.classList.remove('d-none');
                            } else {
                                mintTokensBtn.classList.add('d-none');
                            }
                            
                            // Get token balance
                            const balance = await usdtContract.methods.balanceOf(userAccount).call();
                            const formattedBalance = parseFloat(web3.utils.fromWei(balance, 'ether')).toLocaleString();
                            balanceAmount.textContent = formattedBalance;
                            console.log("Balance:", formattedBalance);
                            
                            // Check allowance
                            const allowance = await usdtContract.methods.allowance(userAccount, PREDICTION_CONTRACT_ADDRESS).call();
                            isApproved = parseFloat(web3.utils.fromWei(allowance, 'ether')) > 0;
                            console.log("Allowance:", web3.utils.fromWei(allowance, 'ether'), "Approved:", isApproved);
                            
                            // Show approve button if not approved
                            if (hasMinted && !isApproved) {
                                approveTokensBtn.classList.remove('d-none');
                            } else {
                                approveTokensBtn.classList.add('d-none');
                            }
                            
                            // Load markets from contract
                            await loadMarketsFromContract();
                            
                            // Load user predictions
                            await loadUserPredictions();
                            
                        } catch (error) {
                            console.error('Error fetching user data:', error);
                            renderSampleMarkets();
                        }
                    }
                }
        
                // Load markets from contract
                async function loadMarketsFromContract() {
                    try {
                        console.log("Loading markets from contract...");
                        const markets = await predictionContract.methods.getActiveMarkets().call();
                        console.log("Markets from contract:", markets);
                        currentMarkets = markets;
                        renderMarkets(markets);
                    } catch (error) {
                        console.error('Error loading markets from contract:', error);
                        renderSampleMarkets();
                    }
                }
        
                // Load user predictions
                async function loadUserPredictions(predictionIds) {
                    try {
                        const predictionIds = await predictionContract.methods.getUserPredictions(userAccount).call();
                        console.log("User predictions:", predictionIds);
                        renderUserPredictions(predictionIds);
                    } catch (error) {
                        console.error('Error loading user predictions:', error);
                        renderSamplePredictions();
                    }
                }
        
                // Fetch real cryptocurrency prices
                async function fetchRealPrices() {
                    try {
                        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,binancecoin,solana&vs_currencies=usd&include_24hr_change=true');
                        const data = await response.json();
                        
                        realPrices = {
                            'BTC': { price: data.bitcoin.usd, change: data.bitcoin.usd_24h_change },
                            'ETH': { price: data.ethereum.usd, change: data.ethereum.usd_24h_change },
                            'BNB': { price: data.binancecoin.usd, change: data.binancecoin.usd_24h_change },
                            'SOL': { price: data.solana.usd, change: data.solana.usd_24h_change }
                        };
                        
                        console.log("Real prices:", realPrices);
                    } catch (error) {
                        console.error('Error fetching real prices:', error);
                        // Fallback to sample data
                        realPrices = {
                            'BTC': { price: 68425.50, change: 2.34 },
                            'ETH': { price: 3450.75, change: -1.25 },
                            'BNB': { price: 602.30, change: 0.85 },
                            'SOL': { price: 192.60, change: 5.72 }
                        };
                    }
                }
        
                // Render market cards
                function renderMarkets(markets) {
                    marketsContainer.innerHTML = '';
                    
                    if (markets.length === 0) {
                        marketsContainer.innerHTML = `
                            <div class="col-12 text-center py-5">
                                <i class="fas fa-chart-line fa-3x text-muted mb-3"></i>
                                <p class="">No active markets available. Check back later!</p>
                            </div>
                        `;
                        return;
                    }
                    
                    markets.forEach(market => {
                        const symbol = market.symbol;
                        const realPrice = realPrices[symbol] || { price: parseFloat(web3.utils.fromWei(market.currentPrice, 'ether')), change: 0 };
                        const changeClass = realPrice.change >= 0 ? 'positive' : 'negative';
                        const poolSize = parseFloat(web3.utils.fromWei(market.poolSize, 'ether')).toLocaleString();
                        
                        const marketCard = document.createElement('div');
                        marketCard.className = 'col-md-6 col-lg-3';
                        marketCard.innerHTML = `
                            <div class="market-card">
                                <div class="crypto-icon">${symbol}</div>
                                <h3 class="text-white">${market.name} <span class="text-muted">${symbol}</span></h3>
                                <div class="market-price">$${realPrice.price.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</div>
                                <div class="price-change ${changeClass} d-inline-block px-3 py-1 rounded-pill">
                                    <i class="fas fa-arrow-${realPrice.change >= 0 ? 'up' : 'down'} me-1"></i> ${realPrice.change >= 0 ? '+' : ''}${realPrice.change?.toFixed(2) || '0.00'}%
                                </div>
                                <div class="countdown-timer">
                                    <div class="timer-value" id="timer-${market.id}">${formatTimeRemaining(new Date(market.endTime * 1000))}</div>
                                    <div class="">Time Remaining</div>
                                </div>
                                <div class="d-flex justify-content-between">
                                    <div>
                                        <div class="text-muted">Pool Size</div>
                                        <div class="pool-size">${poolSize} pUSDT</div>
                                    </div>
                                    <div>
                                        <div class="text-muted">Active</div>
                                        <div class="pool-size">${market.active ? 'Yes' : 'No'}</div>
                                    </div>
                                </div>
                                <button class="btn btn-primary w-100 mt-3 predict-btn" data-market="${market.id}">
                                    <i class="fas fa-bullseye me-2"></i>Predict Now
                                </button>
                            </div>
                        `;
                        
                        marketsContainer.appendChild(marketCard);
                    });
                    
                    // Add event listeners to predict buttons
                    document.querySelectorAll('.predict-btn').forEach(button => {
                        button.addEventListener('click', function() {
                            const marketId = this.getAttribute('data-market');
                            openPredictionModal(marketId);
                        });
                    });
                }
        
                // Render sample markets (fallback)
                function renderSampleMarkets() {
                    const sampleMarkets = [
                        {
                            id: 1,
                            symbol: "BTC",
                            name: "Bitcoin",
                            currentPrice: "68500000000000000000000",
                            poolSize: "124580000000000000000000",
                            endTime: Math.floor((Date.now() + 7 * 24 * 60 * 60 * 1000) / 1000),
                            active: true
                        },
                        {
                            id: 2,
                            symbol: "ETH",
                            name: "Ethereum", 
                            currentPrice: "3450000000000000000000",
                            poolSize: "87500000000000000000000",
                            endTime: Math.floor((Date.now() + 5 * 24 * 60 * 60 * 1000) / 1000),
                            active: true
                        }
                    ];
                    currentMarkets = sampleMarkets;
                    renderMarkets(sampleMarkets);
                }
        
                // Render user predictions with copy IDs
                async function renderUserPredictions(predictionIds) {
                    if (predictionIds.length === 0) {
                        predictionsList.innerHTML = `
                            <div class="text-center py-5">
                                <i class="fas fa-chart-bar fa-3x text-muted mb-3"></i>
                                <p class="">No predictions yet. Make your first prediction to get started!</p>
                                <button class="btn btn-primary mt-2" onclick="document.getElementById('exploreMarkets').click()">Explore Markets</button>
                            </div>
                        `;
                        return;
                    }
                    
                    predictionsList.innerHTML = '';
                    
                    for (const id of predictionIds) {
                        try {
                            const prediction = await predictionContract.methods.predictions(id).call();
                            const market = currentMarkets.find(m => m.id == prediction.marketId) || { symbol: 'Unknown', name: 'Unknown Market' };
                            const stakeAmount = parseFloat(web3.utils.fromWei(prediction.stakeAmount, 'ether')).toLocaleString();
                            const predictedPrice = parseFloat(web3.utils.fromWei(prediction.predictedPrice, 'ether')).toLocaleString();
                            
                            let statusClass = 'status-pending';
                            let statusText = 'Pending';
                            
                            if (prediction.resolved) {
                                statusClass = prediction.won ? 'status-won' : 'status-lost';
                                statusText = prediction.won ? 'Won' : 'Lost';
                            }
                            
                            // Generate copy ID if not available
                            const copyId = prediction.copyId || `PRED-${id}-${prediction.user.substring(2, 8)}`;
                            
                            const predictionItem = document.createElement('div');
                            predictionItem.className = 'prediction-item';
                            predictionItem.innerHTML = `
                                <div class="d-flex justify-content-between align-items-start">
                                    <div class="flex-grow-1">
                                        <h6 class="mb-1">Prediction #${id}</h6>
                                        <small class="text-muted">Market: ${market.symbol} - Predicted: $${predictedPrice}</small>
                                        <div class="mt-1"><small>Staked: ${stakeAmount} pUSDT</small></div>
                                        
                                        <!-- Copy ID Section -->
                                        <div class="copy-id-section mt-2">
                                            <small class="text-warning d-block mb-1"><i class="fas fa-share-alt me-1"></i>Share this Copy ID:</small>
                                            <div class="d-flex align-items-center gap-2">
                                                <code class="copy-id-text flex-grow-1">${copyId}</code>
                                                <button class="btn btn-sm btn-outline-warning copy-id-btn" data-copyid="${copyId}">
                                                    <i class="fas fa-copy"></i> Copy
                                                </button>
                                            </div>
                                            <small class="d-block mt-1">Others can paste this ID to copy your prediction</small>
                                        </div>
                                    </div>
                                    <div class="text-end ms-3">
                                        <div class="status-badge ${statusClass}">${statusText}</div>
                                        ${prediction.prize > 0 ? `<div class="mt-1"><small>Prize: ${parseFloat(web3.utils.fromWei(prediction.prize, 'ether')).toLocaleString()} pUSDT</small></div>` : ''}
                                        ${prediction.copiedFrom !== '0x0000000000000000000000000000000000000000' ? 
                                            `<div class="mt-1"><small><i class="fas fa-copy text-info"></i> Copied from ${prediction.copiedFrom.substring(0, 6)}...</small></div>` : ''}
                                    </div>
                                </div>
                            `;
                            predictionsList.appendChild(predictionItem);
                        } catch (error) {
                            console.error('Error loading prediction details:', error);
                        }
                    }
                    
                    // Setup copy ID buttons
                    setupCopyIdButtons();
                }
        
                // Setup copy ID buttons functionality
                function setupCopyIdButtons() {
                    document.querySelectorAll('.copy-id-btn').forEach(button => {
                        button.addEventListener('click', function() {
                            const copyId = this.getAttribute('data-copyid');
                            navigator.clipboard.writeText(copyId).then(() => {
                                showNotification('Copy ID copied to clipboard! Share it with others.', 'success');
                            }).catch(err => {
                                console.error('Failed to copy: ', err);
                                showNotification('Failed to copy to clipboard', 'error');
                            });
                        });
                    });
                }
        
                // Render sample predictions (fallback)
                function renderSamplePredictions() {
                    predictionsList.innerHTML = `
                        <div class="text-center py-5">
                            <i class="fas fa-chart-bar fa-3x d mb-3"></i>
                            <p class="">No predictions yet. Connect your wallet and mint pUSDT to get started!</p>
                        </div>
                    `;
                }
        
                // Open prediction modal
                function openPredictionModal(marketId) {
                    if (!userAccount) {
                        showNotification('Please connect your wallet first', 'error');
                        return;
                    }
                    
                    if (!isApproved) {
                        showNotification('Please approve pUSDT spending first', 'error');
                        approveModal.show();
                        return;
                    }
                    
                    const market = currentMarkets.find(m => m.id == marketId);
                    if (market) {
                        document.getElementById('predictionMarketName').value = `${market.name} (${market.symbol})`;
                        document.getElementById('modalBalance').textContent = balanceAmount.textContent;
                        document.getElementById('stakeAmount').value = '';
                        document.getElementById('predictionPrice').value = '';
                        document.getElementById('copyPredictionId').value = '';
                        document.getElementById('predictionDetails').classList.add('d-none');
                        
                        // Store current market ID for prediction
                        currentMarketId = marketId;
                        
                        predictionModal.show();
                    }
                }
        
                // Load prediction details by copy ID
                async function loadPredictionDetails() {
                    const copyId = document.getElementById('copyPredictionId').value.trim();
                    
                    if (!copyId) {
                        showNotification('Please enter a Copy ID first', 'error');
                        return;
                    }
                    
                    try {
                        showNotification('Loading prediction details...', 'success');
                        
                        const prediction = await predictionContract.methods.getPredictionByCopyId(copyId).call();
                        
                        if (prediction.id === '0') {
                            showNotification('Invalid Copy ID. Please check and try again.', 'error');
                            return;
                        }
                        
                        // Auto-fill the prediction details
                        const market = currentMarkets.find(m => m.id == prediction.marketId);
                        document.getElementById('predictionPrice').value = parseFloat(web3.utils.fromWei(prediction.predictedPrice, 'ether'));
                        
                        // Show prediction details
                        document.getElementById('originalPredictor').textContent = `${prediction.user.substring(0, 6)}...${prediction.user.substring(prediction.user.length - 4)}`;
                        document.getElementById('loadedPredictedPrice').textContent = parseFloat(web3.utils.fromWei(prediction.predictedPrice, 'ether')).toLocaleString();
                        document.getElementById('loadedMarket').textContent = market ? `${market.name} (${market.symbol})` : 'Unknown Market';
                        
                        document.getElementById('predictionDetails').classList.remove('d-none');
                        
                        showNotification(`Successfully loaded prediction from ${prediction.user.substring(0, 6)}...`, 'success');
                        
                    } catch (error) {
                        console.error('Error loading prediction details:', error);
                        showNotification('Error loading prediction. Please check the Copy ID.', 'error');
                    }
                }
        
                // Mint tokens function
                async function mintTokens() {
                    try {
                        showNotification('Minting 1,000,000 pUSDT...', 'success');
                        
                        await usdtContract.methods.mintUserTokens().send({ from: userAccount });
                        
                        showNotification('Successfully minted 1,000,000 pUSDT!', 'success');
                        mintTokensBtn.classList.add('d-none');
                        
                        // Update balance
                        const balance = await usdtContract.methods.balanceOf(userAccount).call();
                        balanceAmount.textContent = parseFloat(web3.utils.fromWei(balance, 'ether')).toLocaleString();
                        
                        // Show approve button
                        approveTokensBtn.classList.remove('d-none');
                        
                    } catch (error) {
                        console.error('Error minting tokens:', error);
                        showNotification('Error minting tokens: ' + error.message, 'error');
                    }
                }
        
                // Approve tokens function
                async function approveTokens() {
                    try {
                        showNotification('Approving pUSDT spending...', 'success');
                        
                        const amount = web3.utils.toWei('1000000', 'ether'); // Approve 1,000,000 pUSDT
                        await usdtContract.methods.approve(PREDICTION_CONTRACT_ADDRESS, amount).send({ from: userAccount });
                        
                        showNotification('Successfully approved pUSDT spending!', 'success');
                        approveTokensBtn.classList.add('d-none');
                        isApproved = true;
                        
                    } catch (error) {
                        console.error('Error approving tokens:', error);
                        showNotification('Error approving tokens: ' + error.message, 'error');
                    }
                }
        
                // Place prediction function
                async function placePrediction() {
                    const stakeAmount = document.getElementById('stakeAmount').value;
                    const predictedPrice = document.getElementById('predictionPrice').value;
                    const copyPredictionId = document.getElementById('copyPredictionId').value.trim();
                    
                    if (!stakeAmount || !predictedPrice || !currentMarketId) {
                        showNotification('Please fill in all required fields', 'error');
                        return;
                    }
                    
                    const userBalance = parseFloat(balanceAmount.textContent.replace(/,/g, ''));
                    if (parseFloat(stakeAmount) > userBalance) {
                        showNotification('Insufficient pUSDT balance', 'error');
                        return;
                    }
                    
                    try {
                        showNotification('Placing your prediction...', 'success');
                        
                        const stakeInWei = web3.utils.toWei(stakeAmount, 'ether');
                        
                        if (copyPredictionId) {
                            // Use the new copyWithId function for string copy IDs
                            await predictionContract.methods.copyWithId(copyPredictionId, stakeInWei).send({ from: userAccount });
                            showNotification('Successfully copied prediction!', 'success');
                        } else {
                            // New prediction
                            const priceInWei = web3.utils.toWei(predictedPrice, 'ether');
                            await predictionContract.methods.predict(currentMarketId, priceInWei, stakeInWei).send({ from: userAccount });
                            showNotification('Prediction placed successfully!', 'success');
                        }
                        
                        predictionModal.hide();
                        
                        // Reload data
                        await updateUI();
                        
                    } catch (error) {
                        console.error('Error placing prediction:', error);
                        showNotification('Error placing prediction: ' + error.message, 'error');
                    }
                }
        
                // Format time remaining
                function formatTimeRemaining(endTime) {
                    const now = new Date();
                    const diff = endTime - now;
                    
                    if (diff <= 0) return '00:00:00:00';
                    
                    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
                    
                    return `${days.toString().padStart(2, '0')}:${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
                }
        
                // Update wallet UI
                function updateWalletUI() {
                    if (userAccount) {
                        walletInfo.classList.remove('d-none');
                        tokenBalance.classList.remove('d-none');
                        walletAddress.textContent = `${userAccount.substring(0, 6)}...${userAccount.substring(userAccount.length - 4)}`;
                        connectWalletBtn.textContent = 'Connected';
                        connectWalletBtn.classList.remove('btn-outline-light');
                        connectWalletBtn.classList.add('btn-success');
                        
                        if (isAdmin) {
                            adminBadge.classList.remove('d-none');
                            adminSection.classList.remove('d-none');
                        }
                    }
                }
        
                // Show notification
                function showNotification(message, type) {
                    const notification = type === 'success' ? successNotification : errorNotification;
                    const messageElement = type === 'success' ? document.getElementById('successMessage') : document.getElementById('errorMessage');
                    
                    messageElement.textContent = message;
                    notification.classList.remove('d-none');
                    notification.classList.add('show');
                    
                    setTimeout(() => {
                        notification.classList.remove('show');
                        setTimeout(() => {
                            notification.classList.add('d-none');
                        }, 300);
                    }, 4000);
                }
        
                // Update real-time prices
                function startPriceUpdates() {
                    setInterval(async () => {
                        await fetchRealPrices();
                        if (currentMarkets.length > 0) {
                            renderMarkets(currentMarkets);
                        }
                    }, 30000);
                }
        
                // Update countdown timers
                function startTimerUpdates() {
                    setInterval(() => {
                        if (currentMarkets.length > 0) {
                            currentMarkets.forEach(market => {
                                const timerElement = document.getElementById(`timer-${market.id}`);
                                if (timerElement) {
                                    timerElement.textContent = formatTimeRemaining(new Date(market.endTime * 1000));
                                }
                            });
                        }
                    }, 1000);
                }
        
                // Set up event listeners
                function setupEventListeners() {
                    connectWalletBtn.addEventListener('click', initWeb3);
                    mintTokensBtn.addEventListener('click', mintTokens);
                    approveTokensBtn.addEventListener('click', () => approveModal.show());
                    confirmApproveBtn.addEventListener('click', approveTokens);
                    confirmPredictionBtn.addEventListener('click', placePrediction);
                    
                    // Copy prediction functionality
                    document.getElementById('pasteCopyId')?.addEventListener('click', async () => {
                        try {
                            const text = await navigator.clipboard.readText();
                            document.getElementById('copyPredictionId').value = text;
                            showNotification('Pasted from clipboard!', 'success');
                        } catch (error) {
                            showNotification('Could not read from clipboard', 'error');
                        }
                    });
                    
                    document.getElementById('findCopyId')?.addEventListener('click', () => {
                        showNotification('Browse "My Predictions" section to find Copy IDs from other users', 'info');
                    });
                    
                    document.getElementById('loadPredictionDetails')?.addEventListener('click', loadPredictionDetails);
                    
                    // Explore markets button
                    document.getElementById('exploreMarkets').addEventListener('click', () => {
                        document.getElementById('markets').scrollIntoView({ behavior: 'smooth' });
                    });
                    
                    // Admin functions
                    document.getElementById('createMarketBtn').addEventListener('click', async () => {
                        if (!isAdmin) return;
                        
                        const symbol = document.getElementById('newMarketSymbol').value;
                        const name = document.getElementById('newMarketName').value;
                        const price = document.getElementById('newMarketPrice').value;
                        const duration = document.getElementById('newMarketDuration').value;
                        
                        if (!symbol || !name || !price || !duration) {
                            showNotification('Please fill all fields', 'error');
                            return;
                        }
                        
                        try {
                            const priceInWei = web3.utils.toWei(price, 'ether');
                            const durationInSeconds = duration * 24 * 60 * 60;
                            
                            await predictionContract.methods.createMarket(symbol, name, priceInWei, durationInSeconds)
                                .send({ from: userAccount });
                            
                            showNotification('Market created successfully!', 'success');
                            await loadMarketsFromContract();
                            
                            // Clear form
                            document.getElementById('newMarketSymbol').value = '';
                            document.getElementById('newMarketName').value = '';
                            document.getElementById('newMarketPrice').value = '';
                            document.getElementById('newMarketDuration').value = '';
                            
                        } catch (error) {
                            showNotification('Error creating market: ' + error.message, 'error');
                        }
                    });
                    
                    document.getElementById('resolvePredictionBtn').addEventListener('click', async () => {
                        if (!isAdmin) return;
                        
                        const predictionId = document.getElementById('resolvePredictionId').value;
                        const actualPrice = document.getElementById('resolveActualPrice').value;
                        
                        if (!predictionId || !actualPrice) {
                            showNotification('Please fill all fields', 'error');
                            return;
                        }
                        
                        try {
                            const priceInWei = web3.utils.toWei(actualPrice, 'ether');
                            
                            await predictionContract.methods.resolve(predictionId, priceInWei)
                                .send({ from: userAccount });
                            
                            showNotification('Prediction resolved successfully!', 'success');
                            
                            // Clear form
                            document.getElementById('resolvePredictionId').value = '';
                            document.getElementById('resolveActualPrice').value = '';
                            
                            // Reload user predictions
                            await loadUserPredictions();
                            
                        } catch (error) {
                            showNotification('Error resolving prediction: ' + error.message, 'error');
                        }
                    });
                }
        
                // Initialize the app when DOM is loaded
                document.addEventListener('DOMContentLoaded', init);