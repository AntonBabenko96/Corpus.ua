'use client'
import Slider from './slider/Slider';
import styles from './Portfolio.module.scss';
import {TestData} from '../../../../data/productData'

// const images = [
//   { id: '1', src: '/images/portfolio/image31.jpg', desc: 'furniture' },
//   { id: '2', src: '/images/portfolio/image32.jpg', desc: 'furniture' },
//   { id: '3', src: '/images/portfolio/image31.jpg', desc: 'furniture' },
//   { id: '4', src: '/images/portfolio/image32.jpg', desc: 'furniture' },
// ];

const Portfolio = () => {
  const images = TestData.map((item) => item.images[0]);
  return (
    <section className={styles.portfolio} id="projects">
      <div className={styles.blackAccent}></div>
      <h2 className={styles.title}>НАШІ ПРОЕКТИ</h2>
      <Slider images={images} />
    </section>
  );
};

export default Portfolio;

