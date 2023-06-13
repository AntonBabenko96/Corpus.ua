import Link from 'next/link';
import items from './navBarData';

const NavBar = () => {
  const elements = items.map(({ id, text, link }) => (
    <li key={id}>
      <Link href="">{text}</Link>
    </li>
  ));

  return <ul>{elements}</ul>;
};

export default NavBar;
