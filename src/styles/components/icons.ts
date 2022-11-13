import styled from 'styled-components';
import { Whatsapp } from '@styled-icons/bootstrap/Whatsapp';
import { Facebook } from '@styled-icons/bootstrap/Facebook';
import { Instagram } from '@styled-icons/bootstrap/Instagram';
import { PlusMedical } from '@styled-icons/boxicons-regular/PlusMedical';
import { Mention } from '@styled-icons/fluentui-system-filled/Mention';
import { PlayCircle } from '@styled-icons/fluentui-system-filled/PlayCircle';
import { Business } from '@styled-icons/ionicons-solid/Business';
import { HomeRepairService } from '@styled-icons/material/HomeRepairService';
import { Bricks } from '@styled-icons/bootstrap/Bricks';
import { ContactSupport } from '@styled-icons/material-outlined/ContactSupport';
import { PlayFill } from '@styled-icons/bootstrap/PlayFill';
import { Search } from '@styled-icons/bootstrap/Search';
import { Close } from '@styled-icons/ionicons-solid/Close';
import { StarFill } from '@styled-icons/bootstrap/StarFill';
import { Star } from '@styled-icons/bootstrap/Star';
import { RecentActors } from '@styled-icons/material/RecentActors';

export const Facebookicon = styled(Facebook)`
  width: 22px;
  color: #fff;
  margin: 0 0.5rem;
`;

export const Instagramicon = styled(Instagram)`
  width: 22px;
  color: #ffff;
  margin: 0 0.5rem;
`;

export const Plusicon = styled(PlusMedical)`
  width: 13px;
  color: #fff;
  position: absolute;
  right: 8px;
  z-index: 0;
`;

export const MentionIcon = styled(Mention)`
  width: 25px;
  color: #ad2bfdd9;
`;

export const WhatsappiconContact = styled(Whatsapp)`
  width: 25px;
  color: #ad2bfdd9;
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

export const StarFillIcon = styled(StarFill)`
  width: 15px;
  height: 15px;
  color: yellow;
`;

export const StarIcon = styled(Star)`
  width: 15px;
  height: 15px;
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
