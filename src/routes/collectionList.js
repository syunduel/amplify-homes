import { Link } from "react-router-dom";
import NFTTopList from './nftTopList';
import {collectionData} from '../data/collectionData';

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
    // Neo Tokyo Punks
    targetEvmNFTs.push(collectionData["ethereum_0xa65ba71d653f62c64d97099b58d25a955eb374a0"]);
    // ASAGI
    targetEvmNFTs.push(collectionData["ethereum_0xdd510ce28dfd085d9cf58f5402ca6d63985e83c0"]);
    // Flower Lolita Collections
    targetEvmNFTs.push(collectionData["ethereum_0x81d8e220a6240d1b6dc42d13ed7e0316aa89f265"]);
    // Neo Samurai Monkeys
    targetEvmNFTs.push(collectionData["ethereum_0x7fa162d3d44fe8d30e344cc000493da7cb6c6fbb"]);
    // MetaIdol
    targetEvmNFTs.push(collectionData["ethereum_0xc059477e8b3f93c86de0e8e05cbd020020ea9a52"]);
    // Bride Girls Collection
    targetEvmNFTs.push(collectionData["ethereum_0x2e98069b38c4d8e5c5d995f3fb78d0407fb8b154"]);
    // MediaDAO Friends Nagoya
    targetEvmNFTs.push(collectionData["ethereum_0xa63116b507ab035f8db0b56c7c1405208dd00df4"]);


    return (
        <>
            <div className="page-head" key={'mv1'}>
                <p className="title--primary">Let's dress up your NFT</p>
                <p>You can change your NFT clothes. First, select the NFT you want to dress up.</p>
            </div>

            <h2 className="title title--secondary">
                Organization（β）
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
