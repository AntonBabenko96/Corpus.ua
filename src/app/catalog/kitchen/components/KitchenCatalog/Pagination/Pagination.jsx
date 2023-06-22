'use client';

import Image from 'next/image';
import s from './Pagination.module.scss';

const Pagination = ({
  items,
  arrPerPage,
  paginate,
  currentPage,
  setCurrentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(items.length / arrPerPage); i++) {
    pageNumbers.push(i);
  }

  const prevPage = () => setCurrentPage(prev => prev - 1);
  const nextPage = () =>
    setCurrentPage(prev => {
      if (currentPage !== prev) return;

      return prev + 1;
    });

  return (
    <ul className={s.paginationList}>
      {items.length / arrPerPage === currentPage ? (
        <button onClick={prevPage}>
          <Image
            src="/images/pagination/left.svg"
            width={18}
            height={18}
            alt="Vector"
          />
        </button>
      ) : (
        <button disabled onClick={prevPage} style={{ opacity: '0.3' }}>
          <Image
            src="/images/pagination/left.svg"
            width={18}
            height={18}
            alt="Vector"
          />
        </button>
      )}

      {pageNumbers.map(number => {
        return (
          <li
            key={number}
            className={`${s.paginationItem} ${
              currentPage === number ? s.active : ''
            }`}
            onClick={() => paginate(number)}
          >
            <span>{number}</span>
          </li>
        );
      })}

      {items.length / arrPerPage === currentPage ? (
        <button disabled onClick={nextPage} style={{ opacity: '0.3' }}>
          <Image
            src="/images/pagination/right.svg"
            width={18}
            height={18}
            alt="Vector"
          />
        </button>
      ) : (
        <button onClick={nextPage}>
          <Image
            src="/images/pagination/right.svg"
            width={18}
            height={18}
            alt="Vector"
          />
        </button>
      )}
    </ul>
  );
};

export default Pagination;
