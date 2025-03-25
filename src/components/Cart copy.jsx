import React from "react";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
import { Button, Card, Col } from "react-bootstrap";
import { PizzaList } from "./PizzaList";
import { pizzaCart } from "./pizzas";

export const Cart = () => {
  return (
    <>
      <Card className="container mt-3">
        <Card.Header as="h5">Detalles de pedido:</Card.Header>
        <Card.Body>
          {pizzaCart.map((e) => (
            <Col key={e.id}>
              <PizzaList
                name={e.name}
                price={e.price * e.count}
                count={e.count}
                img={e.img}
                id={e.id}
                objet={e}
              />
            </Col>
          ))}

          <Card.Title as="h2" className="my-3">
            Total:
          </Card.Title>
          <Button variant="dark">Pagar</Button>
        </Card.Body>
      </Card>
    </>
  );
};
