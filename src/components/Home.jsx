import Header from "./Header";
import CardPizza from "./CardPizza";
import { pizzas } from "./pizzas";
// Bootstrap

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = () => {
  return (
    <>
      <Header />
      <div>
        <Container className="mt-3">
          <Row>
            {pizzas.map((e) => (
              <Col key={e.id}>
                <CardPizza
                  name={e.name}
                  price={e.price}
                  ingredients={e.ingredients}
                  img={e.img}
                  id={e.id}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Home;
