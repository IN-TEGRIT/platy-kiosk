import React, { createContext, useContext, useEffect, useRef, useState } from 'react';

const INIT_STEP_PAYMENT = {
  NONE: 0,
  CREATED_PAYMENT_INSTANCE: 1,
  CONNECTED: 2,
  CREATED_TOPIC: 3,
  REQUESTED_TOPIC: 4,
  REGISTED_SUBSCRIBED: 5,
};

// WebSocket Context 생성
const PaymentManagerContext = createContext(null);

export const useWebSocket = () => useContext(PaymentManagerContext);

export const PaymentManagerContextProvider = ({ children }) => {
  const [webSocket, setWebSocket] = useState(null);
  const [callbackMsg, setCallbackMsg] = useState('');
  const initedInst = useRef(false);

  const KIS_Approval = (message) => {
    if (webSocket && webSocket.readyState === WebSocket.OPEN) {
      webSocket.send(message);
    }
  };

  const KIS_Connect = (endpoint, protocol) => {
    let webSocketURL;
    if (protocol === 'wss') {
      webSocketURL = `wss://localhost:1517/${endpoint}`;
    } else {
      webSocketURL = `ws://localhost:1516/${endpoint}`;
    }

    console.log(`${webSocketURL} Connecting...`);
    try {
      const ws = new WebSocket(webSocketURL);
      ws.EnableRedirect = true;

      ws.onopen = () => {
        console.log('WebSocket OPEN');
      };

      ws.onclose = () => {
        console.log('WebSocket CLOSE');
      };

      ws.onerror = (errorEvent) => {
        console.error('WebSocket ERROR', errorEvent);
      };

      ws.onmessage = (messageEvent) => {
        const wsMsg = messageEvent.data;
        console.log('WebSocket MESSAGE');
        /* AgentCallback(wsMsg); */
        setCallbackMsg(wsMsg)
      };

      setWebSocket(ws);
    } catch (exception) {
      console.error(exception);
    }
  };

  const KIS_Disconnect = () => {
    if (webSocket && webSocket.readyState === WebSocket.OPEN) {
      webSocket.close();
    }
  };

  const KIS_Ping = () => {
    if (webSocket && webSocket.readyState === WebSocket.OPEN) {
      webSocket.send('PingTest');
    }
  };

  const KIS_Agent_Stop = () => {
    if (webSocket && webSocket.readyState === WebSocket.OPEN) {
      webSocket.send('{"KIS_Agent_Stop":{}}');
    }
  };

  const contextValue = {
    callbackMsg,
    KIS_Approval,
    //KIS_Connect,
    //KIS_Disconnect,
    KIS_Ping,
    KIS_Agent_Stop,
  };

 /*  const initPaymentInstance = () => {
    if (initializeStep !== INIT_STEP_PAYMENT.NONE) return;
    if (initedInst) return;

    initedInst = true;
    // const rosInst = new ROSLIB.Ros({});

    // console.log(rosInst);
    // rosInstance.current = rosInst;
    // setRosInstance(() => rosInst);
    setInitializeStep(INIT_STEP_PAYMENT.CREATED_PAYMENT_INSTANCE);
  };
  
  useEffect(() => {
    switch (initializeStep) {
      case INIT_STEP_PAYMENT.NONE:
        initPaymentInstance();
        break;
      case INIT_STEP_PAYMENT.CREATED_PAYMENT_INSTANCE:
        KIS_Connect('', 'ws')
        break;
      case INIT_STEP_PAYMENT.CONNECTED:
        
    }
  }, [initializeStep]); */

  useEffect(() => {
    KIS_Connect('', 'ws')

    return KIS_Disconnect()
  }, [])

  return (
    <PaymentManagerContext.Provider value={contextValue}>
      {children}
    </PaymentManagerContext.Provider>
  );
};
