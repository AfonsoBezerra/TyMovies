import { setCookie } from '@services/cookies';
import { CloseIcon, CookiesIcon } from '@stylesComponents/icons';
import Link from 'next/link';
import { useState } from 'react';
import { ModalCookiesStyle } from './style';

const CookiesModal = () => {
  const [modalCookies, setModalCookies] = useState(true);

  function setCookiesModal() {
    setCookie(undefined, '__VERIFY_COOKIES_MODAL', 'true', {
      maxAge: 1000 * 60 * 60 * 24 * 10,
      path: '/',
    });
    setModalCookies(false);
  }
  return (
    <>
      {modalCookies && (
        <ModalCookiesStyle>
          <div className="header">
            <div className="title">
              <CookiesIcon />
              <h1>Esse site usa Cookies.</h1>
            </div>
            <button type="button" onClick={() => setModalCookies(false)}>
              <CloseIcon />
            </button>
          </div>
          <div className="body">
            Nós armazenamos dados temporiamente para melhorar a sua experiencia
            de navegação e recomendar conteúdo de seu interesse. Ao utilizar
            nossos serviços, você concorda com tais monitoramentos.
            <br />
            <Link
              target="_blank"
              href="https://enap.gov.br/pt/termo-de-uso-e-politica-de-privacidade"
            >
              Termos de política e privacidade.
            </Link>
          </div>
          <div className="buttons">
            <button type="button" onClick={() => setCookiesModal()}>
              Aceitar
            </button>
          </div>
        </ModalCookiesStyle>
      )}
    </>
  );
};

export default CookiesModal;
