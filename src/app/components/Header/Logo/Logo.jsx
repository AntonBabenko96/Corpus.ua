// import logo from 'assets/header/Logo.svg';
// import logo from '/public/images/header/logo.png';

import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/">
      {/* <Image src="/images/header/logo.png"  alt="Logotype" width={102} height={24}/> */}
    </Link>
  );
};

export default Logo;
