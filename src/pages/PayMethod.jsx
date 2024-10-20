import { useNavigate } from "react-router-dom";
import styles from "./PayMethod.module.css";

const PayMethod = () => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate('/paying')}>
      <img className={styles} alt="" src="/assets/paymethod.png" />
    </div>
  );
};

export default PayMethod;
