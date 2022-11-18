import { ContainerFaqStyle } from './style';

interface FaqProps {
  id: number;
  title: string;
  res: string;
  set: (value: number) => void;
  openId: number;
}

const Faq = ({ res, title, set, id, openId }: FaqProps) => {
  return (
    <ContainerFaqStyle
      className={openId === id ? 'res active' : 'res'}
      onClick={() => (openId === id ? set(0) : set(id))}
    >
      <div className="LineTitle">
        {title}
        <span className={openId === id ? 'active' : ''} />
      </div>
      <span className="res">{res}</span>
    </ContainerFaqStyle>
  );
};

export default Faq;
