'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import s from './NavBarItems.module.scss';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
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
    window.innerWidth > 1440 && setDropdown(true);
    // window.innerWidth > 768 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 1440 && setDropdown(false);
    // window.innerWidth > 768 && setDropdown(false);
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
            href="#"
            aria-expanded={dropdown ? 'true' : 'false'}
            onClick={() => setDropdown(prev => !prev)}
            className={s.itemLink}
          >
            <span className={s.itemSpan}>{items.text}</span>
            <Image
              src="/images/header/Vector.svg"
              width={12}
              height={7.41}
              alt="Vector"
              className={s.togglebtn}
            />
          </Link>
          <Dropdown
            depthLevel={depthLevel}
            submenus={items.childrens}
            dropdown={dropdown}
          />
        </>
      ) : (
        <>
          {items.scrollLink ? (
            <ScrollLink
              to={`${items.scrollLink}`}
              className="test6"
              style={{ cursor: 'pointer' }}
              offset={-20}
              smooth={true}
              duration={50}
            >
              <span className={s.itemSpan}>{items.text}</span>
            </ScrollLink>
          ) : (
            <Link href={`${items.link}`}>{items.text}</Link>
          )}
        </>
      )}
    </li>
  );
};

export default NavBarItems;
