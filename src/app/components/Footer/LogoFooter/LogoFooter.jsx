import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/images/footer/Logo.svg"
        alt="Logotype"
        width={124}
        height={72}
        priority
      />
    </Link>
  );
};

export default Logo;
