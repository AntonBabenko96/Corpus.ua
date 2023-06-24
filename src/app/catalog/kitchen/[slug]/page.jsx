'use client';

import { useEffect, useState } from 'react';
import CardDesignEl from '../../components/cardDesignEl/CardDesignEl';
import Breadcrumbs from '../components/KitchenCatalog/Breadcrumbs/Breadcrumbs';
import items from '../components/KitchenCatalog/goodsCatalogData.json';
import KitchenCatalogOrderBtn from './components/KitchenCatalogOrderBtn/KitchenCatalogOrderBtn';
import KitchenCatalogSlider from './components/KitchenCatalogSlider/KitchenCatalogSlider';
import s from './KitchenPage.module.scss';

const KitchenAboutPage = ({ params }) => {
  const elements = items.filter(el => el.id === params.slug);

  const [images, setImages] = useState();

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
              <Breadcrumbs />

              <div className={s.kitchenSliderWrap}>
                <KitchenCatalogSlider
                  image={el.src}
                  sale={el.sale}
                  images={images}
                />
                <div className={s.kitchenSliderAbout}>
                  <h1 className={s.title}>{el.title}</h1>
                  <span className={s.article}>Артикул: {el.id}</span>
                  <p className={s.color}>Колір:</p>
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
                    <KitchenCatalogOrderBtn />
                  </div>
                </div>
              </div>
            </div>
          ))}
          <CardDesignEl />
        </div>
      </section>
    </>
  );
};

export default KitchenAboutPage;
