import ProfileImg from '@components/profileImg';
import { AUTH_COOKIE_NAME } from '@contexts/Auth';
import { useAuthContext } from '@contexts/Auth/useAuthContext';
import { getCookie } from '@services/cookies';
import { ContainerUserRemove } from '@stylesComponents/containerUserRemove';
import axios from 'axios';
import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import { Loading } from 'react-loading-dot';

const UserRemove = () => {
  const { user, signOut, deleteAcount } = useAuthContext();
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

  function confirmRemove() {
    deleteAcount();
    axios.delete(`/api/user/${user?.uid}`);
    signOut();
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
    <ContainerUserRemove>
      <div className="title">
        <h1>Excluir {user?.userName}</h1>
      </div>
      <div className="image">
        <span>
          Se o perfil for excluído, as informações associadas a ele também serão
          excluídas.
        </span>
        <div
          className="img"
          style={{
            backgroundImage: user.borderColor ? user.borderColor : colorRandom,
          }}
        >
          <div className="imgFundo">
            <ProfileImg props={props} />
          </div>
        </div>
        <span>{user?.userName}</span>
      </div>
      <div className="buttons">
        <button type="button" onClick={() => router.back()}>
          Cancelar
        </button>
        <button
          type="button"
          className="excluir"
          onClick={() => confirmRemove()}
        >
          Excluir
        </button>
      </div>
    </ContainerUserRemove>
  );
};

export default UserRemove;

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
