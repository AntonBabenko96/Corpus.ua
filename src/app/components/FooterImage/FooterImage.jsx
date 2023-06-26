'use client'

import { usePathname } from 'next/navigation'

import Image from 'next/image';
import styles from './FooterImage.module.scss'

export default function FooterImage() {
  const pathname = usePathname()
 
  const isHomePage = pathname === './';
 


  return (
    <section className={styles.imgFooter}>
      {/* <div className="container"> */}
        <Image
          src="/images/footer/image1.jpg"
          priority
          alt="корпус меблі"
          width={1000}
          height={100}
          className={styles.footerImage}
        />
     
    </section>
  );
}
