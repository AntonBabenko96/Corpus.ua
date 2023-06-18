'use client';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './Slider.module.scss';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const images = [
  '/images/portfolio/image31.jpg',
  '/images/portfolio/image32.jpg',
];

export default () => {
  return (
    <Swiper
      className={styles.swiper}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={30}
      slidesPerView={2}
      navigation
      loop
      onSwiper={swiper => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <img src={images[0]} alt="furniture" width="570" height="355" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={images[1]} alt="furniture" width="570" height="355" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={images[0]} alt="furniture" width="570" height="355" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={images[1]} alt="furniture" width="570" height="355" />
      </SwiperSlide>
    </Swiper>
  );
};
