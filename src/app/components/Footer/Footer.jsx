import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.scss';

async function getCategory() {
  const response = await fetch(`https://korpus.onrender.com/api/categories`);
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
}

export default async function Footer() {
  const categoryList = await getCategory();
  console.log(categoryList);

  return (
    <footer className={styles.footer}>
      <div className={styles.logo}></div>
      <div className={styles.aboutUs}>
        <h3>Про нас</h3>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className={styles.catalog}></div>
      <h3>Категорії</h3>
      <ul>
        {categoryList.map(el => (
          <li>{el.name}</li>
        ))}
      </ul>
      <div className={styles.contacts}>
        <h3>Контакти</h3>
        <ul>
          <li></li>
          <li></li>
        </ul>
      </div>
    </footer>
  );
}
