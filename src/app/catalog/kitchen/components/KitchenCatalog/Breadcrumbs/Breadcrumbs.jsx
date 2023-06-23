import s from './Breadcrumbs.module.scss';

const Breadcrumbs = ({ id }) => {
  return (
    <ul className={s.breadcrumbsList}>
      <li className={s.item}>Головна</li>
      <li className={s.item}>Каталог</li>
      <li className={s.item}>Кухні</li>
      {id && <li className={s.item}>{id}</li>}
    </ul>
  );
};

export default Breadcrumbs;
