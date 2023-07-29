'use client';

import Image from 'next/image';
import s from './KitchenCatalogSlider.module.scss';
import { useEffect, useRef, useState } from 'react';

const KitchenCatalogSlider = ({ sale, images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState();
  const carouselItemsRef = useRef([]);

  useEffect(() => {
    if (images && images[0]) {
      carouselItemsRef.current = carouselItemsRef.current.slice(
        0,
        images.length
      );

      setSelectedImageIndex(0);
      setSelectedImage(images[0]);
    }
  }, [images]);

  const handleSelectedImageChange = newIdx => {
    if (images && images.length > 0) {
      setSelectedImage(images[newIdx]);
      setSelectedImageIndex(newIdx);
    }
  };

  const handleRightClick = () => {
    if (images && images.length > 0) {
      let newIdx = selectedImageIndex + 1;
      if (newIdx >= images.length) {
        newIdx = 0;
      }
      handleSelectedImageChange(newIdx);
    }
  };

  const handleLeftClick = () => {
    if (images && images.length > 0) {
      let newIdx = selectedImageIndex - 1;
      if (newIdx < 0) {
        newIdx = images.length - 1;
      }
      handleSelectedImageChange(newIdx);
    }
  };

  return (
    <div className={s.carouselContainer}>
      <div
        className={s.selectedImage}
        style={{ backgroundImage: `url(${selectedImage?.url})` }}
      >
        {sale && <span className={s.sale}>sale</span>}
        <div className={s.buttonWrap}>
          <button className={s.carouselButton} onClick={handleLeftClick}>
            <Image
              src="/images/kitchenAbout/arrow.svg"
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
              src="/images/kitchenAbout/arrow.svg"
              width={26}
              height={26}
              alt="Arrow right"
            />
          </button>
        </div>
      </div>
      <div className={s.carousel}>
        <div className={s.carouselImages}>
          {images &&
            images.map((image, idx) => (
              <div
                key={image.id}
                style={{ backgroundImage: `url(${image.url})` }}
                className={`${s.carouselImage} ${
                  selectedImageIndex === idx && s.carouselImageSelected
                }`}
                ref={el => (carouselItemsRef.current[idx] = el)}
                onClick={() => handleSelectedImageChange(idx)}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default KitchenCatalogSlider;
