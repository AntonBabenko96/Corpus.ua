'use client';

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from './Slider.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default ({ images }) => {
  return (
    <>
      <Swiper
        className={styles.swiper}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        autoplay={{ delay: 7000 }}
        speed={1000}
        navigation
        loop
        breakpoints={{
          // Коли екран є 375px або більше
          375: {
            slidesPerView: 1,
          },
          // Коли екран є 1440px або більше
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide>
            <Image
              key={index}
              src={image.url}
              className={styles.slide}
              alt={`Slide ${index}`}
              width={100}
              height={100}
            />
            <Link href={`/`} className={styles.aboutButton}>
              Детальніше
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

// import { useState, useEffect } from 'react';

// async function getProductsList() {
//   const response = await fetch(`https://korpus.onrender.com/api/products`);
//   if (!response.ok) {
//     throw new Error('Failed to fetch data');
//   }

//   return response.json();
// }

// export default function Slider({ images }) {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const data = await getProductsList();
//         console.log(data);
//       } catch (error) {
//         console.error(error);
//       }
//     }

//     fetchData();
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextSlide();
//     }, 8000);

//     return () => {
//       clearInterval(interval);
//     };
//   }, [currentIndex]);

//   const showSlide = index => {
//     if (index < 0) {
//       index = images.length - 1;
//     } else if (index >= images.length) {
//       index = 0;
//     }
//     setCurrentIndex(index);
//   };

//   const prevSlide = () => {
//     showSlide(currentIndex - 1);
//   };

//   const nextSlide = () => {
//     showSlide(currentIndex + 1);
//   };

//   return (
//     <div className={styles.slider}>
//       <div
//         className={styles.sliderContainer}
//         style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//       >
//         {images.map((image, index) => (
//           <div key={index} className={styles.imageWrapper}>
//             <Image
//               key={index}
//               src={image.url}
//               className={styles.slide}
//               alt={`Slide ${index}`}
//               width={100}
//               height={100}
//             />

//             <Link href={`/`} className={styles.aboutButton}>
//               Детальніше
//             </Link>
//           </div>
//         ))}
//       </div>
// <button className={styles.prevBtn} onClick={prevSlide}>
//   <Image
//     src="/images/productItem/arrowLeft.svg"
//     width={26}
//     height={26}
//     alt="Arrow left"
//     className={styles.imgArrow}
//   />
// </button>
//       <button className={styles.nextBtn} onClick={nextSlide}>
//         <Image
//           src="/images/productItem/arrowRight.svg"
//           width={26}
//           height={26}
//           alt="Arrow right"
//           className={styles.imgArrow}
//         />
//       </button>
//     </div>
//   );
// }
