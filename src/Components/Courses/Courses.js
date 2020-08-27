import React, {Component} from 'react';
import Course from "../Course/Course";
import courses from "../../fakeData/coursesData";


class Courses extends Component {

    render() {
        const {cart, handleCart }  =this.props;

        return (
            <div>
                <h2>Available Courses</h2>

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