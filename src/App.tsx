import "./App.css";
import { TonConnectButton } from "@tonconnect/ui-react";
import { useMainContract } from "./hooks/useMainContract";
import { useTonConnect } from "./hooks/useTonConnect";

function App() {
  const {
    contract_address,
    counter_value,
//    recent_sender,
//    owner_address,
    contract_balance,
    sendIncrement,
    sendDeposit,
    sendWithdrawalRequest
  } = useMainContract();
  const { connected } = useTonConnect();
  return (
    <div>
      <div>
        <TonConnectButton />
      </div>
      <div>
        <div className='Card'>
          <b>Our contract Address: </b><br />
          <span className='Hint'>{contract_address?.slice(0, 30) + "..."}</span>
        </div>
        <div className='Hint'>
          <b>Our contract Balance: </b>
          <span className='Hint'>{contract_balance ?? "Loading..."}</span>
        </div>
        <div className='Hint'>
          <b>Counter Value: </b>
          <span className='Hint'>{counter_value ?? "Loading..."}</span>
        </div>
        <br />
        {connected && (
          <a
            onClick={() => {
              sendIncrement();
            }}
          >
            Increment by 7
          </a>
        )}
        <br />
        {connected && (
          <a
            onClick={() => {
              sendDeposit();
            }}
          >
            Request deposit 1 TON
          </a>
        )}
        <br />
        {connected && (
          <a
            onClick={() => {
              sendWithdrawalRequest();
            }}
          >
            Request 0.7 TON withdrawal
          </a>
        )}
      </div>
    </div>
  );
}

export default App;
