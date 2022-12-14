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

export const MoviePoster = ({ props, category, type }: any) => {
  const router = useRouter();
  const bg = apiConfig.w500Image(props.poster_path);
  return (
    <ContainerPoster
      arial-hidden
      onClick={() => {
        router.push({ pathname: `/${category}/${type}/${props.id}` });
      }}
    >
      <div className="posterMain">
        <div className="poster">
          <Image
            src={bg}
            alt="img"
            layout="fill"
            blurDataURL={bg}
            placeholder="blur"
            loading="lazy"
          />
          <div className="hover">
            <PlayIconCircle className="icon" />
          </div>
        </div>
      </div>
    </ContainerPoster>
  );
};

const MovieList = ({ category, type }: iPropsMovie) => {
  const [data, setData] = useState([]);
  const [screenSize, setScreenSize] = useState(1.5);
  const [onLoad, setOnload] = useState(false);

  SwiperCore.use([Autoplay]);

  useEffect(() => {
    const getMovieList = async () => {
      let response = null;
      const params = {};
      if (category === 'movie') {
        response = await requestsApi.getMoviesList(type, { params });
        setData(response.data.results.slice(2, 20));
        setOnload(true);
      } else {
        response = await requestsApi.getTvList(type, { params });
        setData(response.data.results.slice(2, 20));
        setOnload(true);
      }
    };
    getMovieList();
  }, []);

  useEffect(() => {
    const { width } = window.screen;
    if (width >= 760 && width < 1250) {
      setScreenSize(3.5);
    } else if (width >= 1250 && width < 1440) {
      setScreenSize(4.5);
    } else if (width >= 1440 && width < 1600) {
      setScreenSize(4.5);
    } else if (width >= 1600 && width < 1920) {
      setScreenSize(5.5);
    } else if (width >= 1920) {
      setScreenSize(6.5);
    } else {
      setScreenSize(1.5);
    }
  }, []);

  return (
    <>
      {!onLoad && (
        <div
          style={{
            width: '90vw',
            height: '100vh',
            background:
              'linear-gradient(305deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.92) 45%, rgba(0,0,0,1) 100%)',
          }}
        />
      )}
      {onLoad && (
        <Container>
          <Swiper
            modules={[Autoplay]}
            slidesPerView={screenSize}
            centeredSlides={false}
            grabCursor
            spaceBetween={8}
          >
            {data.map(
              (item: any) =>
                item.poster_path && (
                  <SwiperSlide key={item.id}>
                    <MoviePoster
                      viewButton={false}
                      props={item}
                      category={category}
                      type={type}
                    />
                  </SwiperSlide>
                ),
            )}
          </Swiper>
        </Container>
      )}
    </>
  );
};

export default MovieList;
