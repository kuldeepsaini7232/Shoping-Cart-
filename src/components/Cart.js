import React from 'react';

import { Container, ListGroup, ListGroupItem, Button, CardHeader, CardBody, CardFooter, Col, Row, CardText, Card } from 'reactstrap'
const Cart = ({ cartItem, removeItem, buyNow }) => {
    let amount = 0;
    cartItem.forEach(item => {
        amount = parseFloat(amount) + parseFloat(item.productPrice);
    })
    return (
        <Container fluid>
            <h1 className="text-success">Your Cart</h1>
            <ListGroup>
                {cartItem.map(item => (
                    <ListGroupItem key={item.id}>
                        <Row>
                            <Col>
                                <img height={80}
                                    src={item.tinyImage}
                                />
                                <Col className="text-center">
                                    <div className="text-primary">
                                        {item.productName}
                                    </div>
                                    <span>price:{item.productPrice}</span>
                                    <Button style={{marginLeft:'220px'}} color="danger" onClick={() => removeItem(item)}>Remove</Button>
                                </Col>
                            </Col>
                        </Row>
                    </ListGroupItem>
                ))}
            </ListGroup>
            {cartItem.length>=1? (
                <Card className="text-center mt-3">
                 <CardHeader>
                     Grand Totel
                 </CardHeader>
                 <CardBody>
                     your amount for {cartItem.length} products is:{amount}
                 </CardBody>
                 <CardFooter>
                     <Button color="success" onClick={buyNow}>pay here</Button>
                 </CardFooter>
                </Card>
            ):(
                <h1 className="text-warning">empty</h1>
            )}
        </Container>
    )
}

export default Cart;