'use client';

import Container from '@/app/components/Container/Container';
import BgSwiper from './BgSwiper/BgSwiper';

import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <BgSwiper>
      <section className={styles.section}>
        <Container>
          <div className={styles.content}>
            <h1 className={styles.title}>
              Створіть простір своєї мрії з нами!
            </h1>
            <p className={styles.subtitle}>
              Замовте прорахунок меблів вже сьогодні і втіліть свої ідеї в
              реальність.
            </p>
          </div>
        </Container>
      </section>
    </BgSwiper>
  );
}
