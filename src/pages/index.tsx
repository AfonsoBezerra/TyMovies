import CookiesModal from '@components/cookies';
import Footer from '@components/footer';
import Faq from '@components/screen/main/faqs';
import HeaderMain from '@components/screen/main/header';
import HeaderMainIndex from '@components/screen/main/HeaderMain';
import { AUTH_COOKIE_NAME } from '@contexts/Auth';
import { getCookie } from '@services/cookies';
import { ContainerIndex } from '@stylesComponents/containerIndex';
import { faqsArray } from 'mock/FaqsArray';
import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const getServerSideProps = (ctx: GetServerSidePropsContext) => {
  const cookie = getCookie(ctx, AUTH_COOKIE_NAME);
  const cookies = getCookie(ctx, '__VERIFY_COOKIES_MODAL');
  return { props: { haveCookie: !!cookie, modalCookie: !!cookies } };
};

const Home = (props: any) => {
  const router = useRouter();
  const [changeImage, setChangeImage] = useState(false);
  const { haveCookie, modalCookie } = props;
  const [openRow, setOpenRow] = useState(0);
  useEffect(() => {
    AOS.init();
  } , [])
  useEffect(() => {
    const interval = setInterval(() => {
      setChangeImage((prev) => !prev);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {!modalCookie && <CookiesModal />}
      <ContainerIndex>
        {!haveCookie ? <HeaderMainIndex /> : <HeaderMain />}
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
        <section className="content" >
          <div className="mainMovies" data-aos="fade-left"   data-aos-duration="1500">
            <h2>
              Principais filmes, séries e conteúdos disponiveis na TyMovies
            </h2>
            <div className="carrossel">
              <Swiper
                spaceBetween={30}
                className="mySwiper"
                breakpoints={
                  {
                    1300: {
                      slidesPerView: 3.5
                    },
                    768: {
                      slidesPerView: 2.5
                    },
                    320:{
                      slidesPerView: 1.5
                    }
                  }
                }
              >
                <SwiperSlide>
                  <div
                    className="element"
                    aria-hidden
                    onClick={() => router.push('/home')}
                  >
                    <img src="/big.webp" alt="img" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className="element"
                    aria-hidden
                    onClick={() => router.push('/home')}
                  >
                    <img src="/anime.webp" alt="img" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className="element"
                    aria-hidden
                    onClick={() => router.push('/home')}
                  >
                    <img src="/breaking.webp" alt="img" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className="element"
                    aria-hidden
                    onClick={() => router.push('/home')}
                  >
                    <img src="/chiriro.webp" alt="img" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className="element"
                    aria-hidden
                    onClick={() => router.push('/home')}
                  >
                    <img src="/rick.webp" alt="img" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className="element"
                    aria-hidden
                    onClick={() => router.push('/home')}
                  >
                    <img src="/twd.webp" alt="img" />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <button type="button" onClick={() => router.push('/home')}>
              explorar mais
            </button>
          </div>
          <div className="personagens" data-aos="fade-right"   data-aos-duration="1500">
            <div className="img">
              <img src="/poo1.png" alt="img" />
              <h2>
                <span>TyMovies</span> trás entreterimento
              </h2>
            </div>
            <div className="img  wood">
              <img src="/wood1.png" alt="img" />
              <h2>
                Diversão para sua <span>CASA</span>
              </h2>
            </div>
            <div className="img ">
              <img src="/miranha1.png" alt="img" />
              <h2>
                E memórias para <span>MARCAR</span>
              </h2>
            </div>
          </div>
          <div className="telas" data-aos="fade"   data-aos-duration="1500">
            <div className="title">
              <h1>Diversão garantida em todo lugar</h1>
              <p>
                Experiências personalizadas para garantir a diversão em qualquer
                momento.
              </p>
            </div>
            <div className="image" >
              <div className="img">
                <img src="/devicem.png" alt="device" />
              </div>
            </div>
          </div>
          <div className="descubra">
            <div className="title">
              <p>Descubra novas histórias</p>
            </div>
            <div className="carrosel">
              <Swiper
                spaceBetween={30}
                className="mySwiper"
                breakpoints={
                  {
                    1300: {
                      slidesPerView: 3.5
                    },
                    768: {
                      slidesPerView: 2.5
                    },
                    320:{
                      slidesPerView: 1.5
                    }
                  }
                }
              >
                <SwiperSlide>
                  <div
                    className="element"
                    aria-hidden
                    onClick={() => router.push('/home')}
                  >
                    <img
                      src="/jinx.jpg"
                      className={!changeImage ? 'noActive' : 'active'}
                      id="image"
                      alt="img"
                    />
                    <img
                      src="/dory.webp"
                      className={changeImage ? 'noActive' : 'active'}
                      id="image"
                      alt="img"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className="element"
                    aria-hidden
                    onClick={() => router.push('/home')}
                  >
                    <img
                      src="/batman.jpg"
                      className={!changeImage ? 'noActive' : 'active'}
                      id="image"
                      alt="img"
                    />
                    <img
                      src="/olaf.webp"
                      className={changeImage ? 'noActive' : 'active'}
                      id="image"
                      alt="img"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className="element"
                    aria-hidden
                    onClick={() => router.push('/home')}
                  >
                    <img
                      src="/decku.jpg"
                      className={!changeImage ? 'noActive' : 'active'}
                      id="image"
                      alt="img"
                    />
                    <img
                      src="/rick.jpg"
                      className={changeImage ? 'noActive' : 'active'}
                      id="image"
                      alt="img"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="grid"  data-aos="fade-up"   data-aos-duration="1500">
              <div
                className="element"
                aria-hidden
                onClick={() => router.push('/home')}
              >
                <img src="/jinx.jpg" id="image" alt="img" />
              </div>
              <div
                className="element"
                aria-hidden
                onClick={() => router.push('/home')}
              >
                <img src="/dory.webp" id="image" alt="img" />
              </div>
              <div
                className="element"
                aria-hidden
                onClick={() => router.push('/home')}
              >
                <img src="/batman.jpg" id="image" alt="img" />
              </div>
              <div
                className="element"
                aria-hidden
                onClick={() => router.push('/home')}
              >
                <img src="/olaf.webp" id="image" alt="img" />
              </div>
              <div
                className="element"
                aria-hidden
                onClick={() => router.push('/home')}
              >
                <img src="/decku.jpg" id="image" alt="img" />
              </div>
              <div
                className="element"
                aria-hidden
                onClick={() => router.push('/home')}
              >
                <img src="/rick.jpg" id="image" alt="img" />
              </div>
            </div>
            <button type="button" onClick={() => router.push('/home')}>
              explorar mais
            </button>
          </div>
          <div className="containerFaqs">
            <div className="title">
              <h2>Perquntas Frequentes</h2>
            </div>
            <div className="allFaqs">
              {faqsArray.map((faq: any) => (
                <Faq
                  key={faq.id}
                  title={faq.question}
                  res={faq.res}
                  set={setOpenRow}
                  id={faq.id}
                  openId={openRow}
                />
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </ContainerIndex>
    </>
  );
};

export default Home;
