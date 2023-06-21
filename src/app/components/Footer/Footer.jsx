import Image from 'next/image';
import Link from 'next/link';

import styles from './Footer.module.scss';
import Logo from './LogoFooter/LogoFooter';
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Image
        src="/images/footer/image1.jpg"
        priority
        alt="корпус меблі"
        width={1000}
        height={100}
        className={styles.footerImage}
      />
      <div className={styles.footerContent}>
        <ul className={styles.footerList}>
          <li className={styles.footerLogo}>
            <Logo />
          </li>
          <li className={styles.footerItem}>
            <h2 className={styles.footerTitle}>ПРО НАС</h2>
            <ul className={styles.footerItemText}>
              <li className={styles.footerLink}>
                <Link href="/" />
                Про компанію
              </li>
              <li className={styles.footerLink}>
                <Link href="/" />
                Наші проекти
              </li>
              <li className={styles.footerLink}>
                <Link href="/" />
                Акції
              </li>
              <li className={styles.footerLink}>
                <Link href="/" />
                Відгуки
              </li>
            </ul>
          </li>
          <li className={styles.footerItem}>
            <h2 className={styles.footerTitle}>СЕРІЙНІ МЕБЛІ</h2>
            <ul className={styles.footerItemText}>
              <li className={styles.footerLink}>
                <Link href="/" />
                Кухні
              </li>
              <li className={styles.footerLink}>
                <Link href="/" />
                Шафи
              </li>
              <li className={styles.footerLink}>
                <Link href="/" />
                Тумби
              </li>
              <li className={styles.footerLink}>
                <Link href="/" />
                Комоди
              </li>
            </ul>
          </li>
          <li className={styles.footerItemWide}>
            <h2 className={styles.footerTitle}>ІНДИВІДУАЛЬНЕ ЗАМОВЛЕННЯ</h2>
            <ul className={styles.footerItemText}>
              <li className={styles.footerLink}>
                <Link href="/" />
                Кухні
              </li>
              <li className={styles.footerLink}>
                <Link href="/" />
                Шафи
              </li>
              <li className={styles.footerLink}>
                <Link href="/" />
                Тумби
              </li>
              <li className={styles.footerLink}>
                <Link href="/" />
                Комоди
              </li>
            </ul>
          </li>
        </ul>
        <div className={styles.footerConact}>
          <h2 className={styles.footerTitle}>КОНТАКТИ</h2>
          <ul className={styles.footerItemText}>
            <li className={styles.footerLink}>+38 095 555 55 22</li>
            <li className={styles.footerLink}>sales@korpus.com.ua</li>
          </ul>
        </div>
      </div>
      <div className={styles.footerLicence}>
        <p className={styles.license}>
          2023 © Всі права захищені. Копіювання заборонено.
        </p>
        <p className={styles.license}>
          {' '}
          Сайт розроблено компанієй <Link href="/">“DevCore”</Link>
        </p>
      </div>
    </footer>
  );
}
