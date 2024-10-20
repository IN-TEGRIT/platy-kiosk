import { useNavigate, useLocation } from "react-router-dom";
import DescriptionPanel from "../components/DescriptionPanel";
import styles from "./Sub.module.css";
import { useState } from "react";

const Sub = () => {
  const navigate = useNavigate();

  const [count, setCount] = useState(1);

  const onClickPlus = () => { setCount(count + 1)}

  const onClickMinus = () => { 
    if(count > 0)
      setCount(count - 1)
  }

  const location = useLocation();
  const { image, price: priceValue } = location.state;

  return (
    <div className={styles.sub1}>
      <img className={styles.icon} alt="" src="/.svg" />
      <section className={styles.content}>
        <img className={styles.headphoneIcon} alt="" src={image} />
        <img
          className={styles.contentChild}
          alt=""
          src="/icon-goback.svg"
          onClick={() => navigate('/main')}
        />
      </section>
      <section className={styles.rightPanel}>
        <DescriptionPanel data={location.state} count={count} event={[onClickPlus, onClickMinus]}/>
      </section>
      <div className={styles.lineWrapper}>
        <img
          className={styles.lineIcon}
          alt=""
          src="/line.svg"
        />
      </div>
      <section className={styles.buttonContainer}>
        <div className={styles.buttonWrapper}>
          <div className={styles.buttonLabel}>
            <div className={styles.buttonPlaceholder}>${(priceValue * count).toLocaleString()}</div>
          </div>
          <div className={styles.button} onClick={() => navigate('/payMethod')}>
            <b className={styles.b}>구매하기</b>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sub;
