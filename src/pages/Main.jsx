import { useNavigate } from 'react-router-dom';
import styles from "./Main.module.css"; // CSS 파일을 import

// ProductCard 컴포넌트 정의
const ProductCard = ({ imageSrc, title, description, buttonIconSrc, onClick }) => (
  <div className={styles.productCard} onClick={onClick}>
    <div className={styles.wrapper}>
      <img className={styles.productImage} alt={title} src={imageSrc} />
    </div>
    <div className={styles.productDetails}>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
    </div>
    <img className={styles.buttonIcon} alt="Move button" src={buttonIconSrc} />
  </div>
);

const Main = () => {
  const navigate = useNavigate();

  // 제품 정보 배열
  const products = [
    {
      imageSrc: '/headphone2.png',
      title: 'Grtix Headphone',
      description: '생생한 경험의 기회',
      buttonIconSrc: '/icon-move-button.svg',
      onClick: () => navigate('/sub'),
    },
    {
      imageSrc: '/keyboard.png',
      title: 'Grtix Keyboard',
      description: '완벽한 타건감',
      buttonIconSrc: '/icon-move-button1.svg',
      onClick: () => navigate('/sub'),
    },
    {
      imageSrc: '/speaker.png',
      title: 'Grtix Speaker',
      description: '남다른 사운드',
      buttonIconSrc: '/icon-move-button2.svg',
      onClick: () => navigate('/sub'),
    },
    {
      imageSrc: '/mouse.png',
      title: 'Grtix Mouse',
      description: '더 정밀하고 섬세하게',
      buttonIconSrc: '/icon-move-button3.svg',
      onClick: () => navigate('/sub'),
    },
  ];

  return (
    <div className={styles.main}>
      <img className={styles.icon} alt="" src="/2.svg" />
      <div className={styles.exploreProductWrapper}>
        <b className={styles.exploreProduct}>Explore Product</b>
      </div>

      <section className={styles.mainWrapper}>
        <div className={styles.main1}>
          <img className={styles.maskGroupIcon} alt="" src="/item-group.png" />
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
          {products.map((product, index) => (
            <ProductCard
              key={index}
              imageSrc={product.imageSrc}
              title={product.title}
              description={product.description}
              buttonIconSrc={product.buttonIconSrc}
              onClick={product.onClick}
            />
          ))}
        </div>
      </section>

      {/* <section className={styles.productSpeakerMouse}>
        <div className={styles.speakerMouseImagesParent}>
          <ProductCard
            imageSrc="/speaker.png"
            title="Grtix Speaker"
            description="남다른 사운드"
            buttonIconSrc="/icon-move-button2.svg"
            onClick={() => navigate('/sub')}
          />
          <ProductCard
            imageSrc="/mouse.png"
            title="Grtix Mouse"
            description="더 정밀하고 섬세하게"
            buttonIconSrc="/icon-move-button3.svg"
            onClick={() => navigate('/sub')}
          />
        </div>
      </section> */}
    </div>
  );
};

export default Main;
