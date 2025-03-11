import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import miles from "../utils/miles";

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <Card style={{ width: "25rem" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>Pizza {name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item className="text-center">
          <p>Ingredientes:</p>
          <p>
            🍕{" "}
            {Array.isArray(ingredients)
              ? ingredients.join(", ")
              : "No especificados"}
          </p>
        </ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Title className="text-center">
          Precio: $ {miles(price)}
        </Card.Title>
        <div className="d-flex justify-content-between align-items-center px-4 py-2">
          <Button variant="outline-info"> Ver Más 👀</Button>
          <Button variant="dark">Añadir 🛒</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardPizza;
