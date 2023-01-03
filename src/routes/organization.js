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

    return (
        <>
            <div className="mv" key={'mv1'}>
                <p className="catch-copy">{targetOrganization.name}</p>
                <p>You can change your NFT clothes. First, select the NFT you want to dress up.</p>
            </div>

            {targetEvmNFTs.map((nowTargetEvmNFT) => (
                <div key={nowTargetEvmNFT.address}>
                    {NFTList(nowTargetEvmNFT, 3)}
                </div>
            ))}

        </>
    );
  }
