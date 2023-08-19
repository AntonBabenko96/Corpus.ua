'use client';

// import React, { useEffect, useState } from 'react';
// import { useMediaQuery } from '@/hooks/useMediaQuery';
import NavBar from './NavBar/NavBar';
import Logo from './Logo/Logo';
// import BurgerButton from './BurgerButton/BurgerButton';
// import BurgerMenu from './BurgerMenu/BurgerMenu';
import Container from '../Container/Container';
import s from './Header.module.scss';

async function getCategory() {
  const response = await fetch(`https://korpus.onrender.com/api/categories`);
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
}

export default async function Header() {
  // const [showMenu, setShowMenu] = useState(false);
  // const [showInnerMenu, setShowInnerMenu] = useState(false);
  const categories = await getCategory();

  // const isTablet = useMediaQuery('(min-width: 768px)');
  // const isMobile = useMediaQuery('(max-width: 767px)');

  // useEffect(() => {
  //   if (showMenu) {
  //     document.body.style.overflow = 'hidden';
  //   } else {
  //     document.body.style.overflow = 'auto';
  //   }
  // }, [showMenu]);

  // const handleMenu = () => {
  //   setShowMenu(prevState => !prevState);
  // };

  // const handleShowInnerMenu = () => {
  //   setShowInnerMenu(true);
  // };

  // const handleHideInnerMenu = () => {
  //   setShowInnerMenu(false);
  // };

  return (
    <header className={s.header}>
      <Container className={s.headerContainer}>
        <Logo />
        {/* {isMobile && (
          <BurgerButton showMenu={showMenu} toggleMenu={handleMenu} />
        )}
        {isTablet && (
          <NavBar
            categories={categories}
            showInnerMenu={showInnerMenu}
            handleShowInnerMenu={handleShowInnerMenu}
            handleHideInnerMenu={handleHideInnerMenu}
          />
        )} */}
      </Container>
      {/* {showMenu && isMobile && (
        <BurgerMenu
          categories={categories}
          showMenu={showMenu}
          showInnerMenu={showInnerMenu}
          handleShowInnerMenu={handleShowInnerMenu}
          handleHideInnerMenu={handleHideInnerMenu}
        />
      )} */}
      <NavBar categories={categories}/>
    </header>
  );
}
