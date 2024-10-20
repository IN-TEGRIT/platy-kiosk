import { useNavigate } from "react-router-dom";
import styles from "./PayMethod.module.css";

const PayMethod = () => {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate('/main')}>
      <img className={styles} alt="" src="/splash.png" />
    </div>
  );
};

export default PayMethod;
