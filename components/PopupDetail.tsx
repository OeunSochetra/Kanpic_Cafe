import React from "react";
import Modal from "antd/es/modal/Modal";

interface ModalProps {
  modalOpen: boolean;
  handleOk: () => void;
  handleCancel: () => void;
}

const PopupDetail = ({ modalOpen, handleOk, handleCancel }: ModalProps) => {
  return (
    <>
      <Modal open={modalOpen} onOk={handleOk} onCancel={handleCancel}>
        Hello World
      </Modal>
    </>
  );
};

export default PopupDetail;
