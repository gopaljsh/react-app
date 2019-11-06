import React from 'react';
import ProductItem from './product-item/product-item';

class ProductList extends React.Component {
    sortItems = () => {
        let products = this.props.products.sort((a,b) => {
            return a.productname.localeCompare(b.productname);
        });
    }
    render() {
        let product = this.props.products.map((product, index) => {
            return (
                <ProductItem key={index} index={index} product={product} addItem={this.props.addItem} />
            )
        })
        return (
            <div className="d-block">
                <h2>Product</h2>
                <button onClick={this.props.sortItem}>Sort Product</button>
                <table colSpan="0">
                    <tbody>
                        {product}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ProductList;