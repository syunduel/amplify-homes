import React from 'react';
import { useParams } from "react-router-dom";
import { useCollectionInfo } from '../api/collectionInfo';
import NFTList from './nftList';


export default function Collection() {

    const {tokenChain, tokenAddress} = useParams();
    console.log('tokenChain : ' + tokenChain);
    console.log('tokenAddress : ' + tokenAddress);

    // let targetEvmNFT = {};
    let targetEvmNFT = useCollectionInfo(tokenChain, tokenAddress);

    if (targetEvmNFT === undefined || targetEvmNFT === null || targetEvmNFT === []) {
        targetEvmNFT = {};
        targetEvmNFT.chain = tokenChain.replace(/[^0-9a-z]/g, '');
        targetEvmNFT.address = tokenAddress.replace(/[^0-9a-z]/g, '');
    }

    return (
        <>
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
