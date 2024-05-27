import React from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

export default function Cart(props) {
  const { cartItems, add, remove, buy } = props;
  const totalPrice = cartItems.reduce(
    (sum, product) => sum + product.price * product.number,
    0
  );
  return (
    <div className="e1">
      <Alert variant="danger">
        <Alert.Heading>🛒Кошик🛒</Alert.Heading>
        {cartItems.length === 0 && <p>☠️Кошик порожній☠️</p>}
        <table>
          <tr>
            <td width="25%">✍🏻Назва✍🏻</td>
            <td width="25%">⚙️Кількість⚙️</td>
            <td width="25%">💸Ціна💸</td>
            <td width="25%">💲Загалом💲</td>
          </tr>
          {cartItems.map((product) => (
            <tr>
              <td width="25%">{product.name}</td>
              <td width="25%">
                <Button
                  onClick={() => remove(product)}
                  variant="outline-danger"
                >
                  -
                </Button>{" "}
                {product.number}
                <Button onClick={() => add(product)} variant="outline-warning">
                  +
                </Button>{" "}
              </td>

              <td width="25%">{product.price}</td>

              <td width="25%">{product.price * product.number}</td>
            </tr>
          ))}
        </table>
        <hr />
        <p className="mb-0">Сума до сплати{totalPrice}</p>
        <Button
          onClick={buy}
          variant="outline-warning"
          disabled={cartItems.length === 0}
        >
          Оформити замовлення
        </Button>{" "}
      </Alert>
    </div>
  );
}
