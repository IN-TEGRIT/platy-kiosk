import PropTypes from "prop-types";
import styles from "./DescriptionPanel.module.css";

const DescriptionPanel = ({ className = "" }) => {
  return (
    <div className={[styles.descriptionPanel, className].join(" ")}>
      <div className={styles.titlePanel}>
        <div className={styles.headphoneTitle}>
          <img
            className={styles.unionIcon}
            loading="lazy"
            alt=""
            src="/union.svg"
          />
          <div className={styles.headphoneTitleChild} />
          <div className={styles.headphoneTitleItem} />
        </div>
      </div>
      <div className={styles.infoPanel}>
        <div className={styles.box} />
        <div className={styles.description}>
          <div className={styles.headphoneName}>
            <h3 className={styles.grtixHeadphone}>Grtix Headphone</h3>
          </div>
          <div className={styles.placeholder}>$ 100</div>
        </div>
        <div className={styles.features}>
          <div className={styles.musicThatFitsContainer}>
            <p className={styles.musicThatFits}>Music that fits your ears.</p>
            <p className={styles.adaptiveEqAutomatically}>
              Adaptive EQ automatically adjusts sound quality to suit the shape
              of the inside of the ear.
            </p>
          </div>
          <div className={styles.colorPanel}>
            <div className={styles.colorContainer}>
              <div className={styles.colorSelector}>
                <div className={styles.colorOptions}>
                  <div className={styles.colorOptionTwo}>
                    <div className={styles.colorPicker}>
                      <div className={styles.color} />
                      <div className={styles.color1} />
                    </div>
                  </div>
                  <div className={styles.colorOptionOne}>
                    <div className={styles.color2} />
                  </div>
                  <div className={styles.colorOptionOne1}>
                    <div className={styles.color3} />
                  </div>
                </div>
              </div>
              <div className={styles.iconOption}>
                <div className={styles.iconContainer}>
                  <div className={styles.iconSelector}>
                    <div className={styles.iconSelectorChild} />
                    <img
                      className={styles.duckIcon}
                      loading="lazy"
                      alt=""
                      src="/vector.svg"
                    />
                  </div>
                </div>
                <div className={styles.iconLabel}>1</div>
                <div className={styles.iconContainer1}>
                  <div className={styles.rectangleParent}>
                    <div className={styles.frameChild} />
                    <img
                      className={styles.iconAdd}
                      loading="lazy"
                      alt=""
                      src="/-icon-add.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

DescriptionPanel.propTypes = {
  className: PropTypes.string,
};

export default DescriptionPanel;
