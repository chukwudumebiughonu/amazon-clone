import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
  const [{ basket }  ] = useStateValue(); 
  return(
       <div className='checkout'>
          <div className='checkout__left'>
           <img 
             className='checkout__ad' 
             src='https://images-na.ssl-images-amazon.com/images/G/01/hollywood/3PMerch/appstore_header.png'
             alt=''
           />
           <div>
           <h2 className='checkout__title'>
               Your shopping Basket  
           </h2>


           {basket.map(item => (
             <CheckoutProduct
               id={item.id}
               title={item.title}
               image={item.image}
               price={item.price}
               rating={item.rating}/ >
           ))}
            
            {/* CheckoutProduct */}
            {/* CheckoutProduct */}
            {/* CheckoutProduct */}
            {/* CheckoutProduct */}
            
            
           </div>
      </div>
      <div className='checkout__right'>
          {/* <h2>The subtotal will go here</h2> */}
          <Subtotal />
      </div>
  </div>
  );
}

export default Checkout;
