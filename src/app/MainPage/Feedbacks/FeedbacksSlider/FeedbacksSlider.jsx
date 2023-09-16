'use client';

import { useState, useEffect } from 'react';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import StarList from '../StarList/StarList';
import s from './FeedbacksSlider.module.scss';

const FeedbacksSlider = ({ feedbacks = [] }) => {
  const [index, setIndex] = useState(0);

  const isTablet = useMediaQuery('(min-width: 768px)');
  const isDesktop = useMediaQuery('(min-width: 1200px)');

  useEffect(() => {
    const intervalID = window.setInterval(() => {
      if (index + 1 < feedbacks.length) {
        setIndex(prev => prev + 1);
      } else {
        setIndex(0);
      }
    }, 5000);

    return () => window.clearInterval(intervalID);
  }, [index, feedbacks]);

  const list = feedbacks.map(item => {
    if (item.comment.length > 270) {
      item.comment = item.comment.slice(0, 269) + '...';
    }

    if (item.comment.length > 220 && isTablet) {
      item.comment = item.comment.slice(0, 219) + '...';
    }

    if (item.comment.length > 276 && isDesktop) {
      item.comment = item.comment.slice(0, 275) + '...';
    }
    return item;
  });

  const handlePrevBtnClick = () => {
    if (index > 0) {
      setIndex(prev => prev - 1);
    } else {
      setIndex(feedbacks.length - 1);
    }
  }

  const handleNextBtnClick = () => {
    if (index + 1 < feedbacks.length) {
      setIndex(prev => prev + 1);
    } else {
      setIndex(0);
    }
  }

  let item = list[index];
  let item2 = {};

  if (index + 1 < list.length) {
    item2 = list[index + 1];
  } else {
    item2 = list[0];
  }

  return (
    <>
      <div className={s.slider}>
        {item && (
          <div key={item.id} className={s.slide}>
            <div className={s.item}>
              <div className={s.innerBox}>
                <p className={s.userName}>{item.name}</p>
                <StarList rating={item.rating} />
              </div>
              <p className={s.comment}>{item.comment}</p>
            </div>
          </div>
        )}
        {item2 && isTablet && (
          <div key={item2.id} className={s.slide}>
            <div className={s.item}>
              <div className={s.innerBox}>
                <p className={s.userName}>{item2.name}</p>
                <StarList rating={item2.rating} />
              </div>
              <p className={s.comment}>{item2.comment}</p>
            </div>
          </div>
        )}
      </div>
      <div className={s.arrowWrapper}>
        <div className={s.arrowBtn} onClick={handlePrevBtnClick}>
          <svg
            className={s.arrowIcon}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z"
            />
          </svg>
        </div>
        <div className={s.arrowBtn} onClick={handleNextBtnClick}>
          <svg
            className={s.arrowIcon}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M9.99984 6L8.58984 7.41L13.1698 12L8.58984 16.59L9.99984 18L15.9998 12L9.99984 6Z"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default FeedbacksSlider;
