'use client';
import Slider from './Slider/Slider';
import styles from './Portfolio.module.scss';
import Container from '@/app/components/Container/Container';

const images = [
  {
    url: 'https://shurup.net.ua/image/cache/data/59/31/556dd0b8bd066cbc447358d21a3f09b0-750x560.jpg',
  },
  {
    url: 'https://shurup.net.ua/image/cache/data/53/31/03501e32f6511402783d7cc00ffa1f16-750x560.jpg',
  },
  {
    url: 'https://shurup.net.ua/image/cache/data/60/31/684300077caf87e4ae06259441a4c0a5-750x560.jpg',
  },
  {
    url: 'https://shurup.net.ua/image/cache/data/64/31/2395e7268c445bf480f1475d7b660d68-750x560.jpg',
  },
  {
    url: 'https://shurup.net.ua/image/cache/data/64/31/2395e7268c445bf480f1475d7b660d68-750x560.jpg',
  },
];

const Portfolio = () => {
  return (
    <section className={styles.portfolio}>
      <Container>
        <div className={styles.porfolioWrapper}>
          <div className={styles.blackAccent}></div>
          <h2 className={styles.title}>НАШІ ПРОЕКТИ</h2>
          <div className={styles.sliderWrapper}>
            <Slider images={images} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Portfolio;
