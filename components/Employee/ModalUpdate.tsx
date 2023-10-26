import React from "react";
import { useEffect } from "react";
import { Button, Form, Input, Modal, DatePicker, Flex, Select } from "antd";
import { dataEmployee } from "@/type";
import { BiUserCircle } from "react-icons/bi";
import { MdOutlineDriveFileRenameOutline } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { PiFolderUserLight } from "react-icons/pi";
import { HiOfficeBuilding } from "react-icons/hi";
import { MdOutlineMoneyOff } from "react-icons/md";
import { GrStatusGoodSmall } from "react-icons/gr";
import { MdDateRange } from "react-icons/md";
import { FaAddressBook } from "react-icons/fa";
import axios from "axios";

interface ModalUpdateProp {
  isModalOpenUpdate: boolean;
  setIsModalOpenUpdate: (value: any) => void;
  showModalUpdate: (value: any) => void;
  handleCancelUpdate: () => void;
  employee: dataEmployee;
  fetchData: () => void;
}

const ModalUpdate = ({
  isModalOpenUpdate,
  setIsModalOpenUpdate,
  showModalUpdate,
  handleCancelUpdate,
  employee,
  fetchData,
}: ModalUpdateProp) => {
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const [form] = Form.useForm();

  useEffect(() => {
    if (employee) {
      form.setFieldsValue({
        profileImage: employee.profileImage,
        name: employee.name,
        dateOfbirth: employee.dateOfbirth,
        email: employee.email,
        address: employee.address,
        phoneNumber: employee.phoneNumber,
        role: employee.role,
        salary: employee.salary,
        department: employee.department,
        status: employee.status,
      });
    }
  }, [employee]);

  const handleUpdate = async (data: dataEmployee) => {
    try {
      await axios.put(`http://localhost:3030/employee/${employee.id}`, data);
      fetchData();
      setIsModalOpenUpdate(false);
    } catch (error) {
      console.log("Save data fail", error);
    }
  };

  return (
    <Modal
      onCancel={handleCancelUpdate}
      visible={isModalOpenUpdate}
      footer={null}
    >
      <div>
        <p className="text-xl font-[500]">UPDATE EMPLOYEE</p>
      </div>
      <div className="w-[100%] mt-10">
        <Form
          onFinish={handleUpdate}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Flex justify="space-between">
            <div className="flex flex-col gap-2">
              <Form.Item
                name="name"
                rules={[{ required: true, message: "Please enter name!" }]}
              >
                <Input
                  style={{ width: "100%" }}
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
                  style={{ width: "100%" }}
                  placeholder="Enter date of birth"
                  suffixIcon={<MdDateRange />}
                />
              </Form.Item>
              <Form.Item
                name="profileImage"
                rules={[
                  { required: true, message: "Please enter profile URL!" },
                ]}
              >
                <Input
                  style={{ width: "100%" }}
                  placeholder="Enter profile URL"
                  suffix={<BiUserCircle />}
                />
              </Form.Item>
              <Form.Item
                name="email"
                rules={[{ required: true, message: "Please enter email!" }]}
              >
                <Input
                  style={{ width: "100%" }}
                  placeholder="Enter mail"
                  suffix={<MdEmail />}
                />
              </Form.Item>
              <Form.Item
                name="address"
                rules={[{ required: true, message: "Please enter address!" }]}
              >
                <Input
                  style={{ width: "100%" }}
                  placeholder="Enter address"
                  suffix={<FaAddressBook />}
                />
              </Form.Item>
            </div>
            <div className="flex flex-col gap-2">
              <Form.Item
                name="phoneNumber"
                rules={[
                  { required: true, message: "Please enter phone number!" },
                ]}
              >
                <Input
                  style={{ width: "100%" }}
                  placeholder="Enter phone number"
                  suffix={<BsFillTelephoneOutboundFill />}
                />
              </Form.Item>
              <Form.Item
                name="role"
                rules={[{ required: true, message: "Please enter role!" }]}
              >
                <Select
                  style={{ width: "100%" }}
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
                  style={{ width: "100%" }}
                  placeholder="Enter salary"
                  suffix={<MdOutlineMoneyOff />}
                />
              </Form.Item>
              <Form.Item
                name="department"
                rules={[
                  { required: true, message: "Please enter department!" },
                ]}
              >
                <Select
                  style={{ width: "100%" }}
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
                  style={{ width: "100%" }}
                  placeholder="Enter status"
                  suffix={<GrStatusGoodSmall />}
                />
              </Form.Item>
            </div>
          </Flex>

          <Form.Item>
            <div className="flex items-center justify-end gap-5 mt-5">
              <Button danger onClick={handleCancelUpdate}>
                cancel
              </Button>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
};

export default ModalUpdate;
