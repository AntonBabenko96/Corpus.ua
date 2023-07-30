import NavBarItems from '../NavBar/NavBarItems/NavBarItems';
import items from '../navBarData.json';
import s from './BurgerMenu.module.scss';

const BurgerMenu = () => {
  return (
    <div className={s.wrapper}>
      <ul className={s.menuList}>
        {items.map(item => (
          <NavBarItems item={item} />
        ))}
      </ul>
    </div>
  );
};

export default BurgerMenu;
