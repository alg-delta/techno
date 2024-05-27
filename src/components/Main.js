import React from "react";
import Product from "./Product";
import Row from "react-bootstrap/Row";
import Accordion from "react-bootstrap/Accordion";
export default function Main(props) {
  const { products, add } = props;
  return (
    <Row className="card1">
      {products.map((product) => (
        <Product key={product.id} product={product} add={add} />
      ))}
      <Accordion defaultActiveKey="0" flush style={{ width: "35rem" }}>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Важлива інформація</Accordion.Header>
          <Accordion.Body>
            На даний момент не всі товари доступні на сайті, тому що сайт був
            створений не так давно, і з часом товарів буде все більше.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Row>
  );
}
