
import React from 'react';
import './index.css';

import Cart from './Cart'
import Navbar from './Navbar';
class  App extends React.Component {
  constructor(){
    super();
    this.state = {
       products : [
       { 
        price :999,
        title :' watch',
        qty:1,
        img:'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2F0Y2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60',
        id:1
       },
       {
        price :9999,
        title :' Mobile phone',
        qty:10,
        img:'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        id:2
       },
       {
        price :22999,
        title :' laptop',
        qty:4,
        img:'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60',
        id:3
       }
     ] 
    }
    
}

handleqty = (product) => {
    console.log('hey qty inc',product);

    const { products } = this.state;

    const index = products.indexOf(product);

   products[index].qty += 1;

   this.setState({
        products 
    })
}

handledecqty = (product) => {
console.log('hey qty dec',product);
const { products } = this.state;

const index = products.indexOf(product);

if(products[index].qty === 0){
    return;
}

products[index].qty -= 1;

this.setState({
    products 
})
}

handledel = (id) => {
const { products} = this.state ;

const items = products.filter((item) => item.id !== id);

this.setState({
    products : items
})
}

getcartCount = ()=>  {
  const { products } = this.state ;

  let count = 0 ;

  products.forEach((product) => {
    count += product.qty 
  })

  return count ;
}

gettotal =()=>{
  const { products}= this.state;
  let cartTotal = 0;
  products.map((product)=> {
    cartTotal = cartTotal + product.qty * product.price
  })

  return cartTotal;
}


render(){
  const { products } = this.state ;
  return (
  <div className = "App">
    <Navbar  count = { this.getcartCount()}/>
    <Cart
    products = { products}
      onIncreaseQuantity={this.handleqty}
      onDecreaseQuantity={this.handledecqty}
     delprod={this.handledel}
    />
    <div style = { { padding :10 , fontSize:20}}>
      Total : { this.gettotal()}
    </div>
  </div>
      
  );
}
}

export default App;
