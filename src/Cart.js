import React from 'react';
import CartItem from './CartItem';
class Cart extends React.Component{
    constructor(){
        super();
        this.state = {
           products : [
           { 
            price :999,
            title :' watch',
            qty:1,
            img:''
           },
           {
            price :9999,
            title :' Mobile phone',
            qty:10,
            img:''
           },
           {
            price :22999,
            title :' laptop',
            qty:4,
            img:''
           }
         ] 
        }
        
    }
    render(){
        const {products}=this.state;
        return(
            <div className="cart">
                {products.map(product=> {
                    return <CartItem product={product}/>
                })}
                
               
            </div>
        );
    }
}

export default Cart;