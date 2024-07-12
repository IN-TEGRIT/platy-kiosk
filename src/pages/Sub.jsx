import { useNavigate } from "react-router-dom";
import DescriptionPanel from "../components/DescriptionPanel";
import styles from "./Sub.module.css";
import { useState } from "react";

const Sub = () => {
  const navigate = useNavigate();

  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(100);

  const onClickPlus = () => { setCount(count + 1)}

  const onClickMinus = () => { 
    if(count > 0)
      setCount(count - 1)
  }

  return (
    <div className={styles.sub1}>
      <img className={styles.icon} alt="" src="/.svg" />
      <section className={styles.content}>
        <img className={styles.headphoneIcon} alt="" src="/headphone@2x.png" />
        <img
          className={styles.contentChild}
          loading="lazy"
          alt=""
          src="/frame-1.svg"
          onClick={() => navigate('/main')}
        />
        <img
          className={styles.zoomIcon}
          loading="lazy"
          alt=""
          src="/zoom@2x.png"
        />
      </section>
      <section className={styles.rightPanel}>
        <DescriptionPanel data={count} event={[onClickPlus, onClickMinus]}/>
      </section>
      <div className={styles.lineWrapper}>
        <img
          className={styles.lineIcon}
          loading="lazy"
          alt=""
          src="/line.svg"
        />
      </div>
      <section className={styles.buttonContainer}>
        <div className={styles.buttonWrapper}>
          <div className={styles.buttonLabel}>
            <div className={styles.buttonPlaceholder}>${price * count}</div>
          </div>
          <div className={styles.button}>
            <b className={styles.b}>구매하기</b>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sub;
