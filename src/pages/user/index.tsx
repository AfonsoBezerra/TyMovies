import ProfileImg from '@components/profileImg';
import { AUTH_COOKIE_NAME } from '@contexts/Auth';
import { useAuthContext } from '@contexts/Auth/useAuthContext';
import { delCookie, getCookie } from '@services/cookies';
import { ContainerUserEdit } from '@stylesComponents/containerUserEdit';
import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';

const UserEdit = () => {
  const { user } = useAuthContext();
  const props = user?.img;
  const router = useRouter();

  delCookie(undefined, '__VERIFY_LOGIN_IMG_COOKIE');

  if (!user) {
    return (
      <div
        style={{
          width: '100vw',
          height: '400vh',
          background:
            'linear-gradient(to left top, #240930, #20092a, #1d0923, #19081d, #140717, #110714, #0e0710, #0a070c, #09080b, #09080b, #09090a, #090909)',
        }}
      />
    );
  }

  return (
    <ContainerUserEdit>
      <div className="title">
        <h1>Bem vindo {user?.name}!</h1>
      </div>
      <div className="image">
        <h2>Quem está assistindo?</h2>
        <button
          type="button"
          className="img"
          onClick={() => router.push('/home')}
        >
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
  delCookie(ctx, '__VERIFY_LOGIN_IMG_COOKIE');

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
