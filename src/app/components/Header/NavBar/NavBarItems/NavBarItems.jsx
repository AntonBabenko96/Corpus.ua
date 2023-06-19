'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import s from './NavBarItems.module.scss';
import Link from 'next/link';
import Dropdown from './Dropdown/Dropdown';

const NavBarItems = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);

  let ref = useRef();

  useEffect(() => {
    const handler = event => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener('mousedown', handler);
    document.addEventListener('touchstart', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('touchstart', handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    window.innerWidth > 768 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 768 && setDropdown(false);
  };

  return (
    <li
      className={`${s.item} ${dropdown ? s.open : ''}`}
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {items.childrens ? (
        <>
          <Link
            href=""
            aria-expanded={dropdown ? 'true' : 'false'}
            onClick={() => setDropdown(prev => !prev)}
          >
            <span className={s.itemSpan}>{items.text}</span>
            <Image
              src="/images/header/Vector.svg"
              width={12}
              height={7.41}
              alt="Vector"
              className={s.togglebtn}
              onClick={() => setOpen(!open)}
            />
          </Link>

          <Dropdown
            depthLevel={depthLevel}
            submenus={items.childrens}
            dropdown={dropdown}
          />
        </>
      ) : (
        <Link href={`/catalog/${items.link}`}>
          <span className={s.itemSpan}>{items.text}</span>
        </Link>
      )}
    </li>
  );
};

export default NavBarItems;
