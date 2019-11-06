import React from 'react';

class ProductItem extends React.Component {

    addItem = () => {
        let index = parseInt(this.props.index);
        this.props.addItem(index);
    }

    render() {
        return (
            <tr>
                <td width="90%">{this.props.product.productname}</td>
                <td><button type="button" onClick={this.addItem}>Add</button></td>
            </tr>
        );
    }
}

export default ProductItem;