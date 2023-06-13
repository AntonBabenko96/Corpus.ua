import Image from 'next/image';
import styles from './AboutUs.module.scss';

export default function AboutUs() {
  return (
    <section>
      <Image
        src="/images/aboutUs/aboutUs.png"
        priority
        alt="корпус меблі"
        width={343}
        height={344}
        className={styles.aboutUsImg}
      />
      <div className={styles.aboutUsBackground}>
        <div className={styles.aboutUsFrame}></div>

        <h2 className={styles.aboutUsTitle}>KORPUS</h2>
        <div className={styles.aboutUsText}>
          <p className={styles.aboutUsContent}>
            Ми команда талановитих дизайнерів та майстрів, що втілюють естетику
            та комфорт у вашому будинку.
          </p>
          <p className={styles.aboutUsContent}>
            {' '}
            Наша місія - зробити ваше життя комфортним та елегантним, створюючи
            індивідуальні рішення, які поєднують функціональність та
            естетичність.
          </p>
          <p className={styles.aboutUsContent}>
            Завдяки ретельному вибору матеріалів найвищої якості, ми
            забеспечуємо довговічність та естетичність наших виробів.
          </p>
        </div>
      </div>
      <Image
        src="/images/aboutUs/floatingImg.png"
        priority
        alt="корпус меблі"
        width={262}
        height={219}
        className={styles.floatingImg}
      />
    </section>
  );
}
