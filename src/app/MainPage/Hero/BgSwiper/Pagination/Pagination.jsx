import styles from './Pagination.module.scss';

export default function Pagination({ amount, activeIndex, onClick }) {
  const elements = [];

  for (let i = 0; i < amount; ++i) {
    const classNames =
      activeIndex === i ? `${styles.bullet} active` : styles.bullet;
    elements.push(
      <span className={classNames} onClick={e => onClick(i)} key={i}></span>
    );
  }

  return <div className={styles.container}>{elements}</div>;
}
