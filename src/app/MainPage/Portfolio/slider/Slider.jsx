'use client';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './Slider.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default ({ images }) => {
  return (
    <Swiper
      className={styles.swiper}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={30}
      navigation
      loop
      breakpoints={{
        // Коли екран є 375px або більше
        375: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        // Коли екран є 1440px або більше
        1440: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
      }}
    >
      {/* {images.map(({ id, src, desc }) => ( */}
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img
            src={image}
            alt={`Slide ${index + 1}`}
            width="570"
            height="355"
            className={styles.img}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
