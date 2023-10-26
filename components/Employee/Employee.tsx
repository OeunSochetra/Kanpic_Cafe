"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Table, Image, Card, Avatar, Modal, Button, Form, Input } from "antd";
import ModalDetail from "./ModalDetail";
import ModalUpdate from "./ModalUpdate";
import ModalDelete from "./ModalDelete";
import ModalAdd from "./ModalAdd";
import type { ColumnsType } from "antd/es/table";
import { BsFillPencilFill } from "react-icons/bs";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { BiSolidUserDetail } from "react-icons/bi";
import { dataEmployee } from "@/type";

const Employee = () => {
  const [userDetail, setUserDetail] = useState<dataEmployee[]>([]);
  const [employee, setEmployee] = useState<any>(null);

  const [isModalOpenDetail, setIsModalOpenDetail] = useState<boolean>(false);
  const [isModalOpenUpdate, setIsModalOpenUpdate] = useState<boolean>(false);
  const [isModalOpenDelete, setIsModalOpenDelete] = useState<boolean>(false);
  const [isModalOpenAdd, setIsModalOpenAdd] = useState<boolean>(false);

  // this is function to fetch data from databaste

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:3030/employee");
      const datajson = res.data;
      setUserDetail(datajson);
    } catch (error) {
      console.log("FetchData error:", error);
    }
  };

  // All Function Mpdal is in here

  const showModalDetail = () => {
    setIsModalOpenDetail(true);
  };

  const handleCancelDetail = () => {
    setIsModalOpenDetail(false);
  };

  const showModalUpdate = (employee: dataEmployee) => {
    setIsModalOpenUpdate(true);
    setEmployee(employee);
  };

  const handleCancelUpdate = () => {
    setIsModalOpenUpdate(false);
  };

  // ModalDetele Function

  const showModalDelete = (employee: dataEmployee) => {
    setIsModalOpenDelete(true);
    setEmployee(employee);
  };

  const handleCancelDelete = () => {
    setIsModalOpenDelete(false);
  };

  const showModalAdd = () => {
    setIsModalOpenAdd(true);
  };

  // All Function Mpdal is in here

  const style = {
    backgroundcolor: "#f6d08f",
  };

  const columns: ColumnsType<dataEmployee> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text: string, record: dataEmployee) => (
        <div className="flex gap-4 items-center">
          <Avatar className="rounded-full" src={record.profileImage} />
          <div>
            <h1 className="font-[400] text-lg">{record.name}</h1>
            <p className="font-[300] text-md">{record.email}</p>
          </div>
        </div>
      ),
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
      render: (text: string, record: dataEmployee) => (
        <div>
          <p>{record.phoneNumber}</p>
        </div>
      ),
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (text: string, record: dataEmployee) => (
        <div className="font-[400]">
          <p>{record.role}</p>
          <p>{record.salary}</p>
        </div>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (text: string, record: dataEmployee) => (
        <div className="w-16 rounded-[10px] border border-green-500 bg-[#c6e7d1] text-green-500">
          <span className="flex items-center justify-center">
            {record.status}
          </span>
        </div>
      ),
    },
    {
      title: "Actons",
      dataIndex: "actons",
      key: "actons",
      render: (text: string, record: dataEmployee) => (
        <div className="flex gap-4">
          <button
            onClick={() => showModalUpdate(record)}
            className="px-2 py-2 flex items-center gap-3
           text-blue-500 border border-blue-500  rounded-[10px] bg-blue-100"
          >
            <BsFillPencilFill />
          </button>
          <button
            onClick={() => showModalDelete(record)}
            className="px-2 py-2 flex items-center gap-3
           text-red-500 border border-red-500  rounded-[10px] bg-red-100"
          >
            <RiDeleteBin5Fill />
          </button>

          <button
            onClick={showModalDetail}
            className="px-2 py-2 flex items-center gap-3
                 text-orange-500 border border-orange-500  rounded-[10px] bg-orange-100"
          >
            <BiSolidUserDetail />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <Card>
        <div className="flex items-center justify-between">
          <h1 className="font-[600] text-2xl uppercase">Empolyee Lising</h1>
          <Button type="primary" onClick={showModalAdd}>
            AD NEW EMPOLYEE
          </Button>

          <ModalAdd
            isModalOpenAdd={isModalOpenAdd}
            setIsModalOpenAdd={setIsModalOpenAdd}
            fetchData={fetchData}
          />

          <ModalDelete
            isModalOpenDelete={isModalOpenDelete}
            setIsModalOpenDelete={setIsModalOpenDelete}
            handleCancelDelete={handleCancelDelete}
            showModalDelete={showModalDelete}
            fetchData={fetchData}
            employee={employee}
          />

          <ModalUpdate
            isModalOpenUpdate={isModalOpenUpdate}
            setIsModalOpenUpdate={setIsModalOpenUpdate}
            showModalUpdate={showModalUpdate}
            handleCancelUpdate={handleCancelUpdate}
            employee={employee}
            fetchData={fetchData}
          />

          <ModalDetail
            handleCancelDetail={handleCancelDetail}
            showModalDetail={showModalDetail}
            isModalOpenDetail={isModalOpenDetail}
            setIsModalOpenDetail={setIsModalOpenDetail}
          />
        </div>
        <div className="pt-5">
          <Table dataSource={userDetail} columns={columns}></Table>
        </div>
      </Card>
    </div>
  );
};

export default Employee;
