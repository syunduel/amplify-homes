import React from 'react';
import { Link } from "react-router-dom";
import NFTTopList from './nftTopList';
import { collectionData } from '../data/collectionData';

export default function CollectionList() {

    let targetEvmNFTs = [];
    // Love Addicted Girls
    targetEvmNFTs.push(collectionData["ethereum_0x9c99d7f09d4a7e23ea4e36aec4cb590c5bbdb0e2"]);
    // Love Addicted Girls Memories
    targetEvmNFTs.push(collectionData["matic_0x1a4041cce1aea5fff82e13780d1b1f522a047ef9"]);
    // ODENPETS
    targetEvmNFTs.push(collectionData["ethereum_0x3F457a3FD454B711867670846e7Cc525B249b5B6"])
    // OCSMD3
    targetEvmNFTs.push(collectionData["ethereum_0xc4c93bc64a0d2f837fa9fed0682eafc3960bec12"])
    // ShikibuWorld
    targetEvmNFTs.push(collectionData["ethereum_0x32edd2f7437665af088347791521f454831aaa29"])
    // CryptoNinja Partners
    targetEvmNFTs.push(collectionData["ethereum_0x845a007d9f283614f403a24e3eb3455f720559ca"]);
    // Very long CNP
    targetEvmNFTs.push(collectionData["ethereum_0xcfe50e49ec3e5eb24cc5bbce524166424563dd4e"]);
    // Tokyo Alternative Girls
    targetEvmNFTs.push(collectionData["ethereum_0xc067d3e859cbc2c4a8cf9be96bebfa24b0cba5a6"]);
    // Dreamin' Divers Project -Cheers!-
    targetEvmNFTs.push(collectionData["ethereum_0x11c3e2c4329df91f65a16612de90077498cfa6ca"]);
    // Bride Girls Collection
    targetEvmNFTs.push(collectionData["ethereum_0x2e98069b38c4d8e5c5d995f3fb78d0407fb8b154"]);


    return (
        <>

            <h2 className="title title--secondary">
                Organization
            </h2>

            <ul className="organization">
                <li><Link to={`/organization/SoudanNFT/`} style={{textDecoration: 'none'}}>
                    <div>SoudanNFT</div>
                </Link></li>
                <li><Link to={`/organization/ODENDAO/`} style={{textDecoration: 'none'}}>
                    <div>ODENDAO</div>
                </Link></li>
                <li><Link to={`/organization/Tokyo-Alternative-Girls/`} style={{textDecoration: 'none'}}>
                    <div>Tokyo Alternative Girls</div>
                </Link></li>
                <li><Link to={`/organization/Character-DAO/`} style={{textDecoration: 'none'}}>
                    <div>Character DAO</div>
                </Link></li>
                <li><Link to={`/organization/Neo-Tokyo-Punks/`} style={{textDecoration: 'none'}}>
                    <div>Neo Tokyo Punks</div>
                </Link></li>
                <li><Link to={`/organization/Otaku-Culture-Studio/`} style={{textDecoration: 'none'}}>
                    <div>Otaku Culture Studio</div>
                </Link></li>
                <li><Link to={`/organization/Bride-Girls-Collection/`} style={{textDecoration: 'none'}}>
                    <div>Bride Girls Collection</div>
                </Link></li>
                <li><Link to={`/organization/ASAGI/`} style={{textDecoration: 'none'}}>
                    <div>ASAGI</div>
                </Link></li>
                <li><Link to={`/organization/N3-Labs/`} style={{textDecoration: 'none'}}>
                    <div>N3 Labs</div>
                </Link></li>
                <li><Link to={`/organization/MONKEYS/`} style={{textDecoration: 'none'}}>
                    <div>MONKEYS</div>
                </Link></li>
                <li><Link to={`/organization/MetaIdol/`} style={{textDecoration: 'none'}}>
                    <div>MetaIdol</div>
                </Link></li>
                <li><Link to={`/organization/Bride-Girls-Collection/`} style={{textDecoration: 'none'}}>
                    <div>Bride Girls Collection</div>
                </Link></li>
            </ul>

            <h2 className="title title--secondary">
                Collection
            </h2>

            <div className="top-nft">
            {targetEvmNFTs.map((nowTargetEvmNFT) => (
                <div key={`${nowTargetEvmNFT.chain}_${nowTargetEvmNFT.address}`}>
                    {NFTTopList(nowTargetEvmNFT)}
                </div>
            ))}
            </div>
        </>
    );
  }
