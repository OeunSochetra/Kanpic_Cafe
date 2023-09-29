"use client";
import React from "react";
import Card from "antd/es/card/Card";
import Container from "./Container";
import { useState, useEffect } from "react";
import axios from "axios";
import Meta from "antd/es/card/Meta";
import { Button } from "antd";
import PopupDetail from "./PopupDetail";

interface MenuItem {
  id: string;
  imgurl: string;
  productName: string;
  price: string;
  count?: number;
}

const Mainpage = () => {
  const [menu, setMenu] = useState<MenuItem[]>([]);
  //this state is use to control Modal
  const [modalOpen, setModalOpen] = useState<boolean>(false);

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

  const buttonStyle = {
    backgroundColor: "#f8eac7",
    color: "#7a717d",
  };

  //implement the functionality of incrementing and decrementing the count for each card individually,
  const handleIncrement = (id: string) => {
    setMenu((PrevMunu) =>
      PrevMunu.map((item) =>
        item.id === id ? { ...item, count: (item.count || 0) + 1 } : item
      )
    );
  };

  const handleDecrement = (id: string) => {
    setMenu((PrevMunu) =>
      PrevMunu.map((item) =>
        item.id === id
          ? {
              ...item,
              count: item.count && item.count > 0 ? item.count - 1 : 0,
            }
          : item
      )
    );
  };
  //implement the functionality of incrementing and decrementing the count for each card individually,

  // implement the functionality set Modal

  const showModal = () => {
    setModalOpen(true);
  };

  const handleOk = () => {
    setModalOpen(false);
  };

  const handleCancel = () => {
    setModalOpen(false);
  };

  return (
    <>
      <main className="pt-20">
        <Container>
          <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-3 gap-2">
            {menu.map((item) => (
              <div key={item.id} className="">
                <Card
                  className="bg-[#7b727d]"
                  hoverable
                  style={{ width: 200 }}
                  cover={<img src={item.imgurl} alt="photo" height={40} />}
                >
                  <Meta title={item.productName} description={item.price} />
                  <div className="flex items-center justify-between pt-4">
                    <div>
                      <Button
                        onClick={showModal}
                        size="small"
                        style={buttonStyle}
                      >
                        Buy now
                      </Button>
                      <PopupDetail
                        modalOpen={modalOpen}
                        handleOk={handleOk}
                        handleCancel={handleCancel}
                      />
                    </div>
                    <Button
                      onClick={() => handleIncrement(item.id)}
                      style={buttonStyle}
                      size="small"
                    >
                      +
                    </Button>
                    {item.count || 0}
                    <Button
                      onClick={() => handleDecrement(item.id)}
                      style={buttonStyle}
                      size="small"
                    >
                      -
                    </Button>
                  </div>
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
