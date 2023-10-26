import React from "react";
import { Button, DatePicker, Form, Input, Modal, Select, Space } from "antd";

import { dataEmployee } from "@/type";
import axios from "axios";
import {
  MdDateRange,
  MdEmail,
  MdOutlineDriveFileRenameOutline,
  MdOutlineMoneyOff,
} from "react-icons/md";
import { BiUserCircle } from "react-icons/bi";
import { FaAddressBook } from "react-icons/fa";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { PiFolderUserLight } from "react-icons/pi";
import { HiOfficeBuilding } from "react-icons/hi";
import { GrStatusGoodSmall } from "react-icons/gr";

interface ModalAddProp {
  isModalOpenAdd: boolean;
  setIsModalOpenAdd: (isModalOpenAdd: boolean) => void;

  fetchData: () => void;
}

const ModalAdd: React.FC<ModalAddProp> = ({
  isModalOpenAdd,
  setIsModalOpenAdd,
  fetchData,
}: ModalAddProp) => {
  const handleSavetodb = async (data: dataEmployee) => {
    try {
      await axios.post("http://localhost:3030/Employee", data);
      fetchData();
      setIsModalOpenAdd(false);
    } catch (error) {
      console.log("Save failed", error);
    }
  };

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const handleCancelAdd = () => {
    setIsModalOpenAdd(false);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Modal open={isModalOpenAdd} onCancel={handleCancelAdd} footer={null}>
      <div className="w-[100%] mt-10">
        <Form
          autoComplete="off"
          onFinish={handleSavetodb}
          onFinishFailed={onFinishFailed}
          initialValues={{ remember: true }}
        >
          <Space direction="vertical" style={{ width: "100%" }}>
            <Form.Item
              name="name"
              rules={[{ required: true, message: "Please enter name!" }]}
            >
              <Input
                placeholder="Enter name"
                suffix={<MdOutlineDriveFileRenameOutline />}
              />
            </Form.Item>
            <Form.Item
              name="dateOfbirth"
              rules={[
                { required: true, message: "Please enter date of birth!" },
              ]}
            >
              <DatePicker
                placeholder="Enter date of birth"
                suffixIcon={<MdDateRange />}
              />
            </Form.Item>
            <Form.Item
              name="profileImage"
              rules={[{ required: true, message: "Please enter profile URL!" }]}
            >
              <Input
                placeholder="Enter profile URL"
                suffix={<BiUserCircle />}
              />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[{ required: true, message: "Please enter email!" }]}
            >
              <Input placeholder="Enter email" suffix={<MdEmail />} />
            </Form.Item>
            <Form.Item
              name="address"
              rules={[{ required: true, message: "Please enter address!" }]}
            >
              <Input placeholder="Enter address" suffix={<FaAddressBook />} />
            </Form.Item>
            <Form.Item
              name="phoneNumber"
              rules={[
                { required: true, message: "Please enter phone number!" },
              ]}
            >
              <Input
                placeholder="Enter phone number"
                suffix={<BsFillTelephoneOutboundFill />}
              />
            </Form.Item>
            <Form.Item
              name="role"
              rules={[{ required: true, message: "Please enter role!" }]}
            >
              <Select
                placeholder="Select role"
                onChange={handleChange}
                suffixIcon={<PiFolderUserLight />}
                options={[
                  { value: "Manager", label: "Manager" },
                  { value: "CEO", label: "CEO" },
                  { value: "Sale", label: "Sale" },
                  { value: "Cleaner", label: "Cleaner" },
                ]}
              />
            </Form.Item>
            <Form.Item
              name="salary"
              rules={[{ required: true, message: "Please enter salary!" }]}
            >
              <Input
                placeholder="Enter salary"
                suffix={<MdOutlineMoneyOff />}
              />
            </Form.Item>
            <Form.Item
              name="department"
              rules={[{ required: true, message: "Please enter department!" }]}
            >
              <Select
                placeholder="Select department"
                onChange={handleChange}
                suffixIcon={<HiOfficeBuilding />}
                options={[
                  { value: "Delivery", label: "Delivery" },
                  { value: "Sale", label: "Sale" },
                ]}
              />
            </Form.Item>
            <Form.Item
              name="status"
              rules={[{ required: true, message: "Please enter status!" }]}
            >
              <Input
                placeholder="Enter status"
                suffix={<GrStatusGoodSmall />}
              />
            </Form.Item>
            <Form.Item>
              <Space>
                <Button danger onClick={handleCancelAdd}>
                  Cancel
                </Button>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Space>
            </Form.Item>
          </Space>
        </Form>
      </div>
    </Modal>
  );
};

export default ModalAdd;
