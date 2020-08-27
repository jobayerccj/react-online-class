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

    const headerStyle = {
        "borderBottom": "1px solid lightgreen",
        "padding": "15px 0",
        "marginBottom": "15px"
    };

    return (
        <div className="App">
            <Container>
                <Row>
                    <Col sm={12} style={headerStyle}>
                        <h1 className="text-center">Our Online Class</h1>
                    </Col>
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
