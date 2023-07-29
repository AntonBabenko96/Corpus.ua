import s from './CatalogItem.module.scss';
import Image from 'next/image';
import ContactForm from '@/app/components/ContactForm/ContactForm';
import ProductDescription from '../productDescription/ProductDescription';
import CardDesignEl from '../cardDesignEl/CardDesignEl';

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

export default function CatalogItem({ data }) {
  console.log(data);
  return (
    <>
      <section className={s.kitchenPage}>
        <div className="container">
          <div key={data._id}>
            {/* <Breadcrumbs id={el.id} /> */}

            <div className={s.kitchenSliderWrap}>
              {/* <KitchenCatalogSlider sale={el.sale} images={images} /> */}
              <div className={s.kitchenSliderAbout}>
                <h1 className={s.title}>{data.name}</h1>
                <span className={s.article}>Артикул: {data.article}</span>
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
                  {data?.priceOld ? (
                    <div className={s.priceWrap}>
                      <p className={s.priceOld}>{data.priceOld}</p>
                      <p className={`${s.price} ${data.sale ? s.active : ''}`}>
                        {data.price}
                      </p>
                    </div>
                  ) : (
                    <div className={s.priceWrap}>
                      <p className={s.price}>{data.price}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <ProductDescription data={data} />
          <CardDesignEl />
          <ContactForm />
        </div>
      </section>
    </>
  );
}
