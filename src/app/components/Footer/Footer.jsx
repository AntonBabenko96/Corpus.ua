import Image from 'next/image';
import Link from 'next/link';
import Container from '../Container/Container';
import styles from './Footer.module.scss';
import logo from '../../../image/Logo.png';

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
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.logo}>
            <Image src={logo} />
          </div>
          <div className={styles.aboutUs}>
            <h3 className={styles.title}>Про нас</h3>
            <ul className={styles.list}>
              <li>Про Компанію</li>
              <li>Наші проекти</li>
              <li>Акції</li>
              <li>Відгуки</li>
            </ul>
          </div>
          <div className={styles.catalog}>
            <h3 className={styles.title}>Каталог</h3>
            <ul className={styles.list}>
              {categoryList.map(el => (
                <li>
                  <Link href={`/${el.name}`}>{el.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.contacts}>
            <h3 className={styles.title}>Контакти</h3>
            <ul className={styles.list}>
              <li>
                <a href="tel:+38 095 555 55 22">+38 095 555 55 22</a>
              </li>
              <li>
                <a href="mailto:korpus@gmail.com">korpus@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.root}>
          <p className={styles.rootText}>
            2023 © Всі права захищені. Копіювання заборонено.
          </p>
          <br />
          <p className={styles.rootText}>Сайт розроблено компанією “DevCore”</p>
        </div>
      </Container>
    </footer>
  );
}
