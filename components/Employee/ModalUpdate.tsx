import React from "react";
import { useEffect } from "react";
import { Form, Input, Modal } from "antd";
import { dataEmployee } from "@/type";
import { BiUserCircle } from "react-icons/bi";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { PiFolderUserLight } from "react-icons/pi";
import { HiOfficeBuilding } from "react-icons/hi";

interface ModalUpdateProp {
  isModalOpenUpdate: boolean;
  setIsModalOpenUpdate: (value: any) => void;
  showModalUpdate: (value: any) => void;
  handleCancelUpdate: () => void;
}

const ModalUpdate = ({
  isModalOpenUpdate,
  setIsModalOpenUpdate,
  showModalUpdate,
  handleCancelUpdate,
}: ModalUpdateProp) => {
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const handleUpdate = () => {};
  return (
    <Modal onCancel={handleCancelUpdate} open={isModalOpenUpdate}>
      <div>
        <p className="text-xl font-[500]">UPDATE EMPLOYEE</p>
      </div>
      <div className="w-[100%] mt-10">
        <Form
          onFinish={handleUpdate}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item>
            <Input
              style={{ width: "50%" }}
              placeholder="Enter name"
              suffix={<MdOutlineDriveFileRenameOutline />}
            />
          </Form.Item>
          <Form.Item>
            <Input
              style={{ width: "50%" }}
              placeholder="Enter profile URL"
              suffix={<BiUserCircle />}
            />
          </Form.Item>
          <Form.Item>
            <Input
              style={{ width: "50%" }}
              placeholder="Enter mail"
              suffix={<MdEmail />}
            />
          </Form.Item>
          <Form.Item>
            <Input
              style={{ width: "50%" }}
              placeholder="Enter phone number"
              suffix={<BsFillTelephoneOutboundFill />}
            />
          </Form.Item>
          <Form.Item>
            <Input
              style={{ width: "50%" }}
              placeholder="Enter role"
              suffix={<PiFolderUserLight />}
            />
          </Form.Item>
          <Form.Item>
            <Input
              style={{ width: "50%" }}
              placeholder="Enter role"
              suffix={<HiOfficeBuilding />}
            />
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
};

export default ModalUpdate;
