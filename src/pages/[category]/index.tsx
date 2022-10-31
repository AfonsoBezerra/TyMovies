import { GetServerSideProps } from 'next';

const Middleware = () => {
  return null;
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/',
      permanent: false,
    },
  };
};

export default Middleware;
