import Image from 'next/image';
import styles from './AboutUs.module.scss';


export default function AboutUs() {
  return (
    <section>
      <div className={styles.aboutUsBackground}>
        <div className={styles.aboutUsFrame}></div>
        <Image src="/images/aboutUs/aboutUs.png"  priority alt="aaa" width={358} height={358} className={styles.aboutUsImg} />
     
        {/* <img src="../public/images/aboutUs.mainmob@1x.png" alt="corpus.about us" className={styles.aboutUsImg} /> */}
        <h2 className={styles.aboutUstitle}>KORPUS</h2>
        <p className={styles.aboutUsContent}>
          Ми команда талановитих дизайнерів та майстрів, що втілюють естетику та
          комфорт у вашому будинку. Наша місія - зробити ваше життя комфортним
          та елегантним, створюючи індивідуальні рішення, які поєднують
          функціональність та естетичність. Завдяки ретельному вибору матеріалів
          найвищої якості, ми забеспечуємо довговічність та естетичність наших
          виробів.
        </p>
      </div>
      <img className={styles.floatingImg} src="" alt="" />
    </section>
  );
}
