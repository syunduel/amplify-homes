import React from 'react';
import { useParams, Link } from "react-router-dom";
import { useCollectionInfo } from '../api/collectionInfo';
import NFTList from './nftList';


export default function Collection() {

    const {tokenChain, tokenAddress} = useParams();
    console.log('tokenChain : ' + tokenChain);
    console.log('tokenAddress : ' + tokenAddress);

    // let targetEvmNFT = {};
    let collectionInfo = useCollectionInfo(tokenChain, tokenAddress);

    if (collectionInfo === undefined || collectionInfo === null || collectionInfo === []) {
        collectionInfo = {};
        collectionInfo.chain = tokenChain.replace(/[^0-9a-z]/g, '');
        collectionInfo.address = tokenAddress.replace(/[^0-9a-z]/g, '');
    }

    console.log('collectionInfo : ', collectionInfo);

    const createNaviLinks = () => {

        let organizationName = null;
        if (collectionInfo !== null && collectionInfo !== undefined && collectionInfo.organization !== null && collectionInfo.organization !== undefined && collectionInfo.organization !== "") {
            organizationName = collectionInfo.organization;
        }
  
        let collectionName = null;
        if (collectionInfo !== null && collectionInfo !== undefined && collectionInfo.name !== null && collectionInfo.name !== undefined && collectionInfo.name !== "") {
          collectionName = collectionInfo.name;
        }
  
        return (
          <>
            <Link to={`/`} class="back-link">TOP </Link>
            {organizationName !== null &&
              <>
                > <Link to={`/organization/${organizationName}/`} class="back-link">{organizationName} </Link>
              </>
            }
            {collectionName !== null &&
              <>
                > <Link to={`/collection/${tokenChain}/${tokenAddress}/`} class="back-link">{collectionName} </Link>
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
                <p className="title--primary">Collection</p>
                <p>You can change your NFT clothes. First, select the NFT you want to dress up.</p>
            </div>

            {tokenChain !== undefined &&
                <div key={tokenAddress}>
                    {NFTList(tokenChain, tokenAddress, 100, false)}
                </div>
            }
        </>
    );
  }
