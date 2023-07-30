'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
import Dropdown from './Dropdown/Dropdown';
import s from './NavBarItems.module.scss';

import { useMediaQuery } from '@/hooks/useMediaQuery';

const NavBarItems = ({ item, depthLevel, setShow }) => {
  let markup = '';

  if (item.childrens) {
    const array = item.childrens;
    markup = array.map(({ id, text, link }) => (
      <li key={id} className={s.innerItem}>
        <Link href={link}>{text}</Link>
      </li>
    ));
  }

  return (
    <li key={item.id} className={s.categoryItem}>
      <div className={s.innerWrapper}>
        <Link href={item.link}>{item.text}</Link>
        {item.text === 'каталог' && (
          <Image
            src="/images/header/Vector.svg"
            alt="Vector"
            width={12}
            height={12}
            className={s.vectorIcon}
          />
        )}
      </div>
      {item.childrens && (
        <div className={s.innerBox}>
          <ul className={s.innerList}>{markup}</ul>
        </div>
      )}
    </li>
  );

  // const [dropdown, setDropdown] = useState(false);

  // const isMobile = useMediaQuery('(max-width: 767px');

  // let ref = useRef();
  // useEffect(() => {
  //   const handler = event => {
  //     if (dropdown && ref.current && !ref.current.contains(event.target)) {
  //       setDropdown(false);
  //     }
  //   };
  //   document.addEventListener('mousedown', handler);
  //   document.addEventListener('touchstart', handler);
  //   return () => {
  //     document.removeEventListener('mousedown', handler);
  //     document.removeEventListener('touchstart', handler);
  //   };
  // }, [dropdown]);

  // const onMouseEnter = () => {
  //   window.innerWidth > 1440 && setDropdown(true);
  //   // window.innerWidth > 768 && setDropdown(true);
  // };

  // const onMouseLeave = () => {
  //   window.innerWidth > 1440 && setDropdown(false);
  //   // window.innerWidth > 768 && setDropdown(false);
  // };

  // return (
  //   <li
  //     className={`${s.item} ${dropdown ? s.open : ''}`}
  //     ref={ref}
  //     onMouseEnter={onMouseEnter}
  //     onMouseLeave={onMouseLeave}
  //   >
  //     {items.childrens ? (
  //       <>
  //         <Link
  //           href="#"
  //           aria-expanded={dropdown ? 'true' : 'false'}
  //           onClick={() => setDropdown(prev => !prev)}
  //           className={s.itemLink}
  //         >
  //           <span className={s.itemSpan}>{items.text}</span>
  //           <Image
  //             src="/images/header/Vector.svg"
  //             width="0"
  //             height="0"
  //             alt="Vector"
  //             className={s.togglebtn}
  //           />
  //         </Link>
  //         <Dropdown
  //           depthLevel={depthLevel}
  //           submenus={items.childrens}
  //           dropdown={dropdown}
  //         />
  //       </>
  //     ) : (
  //       <>
  //         {items.scrollLink ? (
  //           <ScrollLink
  //             to={`${items.scrollLink}`}
  //             className="test6"
  //             style={{ cursor: 'pointer' }}
  //             offset={-20}
  //             smooth={true}
  //             duration={50}
  //             onClick={() => setShow(false)}
  //           >
  //             <span className={s.itemSpan}>{items.text}</span>
  //           </ScrollLink>
  //         ) : (
  //           <>
  //             {isMobile ? (
  //               <a href={`/${items.link}`}>{items.text}</a>
  //             ) : (
  //               <Link href={`/${items.link}`}>{items.text}</Link>
  //             )}
  //           </>
  //         )}
  //       </>
  //     )}
  //   </li>
  // );
};

export default NavBarItems;
