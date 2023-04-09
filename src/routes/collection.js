import React from 'react';
import { useParams } from "react-router-dom";
import { collectionData } from '../data/collectionData';
// import NFTList from './nftList';


export default function Collection() {

    const {tokenChain, tokenAddress} = useParams();
    console.log('tokenChain : ' + tokenChain);
    console.log('tokenAddress : ' + tokenAddress);

    let targetEvmNFT = {};

    // if (collectionData[tokenChain + "_" + tokenAddress] !== undefined) {
    //     targetEvmNFT = collectionData[tokenChain + "_" + tokenAddress];
    // } else {
    //     targetEvmNFT.chain = tokenChain.replace(/[^0-9a-z]/g, '');
    //     targetEvmNFT.address = tokenAddress.replace(/[^0-9a-z]/g, '');
    // }

    return (
        <>
            <div className="page-head" key={'mv1'}>
                <p className="title--primary">Collection</p>
                <p>You can change your NFT clothes. First, select the NFT you want to dress up.</p>
            </div>

            {/* {tokenChain !== undefined &&
                <div key={targetEvmNFT.address}>
                    {NFTList(targetEvmNFT, 100, false)}
                </div>
            } */}
        </>
    );
  }
