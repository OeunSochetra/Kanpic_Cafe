import React from "react";
import Products from "@/components/Products/Products";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import Container from "@/components/Container";
import { Card } from "antd";

const products = () => {
  const onChange = (key: string) => {
    console.log(key);
  };

  // const items: TabsProps["items"] = [
  //   {
  //     key: "1",
  //     label: "Tab 1",
  //     children: <Products />,
  //   },
  // ];

  return (
    <div>
      <Container>
        <Products />
      </Container>
    </div>
  );
};

export default products;
