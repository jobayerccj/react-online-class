import React, {Component} from 'react';

class Cart extends Component {
    render() {
        const { cart } = this.props;
        let totalItem = cart.length;

        if(totalItem == 0){
            return (
                <div>
                    <br/>
                    <h2>Cart</h2>
                    <p>Your Cart is Empty</p>

                </div>
            );
        }else{
            return (
                <div>
                    <br/>
                    <h2>Cart</h2>

                    <p><b>Total Courses purchased:</b> {cart.length}</p>
                    <table className="table table-border">
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                        {
                            cart.map(item => <tr key={item.course.id}>
                                <td>{ item.course.title }</td>
                                <td>{ item.course.price }</td>
                            </tr>)
                        }

                    </table>
                    <p><b>Total Price: $</b>
                        {
                            cart.reduce((total, item) => {return total + item.course.price} ,0)
                        }
                    </p>

                </div>
            );
        }

    }
}

export default Cart;