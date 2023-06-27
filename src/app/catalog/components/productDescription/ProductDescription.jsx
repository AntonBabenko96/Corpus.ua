
import styles from './ProductDescription.module.scss';
import { TestData} from '../../../../../data/productData';
import Slider from '@/app/MainPage/Portfolio/slider/Slider';
import Image from 'next/image';

export default function ProductDescription({id}) {

    function getProductData() {
        return TestData.map((product) => {
          const { id, name, category, characteristics, image, description } = product;
          return { id, name, category, characteristics, images: image, description };
        });
      }

      function getProductById(productId) {
        return TestData.find((product) => product.id === productId);
      }
    
      const product = getProductById(id);
    
      if (!product) {
        return null; 
      }
    
      const { name, description, images } = product;
      const displayedImages = images.slice(0, 2);

  return (
    <section className={styles.productDescrSection}>
    <div className="container">
      <div className={styles.productDescriptionLinks}>
        <div className={styles.link}>Опис</div>
        <div className={styles.link}>Характеристики</div>
      </div>
      <div className={styles.productDesc}>
        <div>
          <h2 className={styles.title}>Модульна кухня "{name}"</h2>
          <div className={styles.productDescText}>{description}</div>
        </div>
        {/* <Slider images={itemImages} /> */}
        <div>
          <Image
            src={displayedImages[0]} // Use the first image from the images array
            priority
            alt="корпус меблі"
            width={570}
            height={480}
            className={styles.productDescrImg}
          />
        </div>
      </div>
      <div className={styles.productDescrAlbum}>
          {displayedImages.map((image, index) => (
            <Image
              key={index}
              src={image}
              priority
              alt="корпус меблі"
              width={570}
              height={300}
              className={styles.productDescrImg}
            />
          ))}
        </div>
    </div>
  </section>
);
}