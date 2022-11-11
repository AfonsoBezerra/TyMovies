import Header from '@components/header';
import { ContainerAuthentication } from '@stylesComponents/ContainerAuthentication';
import { useRouter } from 'next/router';

const Authentication = () => {
  const router = useRouter();

  return (
    <>
      <Header />
      <ContainerAuthentication>
        <div className="mensage">
          <h1>Um email de autenticação foi enviado!</h1>
          <span>Verifique a caixa de spam.</span>
          <div className="buttons">
            <button type="button" onClick={() => router.back()}>
              Voltar
            </button>
            <button type="button" onClick={() => router.push('/login')}>
              Logar
            </button>
          </div>
        </div>
      </ContainerAuthentication>
    </>
  );
};

export default Authentication;
