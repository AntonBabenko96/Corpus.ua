import Image from 'next/image';
import Link from 'next/link';


import styles from './NotFaund.module.scss';

export default function NotFaund() {


  
  return (
    <section className={styles.notFound}>
      <div className={styles.content}>
        <div className={styles.contentImg}>
          <Image
            src="/images/notFaund/img1.png"
            priority
            alt="корпус меблі"
            width={195}
            height={271}
            className={styles.rocketImg}
          />
          <Image
            src="/images/notFaund/img2.png"
            priority
            alt="корпус меблі"
            width={73}
            height={141}
            className={styles.cosmonautImg}
          />
          <Image
            src="/images/notFaund/img3.png"
            priority
            alt="корпус меблі"
            width={160}
            height={101}
            className={styles.notFoundImg}
          />
          <div className={styles.circle}></div>
        </div>
        <div className={styles.textContent}>
          <p className={styles.text}>
            Меблі-ніндзя зникли, але ми маємо мегазброю класних варіантів для
            вас!{' '}
          </p>
          <p className={styles.text}>
            Шукайте їх на нашій головній сторінці та створіть свій унікальний
            інтер'єр!
          </p>
          <Link href="/" className={styles.btn}>
          Назад до KORPUS
          </Link> 
        </div>
       
      </div>
    </section>
  );
}
