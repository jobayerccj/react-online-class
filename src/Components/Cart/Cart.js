import React, {Component} from 'react';

class Cart extends Component {
    render() {
        const { cart } = this.props;

        return (
            <div>
                <h1>Cart</h1>
                <p><b>Total Course purchased:</b> {cart.length}</p>
                <p><b>Total Price: $</b>
                    {
                        cart.reduce((total, item) => {return total + item.course.price} ,0)
                    }
                </p>
            </div>
        );
    }
}

export default Cart;