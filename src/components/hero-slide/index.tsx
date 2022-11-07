import { useEffect, useState } from 'react';
import requestsApi, { category } from '@services/api/requestsApi';
import { Swiper, SwiperSlide } from 'swiper/react';
import apiConfig from '@services/api/apiConfig';
import { MovieList } from 'types';
import Image from 'next/image';
import ButtonTrailer, { Button } from '@components/buttons';
import ModalComponent from '@components/modal';
import { useRouter } from 'next/router';
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
  const { item, className, typeHero, rating } = props;
  const background = apiConfig.originalImage(
    item.backdrop_path ? item.backdrop_path : item.poster_path,
  );

  const setModalActive = async () => {
    const videos = await requestsApi.getVideos(category.movie, item.id);
    setModal(videos);
    setOpenModal(true);
  };

  const sendMovie = () => {
    router.push(`/${typeHero}/${rating}/${item.id}`);
  };

  return (
    <Container className={className}>
      <Image
        src={background}
        alt="hero_img"
        layout="fill"
        blurDataURL={background}
        placeholder="blur"
      />
      <div className="hero_slide_item_content">
        <div className="hero_slide_item_info">
          <h1 className="title">{item.title || item.name}</h1>
          <div className="overview">{item.overview}</div>
          <div className="btns">
            <div className="BtnMore">
              <Button marginTop onClick={sendMovie}>
                See more
              </Button>
            </div>
            <div className="BtnTrailer">
              <ButtonTrailer onClick={setModalActive} iconPlay>
                Watch trailer
              </ButtonTrailer>
            </div>
          </div>
        </div>
        <div className="hero_slide_poster">
          <Image
            src={apiConfig.w500Image(item.poster_path)}
            alt="hero_img"
            layout="fill"
          />
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
                  <HeroSlideItem
                    item={item}
                    typeHero={typeHero}
                    rating={rating}
                    className={`${isActive ? 'active' : ''}`}
                  />
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
