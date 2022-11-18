import HeaderMain from '@components/screen/main/header';
import { ContainerIndex } from '@stylesComponents/containerIndex';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

const Home = () => {
  const router = useRouter();
  const [screenSize, setScreenSize] = useState(1.5);
  useEffect(() => {
    const { width } = window.screen;
    if (width >= 760 && width < 1300) {
      setScreenSize(2.5);
    } else if (width >= 1300) {
      setScreenSize(3.5);
    }
  }, []);
  return (
    <ContainerIndex>
      <HeaderMain />
      <div className="video">
        <video autoPlay muted loop>
          <source src="/fundo.mp4" type="video/mp4" />
        </video>
        <div className="conteudo">
          <h3>Curta os melhores momentos</h3>
          <h2>Para sua família</h2>
          <span className="line" />
          <span className="subs">Assinaturas totalmente</span>
          <h2>Gratuita</h2>
          <button type="button" onClick={() => router.push('/signin')}>
            Cadastrar
          </button>
        </div>
        <div className="transition" />
      </div>
      <section className="content">
        <div className="mainMovies">
          <h2>Principais filmes, séries e conteúdos disponiveis na TyMovies</h2>
          <div className="carrossel">
            <Swiper
              slidesPerView={screenSize}
              spaceBetween={30}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="element">
                  <img src="/big.webp" alt="img" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="element">
                  <img src="/anime.webp" alt="img" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="element">
                  <img src="/breaking.webp" alt="img" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="element">
                  <img src="/chiriro.webp" alt="img" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="element">
                  <img src="/rick.webp" alt="img" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="element">
                  <img src="/twd.webp" alt="img" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <button type="button"> explorar mais</button>
        </div>
        <div className="personagens">
          <div className="img">
            <img src="/poo.png" alt="img" />
            <h2>
              <span>TyMovies</span> trás entreterimento
            </h2>
          </div>
          <div className="img  wood">
            <img src="/wood.png" alt="img" />
            <h2>
              Diversão para sua <span>CASA</span>
            </h2>
          </div>
          <div className="img ">
            <img src="/miranha.png" alt="img" />
            <h2>
              E memórias para <span>marcar</span>
            </h2>
          </div>
        </div>
      </section>
    </ContainerIndex>
  );
};

export default Home;
