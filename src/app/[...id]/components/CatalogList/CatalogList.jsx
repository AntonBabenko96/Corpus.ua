'use client';
import styles from './CategoryList.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import Container from '@/app/components/Container/Container';
import img from '@/image/productItem.jpg';
import Pagination from '../Pagination/Pagination';
import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

async function getProductsList(category, page) {
  const response = await fetch(
    `https://korpus.onrender.com/api/products?page=${page}&limit=6&category=${category}`
  );
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
}

async function calcAmountPage(totalItems) {
  if (totalItems <= 6) {
    return 1;
  } else {
    const totalPage = Math.ceil(totalItems / 6);
    return totalPage;
  }
}
export default function CatalogList({ category }) {
  const [dataList, setDataList] = useState(null);
  const [totalItems, setTotalItems] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getProductsList(category, currentPage);
        setDataList(data.products);
        const totalItems = await calcAmountPage(data.total);
        setTotalItems(totalItems);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, [category, currentPage]);

  function handleChangePage(newPage) {
    setCurrentPage(newPage);
  }

  return (
    <section className={styles.wrapper}>
      <Container>
        <ul className={styles.itemList}>
          {dataList?.map(({ _id, name, article, price, discountPrice }) => (
            <li key={_id} className={styles.item}>
              <div className={styles.itemWrapper}>
                <div className={styles.hoverContent}>
                  <p className={styles.name}>"{name}"</p>
                  <p className={styles.article}>Артикул: {article}</p>
                  <p className={styles.price}>{price} грн</p>

                  <Link
                    href={`/${category}/${_id}`}
                    className={styles.detailButton}
                  >
                    Детальніше
                  </Link>
                </div>
                <Image src={img} className={styles.img} alt="img" />
              </div>
            </li>
          ))}
        </ul>
        <Pagination currentPage={handleChangePage} amountItems={totalItems} />
      </Container>
    </section>
  );
}
