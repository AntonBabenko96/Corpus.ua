import React from 'react';
import s from './BurgerButton.module.scss';

const Burger = ({ showMenu, toggleMenu }) => {
  return (
    <div className={s.burgerWrap} onClick={toggleMenu}>
      <div className={`${s.burger} ${showMenu ? s.active : ''}`}></div>
    </div>
  );
};

export default Burger;
