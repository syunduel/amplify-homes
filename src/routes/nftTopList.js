import React, { useState, useEffect } from 'react';
import { useMoralis } from "react-moralis";
import { CardNFT } from '../ui-components'
import { Link } from "react-router-dom";
import { useEthNFTs } from '../api/evmnft';
import {organizationData} from '../data/organizationData';


export default function NFTTopList(collectionInfo, dispLimit = 3, dispCollectionLink = true, setLovePower = () => {}) {

    const { authenticate, isAuthenticated, isAuthenticating, user, account, logout } = useMoralis();

    // const [name, chain, address, url] = params;

    const [nfts, isLoaded, total] = useEthNFTs(collectionInfo.chain, collectionInfo.address, dispLimit);

    let collectionName = "";
    if (collectionInfo.name !== undefined) {
        collectionName = collectionInfo.name
    } else if (nfts !== undefined && nfts.length > 0) {
        collectionName = nfts[0].name;
    }

    let contractType = "";
    if (nfts !== undefined && nfts.length > 0) {
        contractType = nfts[0].contract_type;
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
          width: "180px",
          height: "",
        },
    }

    return (
        <div className="top-nft__collection" key={collectionInfo.chain + "_" + collectionInfo.address}>
            <div className="top-nft__head">
              <div className="top-nft__title">
                {collectionName}
              </div>
              {dispCollectionLink && nfts !== undefined && nfts.length > 0 &&
                  <Link className="top-nft__button" to={`/collection/${collectionInfo.chain}/${collectionInfo.address}`} style={{textDecoration: 'none'}}>
                      View Collection
                  </Link>
              }
            </div>
            <div className="top-nft__list">
                {nfts !== undefined && nfts.map((ethNFT) => (
                    <div className="top-nft__list-item" key={ethNFT.chain + "_" + ethNFT.token_address + "_" + ethNFT.token_id}>
                        <Link to={`/dressup/${collectionInfo.chain}/${ethNFT.token_address}/${ethNFT.token_id}`} style={{textDecoration: 'none'}}>
                            <CardNFT
                                CardNFT={{
                                    key: "CardNFT" + "_" + ethNFT.chain + "_" + ethNFT.token_address + "_" + ethNFT.token_id,
                                    token_address: ethNFT.token_address,
                                    collection_name: ethNFT.name,
                                    name: ethNFT.itemName,
                                    image: ethNFT.moralisImageUri,
                                }}
                                height="180px"
                                width="180px"
                                overrides={cardNFTOverrides} />
                        </Link>
                    </div>
                ))}
            </div>
            {!isAuthenticated &&
                <div className="" style={{marginBottom: "50px"}}>
                    <p>First of all, please connect to the wallet.</p>
                </div>
            }
            {isAuthenticated && !isLoaded &&
                <div className="" style={{marginBottom: "50px"}}>
                    <p>Now loading the NFT you have...</p>
                </div>
            }
            {isAuthenticated && isLoaded && nfts.length === 0 &&
                <div className="" style={{marginBottom: "50px"}}>
                    <p>{collectionInfo.name} NFT not found.</p>
                    <p>To enjoy the dress up, please purchase <a href={collectionInfo.url}>{collectionInfo.name}</a> first.</p>
                </div>
            }

            <div class="top-nft__bottom">
              <ul class="top-nft__tag">
                <li>{collectionInfo.chain}</li>
                {getTag()}
              </ul>
            {collectionInfo.organization !== undefined &&
                <div className="top-nft__organization">by
                    <span className="top-nft__organization-name">
                        <Link to={`/organization/${collectionInfo.organization}/`}>
                        {organizationData[collectionInfo.organization].name}
                        </Link>
                    </span>
                </div>
            }
            {collectionInfo.organization == undefined &&
                <div className="top-nft__organization">
                    <span className="top-nft__organization-name">
                        Organization unregistered
                    </span>
                </div>
            }
            </div>

        </div>
    );
  }
