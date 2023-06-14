import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/images/header/Logo.svg"
        alt="Logotype"
        width={102}
        height={24}
        priority
      />
    </Link>
  );
};

export default Logo;
