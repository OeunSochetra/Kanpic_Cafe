"use client";
import { Card, Image, Modal } from "antd";
import axios from "axios";
import React, { useState, useEffect } from "react";

interface ModalDetailProp {
  isModalOpenDetail: boolean;
  setIsModalOpenDetail: (value: any) => void;
  showModalDetail: () => void;
  handleCancelDetail: () => void;
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

const ModalDetail = ({
  showModalDetail,
  setIsModalOpenDetail,
  isModalOpenDetail,
  handleCancelDetail,
}: ModalDetailProp) => {
  const [userDetail, setUserDetail] = useState<dataEmployee[]>([]);

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

  return (
    <Modal onCancel={handleCancelDetail} open={isModalOpenDetail}>
      <h1>Hello World</h1>
    </Modal>
  );
};

export default ModalDetail;
