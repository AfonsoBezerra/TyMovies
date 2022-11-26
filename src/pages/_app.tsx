import type { AppProps } from 'next/app';
import Head from 'next/head';
import 'swiper/css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LayoutProvider } from '@contexts/Layout';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { AuthProvider } from '@contexts/Auth';

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
        <link rel="icon" type="image/x-icon" href="/icon.png" />
        <title>TyMovie</title>
      </Head>
      <AuthProvider>
        <LayoutProvider>
          <Component {...pageProps} />
        </LayoutProvider>
      </AuthProvider>
    </>
  );
};

export default MyApp;
