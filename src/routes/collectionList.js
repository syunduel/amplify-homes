import NFTList from './nftList';
import {collectionData} from '../data/collectionData';

export default function CollectionList() {

    let targetEvmNFTs = [];
    // Love Addicted Girls
    targetEvmNFTs.push(collectionData["ethereum_0x9c99d7f09d4a7e23ea4e36aec4cb590c5bbdb0e2"]);
    // Love Addicted Girls Memories
    targetEvmNFTs.push(collectionData["matic_0x1a4041cce1aea5fff82e13780d1b1f522a047ef9"]);
    // ODENPETS
    targetEvmNFTs.push(collectionData["ethereum_0x3F457a3FD454B711867670846e7Cc525B249b5B6"])
    // CryptoNinja Partners
    targetEvmNFTs.push(collectionData["ethereum_0x845a007d9f283614f403a24e3eb3455f720559ca"]);
    // Very long CNP
    targetEvmNFTs.push(collectionData["ethereum_0xcfe50e49ec3e5eb24cc5bbce524166424563dd4e"]);
    // Tokyo Alternative Girls
    targetEvmNFTs.push(collectionData["ethereum_0xc067d3e859cbc2c4a8cf9be96bebfa24b0cba5a6"]);
    // MediaDAO Friends Nagoya
    targetEvmNFTs.push(collectionData["ethereum_0xa63116b507ab035f8db0b56c7c1405208dd00df4"]);


    return (
        <>
            <div className="mv" key={'mv1'}>
                <p className="catch-copy">Let's dress up your NFT</p>
                <p>You can change your NFT clothes. First, select the NFT you want to dress up.</p>
            </div>

            {targetEvmNFTs.map((nowTargetEvmNFT) => (
                <div key={`${nowTargetEvmNFT.chain}_${nowTargetEvmNFT.address}`}>
                    {NFTList(nowTargetEvmNFT)}
                </div>
            ))}

        </>
    );
  }
