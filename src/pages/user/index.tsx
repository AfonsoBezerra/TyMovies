import ProfileImg from '@components/profileImg';
import { AUTH_COOKIE_NAME } from '@contexts/Auth';
import { useAuthContext } from '@contexts/Auth/useAuthContext';
import { delCookie, getCookie } from '@services/cookies';
import { ContainerUserEdit } from '@stylesComponents/containerUserEdit';
import axios from 'axios';
import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import { Loading } from 'react-loading-dot';

const UserEdit = () => {
  const { user, imgProp, setUser } = useAuthContext();
  const props = user?.img;
  const router = useRouter();

  function clickContinue() {
    if (!props) {
      axios.put(`/api/user/${user?.uid}`, { img: imgProp });
    }
    setUser((uProps: any) => ({ ...uProps, img: imgProp }));
    delCookie(undefined, '__VERIFY_LOGIN_IMG_COOKIE');
    router.push('/home');
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
    <ContainerUserEdit>
      <div className="title">
        <h1>Bem vindo {user?.userName}!</h1>
      </div>
      <div className="image">
        <h2>Quem está assistindo?</h2>
        <button type="button" className="img" onClick={clickContinue}>
          <div className="imgFundo">
            <ProfileImg props={props} />
          </div>
        </button>
        <span>{user?.name}</span>
      </div>
      <div className="buttons">
        <button type="button" className="gerenciar">
          Gerenciar Perfil
        </button>
      </div>
    </ContainerUserEdit>
  );
};

export default UserEdit;

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
