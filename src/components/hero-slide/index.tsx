import { useEffect, useState } from 'react';
import requestsApi, { category } from '@services/api/requestsApi';
import { Swiper, SwiperSlide } from 'swiper/react';
import apiConfig from '@services/api/apiConfig';
import { MovieList } from 'types';
import Image from 'next/image';
import ButtonTrailer, { Button } from '@components/buttons';
import ModalComponent from '@components/modal';
import { useRouter } from 'next/router';
import { ArrowBackIcon } from '@stylesComponents/icons';
import { Container, Hero } from './style';

interface PropsHero {
  item: MovieList;
  className?: string;
  typeHero: string;
  rating: string;
}

interface iHero {
  rating: string;
  typeHero: string;
}

const HeroSlideItem = (props: PropsHero) => {
  const [valueModal, setModal] = useState<any>([]);
  const [openModal, setOpenModal] = useState(false);
  const router = useRouter();
  const { asPath } = useRouter();
  const { item, className, typeHero, rating } = props;
  const background = apiConfig.originalImage(
    item.backdrop_path ? item.backdrop_path : item.poster_path,
  );
  const setModalActive = async () => {
    const categoryPath = router.asPath.split('/')[1]
    const videos = await requestsApi.getVideos(categoryPath !== 'home' ? categoryPath : category.movie, item.id);
    setModal(videos);
    setOpenModal(true);
  };

  const sendMovie = () => {
    router.push(`/${typeHero}/${rating}/${item.id}`);
  };

  return (
    <Container className={className}>
      {asPath !== '/home' && (
        <div className="voltar">
          <ArrowBackIcon onClick={() => router.push('/home')} />
        </div>
      )}
      <Image
        src={background}
        alt="hero_img"
        layout="fill"
        blurDataURL={background}
        placeholder="blur"
      />
      <div className="hero-detail">
        <h1>{item.name || item.title}</h1>
        <span>{item.overview}</span>
        <div className="buttons">
          <ButtonTrailer iconPlay onClick={() => setModalActive()} />
          <Button onClick={() => sendMovie()}>View More</Button>
        </div>
      </div>

      {openModal && (
        <ModalComponent
          setModalOpen={setOpenModal}
          openModal={openModal}
          values={valueModal}
        />
      )}
    </Container>
  );
};

const HeroSlide = ({ rating, typeHero }: iHero) => {
  const [movieTvItems, setMovieTvItems] = useState([]);
  const [onLoad, setOnload] = useState(false);
  useEffect(() => {
    const getMoviesBanners = async () => {
      const params = { page: 1 };
      try {
        const response = await requestsApi.getMoviesList(rating, {
          params,
        });
        setMovieTvItems(response.data.results.slice(1, 6));
        setOnload(true);
      } catch (error) {
        console.log(error);
      }
    };
    const getTvBanners = async () => {
      const params = { page: 1 };
      try {
        const response = await requestsApi.getTvList(rating, {
          params,
        });
        setMovieTvItems(response.data.results.slice(1, 6));
        setOnload(true);
      } catch (error) {
        console.log(error);
      }
    };
    if (typeHero === 'movie') {
      getMoviesBanners();
    } else {
      getTvBanners();
    }
  }, []);

  return (
    <>
      {!onLoad && (
        <div
          style={{
            width: '100vw',
            height: '400vh',
            background:
              'linear-gradient(305deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.92) 45%, rgba(0,0,0,1) 100%)',
          }}
        />
      )}
      {onLoad && (
        <Hero>
          <Swiper
            grabCursor
            spaceBetween={0}
            slidesPerView={1}
            loop
            effect="fade"
            autoplay={{
              delay: 7000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
          >
            {movieTvItems.map((item: any) => (
              <SwiperSlide key={item.id}>
                {({ isActive }) => (
                  <>
                    <HeroSlideItem
                      item={item}
                      typeHero={typeHero}
                      rating={rating}
                      className={`${isActive ? 'active' : ''}`}
                    />
                    <div className="transition" />
                  </>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </Hero>
      )}
    </>
  );
};

export default HeroSlide;
