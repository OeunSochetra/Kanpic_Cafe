import React, { useState } from "react";
import { Button, Modal, Space, Input } from "antd";
import axios from "axios";
import { dataEmployee } from "@/type";

interface ModalDeleteProp {
  isModalOpenDelete: boolean;
  setIsModalOpenDelete: (isModalOpenDelete: boolean) => void;
  showModalDelete: (value: any) => void;
  handleCancelDelete: () => void;
  fetchData: () => void;
  employeeToDelete: dataEmployee;
}

const ModalDelete = ({
  isModalOpenDelete,
  setIsModalOpenDelete,
  showModalDelete,
  handleCancelDelete,
  fetchData,
  employeeToDelete,
}: ModalDeleteProp) => {
  const [password, setPassword] = useState("");
  const [passwordCorrect, setPasswordCorrect] = useState(false);

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleDelete = async () => {
    if (password === "123") {
      try {
        await axios.delete(
          `http://localhost:3030/employee/${employeeToDelete.id}`
        );
        fetchData();
        setIsModalOpenDelete(false);
      } catch (error) {
        console.log("Delete error:", error);
      }
    } else {
      // Incorrect password
      setPasswordCorrect(false);
    }
  };

  return (
    <Modal
      visible={isModalOpenDelete}
      onCancel={handleCancelDelete}
      footer={null}
      closeIcon={false}
    >
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-red-400 text-xl font-[600]">
          Are you sure you want to delete this employee?
        </h1>
        <Input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={handlePasswordChange}
        />
        {passwordCorrect === false && (
          <div style={{ color: "red" }}>
            Incorrect password. Please try again.
          </div>
        )}
        <Space style={{ marginTop: 40 }}>
          <Button
            onClick={handleCancelDelete}
            type="text"
            style={{ color: "#3b81f6" }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleDelete}
            style={{ background: "red", color: "#ffff" }}
          >
            Delete
          </Button>
        </Space>
      </div>
    </Modal>
  );
};

export default ModalDelete;
