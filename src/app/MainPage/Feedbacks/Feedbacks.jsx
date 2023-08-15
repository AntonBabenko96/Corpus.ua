'use client';

import { useState } from 'react';
import Container from '@/app/components/Container/Container';
import FeedbacksSlider from './FeedbacksSlider/FeedbacksSlider';
import FeedbackModal from './FeedbackModal/FeedbackModal';
import s from './Feedbacks.module.scss';

async function getFeedbacks() {
  const response = await fetch(`https://korpus.onrender.com/api/feedbacks/`);
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
}

export default async function Feedbacks() {
  const [showModal, setShowModal] = useState(false);
  const feedbacks = await getFeedbacks();

  function handleOpenModal() {
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  }

  function handleCloseModal() {
    setShowModal(false);
    document.body.style.overflow = 'auto';
  }

  return (
    <>
      <section className={s.feedbacks}>
        <Container className={s.feedbacksContainer}>
          <h1 className={s.title}>відгуки</h1>
          <FeedbacksSlider feedbacks={feedbacks} />
          {/* <ul>
          <li className={s.item}>
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
          </li>
        </ul> */}
          {/* <div className={s.arrowWrapper}>
          <button className={`${s.arrowBtn}`}>
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
          <button className={s.arrowBtn}>
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
        </div> */}
          <button className={s.commentBtn} onClick={handleOpenModal}>
            Залишити відгук
          </button>
        </Container>
      </section>
      {showModal && <FeedbackModal handleCloseModal={handleCloseModal} />}
    </>
  );
}
