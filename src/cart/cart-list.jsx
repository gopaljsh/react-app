import React from 'react';
import CartItems from './cart-item/cart-item';

class Cart extends React.Component {
    render() {
        let cartList = this.props.products.map((product, index) => {
            return(
                <CartItems key={index} product={product} index={index} removeItem={this.props.removeItem} />
            )
        })
        return(
            <div className="d-block">
                <h2>Cart</h2>
                <table>
                    <tbody>
                        {cartList}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Cart;