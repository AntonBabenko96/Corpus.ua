'use client';

import { useRef } from 'react';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import StarList from '../StarList/StarList';
import s from './FeedbacksSlider.module.scss';

import 'swiper/css';

const FeedbacksSlider = ({ feedbacks }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const isTablet = useMediaQuery('(min-width: 768px)');
  const isDesktop = useMediaQuery('(min-width: 1200px)');

  return (
    <>
      <Swiper
        modules={[Navigation, Autoplay]}
        loop
        spaceBetween={20}
        autoplay={{ delay: 5000 }}
        speed={1000}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}
        direction="horizontal"
        className={s.slider}
        onInit={swiper => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {feedbacks.map(item => {
          let text = item.comment;

          if (item.comment.length > 270) {
            text = item.comment.slice(0, 269) + '...';
          }

          if (item.comment.length > 220 && isTablet) {
            text = item.comment.slice(0, 219) + '...';
          }

          if (item.comment.length > 276 && isDesktop) {
            text = item.comment.slice(0, 275) + '...';
          }

          return (
            <SwiperSlide key={item.id} className={s.slide}>
              <div className={s.item}>
                <div className={s.innerBox}>
                  <p className={s.userName}>{item.name}</p>
                  <StarList rating={item.rating} />
                </div>
                <p className={s.comment}>{text}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className={s.arrowWrapper}>
        <div className={`${s.arrowBtn} prev`} ref={prevRef}>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 32 32"
            className={s.arrowIcon}
          >
            <path d="M20.547 9.88l-1.88-1.88-8 8 8 8 1.88-1.88-6.107-6.12 6.107-6.12z"></path>
          </svg>
        </div>
        <div className={`${s.arrowBtn} next`} ref={nextRef}>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 32 32"
            className={s.arrowIcon}
          >
            <path d="M13.333 8l-1.88 1.88 6.107 6.12-6.107 6.12 1.88 1.88 8-8-8-8z"></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default FeedbacksSlider;
