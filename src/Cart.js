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
            img:'',
            id:1
           },
           {
            price :9999,
            title :' Mobile phone',
            qty:10,
            img:'',
            id:2
           },
           {
            price :22999,
            title :' laptop',
            qty:4,
            img:'',
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
    render(){
        const {products}=this.state;
        return(
            <div className="cart">
                {products.map(product=> {
                    return <CartItem
                                 product={product} 
                                 key={product.id}
                                onIncreaseQuantity={this.handleqty}
                                 onDecreaseQuantity={this.handledecqty}
                                delprod={this.handledel}
                                 />
                })}
                
               
            </div>
        );
    }
}

export default Cart;