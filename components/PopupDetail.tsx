import React from "react";
import { Button, Modal } from "antd";

interface ModalProps {
  modalOpen: boolean;
  handleOk: () => void;
  handleCancel: () => void;
}

const PopupDetail = ({ modalOpen, handleOk, handleCancel }: ModalProps) => {
  const buttonStyle = {
    backgroundColor: "#f8eac7",
    color: "#7a717d",
  };

  return (
    <>
      <Modal
        open={modalOpen}
        onCancel={handleCancel}
        footer={[
          <Button key="cancel" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button
            style={buttonStyle}
            key="ok"
            type="primary"
            onClick={handleOk}
          >
            OK
          </Button>,
        ]}
      ></Modal>
    </>
  );
};

export default PopupDetail;
