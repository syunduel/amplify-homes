import React, { useState, useEffect } from 'react';
import { ConsoleLogger } from '@aws-amplify/core';
import axios from "axios";
import {serverData} from '../data/serverData';
import {collectionData} from '../data/collectionData';
import { AlchemyMultichainClient } from './../lib/alchemy-multichain-client';
import { Network } from 'alchemy-sdk';


const alchemyTest = async () => {

    // Default config to use for all networks.
    const defaultConfig = {
        apiKey: 'upbO14aoCDMzJiLouJJbWfisrDJVunnO', // TODO: Replace with your API key.
        network: Network.ETH_MAINNET
    };
    // Include optional setting overrides for specific networks.
    const overrides = {
        // TODO: Replace with your API keys.
        [Network.MATIC_MAINNET]: { apiKey: 'Izx3-0WVznJi1Rxp4wTcWF6fGIDJs8GI', maxRetries: 10 },
        [Network.ARB_MAINNET]: { apiKey: 'arb-api-key' }
    };
    const alchemy = new AlchemyMultichainClient(defaultConfig, overrides);

    // get NFTs in multiple networks
    const owner = '0xd8da6bf26964af9d7eed9e03e53415d37aa96045';
    const mainnetNfts = await alchemy
        .forNetwork(Network.ETH_MAINNET)
        .nft.getNftsForOwner(owner, { pageSize: 5 });
    const maticNfts = await alchemy
        .forNetwork(Network.MATIC_MAINNET)
        .nft.getNftsForOwner(owner, { pageSize: 5 });

    console.log('mainnetNfts', mainnetNfts);
    console.log('maticNfts', maticNfts);

    return <div></div>;

}

alchemyTest();


export function useEthNFTs(targetChain, targetAddress, limit = 1) {

    console.log("useEthNFTs start");

    // TODO
    // const { authenticate, isAuthenticated, isAuthenticating, user, account, logout, isInitialized } = useMoralis();
    const { authenticate, isAuthenticated, isAuthenticating, user, account, logout, isInitialized } = {};

    // const Web3Api = useMoralisWeb3Api();
    const Web3Api = {};

    const [ethNFTs, setEthNFTs] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [total, setTotal] = useState(0);

    const serverCollectionRoot = serverData.serverCollectionRoot;

    useEffect(() => {
        const getNFTs = async () => {

            if (!isInitialized || !isAuthenticated) {
                return
            }


            console.log("targetChain : " + targetChain);
            console.log("targetAddress : " + targetAddress);

            let selectedChain = targetChain
            if (targetChain === "ethereum") {
              selectedChain = "Eth";
            } else if (targetChain === "matic") {
              selectedChain = "Polygon"
            } else if (targetChain === "goerli") {
                selectedChain = "Goerli"
            }

            if (selectedChain === undefined || selectedChain === ""
                || targetAddress === undefined || targetAddress === "") {
                return
            }

            // MoralisからNFTの一覧を取得する
            let response = null;

            if (targetAddress !== "") {
                response = await Web3Api.account.getNFTsForContract({
                    chain: selectedChain,
                    token_address: targetAddress,
                    // limit: limit,
                });
            } else {
                response = await Web3Api.account.getNFTs({
                    chain: selectedChain,
                });
            }

            console.log("fetchEthNFTs NFTs", response);
    
            // console.log("response.result");
            // console.log(response.result);
    
            if (response.result === undefined || response.result.length === 0) {
                setIsLoaded(true);
                return [ethNFTs, true];
            }

            const collectionInfo = collectionData[targetChain + "_" + targetAddress];
            console.log("collectionInfo", targetChain + "_" + targetAddress, collectionInfo);

            let metadataHead = "";
            let metadataTail = "";
            if (collectionInfo !== undefined) {
                if (collectionInfo.metadataHead !== undefined) {
                    metadataHead = collectionInfo.metadataHead;
                }
                if (collectionInfo.metadataTail !== undefined) {
                    metadataTail = collectionInfo.metadataTail;
                }
            }


            let nowEthNFTs = [];
    
            for (let i = 0; i < response.result.length; i++) {

                if (limit <= i) {
                    break;
                }

                let nowEthNft = response.result[i];
                // console.log(nowEthNft.token_address);

                nowEthNft.chain = targetChain;
    
                console.log(`nowEthNft.metadata token_id: ${nowEthNft.token_id}`);
                console.log(nowEthNft.symbol);

                if (targetAddress === "" & (nowEthNft.symbol === "LAG" || nowEthNft.symbol === "LAGM" || nowEthNft.symbol === "CNP" || nowEthNft.symbol === "VLCNP" || nowEthNft.symbol === "MDFN")) {
                    continue;
                }

                
                // metadataを独自サーバーから取得する
                if (metadataHead !== "") {

                    let metadataURL = `${metadataHead}${nowEthNft.token_id}${metadataTail}`;
                    console.log("metadataURL", metadataURL);

                    const metadataRes = await axios.get(metadataURL);

                    console.log("axios.get");
                    console.log(metadataRes.data);

                    try {
                        nowEthNft.metadata = JSON.parse(metadataRes.data);
                    } catch (error) {
                        nowEthNft.metadata = JSON.parse(JSON.stringify(metadataRes.data));
                    }

                    console.log("nowEthNft.metadata");
                    console.log(nowEthNft.metadata);

                    nowEthNft = setProps(serverCollectionRoot, nowEthNft, selectedChain, targetAddress);
                    // console.log(`nowEthNft.symbol: ${nowEthNft.symbol}`);

                    console.log(nowEthNft.itemName);
                    console.log(nowEthNft.moralisImageUri);
        
                    nowEthNFTs.push(nowEthNft);
    
                } else {
                    if (nowEthNft.metadata !== undefined) {
        
                        try {
                            nowEthNft.metadata = JSON.parse(nowEthNft.metadata);
                        } catch (error) {
                            nowEthNft.metadata = JSON.parse(JSON.stringify(nowEthNft.metadata));
                        }

                        if (nowEthNft.token_address.toLowerCase() === "0xc067d3e859cbc2c4a8cf9be96bebfa24b0cba5a6") {
                            nowEthNft.symbol = "TAG";
                            nowEthNft.name = "Tokyo Alternative Girls";
                        }

                        console.log("nowEthNft.metadata");
                        console.log(nowEthNft.metadata);

                        nowEthNft = setProps(serverCollectionRoot, nowEthNft, selectedChain, targetAddress);

                        console.log(nowEthNft.itemName);
                        console.log(nowEthNft.moralisImageUri);
            
                        nowEthNFTs.push(nowEthNft);
                    }
                }

            }

            setEthNFTs(nowEthNFTs);
            setIsLoaded(true);
            setTotal(response.total);

            console.log("this is return");
            console.log(ethNFTs);
            console.log("isLoaded " + isLoaded);

            return [ethNFTs, isLoaded, total];
        }

        getNFTs();

    }, [isInitialized, isAuthenticated, user])

    return [ethNFTs, isLoaded, total];

}

function setProps(serverCollectionRoot, nowEthNft, targetChain, targetAddress) {

    if (nowEthNft.metadata !== null && nowEthNft.metadata.name !== undefined) {
        nowEthNft.itemName = nowEthNft.metadata.name;
    } else {
        nowEthNft.itemName = `${nowEthNft.symbol}_${nowEthNft.token_id}`;
    }

    // 画像を自前サーバーから取得する
    if (nowEthNft.symbol === "LAG" || nowEthNft.symbol === "LAGM" || nowEthNft.symbol === "CNP" || nowEthNft.symbol === "VLCNP" || nowEthNft.symbol === "MDFN" || nowEthNft.symbol === "TAG") {
        // 何故か読み込めない時があったので、画像はうちのS3に置いてある。
        let nowImageName = nowEthNft.token_id;
        // LAGとLAGMの画像ファイル名は4桁固定の0パディング
        if (nowEthNft.symbol === "LAG" || nowEthNft.symbol === "LAGM") {
            nowImageName = nowImageName.padStart(4, '0');
        }

        nowEthNft.moralisImageUri = `${serverCollectionRoot}${targetChain}/${nowEthNft.symbol}_${nowEthNft.token_address.toLowerCase()}/pics/${nowImageName}.png`
        
    } else {
        if (nowEthNft.metadata == undefined) {
            nowEthNft.moralisImageUri = "/none.png";
        } else if (nowEthNft.metadata.image !== undefined && nowEthNft.metadata.image !== "" && nowEthNft.metadata.image.indexOf("ipfs://") === 0) {
            nowEthNft.moralisImageUri = getMoraliImageUri(nowEthNft.metadata.image);
        } else {
            nowEthNft.moralisImageUri = nowEthNft.metadata.image;
        }
    }

    console.log(nowEthNft.moralisImageUri);

    return nowEthNft;
}

export function getMoraliImageUri(ipfsUri) {
    // console.log(ipfsUri);
    let returnStr = "https://gateway.moralisipfs.com/ipfs/" + ipfsUri.substring(7);
    // console.log(returnStr);
    return returnStr;
}

export function useEthNFT(targetChain, targetAddress, targetTokenId) {

    const [ethNFTs, isLoaded] = useEthNFTs(targetChain, targetAddress, 100);

    for (let i = 0; i < ethNFTs.length; i++) {
        let nowEthNft = ethNFTs[i];
        if (nowEthNft.token_id === targetTokenId) {
            return nowEthNft;
        }
    }

    return null;
}