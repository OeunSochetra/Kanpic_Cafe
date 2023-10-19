"use client";
import { Card, Image } from "antd";
import Meta from "antd/es/card/Meta";
import axios from "axios";
import SelectUi from "./SelectUi";
import React, { useState, useEffect } from "react";

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

const Menu = () => {
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

  return (
    <Card>
      <span className="flex items-center justify-end">
        <SelectUi />
      </span>

      {categories.map((category, index) => (
        <div className="pt-5" key={index}>
          <h2 className="text-3xl font-[600]">{category.name}</h2>
          <div className="pt-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-3 gap-2">
            {category.products.map((product, productIndex) => (
              <div key={productIndex}>
                <Card
                  className="bg-[#716d71]"
                  title={product.name}
                  cover={<Image src={product.image} width={240} />}
                  bordered={false}
                  hoverable
                  style={{ width: 240 }}
                >
                  <Meta
                    title={<p>Price: ${product.price.toFixed(2)}</p>}
                    description={product.description}
                  />
                </Card>
              </div>
            ))}
          </div>
        </div>
      ))}
    </Card>
  );
};

export default Menu;
