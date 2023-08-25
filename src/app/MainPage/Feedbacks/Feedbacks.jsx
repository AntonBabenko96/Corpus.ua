'use client';

import { useEffect, useState } from 'react';
import Container from '@/app/components/Container/Container';
import FeedbacksSlider from './FeedbacksSlider/FeedbacksSlider';
import FeedbackModal from './FeedbackModal/FeedbackModal';
import FeedbackForm from './FeedbackModal/FeedbackForm/FeedbackForm';
import s from './Feedbacks.module.scss';

async function getFeedbacks() {
  const response = await fetch(`https://korpus.onrender.com/api/feedbacks/`);
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
}

async function postFeedback(formData) {
  console.log(formData);
  const { userName, phone, rating, comment } = formData;

  try {
    const response = await fetch(`https://korpus.onrender.com/api/feedbacks/`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        name: userName,
        phone,
        rating: Number(rating),
        comment,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to add comment');
    }
    console.log(response);
    // return response.json();
  } catch (error) {
    alert('Failed to send request');
  }
}

// const initialState = {
//   userName: '',
//   phone: '',
//   comment: '',
//   rating: 0,
// };

export default function Feedbacks() {
  const [showModal, setShowModal] = useState(false);
  const [feedbacks, setFeedbacks] = useState([]);
  // const [formData, setFormData] = useState(initialState);

  useEffect(async () => {
    const feedbacksList = await getFeedbacks();
    if (feedbacksList) {
      setFeedbacks(feedbacksList);
    }
  }, [feedbacks]);

  // function handleChange(e) {
  //   e.preventDefault();
  //   const { name, value } = e.target;
  //   setFormData(prevState => ({ ...prevState, [name]: value }));
  // }

  // async function handleSubmit(e) {
  //   e.preventDefault();
  //   await postFeedback(formData);
  //   setFormData(initialState);
  //   handleCloseModal();
  // }

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
      <section className={s.feedbacks} id="feedbacks">
        <Container className={s.feedbacksContainer}>
          <h1 className={s.title}>відгуки</h1>
          <FeedbacksSlider feedbacks={feedbacks} />
          <button className={s.commentBtn} onClick={handleOpenModal}>
            Залишити відгук
          </button>
        </Container>
      </section>
      {showModal && (
        <FeedbackModal handleCloseModal={handleCloseModal}>
          <FeedbackForm
            postFeedback={postFeedback}
            handleCloseModal={handleCloseModal}
          />
        </FeedbackModal>
      )}
    </>
  );
}
