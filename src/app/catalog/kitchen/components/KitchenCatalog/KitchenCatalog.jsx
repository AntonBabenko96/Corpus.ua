'use client';
import items from './goodsCatalogData.json';
import s from './KitchenCatalog.module.scss';
import Breadcrumbs from './Breadcrumbs/Breadcrumbs';
import KitchenCatalogList from './KitchenCatalogList/KitchenCatalogList';
import Pagination from './Pagination/Pagination';
import { useState } from 'react';

const KitchenCatalog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [arrPerPage] = useState(6);

  const lastArrIndex = currentPage * arrPerPage;
  const firstArrIndex = lastArrIndex - arrPerPage;
  const currentArr = items.slice(firstArrIndex, lastArrIndex);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <section className={s.kitchenCatalog}>
      <div className="container">
        <Breadcrumbs />
        <KitchenCatalogList items={currentArr} />
        <Pagination
          items={items}
          arrPerPage={arrPerPage}
          paginate={paginate}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          currentArr={currentArr}
        />
      </div>
    </section>
  );
};

export default KitchenCatalog;
