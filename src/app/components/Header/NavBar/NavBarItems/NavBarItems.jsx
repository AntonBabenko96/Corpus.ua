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
          <Link href={``} onClick={() => setOpen(!open)}>
            <p>{item.text}</p>
            <Image
              src="/images/header/Vector.svg"
              width={12}
              height={7.41}
              alt="Vector"
              className={s.togglebtn}
              onClick={() => setOpen(!open)}
            />
          </Link>
        </div>
        <ul className={s.itemSubMenu}>
          {item.childrens.map(child => {
            return <NavBarItems key={child.id} item={child} />;
          })}
        </ul>
      </li>
    );
  } else {
    return (
      <li className={`${s.item}`}>
        <Link href={`/catalog/${item.link}`}>
          <p>{item.text}</p>
        </Link>
      </li>
    );
  }
};

export default NavBarItems;
