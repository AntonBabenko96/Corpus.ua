import Slider from './slider/Slider';
import styles from './Portfolio.module.scss';

const Portfolio = () => {
  return (
    <section className={styles.portfolio}>
      <div className={styles.blackAccent}></div>
      <h2 className={styles.title}>НАШІ ПРОЕКТИ</h2>
      <Slider />
    </section>
  );
};

export default Portfolio;
