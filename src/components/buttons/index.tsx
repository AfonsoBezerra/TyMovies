import { PlayIcon } from '@stylesComponents/icons';
import { ContainerButton, ContainerButtonTrailer } from './style';

interface iPropsTrailer {
  children: React.ReactNode;
  onClick: any;
  iconPlay: boolean;
}

interface iPropsButton {
  children: React.ReactNode;
  onClick: any;
  marginTop?: boolean;
}

export const Button = ({ children, onClick, marginTop }: iPropsButton) => {
  return (
    <ContainerButton
      type="button"
      style={marginTop && { marginTop: '1rem' }}
      onClick={onClick ? () => onClick() : null}
    >
      <h4>{children}</h4>
    </ContainerButton>
  );
};

const ButtonTrailer = ({ children, onClick, iconPlay }: iPropsTrailer) => {
  return (
    <ContainerButtonTrailer
      type="button"
      onClick={onClick ? () => onClick() : null}
    >
      <span>{iconPlay && <PlayIcon />}</span>
      <h4>{children}</h4>
    </ContainerButtonTrailer>
  );
};

export default ButtonTrailer;
