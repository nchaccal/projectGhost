import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { FC } from 'react';

const WalletButton: FC = () => {
    return (
        <div className="App">
            <WalletMultiButton />
        </div>
    );
};

export default WalletButton;