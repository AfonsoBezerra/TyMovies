import ProfileImg from '@components/profileImg';
import { AUTH_COOKIE_NAME } from '@contexts/Auth';
import { useAuthContext } from '@contexts/Auth/useAuthContext';
import { delCookie, getCookie } from '@services/cookies';
import { ContainerUser } from '@stylesComponents/containerUser';
import axios from 'axios';
import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import { Loading } from 'react-loading-dot';

const User = () => {
  const { user, imgProp, setUser, signOut } = useAuthContext();
  const props = user?.img;
  const router = useRouter();
  const arrayColors = [
    'linear-gradient(to right top, #600292, #823f9e, #9e6bab, #b698b9, #c9c5c9)',
    'linear-gradient(to right top, #0066ff, #194fd0, #1a39a4, #14257a, #091353)',
    'linear-gradient(to right top,#391111, #4c1213, #5f1314, #721314, #851313)',
    'linear-gradient(to right top, #4eff00, #33c810, #1d9311, #0d620d, #053404)',
    'linear-gradient(to right top,  #10c4bb, #00a6a4, #00898c, #006e73, #06535a)',
  ];
  const random = Math.floor(Math.random() * arrayColors.length);
  const colorRandom = arrayColors[random];
  function clickContinue() {
    if (!props) {
      axios.put(`/api/user/${user?.uid}`, {
        img: imgProp,
        borderColor: colorRandom,
      });
      setUser((uProps: any) => ({
        ...uProps,
        img: imgProp,
        borderColor: colorRandom,
      }));
    }
    delCookie(undefined, '__VERIFY_LOGIN_IMG_COOKIE');
    router.push('/home');
  }

  function gerenciarPerfil() {
    if (!props) {
      axios.put(`/api/user/${user?.uid}`, {
        img: imgProp,
        borderColor: colorRandom,
      });
      setUser((uProps: any) => ({
        ...uProps,
        img: imgProp,
        borderColor: colorRandom,
      }));
    }
    delCookie(undefined, '__VERIFY_LOGIN_IMG_COOKIE');
    router.push('/user/edit');
  }

  if (!user) {
    return (
      <div
        style={{
          width: '100vw',
          height: '400vh',
          background:
            'linear-gradient(to left top, #240930, #20092a, #1d0923, #19081d, #140717, #110714, #0e0710, #0a070c, #09080b, #09080b, #09090a, #090909)',
        }}
      >
        <Loading background="rgb(255, 255,  255)" />
      </div>
    );
  }
  return (
    <ContainerUser>
      <div className="title">
        <h1>Bem vindo {user?.userName}!</h1>
      </div>
      <div className="image">
        <h2>Quem está assistindo?</h2>
        <button
          type="button"
          className="img"
          style={{
            backgroundImage: user.borderColor ? user.borderColor : colorRandom,
          }}
          onClick={clickContinue}
        >
          <div className="imgFundo">
            <ProfileImg props={props} />
          </div>
        </button>
        <span>{user?.userName}</span>
      </div>
      <div className="buttons">
        <button
          type="button"
          className="gerenciar"
          onClick={() => gerenciarPerfil()}
        >
          Gerenciar Perfil
        </button>
        <button
          type="button"
          className="gerenciar sair"
          onClick={() => signOut()}
        >
          Sair
        </button>
      </div>
    </ContainerUser>
  );
};

export default User;

export const getServerSideProps = (ctx: GetServerSidePropsContext) => {
  const cookie = getCookie(ctx, AUTH_COOKIE_NAME);

  if (!cookie) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  return { props: {} };
};
