'use client';

import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import { useSwiper } from 'swiper/react';
import { Navigation } from 'swiper';
import StarList from '../Raiting/StarList/StarList';
import s from './FeedbacksSlider.module.scss';

import 'swiper/css';
import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

export default async function FeedbacksSlider({feedbacks}) {
  const swiper = useSwiper();

  return (
    <>
      <Swiper
        // modules={[Navigation]}
        spaceBetween={20}
        autoplay={{ delay: 200 }}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
        direction="horizontal"
        className={s.slider}
        // navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
      >
        {feedbacks.map(item => (
        <SwiperSlide key={item.id} className={s.slide}>
          <div className={s.item}>
            <div className={s.innerBox}>
              <p className={s.userName}>{item.name}</p>
              <StarList rating={item.rating} />
            </div>
            <p className={s.comment}>
              {item.comment}
            </p>
          </div>
        </SwiperSlide>
        ))}
        {/* <SwiperSlide className={s.slide}>
          <div className={s.item}>
            <div className={s.innerBox}>
              <p className={s.userName}>Дмитро</p>
              <div>
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 32 32"
                  className={s.star}
                >
                  <path d="M29.333 12.987l-9.587-0.827-3.747-8.827-3.747 8.84-9.587 0.813 7.28 6.307-2.187 9.373 8.24-4.973 8.24 4.973-2.173-9.373 7.267-6.307zM16 21.2l-5.013 3.027 1.333-5.707-4.427-3.84 5.84-0.507 2.267-5.373 2.28 5.387 5.84 0.507-4.427 3.84 1.333 5.707-5.027-3.040z"></path>
                </svg>
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 32 32"
                  className={s.star}
                >
                  <path d="M29.333 12.987l-9.587-0.827-3.747-8.827-3.747 8.84-9.587 0.813 7.28 6.307-2.187 9.373 8.24-4.973 8.24 4.973-2.173-9.373 7.267-6.307zM16 21.2l-5.013 3.027 1.333-5.707-4.427-3.84 5.84-0.507 2.267-5.373 2.28 5.387 5.84 0.507-4.427 3.84 1.333 5.707-5.027-3.040z"></path>
                </svg>
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 32 32"
                  className={s.star}
                >
                  <path d="M29.333 12.987l-9.587-0.827-3.747-8.827-3.747 8.84-9.587 0.813 7.28 6.307-2.187 9.373 8.24-4.973 8.24 4.973-2.173-9.373 7.267-6.307zM16 21.2l-5.013 3.027 1.333-5.707-4.427-3.84 5.84-0.507 2.267-5.373 2.28 5.387 5.84 0.507-4.427 3.84 1.333 5.707-5.027-3.040z"></path>
                </svg>
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 32 32"
                  className={s.star}
                >
                  <path d="M29.333 12.987l-9.587-0.827-3.747-8.827-3.747 8.84-9.587 0.813 7.28 6.307-2.187 9.373 8.24-4.973 8.24 4.973-2.173-9.373 7.267-6.307zM16 21.2l-5.013 3.027 1.333-5.707-4.427-3.84 5.84-0.507 2.267-5.373 2.28 5.387 5.84 0.507-4.427 3.84 1.333 5.707-5.027-3.040z"></path>
                </svg>
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 32 32"
                  className={s.star}
                >
                  <path d="M29.333 12.987l-9.587-0.827-3.747-8.827-3.747 8.84-9.587 0.813 7.28 6.307-2.187 9.373 8.24-4.973 8.24 4.973-2.173-9.373 7.267-6.307zM16 21.2l-5.013 3.027 1.333-5.707-4.427-3.84 5.84-0.507 2.267-5.373 2.28 5.387 5.84 0.507-4.427 3.84 1.333 5.707-5.027-3.040z"></path>
                </svg>
              </div>
            </div>
            <p className={s.comment}>
              Спочатку я хотів би відзначити якість матеріалів і виконання. Якщо
              меблі виготовлені з якісних матеріалів і мають добре продумані
              деталі, це відразу ж привертає мою увагу. Я хочу подякувати
              майстрам та дизайнерам за неперевершену роботу
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={s.slide}>
          <div className={s.item}>
            <div className={s.innerBox}>
              <p className={s.userName}>Дмитро</p>
              <div>
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 32 32"
                  className={s.star}
                >
                  <path d="M29.333 12.987l-9.587-0.827-3.747-8.827-3.747 8.84-9.587 0.813 7.28 6.307-2.187 9.373 8.24-4.973 8.24 4.973-2.173-9.373 7.267-6.307zM16 21.2l-5.013 3.027 1.333-5.707-4.427-3.84 5.84-0.507 2.267-5.373 2.28 5.387 5.84 0.507-4.427 3.84 1.333 5.707-5.027-3.040z"></path>
                </svg>
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 32 32"
                  className={s.star}
                >
                  <path d="M29.333 12.987l-9.587-0.827-3.747-8.827-3.747 8.84-9.587 0.813 7.28 6.307-2.187 9.373 8.24-4.973 8.24 4.973-2.173-9.373 7.267-6.307zM16 21.2l-5.013 3.027 1.333-5.707-4.427-3.84 5.84-0.507 2.267-5.373 2.28 5.387 5.84 0.507-4.427 3.84 1.333 5.707-5.027-3.040z"></path>
                </svg>
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 32 32"
                  className={s.star}
                >
                  <path d="M29.333 12.987l-9.587-0.827-3.747-8.827-3.747 8.84-9.587 0.813 7.28 6.307-2.187 9.373 8.24-4.973 8.24 4.973-2.173-9.373 7.267-6.307zM16 21.2l-5.013 3.027 1.333-5.707-4.427-3.84 5.84-0.507 2.267-5.373 2.28 5.387 5.84 0.507-4.427 3.84 1.333 5.707-5.027-3.040z"></path>
                </svg>
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 32 32"
                  className={s.star}
                >
                  <path d="M29.333 12.987l-9.587-0.827-3.747-8.827-3.747 8.84-9.587 0.813 7.28 6.307-2.187 9.373 8.24-4.973 8.24 4.973-2.173-9.373 7.267-6.307zM16 21.2l-5.013 3.027 1.333-5.707-4.427-3.84 5.84-0.507 2.267-5.373 2.28 5.387 5.84 0.507-4.427 3.84 1.333 5.707-5.027-3.040z"></path>
                </svg>
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 32 32"
                  className={s.star}
                >
                  <path d="M29.333 12.987l-9.587-0.827-3.747-8.827-3.747 8.84-9.587 0.813 7.28 6.307-2.187 9.373 8.24-4.973 8.24 4.973-2.173-9.373 7.267-6.307zM16 21.2l-5.013 3.027 1.333-5.707-4.427-3.84 5.84-0.507 2.267-5.373 2.28 5.387 5.84 0.507-4.427 3.84 1.333 5.707-5.027-3.040z"></path>
                </svg>
              </div>
            </div>
            <p className={s.comment}>
              Спочатку я хотів би відзначити якість матеріалів і виконання. Якщо
              меблі виготовлені з якісних матеріалів і мають добре продумані
              деталі, це відразу ж привертає мою увагу. Я хочу подякувати
              майстрам та дизайнерам за неперевершену роботу
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={s.slide}>
          <div className={s.item}>
            <div className={s.innerBox}>
              <p className={s.userName}>Дмитро</p>
              <div>
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 32 32"
                  className={s.star}
                >
                  <path d="M29.333 12.987l-9.587-0.827-3.747-8.827-3.747 8.84-9.587 0.813 7.28 6.307-2.187 9.373 8.24-4.973 8.24 4.973-2.173-9.373 7.267-6.307zM16 21.2l-5.013 3.027 1.333-5.707-4.427-3.84 5.84-0.507 2.267-5.373 2.28 5.387 5.84 0.507-4.427 3.84 1.333 5.707-5.027-3.040z"></path>
                </svg>
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 32 32"
                  className={s.star}
                >
                  <path d="M29.333 12.987l-9.587-0.827-3.747-8.827-3.747 8.84-9.587 0.813 7.28 6.307-2.187 9.373 8.24-4.973 8.24 4.973-2.173-9.373 7.267-6.307zM16 21.2l-5.013 3.027 1.333-5.707-4.427-3.84 5.84-0.507 2.267-5.373 2.28 5.387 5.84 0.507-4.427 3.84 1.333 5.707-5.027-3.040z"></path>
                </svg>
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 32 32"
                  className={s.star}
                >
                  <path d="M29.333 12.987l-9.587-0.827-3.747-8.827-3.747 8.84-9.587 0.813 7.28 6.307-2.187 9.373 8.24-4.973 8.24 4.973-2.173-9.373 7.267-6.307zM16 21.2l-5.013 3.027 1.333-5.707-4.427-3.84 5.84-0.507 2.267-5.373 2.28 5.387 5.84 0.507-4.427 3.84 1.333 5.707-5.027-3.040z"></path>
                </svg>
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 32 32"
                  className={s.star}
                >
                  <path d="M29.333 12.987l-9.587-0.827-3.747-8.827-3.747 8.84-9.587 0.813 7.28 6.307-2.187 9.373 8.24-4.973 8.24 4.973-2.173-9.373 7.267-6.307zM16 21.2l-5.013 3.027 1.333-5.707-4.427-3.84 5.84-0.507 2.267-5.373 2.28 5.387 5.84 0.507-4.427 3.84 1.333 5.707-5.027-3.040z"></path>
                </svg>
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 32 32"
                  className={s.star}
                >
                  <path d="M29.333 12.987l-9.587-0.827-3.747-8.827-3.747 8.84-9.587 0.813 7.28 6.307-2.187 9.373 8.24-4.973 8.24 4.973-2.173-9.373 7.267-6.307zM16 21.2l-5.013 3.027 1.333-5.707-4.427-3.84 5.84-0.507 2.267-5.373 2.28 5.387 5.84 0.507-4.427 3.84 1.333 5.707-5.027-3.040z"></path>
                </svg>
              </div>
            </div>
            <p className={s.comment}>
              Спочатку я хотів би відзначити якість матеріалів і виконання. Якщо
              меблі виготовлені з якісних матеріалів і мають добре продумані
              деталі, це відразу ж привертає мою увагу. Я хочу подякувати
              майстрам та дизайнерам за неперевершену роботу
            </p>
          </div>
        </SwiperSlide> */}
      </Swiper>
      <div className={s.arrowWrapper}>
        <button className={s.arrowBtn} onClick={() => swiper.slidePrev()}>
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
        </button>
        <button className={s.arrowBtn} onClick={() => swiper.slideNext()}>
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
        </button>
      </div>
    </>
  );
}
