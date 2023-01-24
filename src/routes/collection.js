import { useParams } from "react-router-dom";
import { useMoralis } from "react-moralis";
import { useEthNFTs } from '../api/evmnft';
import NFTList from './nftList';


export default function Collection() {

    const {tokenChain, tokenAddress} = useParams();
    console.log('tokenChain : ' + tokenChain);
    console.log('tokenAddress : ' + tokenAddress);

    const { authenticate, isAuthenticated, isAuthenticating, user, account, logout } = useMoralis();
    const [nfts, isLoaded] = useEthNFTs(tokenChain, tokenAddress);

    let collectionName = "";
    if (nfts !== undefined && nfts.length > 0) {
        collectionName = nfts[0].name;
    }

    let targetEvmNFT = [];
    targetEvmNFT.chain = tokenChain;
    targetEvmNFT.address = tokenAddress;
    targetEvmNFT.name = collectionName;

    return (
        <>
            <div className="page-head" key={'mv1'}>
                <p className="title--primary">Collection</p>
                <p>You can change your NFT clothes. First, select the NFT you want to dress up.</p>
            </div>

            {tokenChain !== undefined &&
                <div key={targetEvmNFT.address}>
                    {NFTList(targetEvmNFT, 100, false)}
                </div>
            }
        </>
    );
  }
