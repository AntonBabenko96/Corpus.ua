import styles from './CategoryList.module.scss';
import Link from 'next/link';
import Image from 'next/image';

export default function CatalogList({ data, category }) {
  const dataList = data.products;
  return (
    <section className={styles.kitchenCatalog}>
      <div className="container">
        <ul className={styles.kitchenCatalogList}>
          {dataList.map(
            ({ _id, name, price, priceOld, discountPrice, article, sale }) => (
              <li key={_id} className={styles.item}>
                <div className={styles.itemBackground}>
                  <Image
                    src="/Image2.jpg"
                    alt={name}
                    width={163}
                    height={148}
                  />
                  <div className={styles.itemText}>
                    <p className={styles.title}>{name}</p>
                    <p className={styles.article}>Артикул: {article}</p>
                    <div className={styles.line}></div>
                    {priceOld ? (
                      <div className={styles.priceWrap}>
                        <p className={styles.priceOld}>{priceOld}</p>
                        <p
                          className={`${styles.price} ${
                            sale ? styles.active : ''
                          }`}
                        >
                          {price}
                        </p>
                      </div>
                    ) : (
                      <p
                        className={`${styles.price} ${
                          sale ? styles.active : ''
                        }`}
                      >
                        {price}
                      </p>
                    )}
                  </div>
                </div>
                <Link href={`/${category}/${_id}`} className={styles.link}>
                  Детальніше
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
    </section>
  );
}
