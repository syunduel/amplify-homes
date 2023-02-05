import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import {organizationData} from '../data/organizationData';
import {collectionData} from '../data/collectionData';
import NFTTopList from './nftTopList';


export default function Organization() {

    const {organizationName} = useParams();
    console.log('organizationName : ' + organizationName);

    let targetOrganization = organizationData[organizationName];
    let targetEvmNFTs = [];
    if (targetOrganization !== undefined) {
        targetOrganization.collections.forEach(element => {
            targetEvmNFTs.push(collectionData[element]);
        });
    }
    console.log("targetEvmNFTs", targetEvmNFTs);

    const[lovePower, setLovePower] = useState(0);

    const calcLovePower = (_lovePower) => {
        setLovePower(lovePower + _lovePower);
    }

    return (
        <>
            <div className="page-head" key={'mv1'}>
                <p className="title--primary">{targetOrganization.name}</p>
                <ul class="tag">
                  <li>Ethereum</li>
                  <li>ERC721</li>
                  <li>official</li>
                </ul>
                {lovePower > 0 &&
                <p className="love-power">
                  Your {targetOrganization.name} love power（β） : <span className="love-power__num">{lovePower}</span> lp
                </p>
                }
            </div>

            <div className="top-nft">
            {targetEvmNFTs.map((nowTargetEvmNFT) => (
                <div key={nowTargetEvmNFT.chain + "_" + nowTargetEvmNFT.address}>
                    {NFTTopList(nowTargetEvmNFT, 3, true, calcLovePower)}
                </div>
            ))}
            </div>

        </>
    );
  }
