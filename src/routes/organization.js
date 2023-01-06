import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import {organizationData} from '../data/organizationData';
import {collectionData} from '../data/collectionData';
import NFTList from './nftList';


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
            <div className="mv" key={'mv1'}>
                <p className="catch-copy">{targetOrganization.name}</p>
                <p>Your {targetOrganization.name} love power（β） : {lovePower} lp</p>
            </div>

            {targetEvmNFTs.map((nowTargetEvmNFT) => (
                <div key={nowTargetEvmNFT.chain + "_" + nowTargetEvmNFT.address}>
                    {NFTList(nowTargetEvmNFT, 3, true, calcLovePower)}
                </div>
            ))}

        </>
    );
  }
