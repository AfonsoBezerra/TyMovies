import { iGenres } from 'types/iGenres';
import { Container } from './style';

interface iProps {
  items: iGenres[];
}

const Tags = ({ items }: iProps) => {
  return (
    <Container>
      {items?.map((item: any) => (
        <span key={item.id}>{item.name}</span>
      ))}
    </Container>
  );
};

export default Tags;
