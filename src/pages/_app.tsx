import type { AppProps } from 'next/app';
import Head from 'next/head';
import 'swiper/css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LayoutProvider } from '@contexts/Layout';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function useNormalScrollRoutes() {
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      document.documentElement.classList.add('normal-scroll');
    });
    router.events.on('routeChangeComplete', () => {
      document.documentElement.classList.remove('normal-scroll');
    });
  }, []);
}
const MyApp = ({ Component, pageProps }: AppProps) => {
  useNormalScrollRoutes();
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <title>TyMovie</title>
      </Head>
      <LayoutProvider>
        <Component {...pageProps} />
      </LayoutProvider>
    </>
  );
};

export default MyApp;
