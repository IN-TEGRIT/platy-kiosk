import { useNavigate } from "react-router-dom";
import styles from "./Frame.module.css";

const Frame = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.div}>
      <img className={styles.icon} alt="" src="/1.svg" />
      <div className={styles.welcomeToWrapper}>
        <h1 className={styles.welcomeTo}>Welcome to</h1>
      </div>
      <div className={styles.toGiveAStrongerSoundAndAWrapper}>
        <div className={styles.toGiveAContainer}>
          <span>
            <p className={styles.toGiveA}>to give a stronger sound and</p>
            <p className={styles.aMoreComfortable}>
              a more comfortable feeling
            </p>
          </span>
        </div>
      </div>
      <div className={styles.button} onClick={() => navigate('/main')}>
        <b className={styles.start}>START</b>
      </div>
      <main className={styles.welcomeMessageParent}>
        <section className={styles.welcomeMessage}>
          <img
            className={styles.bgIcon}
            alt=""
            src="/splash-bg.png"
          />
          <h1 className={styles.grtixPlace}>Grtix place</h1>
        </section>
        <img className={styles.headphoneIcon} alt="" src="/splash-headphone.png" />
      </main>
    </div>
  );
};

export default Frame;
