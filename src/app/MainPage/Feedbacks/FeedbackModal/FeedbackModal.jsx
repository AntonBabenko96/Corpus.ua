'use client';

import { useState } from 'react';
import s from './FeedbackModal.module.scss';

const initialState = {
  userName: '',
  phone: '',
  comment: '',
  rating: 0,
};

export default function FeedbackModal({ handleCloseModal }) {
  const [formData, setFormData] = useState(initialState);

  function handleChange({ target }) {
    const { name, value, checked, type } = target;
    console.log('value', value);
    // const newValue = type === 'checkbox' ? checked : value;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('formData', formData);
    setFormData(initialState);
    handleCloseModal();
  }

  const { userName, phone, comment } = formData;

  return (
    <div className={s.overlay}>
      <div className={s.modalWrapper}>
        <button onClick={handleCloseModal} className={s.closeBtn} type="button">
          x
        </button>
        <p className={s.text}>Заповніть свої дані і залиште відгук:</p>
        <form className={s.form}>
          <input
            className={s.input}
            type="text"
            name="userName"
            placeholder="Ім`я"
            value={userName}
            onChange={handleChange}
          />
          <input
            className={s.input}
            type="text"
            name="phone"
            placeholder="+38 (000) 000 00 00"
            value={phone}
            onChange={handleChange}
          />
          <textarea
            className={s.input}
            name="comment"
            rows={1}
            placeholder="Ваш відгук"
            value={comment}
            onChange={handleChange}
          />
          <div className={s.ratingWrapper}>
            <div className={s.ratingItems}>
              <input
                id="ratingItem5"
                type="radio"
                name="rating"
                value="5"
                className={s.ratingItem}
                onChange={handleChange}
              />
              <label htmlFor="ratingItem5" className={s.ratingLabel}></label>
              <input
                id="ratingItem4"
                type="radio"
                name="rating"
                value="4"
                className={s.ratingItem}
                onChange={handleChange}
              />
              <label htmlFor="ratingItem4" className={s.ratingLabel}></label>
              <input
                id="ratingItem3"
                type="radio"
                name="rating"
                value="3"
                className={s.ratingItem}
                onChange={handleChange}
              />
              <label htmlFor="ratingItem3" className={s.ratingLabel}></label>
              <input
                id="ratingItem2"
                type="radio"
                name="rating"
                value="2"
                className={s.ratingItem}
                onChange={handleChange}
              />
              <label htmlFor="ratingItem2" className={s.ratingLabel}></label>
              <input
                id="ratingItem1"
                type="radio"
                name="rating"
                value="1"
                className={s.ratingItem}
                onChange={handleChange}
              />
              <label htmlFor="ratingItem1" className={s.ratingLabel}></label>
            </div>
          </div>
          <button className={s.sendBtn} type="submit" onClick={handleSubmit}>
            Відправити
          </button>
        </form>
      </div>
    </div>
  );
}
