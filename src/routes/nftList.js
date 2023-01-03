import React, { useState, useEffect } from 'react';
import { useMoralis } from "react-moralis";
import { CardNFT } from '../ui-components'
import { Link } from "react-router-dom";
import useEthNFTs from '../api/evmnft';


export default function NFTList(collectionInfo, dispLimit = 5, dispCollectionLink = true) {

    const { authenticate, isAuthenticated, isAuthenticating, user, account, logout } = useMoralis();

    // const [name, chain, address, url] = params;

    const [nfts, isLoaded] = useEthNFTs(collectionInfo.chain, collectionInfo.address, dispLimit);

    let collectionName = "";
    if (collectionInfo.name !== undefined) {
        collectionName = collectionInfo.name
    } else if (nfts !== undefined && nfts.length > 0) {
        collectionName = nfts[0].name;
    }

    console.log("NFTList " + collectionName);
    console.log(nfts);
    console.log("NFTList isLagLoaded " + isLoaded);

    const cardNFTOverrides = {
        "image": {
          crossOrigin: "anonymous",
        },
    }

    return (
        <>
            <div className="collection">{collectionName}</div>
            <div className="mv" key={collectionInfo.address} style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', padding: '1em'}}>
                {nfts !== undefined && nfts.map((ethNFT) => (
                    <div class="card-list">
                        <Link to={`/dressup/${collectionInfo.chain}/${ethNFT.token_address}/${ethNFT.token_id}`} style={{textDecoration: 'none'}}>
                            <CardNFT
                                CardNFT={{
                                    key: ethNFT.token_hash,
                                    token_address: ethNFT.token_address,
                                    collection_name: ethNFT.name,
                                    name: ethNFT.itemName,
                                    image: ethNFT.moralisImageUri,
                                }}
                                height="368px"
                                width="300px"
                                margin="10px 10px 10px 10px"
                                overrides={ethNFT.symbol !== "LAG" && cardNFTOverrides} />
                        </Link>
                    </div>
                ))}
                {dispCollectionLink && nfts !== undefined && nfts.length > 0 &&
                    <Link to={`/collection/${collectionInfo.chain}/${collectionInfo.address}`} style={{textDecoration: 'none'}}>
                        <CardNFT
                            CardNFT={{
                                key: collectionInfo.address,
                                token_address: collectionInfo.address,
                                collection_name: "View Collection Page",
                                name: "",
                                image: "/none.png",
                            }}
                            height="368px"
                            width="300px"
                            margin="10px 10px 10px 10px"
                             />
                    </Link>
                }
            </div>
            {!isAuthenticated &&
                <div className="mv" style={{marginBottom: "50px"}} key={collectionInfo.address + '-a'}>
                    <p>First of all, please connect to the wallet.</p>
                </div>
            }
            {isAuthenticated && !isLoaded &&
                <div className="mv" style={{marginBottom: "50px"}} key={collectionInfo.address + '-b'}>
                    <p>Now loading the NFT you have...</p>
                </div>
            }
            {isAuthenticated && isLoaded && nfts.length === 0 &&
                <div className="mv" style={{marginBottom: "50px"}} key={collectionInfo.address + '-c'}>
                    <p>{collectionInfo.name} NFT not found.</p>
                    <p>To enjoy the dress up, please purchase <a href={collectionInfo.url}>{collectionInfo.name}</a> first.</p>
                </div>
            }
        </>
    );
  }
