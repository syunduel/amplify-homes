import React, { useState, useEffect } from 'react';
import { useMoralis } from "react-moralis";
import { CardNFT } from '../ui-components'
import { Link } from "react-router-dom";
import { useEthNFTs } from '../api/evmnft';


export default function NFTList(collectionInfo, dispLimit = 5, dispCollectionLink = true, setLovePower = () => {}) {

    const { authenticate, isAuthenticated, isAuthenticating, user, account, logout } = useMoralis();

    // const [name, chain, address, url] = params;

    const [nfts, isLoaded, total] = useEthNFTs(collectionInfo.chain, collectionInfo.address, dispLimit);

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

            <div className="mv" style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', padding: '1em'}}>
                {nfts !== undefined && nfts.map((ethNFT) => (
                    <div class="card-list" key={ethNFT.chain + "_" + ethNFT.token_address + "_" + ethNFT.token_id}>
                        <Link to={`/dressup/${collectionInfo.chain}/${ethNFT.token_address}/${ethNFT.token_id}`} style={{textDecoration: 'none'}}>
                            <CardNFT
                                CardNFT={{
                                    key: "CardNFT" + "_" + ethNFT.chain + "_" + ethNFT.token_address + "_" + ethNFT.token_id,
                                    token_address: ethNFT.token_address,
                                    collection_name: ethNFT.name,
                                    name: ethNFT.itemName,
                                    image: ethNFT.moralisImageUri,
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
            {!isAuthenticated &&
                <div className="mv">
                    <p>First of all, please connect to the wallet.</p>
                </div>
            }
            {isAuthenticated && !isLoaded &&
                <div className="mv">
                    <p>Now loading the NFT you have...</p>
                </div>
            }
            {isAuthenticated && isLoaded && nfts.length === 0 &&
                <div className="mv">
                    <p>{collectionInfo.name} NFT not found.</p>
                    <p>To enjoy the dress up, please purchase <a href={collectionInfo.url}>{collectionInfo.name}</a> first.</p>
                </div>
            }
        </div>
    );
  }
