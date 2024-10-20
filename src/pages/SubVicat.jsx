/* import styles from "./PayMethod.module.css"; */

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SubVicat = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.addEventListener('click', event => {
      const x = event.clientX;
      const y = event.clientY;
      console.log(`Mouse coordinates: X: ${x}, Y: ${y}`);;
    });
  }, [])

  return (
    <div >
      <img  alt="" src="/assets/sub_vicat.png" />
      <button
        style={{
          position: 'absolute',
          top: '2307px',
          left: '740px',
          width: '640px',
          height: '130px',
          borderRadius: '0 0 100px 100px', /* 아래쪽 모서리만 둥글게 */
          color: 'white',
          border: 'none',
          cursor: 'pointer',
          opacity: 0 // 투명도 설정 (0 = 완전 투명, 1 = 완전 불투명)
        }}
        onClick={() => navigate('/payMethod')}
    />
    </div>
  );
};

export default SubVicat;
