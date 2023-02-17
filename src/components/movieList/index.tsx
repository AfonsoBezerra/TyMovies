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
            centeredSlides={false}
            grabCursor
            spaceBetween={8}
            breakpoints={
              {
                2000: {
                  slidesPerView: 7.5
                },
                1800: {
                  slidesPerView: 5.5
                },
                1358: {
                  slidesPerView: 4.5
                },
                1300: {
                  slidesPerView: 5.5
                },
                1024: {
                  slidesPerView: 4.5
                },
                768: {
                  slidesPerView: 3.5
                },
                320:{
                  slidesPerView: 1.5
                }
              }
            }
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
