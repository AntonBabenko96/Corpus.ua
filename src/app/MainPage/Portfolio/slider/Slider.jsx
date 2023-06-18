'use client';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useMediaQuery } from 'react-responsive';
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
  const isMobileMax = useMediaQuery({ maxWidth: 375 });
  return (
    <Swiper
      className={styles.swiper}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={30}
      // slidesPerView={isMobileMax ? 1 : 2}
      navigation
      loop
      onSwiper={swiper => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
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
      <SwiperSlide>
        <img
          src={images[0]}
          alt="furniture"
          width="570"
          height="355"
          className={styles.img}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={images[1]}
          alt="furniture"
          width="570"
          height="355"
          className={styles.img}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={images[0]}
          alt="furniture"
          width="570"
          height="355"
          className={styles.img}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={images[1]}
          alt="furniture"
          width="570"
          height="355"
          className={styles.img}
        />
      </SwiperSlide>
    </Swiper>
  );
};
