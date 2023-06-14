'use client';

import Link from 'next/link';
import items from './navBarData';
import s from './NavBar.module.scss';
import { useState } from 'react';
import Burger from '../Burger/Burger';

const NavBar = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  const elements = items.map(({ id, text, link }) => (
    <li key={id} className={s.item}>
      <Link href="">{text}</Link>
    </li>
  ));

  return (
    <>
      <Burger handleShow={handleShow} show={show} />
      <ul className={`${s.list} ${show ? s.active : ''}`}>{elements}</ul>
    </>
  );
};

export default NavBar;
