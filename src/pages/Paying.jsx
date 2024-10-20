/* import styles from "./PayMethod.module.css"; */
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useWebSocket } from '../contexts/PaymentManagerContext';

const Paying = () => {
  const navigate = useNavigate();
  
  const { callbackMsg, KIS_Approval, KIS_Agent_Stop } = useWebSocket();

  /* useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/payingEnd');
    }, 5000);

    // Cleanup the timer if the component is unmounted
    return () => clearTimeout(timer);
  }, [navigate]); */

  const MakeAgentSpec = () => {
    const agentSpec = {
      inTranCode: 'NV',
      inTradeType: 'D1',
      inInstallment: '00',
      // 금액
      inTranAmt: '1004',
    };

    const agentApproval = { KIS_ICApproval: agentSpec };
    return JSON.stringify(agentApproval);
  };

  useEffect(() => {
    setTimeout(() => {
      KIS_Approval(MakeAgentSpec())
    }, 2000)

    return () => KIS_Agent_Stop()
  }, [])

  useEffect(() => {
    //정상승인
    try {
      let agentMsg = JSON.parse(callbackMsg)
      if(agentMsg.outReplyCode === "0000")
        props.history.push('/payingEnd') 
        return;
    } catch (e) {
      console.error("Parsing error:", e);
    }
  }, [callbackMsg])

  useEffect(() => {
    document.addEventListener('click', event => {
      const x = event.clientX;
      const y = event.clientY;
      console.log(`Mouse coordinates: X: ${x}, Y: ${y}`);;
    });
  }, [])

  return (
    <div >
      <img  alt="" src="/assets/paying.png" />
      <button
        style={{
          position: 'absolute',
          top: '1560px',
          left: '140px',
          width: '1160px',
          height: '155px',
          borderRadius: '0 0 100px 100px', /* 아래쪽 모서리만 둥글게 */
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          opacity: 0 // 투명도 설정 (0 = 완전 투명, 1 = 완전 불투명)
        }}
        onClick={() => {
            navigate('/') 
          }
        } 
    />
    </div>
  );
};

export default Paying;
