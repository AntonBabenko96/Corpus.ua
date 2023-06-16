import Image from 'next/image';
import Link from 'next/link';
import s from './Logo.module.scss';

const Logo = () => {
  return (
    <Link href="/" className={s.logoLink}>
      <Image
        src="/images/header/Logo.svg"
        alt="Logotype"
        width={102}
        height={24}
        className={s.logo}
        priority
      />
    </Link>
  );
};

export default Logo;
