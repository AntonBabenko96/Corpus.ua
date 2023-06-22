import Link from 'next/link';
import s from './KitchenCatalogList.module.scss';
import Image from 'next/image';

const KitchenCatalogList = ({ items }) => {
  return (
    <ul className={s.kitchenCatalogList}>
      {items.map(({ id, title, price, priceOld, src, sale }) => (
        <li key={id} className={s.item}>
          <div className={s.itemBackground}>
            <Image src={src} alt={title} width={163} height={148} />
            {sale && <span className={s.sale}>sale</span>}
            <div className={s.itemText}>
              <p className={s.title}>{title}</p>
              <p className={s.article}>Артикул: {id}</p>
              <div className={s.line}></div>
              {priceOld ? (
                <div className={s.priceWrap}>
                  <p className={s.priceOld}>{priceOld}</p>
                  <p className={`${s.price} ${sale ? s.active : ''}`}>
                    {price}
                  </p>
                </div>
              ) : (
                <p className={`${s.price} ${sale ? s.active : ''}`}>{price}</p>
              )}
            </div>
          </div>
          <Link href={'#'} className={s.link}>
            Детальніше
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default KitchenCatalogList;
