'use client';
import { useState } from 'react';
import styles from './ProductDescription.module.scss';
import Slider from '@/app/MainPage/Portfolio/slider/Slider';
import Image from 'next/image';

export default function ProductDescription({ data }) {
  const [activeLink, setActiveLink] = useState('description');

  const handleLinkClick = link => {
    setActiveLink(link);
  };

  return (
    <section className={styles.productDescrSection}>
      <div className={styles.productDescriptionLinks}>
        <div
          className={`${styles.link} ${
            activeLink === 'description' ? styles.active : ''
          }`}
          onClick={() => handleLinkClick('description')}
        >
          Опис
        </div>
        <div
          className={`${styles.link} ${
            activeLink === 'characteristics' ? styles.active : ''
          }`}
          onClick={() => handleLinkClick('characteristics')}
        >
          Характеристики
        </div>
      </div>
      <div className={styles.productDesc}>
        <div>
          <div className={styles.productDescText}>
            {activeLink === 'description' ? (
              <>
                <h2 className={styles.title}>Модульна кухня "{data.name}"</h2>
                <div>{data.description}</div>{' '}
              </>
            ) : (
              <div>
                <h2 className={styles.title}>Характеристика</h2>
                <div className={styles.productCharacteristics}>
                  <ul className={styles.productCharacteristicsList}>
                    {Object.entries(data.properties).map(([key, value]) => (
                      <li
                        className={styles.productCharacteristicsItem}
                        key={key}
                      >
                        <span
                          className={styles.productCharacteristicsItemTitle}
                        >
                          {key}
                        </span>
                        <span className={styles.productCharacteristicsValue}>
                          {value}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* <div className={styles.sliderWrapper}>
          {' '}
          <Slider images={images} />
        </div> */}

        {/* <div>
          <Image
            src={displayedImages[0]}
            priority
            alt="корпус меблі"
            width={570}
            height={480}
            className={styles.productDescrImg}
          />
        </div> */}
      </div>
      {/* <div className={styles.productDescrAlbum}>
        {displayedImages.map((image, index) => (
          <Image
            key={index}
            src={image}
            priority
            alt="корпус меблі"
            width={570}
            height={300}
            className={styles.productDescrImg}
          />
        ))}
      </div> */}
    </section>
  );
}
