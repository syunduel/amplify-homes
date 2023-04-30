import React, { useState, useEffect } from 'react';
import { CardNFT } from '../ui-components'
import { Link } from "react-router-dom";
import { useAccount } from 'wagmi'
import { useEthNFTs } from '../api/evmnft';
import { organizationData } from '../data/organizationData';
import { useCollectionInfo } from '../api/collectionInfo';


export default function NFTTopList(targetCain, targetAddress, dispLimit = 3, dispCollectionLink = true, setLovePower = () => {}) {

    const { address, isConnected } = useAccount()

    const collectionInfo = useCollectionInfo(targetCain, targetAddress);

    console.log('NFTTopList collectionInfo', collectionInfo);

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
                {isConnected && nfts !== undefined && nfts.map((ethNFT) => (
                    <div className="top-nft__list-item" key={ethNFT.chain + "_" + ethNFT.contract.address + "_" + ethNFT.tokenId}>
                        <Link to={`/dressup/${collectionInfo.chain}/${ethNFT.contract.address}/${ethNFT.tokenId}`} style={{textDecoration: 'none'}}>
                            <CardNFT
                                CardNFT={{
                                    key: "CardNFT" + "_" + ethNFT.chain + "_" + ethNFT.contract.address + "_" + ethNFT.tokenId,
                                    token_address: ethNFT.contract.address,
                                    collection_name: ethNFT.name,
                                    name: ethNFT.itemName,
                                    image: ethNFT.moralisImageUriThumbnail,
                                }}
                                height="180px"
                                width="180px"
                                overrides={cardNFTOverrides} />
                        </Link>
                    </div>
                ))}
            </div>
            {!isConnected &&
                <div className="" style={{marginBottom: "50px"}}>
                    <p>First of all, please connect to the wallet.</p>
                </div>
            }
            {isConnected && !isLoaded &&
                <div className="" style={{marginBottom: "50px"}}>
                    <p>Now loading the NFT you have...</p>
                </div>
            }
            {isConnected && isLoaded && nfts.length === 0 &&
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
