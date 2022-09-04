import apiConfig from '@services/api/apiConfig';
import requestsApi from '@services/api/requestsApi';
import { PlayIconCircle } from '@stylesComponents/icons';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Container, ContainerPoster } from './style';

interface iPropsMovie {
  type: string;
  category: string;
}

const MoviePoster = ({ props, category }: any) => {
  const router = useRouter();
  const bg = apiConfig.w500Image(props.poster_path);
  const sendMovie = () => {
    router.push(`/${category}/${props.id}`);
  };
  return (
    <ContainerPoster arial-hidden onClick={sendMovie}>
      <div className="posterMain">
        <div className="poster">
          <Image src={bg} alt="img" layout="fill" />
          <div className="hover">
            <PlayIconCircle className="icon" />
          </div>
        </div>
      </div>
      <div className="title">{props.title || props.name}</div>
    </ContainerPoster>
  );
};

const MovieList = ({ category, type }: iPropsMovie) => {
  const [data, setData] = useState([]);
  const [screenSize, setScreenSize] = useState(1.5);
  SwiperCore.use([Autoplay]);

  useEffect(() => {
    const getMovieList = async () => {
      let response = null;
      const params = {};
      if (category === 'movie') {
        response = await requestsApi.getMoviesList(type, { params });
        setData(response.data.results.slice(2, 10));
      } else {
        response = await requestsApi.getTvList(type, { params });
        setData(response.data.results.slice(2, 10));
      }
    };
    getMovieList();
  }, []);

  useEffect(() => {
    const { width } = window.screen;
    if (width >= 760 && width < 1440) {
      setScreenSize(3.5);
    } else if (width >= 1440 && width < 1920) {
      setScreenSize(4.5);
    } else if (width >= 1920) {
      setScreenSize(6.5);
    } else {
      setScreenSize(1.5);
    }
  }, []);

  return (
    <Container>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={screenSize}
        loop
        centeredSlides={false}
        grabCursor
        spaceBetween={8}
      >
        {data.map((item: any) => (
          <SwiperSlide key={item.id}>
            <MoviePoster props={item} category={category} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default MovieList;
