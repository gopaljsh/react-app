import React from 'react';

class CartItems extends React.Component {
    removeItem = () => {
        let index = parseInt(this.props.index);
        this.props.removeItem(index);
    }
    render() {
        return(
            <tr>
                <td width="90%">{this.props.product.productname}</td>
                <td><button type="button" onClick={this.removeItem}>Remove</button></td>
            </tr>
        );
    }
}

export default CartItems;