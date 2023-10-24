import React, { useState } from "react";
import { Button, Modal, Space } from "antd";
import axios from "axios";

interface ModalDeleteProp {
  isModalOpenDelete: boolean;
  setIsModalOpenDelete: (value: any) => void;
  showModalDelete: (value: any) => void;
  handleCancelDelete: () => void;
}

interface dataEmployee {
  id: string;
  profileImage: string;
  name: string;
  email: string;
  phoneNumber: string;
  role: string;
  salary: string;
  department: string;
  status: string;
}

const ModalDelete = ({
  isModalOpenDelete,
  setIsModalOpenDelete,
  showModalDelete,
  handleCancelDelete,
}: ModalDeleteProp) => {
  return (
    <Modal
      onCancel={handleCancelDelete}
      open={isModalOpenDelete}
      footer={null}
      closeIcon={false}
    >
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-red-400 text-xl font-[600]">
          Are you sure you want to delete this employee
        </h1>
        <Space style={{ marginTop: 40 }}>
          <Button
            onClick={handleCancelDelete}
            type="text"
            style={{ color: "#3b81f6" }}
          >
            Cancel
          </Button>
          <Button style={{ background: "red", color: "#ffff" }}>Delete</Button>
        </Space>
      </div>
    </Modal>
  );
};

export default ModalDelete;
