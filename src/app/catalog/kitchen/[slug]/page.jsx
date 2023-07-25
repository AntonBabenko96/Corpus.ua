'use client';

import { useEffect, useState } from 'react';
import CardDesignEl from '../../components/cardDesignEl/CardDesignEl';
import Breadcrumbs from '../components/KitchenCatalog/Breadcrumbs/Breadcrumbs';
import items from '../components/KitchenCatalog/goodsCatalogData.json';
import KitchenCatalogOrderBtn from './components/KitchenCatalogOrderBtn/KitchenCatalogOrderBtn';
import KitchenCatalogSlider from './components/KitchenCatalogSlider/KitchenCatalogSlider';
import s from './KitchenPage.module.scss';
import Image from 'next/image';
import ProductDescription from '../../components/productDescription/ProductDescription';
import ContactForm from '@/app/components/ContactForm/ContactForm';
import { useMediaQuery } from '@/hooks/useMediaQuery';

const colors = [
  {
    id: '1',
    src: '/images/kitchenAbout/color1.png',
    color: 'Дуб сонома',
  },
  {
    id: '2',
    src: '/images/kitchenAbout/color2.png',
    color: 'Дуб трюфель',
  },
  {
    id: '3',
    src: '/images/kitchenAbout/color3.png',
    color: 'Білий',
  },
  {
    id: '4',
    src: '/images/kitchenAbout/color4.png',
    color: 'Дуб венге',
  },
  {
    id: '5',
    src: '/images/kitchenAbout/color5.png',
    color: 'Ясен шимо',
  },
  {
    id: '6',
    src: '/images/kitchenAbout/color6.png',
    color: 'Шамоні світлий',
  },
];

const KitchenAboutPage = ({ params }) => {
  const elements = items.filter(el => el.id === params.slug);

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://korpus.onrender.com/api/products')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const isDesktop = useMediaQuery('(min-width: 1440px');

  const [images, setImages] = useState();
  const productId = '274628';
  useEffect(() => {
    setImages(
      Array.from(Array(3).keys()).map(id => ({
        id,
        url: `https://picsum.photos/1000?random=${id}`,
      }))
    );
  }, []);

  return (
    <>
      <section className={s.kitchenPage}>
        <div className="container">
          {elements?.map(el => (
            <div key={el.id}>
              <Breadcrumbs id={el.id} />

              <div className={s.kitchenSliderWrap}>
                <KitchenCatalogSlider sale={el.sale} images={images} />
                <div className={s.kitchenSliderAbout}>
                  <h1 className={s.title}>{el.title}</h1>
                  <span className={s.article}>Артикул: {el.id}</span>
                  <p className={s.colorTitle}>Колір:</p>
                  <ul className={s.colors}>
                    {colors.map(el => (
                      <li key={el.id}>
                        <Image
                          src={el.src}
                          width={40}
                          height={40}
                          alt={el.color}
                        />
                        <span>{el.color}</span>
                      </li>
                    ))}
                  </ul>
                  <div className={s.priceBtnWrap}>
                    {el?.priceOld ? (
                      <div className={s.priceWrap}>
                        <p className={s.priceOld}>{el.priceOld}</p>
                        <p className={`${s.price} ${el.sale ? s.active : ''}`}>
                          {el.price}
                        </p>
                      </div>
                    ) : (
                      <div className={s.priceWrap}>
                        <p className={s.price}>{el.price}</p>
                      </div>
                    )}
                    {/* <KitchenCatalogOrderBtn /> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
          <ProductDescription id={productId} />
          <CardDesignEl />
          <ContactForm />
          {/* {isDesktop && <ContactForm />} */}
        </div>
      </section>
    </>
  );
};

export default KitchenAboutPage;
