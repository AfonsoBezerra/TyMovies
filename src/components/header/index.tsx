import { useAuthContext } from '@contexts/Auth/useAuthContext';
import { useEffect, useRef } from 'react';
import TyMoviesLogo from 'assets/svg/TYmovies';
import { useRouter } from 'next/router';
import ProfileImg from '@components/profileImg';
import { Container } from './style';

const Header = () => {
  const { user } = useAuthContext();
  const router = useRouter();
  const headerRef = useRef<HTMLElement>(null);
  const { asPath } = useRouter();
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const top = window.scrollY;
      if (top > 50) {
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
          <TyMoviesLogo />
          <button
            type="button"
            className="containerProfile"
            style={{
              backgroundImage: user?.borderColor,
            }}
            onClick={() => router.push('/user')}
          >
            <div className="imgFundo">
              {user?.img && <ProfileImg props={user?.img} />}
            </div>
          </button>
        </>
      )}
    </Container>
  );
};
export default Header;
