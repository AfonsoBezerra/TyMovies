import { BigHead } from '@bigheads/core';
import { useAuthContext } from '@contexts/Auth/useAuthContext';
import { useRandomption } from 'hooks/use-random-option';
import { useEffect } from 'react';
import { ContainerBig } from './style';

interface ProfileImgProps {
  props: any;
  teste?: boolean;
}

const ProfileImg = ({ props, teste }: ProfileImgProps) => {
  const { setImgProp, imgProp } = useAuthContext();
  const {
    skinTone,
    eyes,
    eyebrows,
    mouth,
    hair,
    facialHair,
    clothing,
    accessory,
    graphic,
    hat,
    body,
    hairColor,
    clothingColor,
    circleColor,
    lipColor,
    hatColor,
    faceMaskColor,
    mask,
    faceMask,
    lashes,
  } = useRandomption();

  const img = {
    circleColor,
    hatColor,
    hairColor,
    body,
    faceMaskColor,
    hat,
    hair,
    facialHair,
    lipColor,
    skinTone,
    faceMask,
    eyebrows,
    eyes,
    mask,
    mouth,
    graphic,
    accessory,
    clothingColor,
    lashes,
    clothing,
  };

  useEffect(() => {
    if (!props && !teste) {
      setImgProp(img);
    }
  }, []);
  if (!props && !teste) {
    console.log(props, teste, 'to aqui');
    return <BigHead {...imgProp} />;
  }

  if (teste && !props) {
    return null;
  }
  if (teste && props) {
    console.log(props, teste, 'to aqui 2');
    return (
      <ContainerBig>
        <BigHead {...props} />
      </ContainerBig>
    );
  }
  return null;
};

export default ProfileImg;
