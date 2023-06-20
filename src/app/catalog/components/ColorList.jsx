import TestData from '../../../../data/productData'

import styles from './ColorList.module.scss';

export default function ColorList() {
   
  return (
    <div className={styles.colors}>
      <h2 className={styles.colorsTitle}>Колір:</h2>
      <ul className={styles.colorsList}>
        
      </ul>
    </div>
  );
}
