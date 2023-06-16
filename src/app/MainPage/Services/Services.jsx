import styles from './Services.module.scss';
export default function Services() {
  return (
    <section className={styles.section}>
      <div
        className={styles.services}
        style={{ backgroundImage: `url('/images/services/image1.jpg')` }}
      >
        <p className={styles.servicesText}>Професійне обслуговування</p>
      </div>
      <div
        className={styles.services}
        style={{ backgroundImage: `url('/images/services/image2.jpg')` }}
      >
        <p className={styles.servicesText}>Без прихованих комісій</p>
      </div>
      <div
        className={styles.services}
        style={{ backgroundImage: `url('/images/services/image3.jpg')` }}
      >
        <p className={styles.servicesText}>Приваблива ціна</p>
      </div>
      <div
        className={styles.services}
        style={{ backgroundImage: `url('/images/services/image4.jpg')` }}
      >
        <p className={styles.servicesText}>Індивідуальний підхід</p>
      </div>
    </section>
  );
}
