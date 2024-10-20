import React, { useState } from 'react';
import { WebSocketProvider, useWebSocket } from './WebSocketContext';

const WebSocketClient = () => {
  const [wsEndpoint, setWsEndpoint] = useState('');
  const [wsProtocol, setWsProtocol] = useState('ws');
  const [incomingMsg, setIncomingMsg] = useState('');
  const [amount, setAmount] = useState('1004');
  const [installment, setInstallment] = useState('00');
  const [tranCode, setTranCode] = useState('D1');

  const { KIS_Approval, KIS_Connect, KIS_Disconnect, KIS_Agent_Stop } = useWebSocket();

  const AgentCallback = (resMsg) => {
    setIncomingMsg(resMsg);
  };

  const MakeAgentSpec = () => {
    const agentSpec = {
      inTranCode: 'NV',
      inTradeType: tranCode,
      inInstallment: installment,
      inTranAmt: amount,
    };

    const agentApproval = { KIS_ICApproval: agentSpec };
    return JSON.stringify(agentApproval);
  };

  return (
    <div>
      <h1>WebSocket Client</h1>

      <table>
        <tbody>
          <tr>
            <td>거래구분</td>
            <td>
              <select value={tranCode} onChange={(e) => setTranCode(e.target.value)} id="tran_code">
                <option value="D1">신용승인</option>
                <option value="D2">신용취소</option>
                <option value="CC">현금영수증승인</option>
                <option value="CR">현금영수증취소</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>결제금액</td>
            <td><input type='text' value={amount} onChange={(e) => setAmount(e.target.value)} id="txtAmount" /></td>
          </tr>
          <tr>
            <td>할부개월</td>
            <td><input type='text' value={installment} onChange={(e) => setInstallment(e.target.value)} id="txtPeriod" /></td>
          </tr>
        </tbody>
      </table>

      <table>
        <tbody>
          <tr>
            <td>통신방식</td>
            <td>
              <input
                type='radio'
                name='netprotocol'
                id='net_ws'
                value='ws'
                checked={wsProtocol === 'ws'}
                onChange={() => setWsProtocol('ws')}
              />WS
              <input
                type='radio'
                name='netprotocol'
                id='net_wss'
                value='wss'
                checked={wsProtocol === 'wss'}
                onChange={() => setWsProtocol('wss')}
              />WSS
            </td>
          </tr>
          <tr>
            <td>WS Endpoint</td>
            <td><input type="text" value={wsEndpoint} onChange={(e) => setWsEndpoint(e.target.value)} id="endpoint" /></td>
          </tr>
          <tr>
            <td>연결요청</td>
            <td><button onClick={() => KIS_Connect(wsEndpoint, wsProtocol)}>Connect</button></td>
          </tr>
          <tr>
            <td>연결해제</td>
            <td><button onClick={KIS_Disconnect}>Disconnect</button></td>
          </tr>
          <tr>
            <td>결제요청</td>
            <td><button onClick={() => KIS_Approval(MakeAgentSpec())}>Approval</button></td>
          </tr>
          <tr>
            <td>거래중단</td>
            <td><button onClick={KIS_Agent_Stop}>Stop</button></td>
          </tr>
        </tbody>
      </table>

      <textarea
        id="incomingMsgOutput"
        rows="10"
        cols="20"
        value={incomingMsg}
        readOnly
        style={{ height: 'auto', width: '600px', border: '2px solid black' }}
      />
    </div>
  );
};

const App = () => (
  <WebSocketProvider>
    <WebSocketClient />
  </WebSocketProvider>
);

export default App;
