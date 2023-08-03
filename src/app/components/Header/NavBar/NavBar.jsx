'use client';

import items from '../navBarData.json';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import NavBarItems from './NavBarItems/NavBarItems';
import s from './NavBar.module.scss';

export default function NavBar({ showInnerMenu, handleInnerMenu }) {
  const isTablet = useMediaQuery('(max-width: 1199px)');

  return (
    <nav>
      <ul className={s.categoriesList}>
        {items.map(item => {
          if (isTablet && item.id === '6') {
            return;
          }
          return (
            <NavBarItems
              item={item}
              showInnerMenu={showInnerMenu}
              handleInnerMenu={handleInnerMenu}
            />
          );
        })}
      </ul>
    </nav>
  );
}
