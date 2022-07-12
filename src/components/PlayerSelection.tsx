import { FC, useEffect, useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { Metaplex, keypairIdentity } from "@metaplex-foundation/js";
import { Connection, clusterApiUrl, Keypair, PublicKey } from "@solana/web3.js";

const PlayerSelection: FC = () => {

    //TO GET THE PUBLIC KEY OF THE CONNECTED WALLET
    const { publicKey } = useWallet();

    //Each time a wallet if connected, execute this code
    useEffect(() => {

        (async () => {

            const connection = new Connection(clusterApiUrl("mainnet-beta"), "confirmed");
            const keypair = Keypair.generate();
            
            //IF THERE IS NOT PUBLIC KEY -AKA NO CONNECTED WALLET- STOP THE CODE AN SHOW 0 ON THE SCREEN
            if(!publicKey) {
            return;
            }
        
            const metaplex = new Metaplex(connection);
            metaplex.use(keypairIdentity(keypair));
        
            const owner = new PublicKey(publicKey);
            const allNFTs = await metaplex.nfts().findAllByOwner(owner);
            const justGhosts = await metaplex.nfts().findAllByCreator
            console.log(allNFTs);
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