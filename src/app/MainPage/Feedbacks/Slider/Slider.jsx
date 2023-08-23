'use client';

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/swiper-react.mjs';

// Styles must use direct files imports
import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/navigation/navigation.scss'; // Navigation module
import 'swiper/modules/pagination/pagination.scss'; // Pagination module
import styles from './Slider.module.scss';

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
