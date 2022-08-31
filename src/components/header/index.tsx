import { Logo } from '@stylesComponents/ilustrations';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { Container } from './style';

const Header = () => {
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const top = window.scrollY;
      if (top > 80) {
        headerRef?.current?.classList.add('effect');
      } else {
        headerRef?.current?.classList.remove('effect');
      }
    });
  }, []);

  return (
    <Container ref={headerRef}>
      <Logo>
        <Image src="/logo.png" layout="fill" alt="logo" />
      </Logo>
    </Container>
  );
};
export default Header;
