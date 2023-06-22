import s from './Breadcrumbs.module.scss';

const Breadcrumbs = () => {
  return (
    <ul className={s.breadcrumbsList}>
      <li className={s.item}>Головна</li>
      <li className={s.item}>Каталог</li>
      <li className={s.item}>Кухні</li>
    </ul>
  );
};

export default Breadcrumbs;
