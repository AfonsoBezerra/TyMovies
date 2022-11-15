import { useAuthContext } from '@contexts/Auth/useAuthContext';
import { useEffect, useRef, useState } from 'react';
import TyMoviesLogo from 'assets/svg/TYmovies';
import { useRouter } from 'next/router';
import ProfileImg from '@components/profileImg';
import { Container } from './style';

const Header = () => {
  const { signOut, user, imgProp, setImgProp } = useAuthContext();
  const [profile, setProfile] = useState<any>();
  const props = user?.img;
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
  useEffect(() => {
    if (props) {
      setProfile(props);
    } else {
      setProfile(imgProp);
      setImgProp({});
    }
  }, [props]);

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
          <div className="containerProfile">
            <div className="imgFundo">
              {profile && <ProfileImg props={profile} teste />}
            </div>
          </div>
        </>
      )}
    </Container>
  );
};
export default Header;
