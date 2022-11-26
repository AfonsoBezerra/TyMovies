import styled from 'styled-components';
import { Whatsapp } from '@styled-icons/bootstrap/Whatsapp';
import { Instagram } from '@styled-icons/bootstrap/Instagram';
import { Plus } from '@styled-icons/bootstrap/Plus';
import { Mention } from '@styled-icons/fluentui-system-filled/Mention';
import { PlayCircle } from '@styled-icons/fluentui-system-filled/PlayCircle';
import { Business } from '@styled-icons/ionicons-solid/Business';
import { HomeRepairService } from '@styled-icons/material/HomeRepairService';
import { Bricks } from '@styled-icons/bootstrap/Bricks';
import { ContactSupport } from '@styled-icons/material-outlined/ContactSupport';
import { PlayFill } from '@styled-icons/bootstrap/PlayFill';
import { Search } from '@styled-icons/bootstrap/Search';
import { Close } from '@styled-icons/ionicons-solid/Close';
import { Star } from '@styled-icons/bootstrap/Star';
import { RecentActors } from '@styled-icons/material/RecentActors';
import { ImageEdit } from '@styled-icons/fluentui-system-filled/ImageEdit';
import { ArrowBack } from '@styled-icons/boxicons-regular/ArrowBack';
import { Eye } from '@styled-icons/ionicons-outline/Eye';
import { EyeOff } from '@styled-icons/ionicons-outline/EyeOff';
import { Cookies } from '@styled-icons/fluentui-system-filled/Cookies';
import { Github } from '@styled-icons/bootstrap/Github';

export const Instagramicon = styled(Instagram)`
  width: 18px;
  height: 18px;
  color: rgba(255, 255, 255, 0.7);
  transition: all 0.5s;
  :hover {
    transform: scale(1.1);
  }
`;

export const Plusicon = styled(Plus)`
  width: 20px;
  color: #fff;
  margin-right: 5px;
  z-index: 0;
`;

export const MentionIcon = styled(Mention)`
  width: 25px;
  color: #ad2bfdd9;
`;

export const WhatsappiconContact = styled(Whatsapp)`
  width: 18px;
  height: 18px;
  color: rgba(255, 255, 255, 0.7);
  transition: all 0.5s;
  :hover {
    transform: scale(1.1);
  }
`;

export const BusinessIcon = styled(Business)`
  width: 20px;
  color: #ad2bfdd9;
  margin-bottom: 0.5rem;
  margin-right: 0.5rem;
`;

export const ServicesIcon = styled(HomeRepairService)`
  width: 20px;
  color: #ad2bfdd9;
  margin-bottom: 0.2rem;
  margin-right: 0.5rem;
`;

export const BricksIcon = styled(Bricks)`
  width: 20px;
  color: #ad2bfdd9;
  margin-bottom: 0.2rem;
  margin-right: 0.5rem;
`;

export const ContactSupportIcon = styled(ContactSupport)`
  width: 20px;
  color: #ad2bfdd9;
  margin-bottom: 0.2rem;
  margin-right: 0.5rem;
`;

export const PlayIcon = styled(PlayFill)`
  width: 15px;
  height: 15px;
  color: #fff;
  @media (min-width: 1024px) {
    width: 20px;
    height: 20px;
  }
  @media (min-width: 1444px) {
    width: 25px;
    height: 25px;
  }
`;

export const PlayIconCircle = styled(PlayCircle)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export const SearchIcon = styled(Search)`
  width: 20px;
  height: 20px;
  color: white;
`;

export const CloseIcon = styled(Close)`
  width: 20px;
  height: 20px;
  color: black;
`;

export const CookiesIcon = styled(Cookies)`
  width: 24px;
  height: 24px;
  color: black;
`;

export const StarIcon = styled(Star)`
  width: 25px;
  height: 25px;
  color: yellow;
`;

export const RecentActorsIcons = styled(RecentActors)`
  width: 40px;
  height: 40px;
  color: rgba(255, 255, 255, 0.7);
  margin-left: 1rem;
  @media (max-width: 767px) {
    width: 30px;
    height: 30px;
  }
`;

export const ImageEditIcon = styled(ImageEdit)`
  width: 25px !important;
  height: 25px !important;
  color: rgba(255, 255, 255, 1);
`;

export const ArrowBackIcon = styled(ArrowBack)`
  width: 30px;
  height: 30px;

  color: rgba(255, 255, 255, 1);

  @media (max-width: 767px) {
    width: 25px;
    height: 25px;
  }
  @keyframes go-back {
    0% {
      transform: translateX(0px);
    }
    100% {
      transform: translateX(-10px);
    }
  }
`;

export const EyeOffIcon = styled(EyeOff)`
  width: 18px !important;
  height: 18px !important;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 0.5rem;
`;

export const EyeIcon = styled(Eye)`
  width: 18px !important;
  height: 18px !important;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 0.5rem;
`;

export const GithubIcon = styled(Github)`
  width: 18px;
  height: 18px;
  color: rgba(255, 255, 255, 0.7);
  transition: all 0.5s;
  :hover {
    transform: scale(1.1);
  }
`;
