import apiConfig from '@services/api/apiConfig';
import { MovieList } from 'types';
import Image from 'next/image';
import Tags from '@components/Tags';
import { useEffect, useState } from 'react';
import requestsApi from '@services/api/requestsApi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Container } from './style';

interface iMovie {
  item: MovieList;
  type: string;
}

const ActorsCredits = ({ nameActor, profileImg }: any) => {
  return (
    <div className="img">
      <img src={apiConfig.w500Image(profileImg)} alt="profile" />
      <span>{nameActor}</span>
    </div>
  );
};

const HeroDetail = ({ item, type }: iMovie) => {
  const [movieCredits, setMovieCredits] = useState<any>([]);
  const [screenSize, setScreenSize] = useState(2);
  useEffect(() => {
    const getMoviesCredits = async () => {
      try {
        const response = await requestsApi.credits(type, item.id);
        setMovieCredits(response.data.cast.slice(0, 10));
      } catch (error) {
        console.log(error);
      }
    };
    getMoviesCredits();
  }, []);
  const background = apiConfig.originalImage(
    item.backdrop_path ? item.backdrop_path : item.poster_path,
  );

  useEffect(() => {
    const { width } = window.screen;
    if (width >= 760 && width < 1440) {
      setScreenSize(3.5);
    } else if (width >= 1440 && width < 1920) {
      setScreenSize(4.5);
    } else if (width >= 1920) {
      setScreenSize(4.5);
    } else {
      setScreenSize(1.5);
    }
  }, []);

  return (
    <Container className="active">
      <Image src={background} alt="hero_img" layout="fill" />
      <div className="hero_slide_item_content">
        <div className="hero_slide_poster">
          <Image
            src={apiConfig.w500Image(item.poster_path)}
            alt="hero_img"
            layout="fill"
          />
        </div>
        <div className="hero_slide_item_info">
          <h1 className="title">{item.title || item.name}</h1>
          <div className="overview">{item.overview}</div>
          <Tags items={item.genres} />
          <div className="credits">
            <Swiper slidesPerView={screenSize} spaceBetween={20}>
              {movieCredits.map((credits: any) => (
                <SwiperSlide key={item.id}>
                  <ActorsCredits
                    nameActor={credits.name}
                    profileImg={credits.profile_path}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HeroDetail;
