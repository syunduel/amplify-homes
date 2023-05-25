import React, { useState, useEffect } from 'react';
import { ConsoleLogger } from '@aws-amplify/core';
import axios from "axios";
import {serverData} from '../data/serverData';
import { useCollectionInfo } from '../api/collectionInfo';
import { AlchemyMultichainClient } from './../lib/alchemy-multichain-client';
import { Network } from 'alchemy-sdk';
import { useAccount } from 'wagmi'



export function useEthNFTs(targetChain, targetAddress, limit = 1) {

    console.log("useEthNFTs start", targetChain, targetAddress, limit);

    const { address, isConnected } = useAccount()

    // Default config to use for all networks.
    const defaultConfig = {
        apiKey: 'upbO14aoCDMzJiLouJJbWfisrDJVunnO', // TODO: Replace with your API key.
        network: Network.ETH_MAINNET
    };
    // Include optional setting overrides for specific networks.
    const overrides = {
        [Network.ETH_GOERLI]: { apiKey: 'FHWYhsj50wrHcVUGMY0oEV7RCVDPyPUC' },
        [Network.MATIC_MAINNET]: { apiKey: 'Izx3-0WVznJi1Rxp4wTcWF6fGIDJs8GI', maxRetries: 10 },
        [Network.MATIC_MUMBAI]: { apiKey: 'JR0SCgYhL4JAFdwvdkbim6I7sfRjkBx8', maxRetries: 10 }
    };
    const alchemy = new AlchemyMultichainClient(defaultConfig, overrides);

    const collectionInfo = useCollectionInfo(targetChain, targetAddress);
    console.log("useEthNFTs collectionInfo", collectionInfo);

    const [ethNFTs, setEthNFTs] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [total, setTotal] = useState(0);

    const serverCollectionRoot = serverData.serverCollectionRoot;

    useEffect(() => {
        const getNFTs = async () => {

            if (!isConnected) {
                return
            }

            console.log("useEthNFTs getNFTs target", targetChain, targetAddress);

            let selectedChain = targetChain;
            let selectedChain4Alchemy = "";
            if (targetChain === "ethereum") {
                selectedChain = "Eth";
                selectedChain4Alchemy = Network.ETH_MAINNET;
            } else if (targetChain === "matic") {
                selectedChain = "Polygon";
                selectedChain4Alchemy = Network.MATIC_MAINNET;
            } else if (targetChain === "goerli") {
                selectedChain = "Goerli";
                selectedChain4Alchemy = Network.ETH_GOERLI;
            }

            if (selectedChain === undefined || selectedChain === ""
                || targetAddress === undefined || targetAddress === "") {
                return
            }

            // NFTの一覧を取得する
            let response = null;

            if (targetAddress !== "") {

                // get NFTs in multiple networks
                response = await alchemy
                .forNetwork(selectedChain4Alchemy)
                .nft.getNftsForOwner(address, { contractAddresses: [targetAddress], pageSize: 100 });

            } else {
                // response = await Web3Api.account.getNFTs({
                //     chain: selectedChain,
                // });
            }

            // console.log("targetAddress : " + targetAddress);
            console.log("fetchEthNFTs NFTs", response);
    
            // console.log("response.result");
            // console.log(response.result);
    
            if (response.ownedNfts === undefined || response.ownedNfts.length === 0) {
                setIsLoaded(true);
                return [ethNFTs, true];
            }

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
    
            for (let i = 0; i < response.ownedNfts.length; i++) {

                if (limit <= i) {
                    break;
                }

                let nowEthNft = response.ownedNfts[i];
                console.log("nowEthNft", nowEthNft);

                nowEthNft.chain = targetChain;
    
                console.log(`nowEthNft.metadata tokenId: ${nowEthNft.tokenId}`);
                console.log(nowEthNft.contract.symbol);
                nowEthNft.symbol = nowEthNft.contract.symbol;

                if (targetAddress === "" & (nowEthNft.symbol === "LAG" || nowEthNft.symbol === "LAGM" || nowEthNft.symbol === "CNP" || nowEthNft.symbol === "VLCNP" || nowEthNft.symbol === "MDFN")) {
                    continue;
                }

                // metadataを独自サーバーから取得する
                if (metadataHead !== "") {

                    let metadataURL = `${metadataHead}${nowEthNft.tokenId}${metadataTail}`;
                    console.log("metadataURL", metadataURL);

                    const metadataRes = await axios.get(metadataURL);

                    console.log("axios.get", metadataRes.data);

                    try {
                        nowEthNft.duMetadata = JSON.parse(metadataRes.data);
                    } catch (error) {
                        nowEthNft.duMetadata = JSON.parse(JSON.stringify(metadataRes.data));
                    }

                    console.log("nowEthNft.duMetadata", nowEthNft.duMetadata);


                    nowEthNft = setProps(serverCollectionRoot, nowEthNft, selectedChain, targetAddress);
                    // console.log(`nowEthNft.symbol: ${nowEthNft.symbol}`);

                    console.log("push nowEthNft", nowEthNft);
        
                    nowEthNFTs.push(nowEthNft);
    
                } else {
                    if (nowEthNft.rawMetadata !== undefined) {
        
                        try {
                            nowEthNft.duMetadata = JSON.parse(nowEthNft.rawMetadata);
                        } catch (error) {
                            nowEthNft.duMetadata = JSON.parse(JSON.stringify(nowEthNft.rawMetadata));
                        }

                        if (nowEthNft.contract.address.toLowerCase() === "0x9178a6a8b057210e28b3a7931dd825b04f69703b") {
                            nowEthNft.symbol = "TAG";
                            nowEthNft.name = "Tokyo Alternative Girls";
                            nowEthNft.chain = "ethereum";
                        }

                        console.log("nowEthNft.duMetadata", nowEthNft.duMetadata);

                        nowEthNft = setProps(serverCollectionRoot, nowEthNft, selectedChain, targetAddress);

                        console.log("push nowEthNft", nowEthNft);
            
                        nowEthNFTs.push(nowEthNft);
                    }
                }

            }

            setEthNFTs(nowEthNFTs);
            setTotal(response.totalCount);
            setIsLoaded(true);

            console.log("this is return", ethNFTs, isLoaded, total);

            return [ethNFTs, isLoaded, total];
        }

        getNFTs();

    }, [address, isConnected, collectionInfo])

    return [ethNFTs, isLoaded, total];

}

function setProps(serverCollectionRoot, nowEthNft, targetChain, targetAddress) {

    if (nowEthNft.duMetadata !== null && nowEthNft.duMetadata.name !== undefined) {
        nowEthNft.itemName = nowEthNft.duMetadata.name;
    } else {
        nowEthNft.itemName = `${nowEthNft.symbol}_${nowEthNft.tokenId}`;
    }

    if (nowEthNft.itemName !== null && nowEthNft.itemName !== undefined) {
        nowEthNft.name = nowEthNft.contract.name;
    }

    // 画像を自前サーバーから取得する
    if (nowEthNft.symbol === "LAG" || nowEthNft.symbol === "LAGM" || nowEthNft.symbol === "MDFN" || nowEthNft.symbol === "TAG") {
        // 何故か読み込めない時があったので、画像はうちのS3に置いてある。
        let nowImageName = nowEthNft.tokenId;
        // LAGとLAGMの画像ファイル名は4桁固定の0パディング
        if (nowEthNft.symbol === "LAG" || nowEthNft.symbol === "LAGM") {
            nowImageName = nowImageName.padStart(4, '0');
        }

        nowEthNft.moralisImageUri = `${serverCollectionRoot}${targetChain}/${nowEthNft.symbol}_${nowEthNft.contract.address.toLowerCase()}/pics/${nowImageName}.png`
        nowEthNft.moralisImageUriThumbnail = nowEthNft.moralisImageUri;
        
    } else {
        if (nowEthNft.duMetadata == undefined) {
            nowEthNft.moralisImageUriThumbnail = "/none.png";
            nowEthNft.moralisImageUri = "/none.png";
        } else {
            // nowEthNft.moralisImageUriThumbnail = nowEthNft.media[0].thumbnail;

            if (nowEthNft.media[0].raw !== undefined && nowEthNft.media[0].raw !== "" && nowEthNft.media[0].raw.indexOf("ipfs://") === 0) {
                nowEthNft.moralisImageUri = getImageUri(nowEthNft.media[0].raw);
            } else {
                nowEthNft.moralisImageUri = nowEthNft.media[0].raw;
            }

            nowEthNft.moralisImageUriThumbnail = nowEthNft.moralisImageUri;

        }
    }

    console.log("nowEthNft.moralisImageUri", nowEthNft.moralisImageUri);
    console.log("setProps return", nowEthNft);

    return nowEthNft;
}

export function getImageUri(ipfsUri) {
    // console.log(ipfsUri);
    let returnStr = "https://gateway.moralisipfs.com/ipfs/" + ipfsUri.substring(7);
    // console.log(returnStr);
    return returnStr;
}

export function useEthNFT(targetChain, targetAddress, targetTokenId) {

    const [ethNFTs, isLoaded] = useEthNFTs(targetChain, targetAddress, 100);

    for (let i = 0; i < ethNFTs.length; i++) {
        let nowEthNft = ethNFTs[i];
        if (nowEthNft.tokenId === targetTokenId) {
            return nowEthNft;
        }
    }

    return null;
}