'use client';
import style from './Pagination.module.scss';
import imgPrev from '../../../../image/prevPage.png';
import imgNext from '../../../../image/nextPage.png';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Pagination({ currentPage, amountItems }) {
  const [currentPageNum, setCurrentPageNum] = useState(1);
  const items = Array.from({ length: amountItems }, (_, index) => index + 1);

  function handleClick(page) {
    if (page === 'prev' && currentPageNum > 1) {
      setCurrentPageNum(currentPageNum - 1);
    } else if (page === 'next' && currentPageNum < items.length) {
      setCurrentPageNum(currentPageNum + 1);
    } else if (typeof page === 'number' && page >= 1 && page <= items.length) {
      setCurrentPageNum(page);
    }
  }

  useEffect(() => {
    currentPage(currentPageNum);
  });

  return (
    <div className={style.wrapper}>
      <ul className={style.buttonList}>
        <li className={style.item}>
          <button
            className={style.prevPage}
            onClick={() => handleClick('prev')}
          >
            <Image src={imgPrev} />
          </button>
        </li>
        {items.map(item => (
          <li key={item} className={style.item}>
            <button
              onClick={() => handleClick(item)}
              className={`${style.itemPage} ${
                item === currentPageNum ? style.currentPage : ''
              }`}
            >
              {item}
            </button>
          </li>
        ))}
        <li className={style.item}>
          <button
            className={style.nextPage}
            onClick={() => handleClick('next')}
          >
            <Image src={imgNext} />
          </button>
        </li>
      </ul>
    </div>
  );
}
