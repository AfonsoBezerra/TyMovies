import { BigHead } from '@bigheads/core';
import { useRandomption } from 'hooks/use-random-option';

interface ProfileImgProps {
  props: any;
}

const ProfileImg = ({ props }: ProfileImgProps) => {
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
  if (!props) {
    return <BigHead {...img} />;
  }
  return <BigHead {...props} />;
};

export default ProfileImg;
