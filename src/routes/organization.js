import React, { useState } from 'react';
import { useParams, Link } from "react-router-dom";
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

    const createNaviLinks = () => {

        return (
          <>
            <Link to={`/`} class="back-link">TOP </Link>
            {organizationName !== null &&
              <>
                > <Link to={`/organization/${organizationName}/`} class="back-link">{organizationName} </Link>
              </>
            }
            
          </>
        );
    }

    return (
        <>
            <div style={{textAlign: 'left', padding: '1.5em'}}>
                {createNaviLinks()}
            </div>
            <div className="page-head" key={'mv1'}>
                <p className="title--primary">{targetOrganization.name}</p>
                {lovePower > 0 &&
                <p className="love-power">
                  Your {targetOrganization.name} love power（β） : <span className="love-power__num">{lovePower}</span> lp
                </p>
                }
            </div>

            <div className="top-nft">
            {targetEvmNFTs.map((nowTargetEvmNFT) => (
                <div key={nowTargetEvmNFT.chain + "_" + nowTargetEvmNFT.address}>
                    {NFTTopList(nowTargetEvmNFT.chain, nowTargetEvmNFT.address, 3, true, calcLovePower)}
                </div>
            ))}
            </div>

        </>
    );
  }
