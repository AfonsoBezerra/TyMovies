import apiConfig from '@services/api/apiConfig';
import { MovieList } from 'types';
import Image from 'next/image';
import Tags from '@components/Tags';
import { useEffect, useState } from 'react';
import requestsApi from '@services/api/requestsApi';
import { Swiper, SwiperSlide } from 'swiper/react';
import ButtonTrailer from '@components/buttons';
import { RecentActorsIcons, StarIcon } from '@stylesComponents/icons';
import { Pagination } from 'swiper';
import ModalComponent from '@components/modal';

import { Container } from './style';

interface iMovie {
  item: MovieList;
  type: string;
}

const Stars = ({ nota }: any) => {
  const fixedNota = parseFloat(nota).toFixed(1);
  return (
    <div className="starIcons">
      <StarIcon />
      <h3>
        {`${fixedNota} `}/<span>10</span>
      </h3>
    </div>
  );
};

const HeroDetail = ({ item, type }: iMovie) => {
  const [movieCredits, setMovieCredits] = useState<any>([]);
  const [screenSize, setScreenSize] = useState(2);
  const [openModal, setOpenModal] = useState(false);
  const [valueModal, setModal] = useState<any>([]);
  useEffect(() => {
    const getMoviesCredits = async () => {
      try {
        const response = await requestsApi.credits(type, item?.id);
        setMovieCredits(response.data.cast.slice(0, 20));
      } catch (error) {
        console.log(error);
      }
    };
    getMoviesCredits();
  }, []);
  const background = apiConfig.originalImage(
    item?.backdrop_path ? item?.backdrop_path : item?.poster_path,
  );

  useEffect(() => {
    const { width } = window.screen;
    if (width >= 760 && width < 1300) {
      setScreenSize(3.5);
    } else if (width >= 1300 && width < 1760) {
      setScreenSize(5.5);
    } else if (width >= 1760) {
      setScreenSize(6.5);
    } else {
      setScreenSize(2.5);
    }
  }, []);

  const setModalActive = async () => {
    const videos = await requestsApi.getVideos(type, item?.id);
    setModal(videos);
    setOpenModal(true);
  };

  return (
    <Container className="active">
      <div className="hero">
        <Image src={background} alt="hero_img" layout="fill" />
        <div className="hero-detail">
          <h1>{item.name || item.title}</h1>
          <div className="buttons">
            <ButtonTrailer iconPlay onClick={() => setModalActive()} />
            <Stars nota={item.vote_average} />
          </div>
        </div>
        <div className="transition" />
      </div>
      {openModal && (
        <ModalComponent
          setModalOpen={setOpenModal}
          openModal={openModal}
          values={valueModal}
        />
      )}
      <div className="informations">
        <div className="transitionInformations" />
        <div className="Texts">
          <span>{item.overview}</span>
          <Tags items={item.genres} />
        </div>
        <div className="Actors">
          <div className="title">
            <h2>Main Actors</h2>
            <RecentActorsIcons />
          </div>

          <Swiper
            grabCursor
            spaceBetween={20}
            slidesPerView={screenSize}
            effect="fade"
            modules={[Pagination]}
          >
            {movieCredits.map(
              (credits: any) =>
                credits.profile_path && (
                  <SwiperSlide key={credits.id}>
                    <div className="img">
                      <Image
                        src={apiConfig.w500Image(credits.profile_path)}
                        alt="profile"
                        layout="fill"
                        blurDataURL={apiConfig.w500Image(credits.profile_path)}
                        placeholder="blur"
                        loading="lazy"
                      />
                    </div>
                    <span className="namemovie">{credits.name}</span>
                  </SwiperSlide>
                ),
            )}
          </Swiper>
        </div>
        <div />
      </div>
    </Container>
  );
};

export default HeroDetail;
