import React, { useState } from "react";
import { Button, Card, Image, Form } from "react-bootstrap";
import miles from "../utils/miles";
import { pizzaCart } from "./pizzas";

export const PizzaList = ({ name, price, img, count, id, objet }) => {
  const [total, setTotal] = useState([...pizzaCart]);

  const totalUp = (e) => {
    //setTotal(total + 1);
    // pizzaCart.map((pizza) => {
    //   pizza.id === id ? console.log("hace 1") : console.log("hace 2");
    // });
    //console.log(e);
    setTotal(
      total.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
    console.log(total);
  };
  const totalDown = (e) => {
    // setTotal(total - 1);
    console.log(total);
  };

  return (
    <>
      <Card className="d-flex flex-row align-items-center p-2 border-0">
        <Image src={img} alt={name} rounded width="50" height="50" />
        <div className="ms-2 flex-grow-1">
          <h6 className="mb-0">{name}</h6>
        </div>
        <div className="me-2">
          <strong>$ {miles(price)} </strong>
        </div>
        <div className="d-flex align-items-center">
          <Button
            variant="outline-danger"
            className="px-2 py-1"
            onClick={() => totalDown(objet)}
          >
            -
          </Button>
          <Form.Control
            type="text"
            value={count}
            className="text-center mx-2"
            style={{ width: "40px" }}
            readOnly
          />
          <Button
            onClick={() => totalUp(objet)}
            variant="outline-primary"
            className="px-2 py-1"
          >
            +
          </Button>
        </div>
      </Card>
    </>
  );
};
