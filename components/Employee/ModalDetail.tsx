"use client";
import { Button, Card, Image, Modal } from "antd";
import axios from "axios";
import React, { useState, useEffect } from "react";

interface ModalDetailProp {
  isModalOpenDetail: boolean;
  setIsModalOpenDetail: (value: any) => void;
  showModalDetail: (user: any) => void;
  handleCancelDetail: (value: any) => void;
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
  return (
    <Modal
      footer={null}
      closeIcon={false}
      onCancel={handleCancelDetail}
      open={isModalOpenDetail}
    >
      <Button type="text" className="text-red-500" onClick={handleCancelDetail}>
        Cencel
      </Button>
    </Modal>
  );
};

export default ModalDetail;
