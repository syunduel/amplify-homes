import React, { useState, useEffect } from 'react';
import { CardNFT } from '../ui-components'
import { Link } from "react-router-dom";
import { useAccount } from 'wagmi'
import { useEthNFTs } from '../api/evmnft';
import { useCollectionInfo } from '../api/collectionInfo';


export default function NFTList(targetCain, targetAddress, dispLimit = 5, dispCollectionLink = true, setLovePower = () => {}) {

    const { address, isConnected } = useAccount()

    const collectionInfo = useCollectionInfo(targetCain, targetAddress);

    console.log('NFTList collectionInfo', collectionInfo);

    const [nfts, isLoaded, total] = useEthNFTs(targetCain, targetAddress, dispLimit);

    console.log('NFTTopList nfts', targetCain, targetAddress, nfts);

    let collectionName = "";
    if (collectionInfo.name !== undefined) {
        collectionName = collectionInfo.name
    } else if (nfts !== undefined && nfts.length > 0) {
        collectionName = nfts[0].name;
    }

    useEffect(() => {

        let collectionPoints = 1;
        if (collectionInfo.point !== undefined) {
            collectionPoints = collectionInfo.point
        };

        if (total > 0) {
            setLovePower(collectionPoints * total);
        }
    }, [total]);

    const getTag = () => {
        let returnValue = [];
        if (collectionInfo.tag !== undefined && collectionInfo.tag.length > 0) {
          for (let i = 0; i < collectionInfo.tag.length; i++) {
            const nowTag = collectionInfo.tag[i];
            returnValue.push(<li>{nowTag}</li>);
          }
        }
        return returnValue;
    }

    const getTraitsCount = () => {

        if (collectionInfo.chain === "ethereum" && collectionInfo.address === "0x327879ed99ea43cf0a7a31034edf7c8f17d63fbd" && nfts !== undefined && nfts.length > 0) {

            var traits = new Map([
                ["aoi", 0],
                ["coo", 0],
                ["oak", 0],
                ["len", 0],
                ["tien", 0],
                ["rize", 0],
                ["alvar", 0],
                ["mamoru", 0],
                ["oruta", 0],
                ["mone", 0],
                ["lycian", 0],
            ]);

            nfts.forEach(nowNft => {
                var nowTrait = nowNft.duMetadata.attributes.find((v) => v.trait_type === "CHARACTER");
                var nowTraitValue = nowTrait["value"];
                console.log("nowTrait", nowTraitValue);

                if (traits.hasOwnProperty(nowTraitValue)) {
                    traits[nowTraitValue] = traits[nowTraitValue] + 1;
                } else {
                    traits[nowTraitValue] = 1;
                }

            });

            return (
                <>
                    <div className="page-head" key={'mv1'}>
                        <p className="love-power">
                            アオイ: {traits["aoi"]},
                            クー: {traits["coo"]},
                            オーク: {traits["oak"]},
                            レン: {traits["len"]},
                            ティエン: {traits["tien"]},
                            リゼ: {traits["rize"]},
                            アルバ: {traits["alvar"]},
                            マモル: {traits["mamoru"]},
                            オルタ: {traits["oruta"]},
                            モネ: {traits["mone"]},
                            ライシャン: {traits["lycian"]}
                        </p>
                    </div>
                </>
            );
    
        }
        
        return (
            <></>
        );

    }

    const cardNFTOverrides = {
        "image": {
          crossOrigin: "anonymous",
        },
    }

    return (
        <div key={collectionInfo.chain + "_" + collectionInfo.address}>
            <div className="collection">
                {collectionName}
            </div>
            <div className="page-head" key={'mv1'}>
                <ul class="tag">
                    <li>{collectionInfo.chain}</li>
                    {getTag()}
                </ul>
            </div>
            {getTraitsCount()}

            <div className="mv" style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', padding: '1em'}}>
                {isConnected && nfts !== undefined && nfts.map((ethNFT) => (
                    <div class="card-list" key={ethNFT.chain + "_" + ethNFT.contract.address + "_" + ethNFT.tokenId}>
                        <Link to={`/dressup/${collectionInfo.chain}/${ethNFT.contract.address}/${ethNFT.tokenId}`} style={{textDecoration: 'none'}}>
                            <CardNFT
                                CardNFT={{
                                    key: "CardNFT" + "_" + ethNFT.chain + "_" + ethNFT.token_address + "_" + ethNFT.token_id,
                                    token_address: ethNFT.token_address,
                                    collection_name: ethNFT.name,
                                    name: ethNFT.itemName,
                                    image: ethNFT.moralisImageUriThumbnail,
                                }}
                                height="368px"
                                width="300px"
                                margin="10px 10px 10px 10px"
                                overrides={cardNFTOverrides} />
                        </Link>
                    </div>
                ))}
                {dispCollectionLink && nfts !== undefined && nfts.length > 0 &&
                    <Link to={`/collection/${collectionInfo.chain}/${collectionInfo.address}`} style={{textDecoration: 'none'}}>
                        <div style={{height: '368px', width: '300px', margin: '10px' ,display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            View Collection Page
                        </div>
                    </Link>
                }
            </div>
            {!isConnected &&
                <div className="mv">
                    <p>First of all, please connect to the wallet.</p>
                </div>
            }
            {isConnected && !isLoaded &&
                <div className="mv">
                    <p>Now loading the NFT you have...</p>
                </div>
            }
            {isConnected && isLoaded && nfts.length === 0 &&
                <div className="mv">
                    <p>{collectionInfo.name} NFT not found.</p>
                    <p>To enjoy the dress up, please purchase <a href={collectionInfo.url}>{collectionInfo.name}</a> first.</p>
                </div>
            }
        </div>
    );
  }
