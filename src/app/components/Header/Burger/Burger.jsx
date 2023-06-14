import React from 'react';
import s from './Burger.module.scss';

const Burger = ({ handleShow, show }) => {
  return (
    <div className={s.burgerWrap} onClick={handleShow}>
      <div className={`${s.burger} ${show ? s.active : ''}`}>
        {/* <div className={s.burgerLines}></div> */}
      </div>
    </div>
  );
};

export default Burger;
