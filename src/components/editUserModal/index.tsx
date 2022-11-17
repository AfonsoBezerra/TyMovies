import { ArrowBackIcon } from '@stylesComponents/icons';
import { Modal } from '@stylesComponents/modal';
import { BigheadsArray } from 'mock/Bighead';

interface ModalProps {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  setNewImg: React.Dispatch<React.SetStateAction<any>>;
}

const NewModal = ({ setModal, setNewImg }: ModalProps) => {
  function newProps(propsArray: any) {
    setNewImg(propsArray);
    setModal(false);
  }
  return (
    <Modal>
      <div className="content">
        <div className="modalHeader">
          <button type="button" onClick={() => setModal(false)}>
            <ArrowBackIcon />
          </button>
          <div className="title">
            <h1>Escolha seu personagem</h1>
          </div>
        </div>
        <div className="modalBody">
          {BigheadsArray.map((svg: any) => {
            return (
              <div
                key={svg.id}
                className="svg"
                aria-hidden
                onClick={() => newProps(svg.props)}
              >
                {svg.bigs}
              </div>
            );
          })}
        </div>
      </div>
    </Modal>
  );
};

export default NewModal;
