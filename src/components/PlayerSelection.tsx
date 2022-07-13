import { FC, useEffect, useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { Metaplex, } from "@metaplex-foundation/js";
import { Connection, clusterApiUrl, PublicKey } from "@solana/web3.js";

const PlayerSelection: FC = () => {

    //TO GET THE PUBLIC KEY OF THE CONNECTED WALLET 
    const { publicKey } = useWallet();
    //TO MAKE THE CONECTION WITH THE NETWORK
    const connection = new Connection(clusterApiUrl("mainnet-beta") );
    //CREATE METAPLEX INSTANCE
    const metaplex = Metaplex.make(connection);

    //Each time a wallet if connected, execute this code
    useEffect(() => {

        (async () => {
            
            //IF THERE IS NOT PUBLIC KEY -AKA NO CONNECTED WALLET- STOP THE CODE AN SHOW 0 ON THE SCREEN
            if(!publicKey) {
            return;
            }

            //PublicKey -AKA ADDRESS- of the connected wallet to the Dapp
            const owner = new PublicKey(publicKey);

            //Publickey -AKA ADDRESS- of the NFT collection
            const ghostsCollectionNFTs = new PublicKey("6YWZzAHA8NWjuwmYyW2RS6LHZ1HYu381UN6W2XDUe9SG").toBase58();

            //Fetch all NFTs from the given wallet and filter for those that are part of the same ghost collection. 
            const allNFTs = (await metaplex.nfts().findAllByOwner(owner)).filter(eachNft => eachNft.collection?.key.toBase58() === ghostsCollectionNFTs);
            console.log(allNFTs)
            

        })();

    }, [ publicKey]);

    return (
        <div>
        { //IF PUBLIC KEY EXIST, SHOW THE PLAYER SELECTION BOX
        (publicKey) &&
            <div style={{ position: 'absolute', top:'50%', left:'50%', transform: 'translate(-50%, -50%)', backgroundColor:'#10141f', color:'white', borderRadius:'4px', minHeight:'70%', width:'70%', padding:'2rem', }}>
                <div className='HeaderBox'>
                    <h1  style={{}}> Select your Player!</h1>
                    <p  style={{}}> You can change your player whenever you want within the game too</p>
                </div>
            </div>
        }
       
       </div>
    );
};

export default PlayerSelection;