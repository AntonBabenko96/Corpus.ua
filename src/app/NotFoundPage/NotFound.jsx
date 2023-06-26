import Image from 'next/image';

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
            width={358}
            height={348}
            className={styles.rocketImg}
          />
          <Image
            src="/images/notFaund/img2.png"
            priority
            alt="корпус меблі"
            width={358}
            height={348}
            className={styles.notFoundImg}
          />
          <Image
            src="/images/notFaund/img3.png"
            priority
            alt="корпус меблі"
            width={358}
            height={348}
            className={styles.cosmonautImg}
          />
        </div>
        <div>
          <p>
            Меблі-ніндзя зникли, але ми маємо мегазброю класних варіантів для
            вас!{' '}
          </p>
          <p>
            Шукайте їх на нашій головній сторінці та створіть свій унікальний
            інтер'єр!
          </p>
        </div>
        <button type='button'className={styles.btn}>Назад до KORPUS</button>
      </div>
    </section>
  );
}
