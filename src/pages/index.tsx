import HeaderMain from '@components/screen/main/header';
import { ContainerIndex } from '@stylesComponents/containerIndex';

const Home = () => {
  return (
    <ContainerIndex>
      <HeaderMain />
      <div className="video">
        <video autoPlay muted loop>
          <source src="/fundo.mp4" type="video/mp4" />
        </video>
        <div className="conteudo">
          <h3>Curta os melhores momentos</h3>
          <h2>Para sua familia</h2>
          <span />
        </div>
        <div className="transition" />
      </div>
      <div className="content" />
    </ContainerIndex>
  );
};

export default Home;
