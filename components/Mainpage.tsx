"use client";
import React from "react";
import Card from "antd/es/card/Card";
import Container from "./Container";
import { useState, useEffect } from "react";
import axios from "axios";
import Meta from "antd/es/card/Meta";

const Mainpage = () => {
  const [menu, setMenu] = useState<any[]>([]);

  const fetchMenu = async () => {
    try {
      const res = await axios.get("http://localhost:3030/menu");
      const datajson = res.data;
      setMenu(datajson);
    } catch (error) {
      console.log("menu data fetch fail", error);
    }
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  return (
    <>
      <main className="pt-20">
        <Container>
          <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-2">
            {menu.map((item) => (
              <div key={item.id} className="">
                <Card
                  className="bg-[#f8eac7]"
                  hoverable
                  style={{ width: 200 }}
                  cover={<img src={item.imgurl} alt="photo" height={40} />}
                >
                  <Meta title={item.productName} description={item.price} />
                  <button className="px-2 py-1 bg-black"></button>
                </Card>
              </div>
            ))}
          </div>
        </Container>
      </main>
    </>
  );
};

export default Mainpage;
