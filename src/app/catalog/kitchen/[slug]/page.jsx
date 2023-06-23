import Breadcrumbs from '../components/KitchenCatalog/Breadcrumbs/Breadcrumbs';
import items from '../components/KitchenCatalog/goodsCatalogData.json';
import KitchenCatalogOrderBtn from './components/KitchenCatalogOrderBtn/KitchenCatalogOrderBtn';
import KitchenCatalogSlider from './components/KitchenCatalogSlider/KitchenCatalogSlider';
import s from './KitchenPage.module.scss';

const KitchenAboutPage = ({ params }) => {
  const elements = items.filter(el => el.id === params.slug);

  return (
    <>
      <section className={s.kitchenPage}>
        <div className="container">
          {elements?.map(el => (
            <>
              <Breadcrumbs id={el.id} />

              <KitchenCatalogSlider image={el.src} sale={el.sale} />
              <h1 className={s.title}>{el.title}</h1>
              <span className={s.article}>Артикул: {el.id}</span>
              <p className={s.color}>Колір:</p>
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
            </>
          ))}
          <KitchenCatalogOrderBtn />
        </div>
      </section>
    </>
  );
};

export default KitchenAboutPage;
