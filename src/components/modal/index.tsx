// reactstrap components
import { Modal, ModalBody } from 'reactstrap';

interface iPropsModal {
  setModalOpen: any;
  openModal: boolean;
  values: any;
}

const ModalComponent = ({ setModalOpen, values, openModal }: iPropsModal) => {
  return (
    <Modal toggle={() => setModalOpen(!openModal)} isOpen={openModal}>
      <ModalBody>
        <iframe
          src={`https://www.youtube.com/embed/${values.data.results[0].key}`}
          title="trailer"
          width="100%"
          height="300px"
        />
      </ModalBody>
    </Modal>
  );
};

export default ModalComponent;
