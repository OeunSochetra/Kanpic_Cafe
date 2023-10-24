import React from "react";
import { Modal } from "antd";

interface ModalUpdateProp {
  isModalOpenUpdate: boolean;
  setIsModalOpenUpdate: (value: any) => void;
  showModalUpdate: () => void;
  handleCancelUpdate: () => void;
}

const ModalUpdate = ({
  isModalOpenUpdate,
  setIsModalOpenUpdate,
  showModalUpdate,
  handleCancelUpdate,
}: ModalUpdateProp) => {
  return (
    <Modal onCancel={handleCancelUpdate} open={isModalOpenUpdate}>
      <h1>This is a modal</h1>
    </Modal>
  );
};

export default ModalUpdate;
