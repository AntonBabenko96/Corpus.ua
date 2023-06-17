// @client
'use client';
import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper/core';
import 'swiper/css';
import 'swiper/css/navigation';

import styles from './Promotions.module.scss';

// Встановлюємо плагіни
SwiperCore.use([Navigation]);

const imageNames = [
  {
    name: 'RIO',
    src: '/images/promotions/RIO.jpg',
    oldPrice: '20230',
    newPrice: '18230',
  },
  {
    name: 'MIA',
    src: '/images/promotions/MIA.jpg',
    oldPrice: '22230',
    newPrice: '20230',
  },
  {
    name: 'MOCCO',
    src: '/images/promotions/MOCCO.jpg',
    oldPrice: '24230',
    newPrice: '22230',
  },
  {
    name: 'MILANO',
    src: '/images/promotions/MILANO.jpg',
    oldPrice: '26230',
    newPrice: '24230',
  },
  {
    name: 'RIMO',
    src: '/images/promotions/RIMO.jpg',
    oldPrice: '28230',
    newPrice: '26230',
  },
  {
    name: 'GRANDO',
    src: '/images/promotions/GRANDO.jpg',
    oldPrice: '30230',
    newPrice: '28230',
  },
  // ...інші зображення...
];

function formatNumber(num) {
  return new Intl.NumberFormat('uk-UA').format(num);
}

const Promotions = () => {
  return (
    <section className={styles.promotionContainer}>
      <h2 className={styles.promotionTitle}>АКЦІЇ</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        breakpoints={{
          // Коли екран є 375px або більше
          375: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // Коли екран є 1440px або більше
          900: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}
      >
        {imageNames.map((imageName, index) => (
          <SwiperSlide key={index}>
            <figure>
              <img
                className={styles.kitchenImage}
                src={imageName.src}
                alt={`Кухня ${imageName.name}`}
              />
              <figcaption className={styles.slideContent}>
                <div className={styles.mainContent}>
                  <h3 className={styles.title}>Кухня {imageName.name}</h3>
                  <div className={styles.price}>
                    <p className={styles.oldPrice}>
                      {formatNumber(imageName.oldPrice)} грн
                    </p>
                    <p className={styles.newPrice}>
                      {formatNumber(imageName.newPrice)} грн
                    </p>
                  </div>
                  <button className={styles.button}>Докладніше</button>
                </div>
              </figcaption>
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Promotions;
