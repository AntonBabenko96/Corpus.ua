'use client';

import React from 'react';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import NavBar from './NavBar/NavBar';
import Logo from './Logo/Logo';
import Burger from './Burger/Burger';
import BurgerMenu from './BurgerMenu/BurgerMenu';
import Container from '../Container/Container';
import s from './Header.module.scss';

const Header = () => {
  const isTablet = useMediaQuery('(min-width: 768px)');
  const isMobile = useMediaQuery('(max-width: 767px)');

  return (
    <header className={s.header}>
      <Container>
      <div className={s.container}>
        <Logo />
        {isMobile && (
          <>
            <Burger />
            <BurgerMenu />
          </>
        )}
        {isTablet && <NavBar />}
      </div>
      </Container>
    </header>
  );
};

export default Header;
