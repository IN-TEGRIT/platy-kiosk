import PropTypes from "prop-types";
import styles from "./DescriptionPanel.module.css";
import { useState } from "react";

const DescriptionPanel = ({ className = "", data, count, event }) => {

  console.log("data", data);
  console.log("event", event);

  const [onClickPlus, onClickMinus] = event;
/*   const [count, setCount] = useState(1);
  const [price, setPrice] = useState(100);

  const onClickPlus = () => { setCount(count + 1)}

  const onClickMinus = () => { 
    if(count > 0)
      setCount(count - 1)
  } */
  return (
    <div className={[styles.descriptionPanel, className].join(" ")}>
      <div className={styles.infoPanel}>
        <div className={styles.box} />
        <div className={styles.description}>
          <div className={styles.headphoneName}>
            <h3 className={styles.grtixHeadphone}>{data.title}</h3>
          </div>
          <div className={styles.placeholder}>$ {data.price.toLocaleString()}</div>
        </div>
        <div className={styles.features}>
          <div className={styles.musicThatFitsContainer}>
            <p className={styles.musicThatFits}>{data.description}</p>
          </div>
          <div className={styles.colorPanel}>
            <div className={styles.colorContainer}>
              <div className={styles.iconOption}>
                <div className={styles.iconContainer} onClick={onClickMinus}>
                  <div className={styles.iconSelector}>
                    <div className={styles.iconSelectorChild} />
                    <img
                      className={styles.duckIcon}
                      loading="lazy"
                      alt=""
                      src="/icon-minus.svg"
                    />
                  </div>
                </div>
                <div className={styles.iconLabel}>{count}</div>
                <div className={styles.iconContainer1} onClick={onClickPlus}>
                  <div className={styles.rectangleParent}>
                    <div className={styles.frameChild} />
                    <img
                      className={styles.iconAdd}
                      loading="lazy"
                      alt=""
                      src="/icon-add.svg"
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
