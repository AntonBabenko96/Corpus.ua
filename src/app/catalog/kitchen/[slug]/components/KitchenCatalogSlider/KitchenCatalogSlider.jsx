import Image from 'next/image';
import s from './KitchenCatalogSlider.module.scss';

const KitchenCatalogSlider = ({ image, sale }) => {
  return (
    <div className={s.sliderWrapper}>
      {sale && <span className={s.sale}>sale</span>}
      {<Image src={image} alt="Кухня" width={375} height={240} />}
    </div>
  );
};

export default KitchenCatalogSlider;
