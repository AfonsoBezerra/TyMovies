import { useAuthContext } from '@contexts/Auth/useAuthContext';
import { useEffect, useRef } from 'react';
import TyMoviesLogo from 'assets/svg/TYmovies';
import { useRouter } from 'next/router';
import { Container } from './style';

const Header = () => {
  const headerRef = useRef<HTMLElement>(null);
  const { signOut } = useAuthContext();
  const { asPath } = useRouter();
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
    <Container
      ref={headerRef}
      justCenter={asPath !== '/login' && asPath !== '/signin'}
    >
      {asPath === '/login' || asPath === '/signin' ? (
        <TyMoviesLogo />
      ) : (
        <>
          <button type="button" onClick={() => signOut()}>
            Sair
          </button>
          <TyMoviesLogo />
          <span>User</span>
        </>
      )}
    </Container>
  );
};
export default Header;
