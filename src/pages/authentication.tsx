import Header from '@components/header';
import { useAuthContext } from '@contexts/Auth/useAuthContext';
import { FormStyle } from '@stylesComponents/containerForm';
import { Loading } from 'react-loading-dot';

const Authentication = () => {
  const { user, loading, verifyPin } = useAuthContext();
  return (
    <>
      <Header />
      <FormStyle>
        {loading ? (
          <Loading background="rgb(57, 19, 76)" />
        ) : (
          <>
            <h1>Cadastrar</h1>
            <div className="containerForm">
              <form
                autoComplete="off"
                onSubmit={(e: any) => {
                  e.preventDefault();
                  const credencials = {
                    pin: e.target.pin.value,
                  };
                  verifyPin(credencials.pin, user?.uid as string);
                }}
              >
                <input
                  type="text"
                  required
                  placeholder="Pin"
                  name="pin"
                  autoComplete="off"
                />

                <div className="buttonsForm">
                  <button
                    style={{ color: 'white', marginRight: '1rem' }}
                    type="submit"
                    disabled={loading}
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </>
        )}
      </FormStyle>
    </>
  );
};

export default Authentication;
