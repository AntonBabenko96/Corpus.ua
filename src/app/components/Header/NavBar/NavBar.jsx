'use client';

import { useEffect, useState } from 'react';
import Burger from '../BurgerButton/BurgerButton';
import items from '../navBarData.json';

import NavBarItems from './NavBarItems/NavBarItems';
import s from './NavBar.module.scss';
import Link from 'next/link';

const NavBar = ({ showInnerMenu, handleInnerMenu }) => {
  const { categories, setCategories } = useState([]);

  useEffect(() => {}, []);

  return (
    <ul className={s.categoriesList}>
      {items.map(item => (
        <NavBarItems
          item={item}
          showInnerMenu={showInnerMenu}
          handleInnerMenu={handleInnerMenu}
        />
      ))}
    </ul>
  );
  // const [show, setShow] = useState(false);

  // const handleShow = () => {
  //   setShow(!show);
  // };

  // useEffect(() => {
  //   if (show) {
  //     document.body.classList.add('no-scroll');
  //   } else {
  //     document.body.classList.remove('no-scroll');
  //   }
  // }, [show]);

  // return (
  //   <>
  //     <Burger handleShow={handleShow} show={show} />
  //     <ul className={`${s.list} ${show ? s.active : ''}`}>
  //       {items.map((item, index) => {
  //         const depthLevel = 0;
  //         return (
  //           <NavBarItems
  //             items={item}
  //             key={index}
  //             depthLevel={depthLevel}
  //             setShow={setShow}
  //           />
  //         );
  //       })}
  //     </ul>
  //   </>
  // );
};

export default NavBar;
