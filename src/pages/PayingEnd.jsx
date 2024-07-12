/* import styles from "./PayMethod.module.css"; */

import { useNavigate } from "react-router-dom";

const PayingEnd = () => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate('/')}>
      <img  alt="" src="/payingEnd.png" />
    </div>
  );
};

export default PayingEnd;
