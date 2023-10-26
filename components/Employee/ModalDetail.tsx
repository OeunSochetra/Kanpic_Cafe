import { Button, Card, Image, Modal } from "antd";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { dataEmployee } from "@/type";

interface ModalDetailProp {
  isModalOpenDetail: boolean;
  setIsModalOpenDetail: (value: any) => void;
  showModalDetail: (user: any) => void;
  handleCancelDetail: (value: any) => void;
}

const ModalDetail = ({
  showModalDetail,
  setIsModalOpenDetail,
  isModalOpenDetail,
  handleCancelDetail,
}: ModalDetailProp) => {
  const [employeeData, setEmployeeData] = useState<dataEmployee | null>(null);
  return (
    <Modal
      footer={null}
      closeIcon={false}
      onCancel={handleCancelDetail}
      open={isModalOpenDetail}
    >
      <Button danger onClick={handleCancelDetail}>
        Cancel
      </Button>
    </Modal>
  );
};

export default ModalDetail;
