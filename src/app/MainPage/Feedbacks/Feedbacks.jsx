'use client';

// import { useState } from 'react';
import Container from '@/app/components/Container/Container';
import FeedbacksSlider from './FeedbacksSlider/FeedbacksSlider';
// import FeedbackModal from './FeedbackModal/FeedbackModal';
import s from './Feedbacks.module.scss';

async function getFeedbacks() {
  const response = await fetch(`https://korpus.onrender.com/api/feedbacks/`);

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
}

export default async function Feedbacks() {
  // const [showModal, setShowModal] = useState(false);
  const feedbacks = await getFeedbacks();

  // function handleOpenModal() {
  //   setShowModal(true);
  //   document.body.style.overflow = 'hidden';
  // }

  // function handleCloseModal() {
  //   setShowModal(false);
  //   document.body.style.overflow = 'auto';
  // }

  return (
    <>
      <section className={s.feedbacks} id="feedbacks">
        <Container className={s.feedbacksContainer}>
          <h1 className={s.title}>відгуки</h1>
          <FeedbacksSlider feedbacks={feedbacks} />
          <button
            className={s.commentBtn}
            // onClick={handleOpenModal}
          >
            Залишити відгук
          </button>
        </Container>
      </section>
      {/* {showModal && <FeedbackModal handleCloseModal={handleCloseModal} />} */}
    </>
  );
}
