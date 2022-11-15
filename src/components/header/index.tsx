import { useAuthContext } from '@contexts/Auth/useAuthContext';
import { useEffect, useRef } from 'react';
import TyMoviesLogo from 'assets/svg/TYmovies';
import { useRouter } from 'next/router';
import ProfileImg from '@components/profileImg';
import { Container } from './style';

const Header = () => {
  const { signOut, user } = useAuthContext();
  const props = user?.img;
  const router = useRouter();
  const headerRef = useRef<HTMLElement>(null);
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
          <button
            type="button"
            className="containerProfile"
            onClick={() => router.push('/user')}
          >
            <div className="imgFundo">
              {props && <ProfileImg props={props} />}
            </div>
          </button>
        </>
      )}
    </Container>
  );
};
export default Header;
