import React, {useState} from 'react';
import './App.css';
import Courses from "./Components/Courses/Courses";
import Cart from "./Components/Cart/Cart";
import {Container, Row, Col} from "react-bootstrap";

function App() {

    const [cart, setCart] = useState([]);

    const handleCart = (newItem) =>{
        const newCart = [...cart, newItem];
        setCart(newCart);

    }

    return (
        <div className="App">
            <Container>
                <Row>
                    <Col sm={8}>
                        <Courses cart={cart} handleCart={handleCart}/>
                    </Col>
                    <Col sm={4}>
                        <Cart cart={cart} />
                    </Col>
                </Row>
            </Container>

        </div>
      );
}

export default App;
