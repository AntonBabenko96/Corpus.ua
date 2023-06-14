'use client';

import { useState } from 'react';
import Image from 'next/image';
import s from './NavBarItems.module.scss';
import Link from 'next/link';

const NavBarItems = ({ item }) => {
  const [open, setOpen] = useState(false);

  if (item.childrens) {
    return (
      <li className={`${s.item} ${open ? s.open : ''}`}>
        <div className={s.itemText}>
          <Link href="#">
            <span>{item.text}</span>
            <Image
              src="/images/header/Vector.svg"
              width={'20'}
              height={'20'}
              alt="Vector"
              className={s.togglebtn}
              onClick={() => setOpen(!open)}
            />
          </Link>
        </div>
        <ul className={s.itemSubMenu}>
          {item.childrens.map(child => (
            <NavBarItems key={child.id} item={child} />
          ))}
        </ul>
      </li>
    );
  } else {
    return (
      <li className={`${s.item}`}>
        <Link href="#">{item.text}</Link>
      </li>
    );
  }
};

export default NavBarItems;
