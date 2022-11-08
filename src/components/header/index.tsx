import { useAuthContext } from '@contexts/Auth/useAuthContext';
import { useEffect, useRef } from 'react';
import { Container } from './style';

const Header = () => {
  const headerRef = useRef<HTMLElement>(null);
  const { signOut } = useAuthContext();
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
      <button type="button" onClick={() => signOut()}>
        Deslogar
      </button>
    </Container>
  );
};
export default Header;
