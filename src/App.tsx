import "./App.css";
import { TonConnectButton } from "@tonconnect/ui-react";
import { useMainContract } from "./hooks/useMainContract";

function App() {
  const {
    contract_address,
    counter_value,
    recent_sender,
    owner_address,
    contract_balance,
  } = useMainContract();
  return (
    <div>
      <div>
        <TonConnectButton />
      </div>
      <div>
        <div className='Card'>
          <b>Our contract Address: </b>
          <span className='Hint'>{contract_address?.slice(0, 30) + "..."}</span>
        </div>
        <div className='Card'>
          <b>Our contract Balance: </b>
          <span className='Hint'>{contract_balance}</span>
        </div>
        <div className='Card'>
          <b>Counter Value: </b>
          <span className='Hint'>{counter_value ?? "Loading..."}</span>
        </div>
      </div>
    </div>
  );
}

export default App;
