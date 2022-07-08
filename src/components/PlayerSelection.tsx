import { FC, useEffect, useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { Metaplex, keypairIdentity } from "@metaplex-foundation/js";
import { Connection, clusterApiUrl, Keypair, PublicKey } from "@solana/web3.js";

const PlayerSelection: FC = () => {

    //TO GET THE PUBLIC KEY OF THE CONNECTED WALLET
    const { publicKey } = useWallet();

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
        
            console.log(allNFTs);
        })();

    }, [ publicKey]);

    return (
        <div>
            <h2>"Its working"</h2>
        </div>
    );
};

export default PlayerSelection;