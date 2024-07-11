import { useNavigate } from "react-router-dom";
import DescriptionPanel from "../components/DescriptionPanel";
import styles from "./Sub.module.css";

const Sub = () => {
  const navigate = useNavigate();

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
        <DescriptionPanel />
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
            <div className={styles.buttonPlaceholder}>$100</div>
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
