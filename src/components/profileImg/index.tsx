import { BigHead } from '@bigheads/core';
import { useAuthContext } from '@contexts/Auth/useAuthContext';
import { BigheadsArray } from 'mock/Bighead';

import { useEffect } from 'react';
import { ContainerBig } from './style';

interface ProfileImgProps {
  props: any;
  teste?: boolean;
}

const ProfileImg = ({ props }: ProfileImgProps) => {
  const { setImgProp, imgProp } = useAuthContext();
  const random = Math.floor(Math.random() * BigheadsArray.length);
  const propsRandom = BigheadsArray[random].props;
  useEffect(() => {
    if (!props) {
      setImgProp(propsRandom);
    }
  }, []);

  if (!props) {
    return <BigHead {...imgProp} />;
  }

  return (
    <ContainerBig>
      <BigHead {...props} />
    </ContainerBig>
  );
};

export default ProfileImg;
