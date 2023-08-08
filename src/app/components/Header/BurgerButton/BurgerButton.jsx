import React from 'react';
import s from './BurgerButton.module.scss';

export default function Burger({ showMenu, toggleMenu }) {
  return (
    <div className={s.burgerWrap} onClick={toggleMenu}>
      <div className={`${s.burger} ${showMenu ? s.active : ''}`}></div>
    </div>
  );
}
