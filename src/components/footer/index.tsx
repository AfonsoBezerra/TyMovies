import {
  GithubIcon,
  Instagramicon,
  WhatsappiconContact,
} from '@stylesComponents/icons';
import TyMoviesLogo from 'assets/svg/TYmovies';
import Link from 'next/link';
import { Container } from './style';

const Footer = () => {
  return (
    <Container>
      <div className="bordaColor" />
      <TyMoviesLogo />
      <div className="contacts">
        <div className="title">
          <h5>Contato</h5>
          <div className="borderColorTitle" />
        </div>
        <div className="icons">
          <Link href="https://github.com/AfonsoBezerra/TyMovies">
            <a
              href="https://github.com/AfonsoBezerra/TyMovies"
              target="_blank"
              rel="noreferrer"
            >
              <GithubIcon />
            </a>
          </Link>
          <Link href="https://www.instagram.com/afonso.dev/">
            <a
              href="https://www.instagram.com/afonso.dev/"
              target="_blank"
              rel="noreferrer"
            >
              <Instagramicon />
            </a>
          </Link>
          <Link href="https://wa.link/0xunp9">
            <a href="https://wa.link/0xunp9" target="_blank" rel="noreferrer">
              <WhatsappiconContact />
            </a>
          </Link>
        </div>
      </div>
      <div className="direitos">
        <div className="divider" />
        <span>Afonso Bezerra @2023 | Todos os direitos reservados</span>
      </div>
    </Container>
  );
};

export default Footer;
