'use client';

import Image from 'next/image';
import s from './ImageListSlider.module.scss';
import { useEffect, useRef, useState } from 'react';

export default function ImageListSlider() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Локальний масив зображень без поля "id"
  const images = [
    {
      url: 'https://shurup.net.ua/image/cache/data/59/31/556dd0b8bd066cbc447358d21a3f09b0-750x560.jpg',
    },
    {
      url: 'https://shurup.net.ua/image/cache/data/53/31/03501e32f6511402783d7cc00ffa1f16-750x560.jpg',
    },
    {
      url: 'https://shurup.net.ua/image/cache/data/60/31/684300077caf87e4ae06259441a4c0a5-750x560.jpg',
    },
    {
      url: 'https://shurup.net.ua/image/cache/data/64/31/2395e7268c445bf480f1475d7b660d68-750x560.jpg',
    },
    {
      url: 'https://shurup.net.ua/image/cache/data/64/31/2395e7268c445bf480f1475d7b660d68-750x560.jpg',
    },

    // Додайте інші зображення за потребою
  ];

  const selectedImage = images[selectedImageIndex];

  const handleSelectedImageChange = idx => {
    setSelectedImageIndex(idx);
  };

  const handleRightClick = () => {
    setSelectedImageIndex(prevIndex => (prevIndex + 1) % images.length);
  };

  const handleLeftClick = () => {
    setSelectedImageIndex(prevIndex =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={s.carouselContainer}>
      <div className={s.selectedImage}>
        <Image src={selectedImage.url} layout="fill" objectFit="cover" alt="" />
        <div className={s.buttonWrap}>
          <button className={s.carouselButton} onClick={handleLeftClick}>
            <Image
              src="/images/productItem/arrowLeft.svg"
              width={26}
              height={26}
              alt="Arrow left"
            />
          </button>
          <button
            className={`${s.carouselButton} ${s.carouselButtonRight}`}
            onClick={handleRightClick}
          >
            <Image
              src="/images/productItem/arrowRight.svg"
              width={26}
              height={26}
              alt="Arrow right"
            />
          </button>
        </div>
      </div>

      <div className={s.carouselImages}>
        {images.map((image, idx) => (
          <div
            key={idx}
            className={`${s.carouselImage} ${
              selectedImageIndex === idx && s.imgHeadSelected
            }`}
            onClick={() => handleSelectedImageChange(idx)}
          >
            <Image
              src={image.url}
              className={s.imgHead}
              width={40}
              height={40}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
