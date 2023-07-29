import React from 'react';
import NavBar from './NavBar/NavBar';
import Logo from './Logo/Logo';
import s from './Header.module.scss';

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <Logo />
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
