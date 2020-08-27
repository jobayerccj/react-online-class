import React, {Component} from 'react';
import {Col, Row} from "react-bootstrap";

class Course extends Component {
    render() {

        const { title, price, instructor, image} = this.props.course;
        const handleBuyBtn = this.props.handleBuyBtn;

        return (
            <div>



                        <div className="card">
                            <Row>
                                <Col sm={5} md={5}>
                                    <div className="card-body">
                                        <img src={image} alt=""/>
                                    </div>
                                </Col>

                                <Col sm={4} md={4}>
                                    <div className="card-body">
                                        <h5 className="card-title">{title}</h5>
                                        <p className="card-text">Instructor: {instructor}</p>
                                        <button className="btn btn-primary" onClick={() => handleBuyBtn(this.props.course)}>Enroll Now</button>
                                    </div>
                                </Col>

                                <Col sm={3} md={3}>
                                    <div className="card-body">
                                        <h5 className="card-title">${price}</h5>

                                    </div>
                                </Col>
                            </Row>
                        </div>




                <br/>
            </div>

        );
    }
}

export default Course;