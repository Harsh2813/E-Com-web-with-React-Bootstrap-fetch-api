import React, { useContext } from "react";
import CartContext from "../../store/Cart-context";
import { Button, Card } from "react-bootstrap";

const Cart = (props) => {
  const cartCxt = useContext(CartContext);

  return (
    <>
      <ul>
        {cartCxt.items.map((item) => (
          <li key={item.id}>
            <Card style={{ width: "18rem" }}>
            <Card.Title>{item.title}</Card.Title>
              <Card.Img variant="top" src={item.imageUrl} />
              <Card.Body>
                <Card.Text>{item.price} {item.quantity}x</Card.Text>
                <Button onClick={props.onHideCart} variant="primary">Close</Button>
              </Card.Body>
            </Card>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cart;