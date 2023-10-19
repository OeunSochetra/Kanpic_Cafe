"use client";
import { Avatar, Card, Table } from "antd";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { FaPencilAlt } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

interface Product {
  id: string;
  image: string;
  name: string;
  description: string;
  price: number;
}

interface Category {
  name: string;
  products: Product[];
}

const Products = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:3030/product");
      const datajson = res.data;
      setCategories(datajson);
    } catch (error) {
      console.log("FetchData error", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const columns = [
    {
      title: "Product name",
      dataIndex: "image",
      key: "image",
      render: (image: string, record: Product) => (
        <div className="flex items-center gap-3">
          <Avatar
            prefixCls="j"
            src={image}
            alt="Product"
            style={{ maxWidth: "100px" }}
          />
          <p>{record.description}</p>
        </div>
      ),
    },
    {
      title: "Category",
      dataIndex: "name",
      key: "name",
    },
    // {
    //   title: "Description",
    //   dataIndex: "description",
    //   key: "description",
    // },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price: number) => `$${price.toFixed(2)}`,
    },
    {
      title: "Active",
      dataIndex: "active",
      key: "active",
      render: (text: string) => (
        <div className="flex items-center gap-5">
          <button>
            <FaPencilAlt />
          </button>
          <button className="text-[17px]">
            <MdDeleteForever />
          </button>
        </div>
      ),
    },
  ];

  const data = categories.flatMap((category) =>
    category.products.map((product) => ({
      ...product,
      name: category.name, // Add category name to each product
    }))
  );

  return (
    <Card>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ defaultPageSize: 5 }}
      />
    </Card>
  );
};

export default Products;
