import { FC } from 'react';
import WalletButton from './components/WalletButton'
import WalletList from './components/WalletList'

require('./App.css');
require('@solana/wallet-adapter-react-ui/styles.css');

const App: FC = () => {
    return (
        <WalletList>
            <WalletButton />
        </WalletList>
    );
};
export default App;


