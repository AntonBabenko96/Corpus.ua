// import logo from 'assets/header/Logo.svg';
import logo from '../../../../assets/header/Logo.svg';

import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/">
      <Image src={logo} priority alt="Logotype" />
    </Link>
  );
};

export default Logo;
