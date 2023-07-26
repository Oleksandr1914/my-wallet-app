import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';

const CustomButton = () => {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const { disconnect } = useDisconnect();

  if (isConnected)
    return (
      <div>
        {address}
        <button onClick={disconnect}>Disconnect</button>
      </div>
    );
  return <button onClick={() => connect()}>Connect Wallet</button>;
};

export default CustomButton;
