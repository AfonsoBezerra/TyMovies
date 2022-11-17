import ProfileImg from '@components/profileImg';
import { AUTH_COOKIE_NAME } from '@contexts/Auth';
import { useAuthContext } from '@contexts/Auth/useAuthContext';
import { Loading } from 'react-loading-dot';
import { getCookie } from '@services/cookies';
import { ContainerUserEdit } from '@stylesComponents/containerUserEdit';
import { GetServerSidePropsContext } from 'next';
import { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { ImageEditIcon } from '@stylesComponents/icons';
import NewModal from '@components/editUserModal';

const UserEdit = () => {
  const { user, setUser } = useAuthContext();
  const [bordColor, setBordColor] = useState('');
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [newImg, setNewImg] = useState(user?.img);
  const router = useRouter();
  const nameRef = useRef<any>(null);

  const arrayColors = [
    {
      id: 1,
      color:
        'linear-gradient(to right top, #600292, #823f9e, #9e6bab, #b698b9, #c9c5c9)',
    },
    {
      id: 2,
      color:
        'linear-gradient(to right top, #0066ff, #194fd0, #1a39a4, #14257a, #091353)',
    },
    {
      id: 3,
      color:
        'linear-gradient(to right top,#391111, #4c1213, #5f1314, #721314, #851313)',
    },
    {
      id: 4,
      color:
        'linear-gradient(to right top, #206403, #33c810, #1d9311, #0d620d, #053404)',
    },
    {
      id: 5,
      color:
        'linear-gradient(to right top,  #027d77, #00a6a4, #00898c, #006e73, #06535a)',
    },
  ];

  function EditColor(color: string, id: number) {
    const allInputs = document.querySelectorAll('.inputColors');
    allInputs.forEach((inputColor: any) => {
      if (inputColor.classList.contains('active')) {
        inputColor.classList.remove('active');
      }
      if (Number(inputColor.id) === id) {
        inputColor.classList.add('active');
      }
    });
    setBordColor(color);
  }

  function Edit() {
    const valueName = nameRef?.current?.value;
    const valueInitial = user?.userName;
    if (valueName) {
      if (
        bordColor &&
        bordColor !== user?.borderColor &&
        valueName !== valueInitial &&
        newImg !== user?.img
      ) {
        setLoading(true);
        axios.put(`/api/user/${user?.uid}`, {
          borderColor: bordColor,
          userName: valueName,
          img: newImg,
        });
        setUser((uProps: any) => ({
          ...uProps,
          borderColor: bordColor,
          userName: valueName,
          img: newImg,
        }));
        setLoading(false);
        return router.push('/home');
      }
      if (
        bordColor &&
        bordColor !== user?.borderColor &&
        valueName !== valueInitial &&
        newImg === user?.img
      ) {
        setLoading(true);
        axios.put(`/api/user/${user?.uid}`, {
          borderColor: bordColor,
          userName: valueName,
        });
        setUser((uProps: any) => ({
          ...uProps,
          borderColor: bordColor,
          userName: valueName,
        }));
        setLoading(false);
        return router.push('/home');
      }
      if (!bordColor && valueName !== valueInitial && newImg === user?.img) {
        setLoading(true);
        axios.put(`/api/user/${user?.uid}`, {
          userName: valueName,
        });
        setUser((uProps: any) => ({
          ...uProps,
          userName: valueName,
        }));
        setLoading(false);
        return router.push('/home');
      }
      if (!bordColor && valueName !== valueInitial && newImg !== user?.img) {
        setLoading(true);
        axios.put(`/api/user/${user?.uid}`, {
          userName: valueName,
          img: newImg,
        });
        setUser((uProps: any) => ({
          ...uProps,
          userName: valueName,
          img: newImg,
        }));
        setLoading(false);
        return router.push('/home');
      }
      if (!bordColor && valueName === valueInitial && newImg !== user?.img) {
        setLoading(true);
        axios.put(`/api/user/${user?.uid}`, {
          img: newImg,
        });
        setUser((uProps: any) => ({
          ...uProps,
          img: newImg,
        }));
        setLoading(false);
        return router.push('/home');
      }
    } else if (
      bordColor &&
      bordColor !== user?.borderColor &&
      newImg !== user?.img
    ) {
      setLoading(true);
      axios.put(`/api/user/${user?.uid}`, {
        borderColor: bordColor,
        img: newImg,
      });
      setUser((uProps: any) => ({
        ...uProps,
        borderColor: bordColor,
        img: newImg,
      }));
      setLoading(false);
      return router.push('/home');
    } else if (bordColor && bordColor !== user?.borderColor) {
      setLoading(true);
      axios.put(`/api/user/${user?.uid}`, {
        borderColor: bordColor,
      });
      setUser((uProps: any) => ({
        ...uProps,
        borderColor: bordColor,
      }));
      setLoading(false);
      return router.push('/home');
    } else if (!bordColor && !valueName && newImg !== user?.img) {
      setLoading(true);
      axios.put(`/api/user/${user?.uid}`, {
        img: newImg,
      });
      setUser((uProps: any) => ({
        ...uProps,
        img: newImg,
      }));
      setLoading(false);
      return router.push('/home');
    } else if (
      bordColor &&
      bordColor === user?.borderColor &&
      newImg !== user?.img
    ) {
      setLoading(true);
      axios.put(`/api/user/${user?.uid}`, {
        img: newImg,
      });
      setUser((uProps: any) => ({
        ...uProps,
        img: newImg,
      }));
      setLoading(false);
      return router.push('/home');
    }
    return router.push('/home');
  }

  if (!user) {
    return (
      <div
        style={{
          width: '100vw',
          height: '100vh',
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
      {modal && (
        <div className="fundoModal">
          <NewModal setModal={setModal} setNewImg={setNewImg} />
        </div>
      )}

      <div className="title">
        <h1>Editar Perfil</h1>
      </div>
      <div className="image">
        <div
          className="img"
          style={{
            backgroundImage: bordColor || user?.borderColor,
          }}
        >
          <div className="imgFundo">
            <ProfileImg props={!newImg ? user?.img : newImg} />
            <button
              type="button"
              className="iconEdit"
              style={
                bordColor
                  ? {
                      backgroundColor: `${bordColor.split(',')[1]}90`,
                    }
                  : {
                      backgroundColor: `${user?.borderColor.split(',')[1]}90`,
                    }
              }
              onClick={() => setModal(true)}
            >
              <ImageEditIcon />
            </button>
          </div>
        </div>
        <div className="colors">
          {arrayColors.map((color: any) => (
            <button
              type="button"
              key={color.id}
              id={color.id}
              className={
                color.color === user.borderColor
                  ? 'inputColors active'
                  : 'inputColors'
              }
              style={{ backgroundImage: color.color }}
              onClick={() => EditColor(color.color, color.id)}
            >
              {' '}
            </button>
          ))}
        </div>
        <form method="get" className="nameInput">
          <span>Nome</span>
          <input
            type="text"
            maxLength={20}
            ref={nameRef}
            placeholder={user?.userName}
          />
        </form>
      </div>
      <div className="buttons">
        <button type="button" onClick={() => router.back()}>
          Cancelar
        </button>
        <button
          type="button"
          className="salvar"
          onClick={Edit}
          disabled={!!loading}
        >
          Salvar
        </button>
      </div>
      <button
        type="button"
        className="apagar"
        onClick={() => router.push('/user/remove')}
      >
        Excluir perfil
      </button>
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
