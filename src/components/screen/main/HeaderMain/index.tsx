import TyMoviesLogo from 'assets/svg/TYmovies';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import { HeaderMainStyle } from './style';

const HeaderMainIndex = () => {
  const router = useRouter();
  const headerRef = useRef<HTMLElement>(null);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const top = window.scrollY;
      if (top > 2) {
        headerRef?.current?.classList.add('effectHead');
      } else {
        headerRef?.current?.classList.remove('effectHead');
      }
    });
  }, []);

  return (
    <HeaderMainStyle ref={headerRef}>
      <TyMoviesLogo />
      <div className="buttons">
        <Link href="/signin">Cadastrar</Link>
        <button type="button" onClick={() => router.push('/login')}>
          Entrar
        </button>
      </div>
    </HeaderMainStyle>
  );
};

export default HeaderMainIndex;
