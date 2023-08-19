// 'useClient';

import Link from 'next/link';
import s from './Dropdown.module.scss';

// async function getCategory() {
//   const response = await fetch(`https://korpus.onrender.com/api/categories`);
//   if (!response.ok) {
//     throw new Error('Failed to fetch data');
//   }

//   return response.json();
// }

export default async function Dropdown({
  categories,
  handleShowInnerMenu,
  handleHideInnerMenu,
}) {
  // const categories = await getCategory();

  return (
    <div
      className={s.innerBox}
      onMouseEnter={handleShowInnerMenu}
      onMouseLeave={handleHideInnerMenu}
    >
      <ul className={s.innerList}>
        {categories &&
          categories.map(({ _id: id, name }) => (
            <li key={id} className={s.innerItem}>
              <Link href={`/${name}`} className={s.navLink}>
                {name}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
