import NavBarItems from '../NavBar/NavBarItems/NavBarItems';
import items from '../navBarData.json';
import s from './BurgerMenu.module.scss';

const BurgerMenu = ({ showInnerMenu, handleInnerMenu }) => {
  return (
    <div className={s.menuWrapper}>
      <ul className={s.menuList}>
        {items.map(item => (
          <NavBarItems
            key={item.id}
            item={item}
            showInnerMenu={showInnerMenu}
            handleInnerMenu={handleInnerMenu}
          />
        ))}
      </ul>
    </div>
  );
};

export default BurgerMenu;
