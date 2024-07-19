import { useNavigate } from "react-router-dom";
import styles from "./Main.module.css";

const Main = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.main}>
      <img className={styles.icon} alt="" src="/2.svg" />
      <div className={styles.exploreProductWrapper}>
        <b className={styles.exploreProduct}>Explore Product</b>
      </div>
      <section className={styles.mainWrapper}>
        <div className={styles.main1}>
          <img
            className={styles.maskGroupIcon}
            loading="lazy"
            alt=""
            src="/item-group.png"
          />
          <div className={styles.grtixBestItemsContainer}>
            <p className={styles.grtix}>Grtix</p>
            <p className={styles.bestItems}>Best items</p>
          </div>
        </div>
      </section>
      <section className={styles.mainInner}>
        <div className={styles.featuredParent}>
          <b className={styles.featured}>Featured</b>
          <div className={styles.seeAllButton}>
            <div className={styles.seeAll}>See All</div>
          </div>
        </div>
      </section>
      <section className={styles.productsWrapper}>
        <div className={styles.products}>
          <div className={styles.productHeadphone}  onClick={() => navigate('/sub')}>
            <div className={styles.wrapperHeadphone}>
              <img
                className={styles.headphoneIcon}
                alt=""
                src="/headphone2.png"
              />
            </div>
            <div className={styles.headphoneDetails}>
              <div className={styles.grtixHeadphoneParent}>
                <div className={styles.grtixHeadphone}>Grtix Headphone</div>
                <div className={styles.div}>생생한 경험의 기회</div>
              </div>
            </div>
            <img
              className={styles.buttonIcon}
              loading="lazy"
              alt=""
              src="/icon-move-button.svg"
            />
          </div>
          <div className={styles.productKeyboard}  onClick={() => navigate('/sub')}>
            <div className={styles.wrapperKeyboard}>
              <img
                className={styles.keyboardIcon}
                alt=""
                src="/keyboard.png"
              />
            </div>
            <div className={styles.keyboardDetails}>
              <div className={styles.frameParent}>
                <div className={styles.grtixKeyboardWrapper}>
                  <div className={styles.grtixKeyboard}>Grtix Keyboard</div>
                </div>
                <div className={styles.div1}>완벽한 타건감</div>
              </div>
            </div>
            <img
              className={styles.buttonIcon1}
              loading="lazy"
              alt=""
              src="/icon-move-button1.svg"
            />
          </div>
        </div>
      </section>
      <section className={styles.productSpeakerMouse}>
        <div className={styles.speakerMouseImagesParent}>
          <div className={styles.speakerMouseImages}  onClick={() => navigate('/sub')}>
            <div className={styles.wrapperSpeaker}>
              <img
                className={styles.speakerIcon}
                alt=""
                src="/speaker.png"
              />
            </div>
            <div className={styles.speakerMouseDetails}>
              <div className={styles.grtixSpeakerParent}>
                <div className={styles.grtixSpeaker}>Grtix Speaker</div>
                <div className={styles.div2}>남다른 사운드</div>
              </div>
            </div>
            <img
              className={styles.buttonIcon2}
              loading="lazy"
              alt=""
              src="/icon-move-button2.svg"
            />
          </div>
          <div className={styles.speakerMouseImages1}  onClick={() => navigate('/sub')}>
            <div className={styles.wrapperMouse}>
              <img className={styles.mouseIcon} alt="" src="/mouse.png" />
            </div>
            <div className={styles.speakerMouseImagesInner}>
              <div className={styles.grtixMouseParent}>
                <div className={styles.grtixMouse}>Grtix Mouse</div>
                <div className={styles.wrapper}>
                  <div className={styles.div3}>더 정밀하고 섬세하게</div>
                </div>
              </div>
            </div>
            <img
              className={styles.buttonIcon3}
              loading="lazy"
              alt=""
              src="/icon-move-button3.svg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
