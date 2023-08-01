'use client';

import React, { useState } from 'react';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import NavBar from './NavBar/NavBar';
import Logo from './Logo/Logo';
import BurgerButton from './BurgerButton/BurgerButton';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import Container from '../Container/Container';
import s from './Header.module.scss';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showInnerMenu, setShowInnerMenu] = useState(false);

  const isTablet = useMediaQuery('(min-width: 768px)');
  const isMobile = useMediaQuery('(max-width: 767px)');

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
          <>
            <BurgerButton showMenu={showMenu} toggleMenu={handleMenu} />
            {showMenu && (
              <BurgerMenu
                showInnerMenu={showInnerMenu}
                handleInnerMenu={handleInnerMenu}
              />
            )}
          </>
        )}
        {isTablet && (
          <NavBar
            showInnerMenu={showInnerMenu}
            handleInnerMenu={handleInnerMenu}
          />
        )}
      </Container>
    </header>
  );
};

export default Header;
