'use client';

import React, { useEffect, useState } from 'react';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import NavBar from './NavBar/NavBar';
import Logo from './Logo/Logo';
import BurgerButton from './BurgerButton/BurgerButton';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import Container from '../Container/Container';
import s from './Header.module.scss';

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [showInnerMenu, setShowInnerMenu] = useState(false);

  const isTablet = useMediaQuery('(min-width: 768px)');
  const isMobile = useMediaQuery('(max-width: 767px)');

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [showMenu]);

  const handleMenu = () => {
    setShowMenu(prevState => !prevState);
  };

  const handleInnerMenu = () => {
    setShowInnerMenu(prevState => !prevState);
  };

  return (
    <header className={s.header}>
      <Container className={s.headerContainer}>
        <Logo />
        {isMobile && (
          <BurgerButton showMenu={showMenu} toggleMenu={handleMenu} />
        )}
        {isTablet && (
          <NavBar
            showInnerMenu={showInnerMenu}
            handleInnerMenu={handleInnerMenu}
          />
        )}
      </Container>
      {showMenu && (
        <BurgerMenu
          showInnerMenu={showInnerMenu}
          handleInnerMenu={handleInnerMenu}
        />
      )}
    </header>
  );
}
