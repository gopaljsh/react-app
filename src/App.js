import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProductList from './product-list/product-list';
import Cart from './cart/cart-list';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      productList: [
        {index: 1, productname: 'Jeans'},
        {index: 2, productname: 'Shirt'},
        {index: 3, productname: 'Trouser'},
        {index: 4, productname: 'Tshirt'},
        {index: 5, productname: 'pant'},
        {index: 6, productname: 'Blazer'},
        {index: 7, productname: 'cotton-pant'},
        {index: 8, productname: 'shorts'},
        {index: 9, productname: 'cap'},
        {index: 10, productname: 'cardian'},
      ],
      cartList: []
    }
  }

  addItem = (index) => {
    const cartList = [...this.state.cartList];
    const productList = {...this.state.productList[index]};
    if(cartList.length == 0) {
        cartList.push({
          index: this.state.cartList.length+1,
          productname: productList.productname
        })
      } else {
        cartList.unshift({
          index: this.state.cartList.length+1,
          productname: productList.productname
        });
      }
      this.setState((prevState)=> {
        return {
          cartList: cartList
        } 
      });
  }

  removeItem = (index) => {
    const cartList = [...this.state.cartList];
    cartList.splice(index,1);
    this.setState({cartList});
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <ProductList products={this.state.productList} addItem={this.addItem} />
          <Cart products={this.state.cartList} removeItem={this.removeItem} />
        </div>
      </div>
    )
  }
}

export default App;
