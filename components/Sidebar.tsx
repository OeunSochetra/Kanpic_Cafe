"use client";
import React from "react";
import type { MenuProps } from "antd";
import { Menu } from "antd";

const Sidebar = () => {
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
  };
  return (
    <>
      <Menu
        onClick={onClick}
        style={{ width: 256 }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
      />
      Hello
      <Menu />
    </>
  );
};

export default Sidebar;
