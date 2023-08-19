'use client';

import items from '../navBarData.json';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import NavBarItems from './NavBarItems/NavBarItems';
import s from './NavBar.module.scss';

export default function NavBar({
  categories,
  // showInnerMenu,
  // handleShowInnerMenu,
  // handleHideInnerMenu,
}) {
  // const isTablet = useMediaQuery('(max-width: 1199px)');
  console.log(categories)

  return (
    <nav>
      <ul className={s.categoriesList}>
        {items.map(item => {
          // if (isTablet && item.id === '6') {
          //   return;
          // }
          return (
            <NavBarItems
              key={item.id}
              item={item}
              // categories={categories}
              // showInnerMenu={showInnerMenu}
              // handleShowInnerMenu={handleShowInnerMenu}
              // handleHideInnerMenu={handleHideInnerMenu}
            />
          );
        })}
      </ul>
    </nav>
  );
}