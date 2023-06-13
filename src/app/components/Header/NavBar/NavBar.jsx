'use client';

import Link from 'next/link';
import items from './navBarData';
import s from './NavBar.module.scss';
import { useState } from 'react';

const NavBar = () => {
  const [show, setShow] = useState(false);
  console.log('show:', show);

  const handleClick = () => {
    setShow(!show);
  };

  const elements = items.map(({ id, text, link }) => (
    <li key={id} className={s.item}>
      <Link href="">{text}</Link>
    </li>
  ));

  return (
    <>
      <div onClick={handleClick} className={s.burger}></div>
      {/* <ul className={s.list}>{elements}</ul> */}
      <ul className={`${s.list} ${show ? s.active : ''}`}>{elements}</ul>
    </>
  );
};

export default NavBar;
