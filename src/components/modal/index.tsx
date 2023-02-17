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
          src={`https://www.youtube.com/embed/${values?.data?.results[0]?.key}`}
          title="trailer"
          width="100%"
          height="100%"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </ModalBody>
    </Modal>
  );
};

export default ModalComponent;
