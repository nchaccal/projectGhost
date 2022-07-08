import { FC } from 'react';
import WalletButton from './components/WalletButton'
import WalletList from './components/WalletList'
import PlayerSelection from './components/PlayerSelection'

require('./App.css');
require('@solana/wallet-adapter-react-ui/styles.css');

const App: FC = () => {
    return (
        <WalletList>
            <WalletButton />
            <PlayerSelection />
        </WalletList>
    );
};
export default App;


