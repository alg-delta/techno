import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Product(props) {
  const { product, add } = props;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.price}грн</Card.Text>
        <Card.Text>{product.text}</Card.Text>
        <Card.Text>
          <iframe
            width="250"
            height="300"
            src={product.video}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </Card.Text>
        <Button onClick={() => add(product)} variant="outline-success">
          Покупка
        </Button>
      </Card.Body>
    </Card>
  );
}
