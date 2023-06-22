import items from './goodsCatalogData.json';
import s from './KitchenCatalog.module.scss';
import Breadcrumbs from './Breadcrumbs/Breadcrumbs';
import KitchenCatalogList from './KitchenCatalogList/KitchenCatalogList';

const KitchenCatalog = () => {
  return (
    <section className={s.kitchenCatalog}>
      <div className="container">
        <Breadcrumbs />
        <KitchenCatalogList items={items} />
      </div>
    </section>
  );
};

export default KitchenCatalog;
