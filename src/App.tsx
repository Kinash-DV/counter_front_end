import "./App.css";
import { TonConnectButton } from "@tonconnect/ui-react";
import { useMainContract } from "./hooks/useMainContract";
import { useTonConnect } from "./hooks/useTonConnect";
import { useState } from "react";
import WebApp from "@twa-dev/sdk";

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

  const data = [
    { name: 'Platform', value: WebApp.platform },
    { name: 'Our Address', value: contract_address?.slice(0, 30) + "..." },
    { name: 'Our Balance', value: contract_balance ?? "Loading..." },
    { name: 'Counter Value', value: counter_value ?? "Loading..." },
  ];

  const [depositAmount, setDepositAmount] = useState(1);
  const [withdrawAmount, setWithdrawAmount] = useState(1);

  const showAlert = () => {
    WebApp.showAlert("Hello, buddy!");
  }

/*  const handleDepositClick = () => {
    alert(`Request deposit ${depositAmount} USD`);
    // Здесь можно добавить логику для отправки запроса
  };

  const handleWithdrawClick = () => {
    alert(`Request ${withdrawAmount} USD withdrawal`);
    // Здесь можно добавить логику для отправки запроса
  };  */


  return (
    <div>
      <div>
        <TonConnectButton />
      </div>
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <table 
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            textAlign: 'left',
            margin: '20px 0',
          }}
        >
          <tbody>
            {data.map((item, index) => (
              <tr key={index} style={{ borderBottom: '1px solid #ccc' }}>
                <td style={{ padding: '8px', fontWeight: 'bold' }}>{item.name}</td>
                <td style={{ padding: '8px' }}>{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {connected && (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          maxWidth: '500px',
          margin: '0 auto',
        }}
      >
        
        <div style={{ textAlign: 'center' }}>
          <button
            onClick={() => {
              showAlert();
            }}
            style={{
              flex: 1,
              width: '100%',
              padding: '10px',
              backgroundColor: '#000000',
              color: 'white',
              border: 'none',
              borderRadius: '100vh',
              cursor: 'pointer',
            }}
          >
            Show Alert!
          </button>
        </div>        
        
        <div style={{ textAlign: 'center' }}>
          <button
            onClick={() => {
              sendIncrement();
            }}
            style={{
              flex: 1,
              width: '100%',
              padding: '10px',
              backgroundColor: '#000000',
              color: 'white',
              border: 'none',
              borderRadius: '100vh',
              cursor: 'pointer',
            }}
          >
            Add 7 to Counter
          </button>
        </div>        
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ flex: 1, display: 'flex', position: 'relative' }}>
            <input
              type="number"
              value={depositAmount}
              onChange={(e) => setDepositAmount(Number(e.target.value))}
              style={{
                width: '100%',
                padding: '8px 40px 8px 8px',
                boxSizing: 'border-box',
              }}
            />
            <span
              style={{
                position: 'absolute',
                right: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                fontSize: '14px',
                color: '#AAA',
              }}
            >
              TON
            </span>
          </div>
          <button
            onClick={() => {
              sendDeposit();
            }}
            style={{
              flex: 1,
              padding: '10px',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '100vh',
              cursor: 'pointer',
            }}
          >
            Request deposit
          </button>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ flex: 1, display: 'flex', position: 'relative' }}>
            <input
              type="number"
              value={withdrawAmount}
              onChange={(e) => setWithdrawAmount(Number(e.target.value))}
              style={{
                width: '100%',
                padding: '8px 40px 8px 8px',
                boxSizing: 'border-box',
              }}
            />
            <span
              style={{
                position: 'absolute',
                right: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                fontSize: '14px',
                color: '#AAA',
              }}
            >
              TON
            </span>
          </div>
          <button
            onClick={() => {
              sendWithdrawalRequest();
            }}
            style={{
              flex: 1,
              padding: '10px',
              backgroundColor: '#2196F3',
              color: 'white',
              border: 'none',
              borderRadius: '100vh',
              cursor: 'pointer',
            }}
          >
            Request withdrawal
          </button>
        </div>
      </div>
      )}
    </div>
  );
}

export default App;
