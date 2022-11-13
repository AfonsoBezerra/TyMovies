import { PlayIcon } from '@stylesComponents/icons';
import { ContainerButton, ContainerButtonTrailer } from './style';

interface iPropsTrailer {
  onClick?: any;
  iconPlay: boolean;
}

interface iPropsButton {
  children: React.ReactNode;
  onClick: any;
  marginTop?: boolean;
}

export const Button = ({ children, onClick, marginTop }: iPropsButton) => {
  if (marginTop) {
    return (
      <ContainerButton
        type="button"
        style={{ marginTop: '1rem' }}
        onClick={() => onClick()}
      >
        <h4>{children}</h4>
      </ContainerButton>
    );
  }
  return (
    <ContainerButton type="button" onClick={() => onClick()}>
      <h4>{children}</h4>
    </ContainerButton>
  );
};

const ButtonTrailer = ({ onClick, iconPlay }: iPropsTrailer) => {
  return (
    <ContainerButtonTrailer type="button" onClick={() => onClick()}>
      <span>{iconPlay && <PlayIcon />}</span>
    </ContainerButtonTrailer>
  );
};

export default ButtonTrailer;
