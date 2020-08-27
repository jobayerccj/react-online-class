import React, {Component} from 'react';
import Course from "../Course/Course";
import courses from "../../fakeData/coursesData";


class Courses extends Component {

    render() {
        const {cart, handleCart }  =this.props;

        return (
            <div>
                <h1>Courses</h1>

                    {
                        courses.map(course =>
                                <Course key={course.id} course={course}
                                        handleBuyBtn={() => handleCart({course})}
                                        cart={cart}
                                />
                        )
                    }

            </div>
        );
    }
}

export default Courses;