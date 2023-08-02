'use client';

import { useMemo, useState, useEffect } from 'react';

import styles from './BgSwiper.module.scss';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import Pagination from './Pagination/Pagination';

const mobileBgImages = [
  {
    1: '/images/hero/hero-mob.jpg',
    2: '/images/hero/hero-mob@2x.jpg',
    3: '/images/hero/hero-mob@3x.jpg',
  },
  {
    1: '/images/hero/hero-mob2.jpg',
  },
  {
    1: '/images/hero/hero-mob3.jpg',
  },
];

const desktopBgImages = [
  {
    1: '/images/hero/hero-desk.jpg',
    2: '/images/hero/hero-desk@2x.jpg',
    3: '/images/hero/hero-desk@3x.jpg',
  },
  {
    1: '/images/hero/hero-desk2.jpg',
    2: '/images/hero/hero-desk2@2x.jpg',
  },
  {
    1: '/images/hero/hero-desk3.jpg',
    2: '/images/hero/hero-desk3@2x.jpg',
  },
];

function getImage(list, index) {
  var pixelRatio = Math.round(window.devicePixelRatio);

  do {
    const img = list[index][pixelRatio];
    if (img) return img;
    --pixelRatio;
  } while (pixelRatio > 0);

  return null;
}

export default function BgSwiper({ children }) {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const [imageIndex, setImageIndex] = useState(0);

  const imageList = useMemo(
    () => (isMobile ? mobileBgImages : desktopBgImages),
    [isMobile]
  );

  useEffect(() => {
    const intervalID = window.setInterval(() => {
      if (imageIndex + 1 < imageList.length) {
        setImageIndex(prev => prev + 1);
      } else {
        setImageIndex(0);
      }
    }, 10000);

    return () => window.clearInterval(intervalID);
  }, [imageIndex, imageList]);

  var imgSrc = getImage(imageList, imageIndex);

  return (
    <div
      className={styles.swiper}
      style={{
        backgroundImage: `url(${imgSrc})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        maxWidth: '1600px',
        margin: 'auto',
      }}
    >
      {children}
      <div className={styles.pagination}>
        <Pagination
          amount={imageList.length}
          onClick={i => setImageIndex(i)}
          activeIndex={imageIndex}
        />
      </div>
    </div>
  );
}
