import Image from 'next/image';

import styles from './CardDesignEl.module.scss';

export default function CardDesignEl() {
  return (
    <section className={styles.design}>
      <div className={styles.designEl}>
        <Image
          src="/images/catalog/Image2.jpg"
          priority
          alt="корпус меблі"
          width={375}
          height={272}
          className={styles.img}
        />
        <div className={styles.designPink}>
          <h2 className={styles.title}>Сучасний дизайн </h2>
          <div className={styles.text}>
            <p>
              Модульна кухня "Меган" привносить сучасний стиль та елегантність у
              ваш простір. З її дизайном, гармонійно поєднується чистота ліній,
              витонченість форм, а також використання високоякісних матеріалів.
            </p>
            <p>
              Кухня "Меган" вражає своєю функціональністю та сучасністю. Її
              мінімалістичний дизайн створює відчуття простору та легкості.
              Чисті лінії і гладкі поверхні створюють візуальний ефект
              безперервності і гармонії.{' '}
            </p>
          </div>
        </div>
      </div>
      <div className={styles.designEl}>
        <Image
          src="/images/catalog/Image6.jpg"
          priority
          alt="корпус меблі"
          width={375}
          height={272}
          className={styles.imgGrey}
        />
        <div className={styles.designGrey}>
          <h2 className={styles.title}>Якісна фурнітура </h2>
          <div className={styles.text}>
            <p>
              Якісна фурнітура - невід'ємна складова успіху будь-якої модульної
              кухні, і ми розуміємо це. Ми дбаємо про те, щоб кожна деталь кухні
              була виконана з використанням найвищої якості матеріалів і
              механізмів, щоб забезпечити надійність, довговічність і комфорт
              використання.{' '}
            </p>
            <p>
              Наша фурнітура для модульної кухні відповідає найвищим стандартам
              якості. Вона характеризується міцністю, стійкістю до зносу і
              практичністю, що дозволяє вам насолоджуватися кухнею протягом
              тривалого часу.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.designEl}>
        <Image
          src="/images/catalog/Image5.jpg"
          priority
          alt="корпус меблі"
          width={375}
          height={272}
          className={styles.img}
        />
        <div className={styles.designPink}>
          <h2 className={styles.title}>Комплектація</h2>
          <div className={styles.text}>
            <p>
              Ми пропонуємо різні типи шафок, висувні ящики, полички, стільниці,
              а також функціональні елементи, такі як висувні відсіки для
              посуду, органайзери для кухонних приладів та інші додаткові
              аксесуари. Ми завжди готові надати вам професійні консультації та
              поради щодо оптимального вибору комплектації для вашої модульної
              кухні.
            </p>
            <p>
              {' '}
              Наша мета - забезпечити вам функціональну, зручну та стильну
              кухню, яка відповідає вашим потребам і створює комфортне
              середовище для готування та спілкування.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
