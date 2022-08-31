import { useEffect, useState } from 'react';
import SwiperCore, { Autoplay } from 'swiper';
import requestsApi, { category, movieType } from '@services/api/requestsApi';
import { Swiper, SwiperSlide } from 'swiper/react';
import apiConfig from '@services/api/apiConfig';
import { MovieList } from 'types';
import Image from 'next/image';
import ButtonTrailer, { Button } from '@components/buttons';
import ModalComponent from '@components/modal';
import { Container, Hero } from './style';

interface PropsHero {
  item: MovieList;
  className?: string;
}

const HeroSlideItem = (props: PropsHero) => {
  const [valueModal, setModal] = useState<any>([]);
  const [openModal, setOpenModal] = useState(false);
  const { item, className } = props;
  const background = apiConfig.originalImage(
    item.backdrop_path ? item.backdrop_path : item.poster_path,
  );

  const setModalActive = async () => {
    const videos = await requestsApi.getVideos(category.movie, item.id);
    setModal(videos);
    setOpenModal(true);
  };

  return (
    <Container className={className}>
      <Image src={background} alt="hero_img" layout="fill" />
      <div className="hero_slide_item_content">
        <div className="hero_slide_item_info">
          <h1 className="title">{item.title}</h1>
          <div className="overview">{item.overview}</div>
          <div className="btns">
            <div className="BtnMore">
              <Button marginTop onClick={setModalActive}>
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

const HeroSlide = () => {
  SwiperCore.use([Autoplay]);
  const [movieItems, setMovieItems] = useState([]);

  useEffect(() => {
    const getMoviesBanners = async () => {
      const params = { page: 1 };
      try {
        const response = await requestsApi.getMoviesList(movieType.popular, {
          params,
        });
        setMovieItems(response.data.results.slice(1, 5));
      } catch (error) {
        console.log(error);
      }
    };
    getMoviesBanners();
  }, []);

  return (
    <Hero>
      <Swiper
        modules={[Autoplay]}
        grabCursor
        spaceBetween={0}
        slidesPerView={1}
        loop
      >
        {movieItems.map((item: any) => (
          <SwiperSlide key={item.id}>
            <HeroSlideItem
              item={item}
              className={`${item.id ? 'active' : ''}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Hero>
  );
};

export default HeroSlide;
