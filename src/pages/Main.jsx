import { useNavigate } from 'react-router-dom';
import styles from "./Main.module.css"; // CSS 파일을 import

// ProductCard 컴포넌트 정의
const ProductCard = ({ imageSrc, title, description, buttonIconSrc, onClick }) => (
  <div className={styles.productCard} onClick={onClick}>
    <div className={styles.productBackground}>
      <div className={styles.wrapper}>      
        <img className={styles.productImage} alt={title} src={imageSrc} />
      </div>
      {/* <div className={styles.productDetails}>
        <div className={styles.title}>{title}</div>
        <div className={styles.description}>{description}</div>
      </div> */}
      {/* <img className={styles.buttonIcon} alt="Move button" src={buttonIconSrc} /> */}
    </div>
  </div>
);

const Main = () => {
  const navigate = useNavigate();

  // 제품 정보 배열
  const products = [
    {
      imageSrc: '/assets/mask_vicat.png',
      title: 'Stella Vicat',
      description: '',
      buttonIconSrc: '/icon-move-button.svg',
      onClick: () => navigate('/sub_vicat'),
    },
    {
      imageSrc: '/assets/mask_airpath.png',
      title: '팝 미러클락 빅 LED 탁상시계',
      description: '선명한 LED 디스플레이 시계',
      buttonIconSrc: '/icon-move-button1.svg',
      onClick: () => {},
    },
    {
      imageSrc: '/assets/mask_vThree.png',
      title: 'Cubrick',
      description: 'AI 인포테인먼트 로봇',
      buttonIconSrc: '/icon-move-button2.svg',
      onClick: () => {},
    },
    {
      imageSrc: '/assets/mask_dcornic.png',
      title: 'D.Cornic',
      description: '지능형 인포테인먼트',
      buttonIconSrc: '/icon-move-button3.png',
      onClick: () => {},
    },
  ];

  /* const products = [
    {
      imageSrc: '/product_airpath.png',
      title: 'AirPath® V2 Basic Kit',
      description: '최적의 로봇 환경 구축',
      buttonIconSrc: '/icon-move-button.svg',
      onClick: () => navigate('/sub', { 
        state: {
          title: 'AirPath® V2 Basic Kit',
          image: '/product_airpath.png',
          price: 5000,
          description: 'Based on Qualcomm’s QRB5165 processor, you can create the optimal environment for autonomous robots and intelligent service robots.',
        }}),
    },
    {
      imageSrc: '/product_mcm1r.png',
      title: '팝 미러클락 빅 LED 탁상시계',
      description: '선명한 LED 디스플레이 시계',
      buttonIconSrc: '/icon-move-button1.svg',
      onClick: () => navigate('/sub', { 
        state: {
          title: '팝 미러클락 빅 LED 탁상시계',
          image: '/product_mcm1r.png',
          price: 10,
          description: '선명한 LED 디스플레이로 시간, 온도, 습도까지 확인이 가능합니다!',
        }}),
    },
    {
      imageSrc: '/product_cubrick.png',
      title: 'Cubrick',
      description: 'AI 인포테인먼트 로봇',
      buttonIconSrc: '/icon-move-button2.svg',
      onClick: () => navigate('/sub', { 
        state: {
          title: 'Cubrick',
          image: '/product_cubrick.png',
          price: 2000,
          description: '하이퍼 비전 플랫폼을 통한 방역 안전 탐지에 이어, 강력한 커넥티비티와 AI 미디어 캐스팅으로 지능형 인포테인컨트 로봇 시대를 열어 갑니다.',
        }}),
    },
    {
      imageSrc: '/product_dcornic.png',
      title: 'D.Cornic',
      description: '지능형 인포테인먼트',
      buttonIconSrc: '/icon-move-button3.png',
      onClick: () => navigate('/sub', { 
        state: {
          title: 'D.Cornic',
          image: '/product_dcornic.png',
          price: 3000,
          description: '온보드 5G 와 비전 AI, 대용량 생성형 대화 클라우드로 고도화된 컨시어지 로봇 디코닉은 고객과 함께하는 특화된 영역에서 더 진보된 로봇 서비스를 제공합니다.',
        }}),
    },
  ]; */

  return (
    <div className={styles.main}>
      <img className={styles.icon} alt="" src="/assets/main_bg.png" />
      <div className={styles.exploreProductWrapper}>
        <b className={styles.exploreProduct}>Explore Integrit</b>
      </div>

      <section className={styles.mainWrapper}>
        <div className={styles.main1}>
          {/* {<img className={styles.maskGroupIcon} alt="" src="/item-group.png" />} */}
          <img className={styles.maskGroupIcon} alt="" src="/assets/mask_head.png" />
          <div className={styles.grtixBestItemsContainer}>
            {/* <p className={styles.grtix}>Grtix</p>
            <p className={styles.bestItems}>Best items</p> */}
          </div>
        </div>
      </section>

      <section className={styles.mainInner}>
        <div className={styles.featuredParent}>
          <b className={styles.featured}>Technology</b>
          {/* <div className={styles.seeAllButton}>
            <div className={styles.seeAll}>See All</div>
          </div> */}
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
    </div>
  );
};

export default Main;
