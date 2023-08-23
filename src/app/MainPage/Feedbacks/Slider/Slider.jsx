'use client';

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from './Slider.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default ({ feedbacks }) => {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        autoplay={{ delay: 7000 }}
        speed={1000}
        navigation
        loop
        breakpoints={{
          375: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}
      >
        {feedbacks.map((item, index) => (
          <SwiperSlide className={styles.feedbacksWrapper}>
            <h4 className={styles.name}>{item.name}</h4>
            <p className={styles.text}>{item.comment}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
