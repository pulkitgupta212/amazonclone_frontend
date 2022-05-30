import React from 'react'
import { useNavigate } from "react-router"
import "../Css/cart.css"
import Header from './Headers/header'
import Header1 from './Headers/subheader'
import Footer from './Fotter'
import 'antd/dist/antd.css';
import { Checkbox } from 'antd';
function ShoppingCart({cart,removeFromCart}) {
    const navigate = useNavigate()
    const onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
      };
    return (
        <>
        <Header/>
        <Header1/>
        <div style={{height:"auto"}}> 
        <div className="checkout">
            <div className="checkout__left">
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" className="checkout__ad"/>

                <div>
                    <h3>Hello Pulkit</h3>
                    <h2 className="checkout__title">Your shopping Basket</h2>

{
    cart?.line_items?.map(item=>{
return <div className="checkoutProduct" key={item.id}>
            <img src={item.media.source}/>

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{item.name}</p>
                <p className="checkoutProduct__price">
                    <strong>{item.price.formatted_with_symbol} * {item.quantity} = {cart.currency.symbol} {item.price.raw * item.quantity}</strong>
                </p>
                <button onClick={()=>removeFromCart(item.id)}>Remove from Basket</button>
            </div>
            </div>

    })
}
                    

                    
                </div>
            </div>

            <div className="checkout__right">
                <div className="subtotal">
                    <p>Subtotal ({cart?.total_items} items): <strong>{ cart?.subtotal?.formatted_with_symbol}</strong></p>
                    {/* <small className="subtotal__gift">
                        <input type="checkbox"/> This order contains a gift
                    </small> */}
                    <div>
                    <Checkbox onChange={onChange}>This order contains a gift</Checkbox>
                    </div>
                </div>

                <button onClick={()=>navigate('/checkout')}>Proceed to Checkout</button>
            </div>
        </div>
        </div>

        <Footer/>
   </>
    )
    
}

export default ShoppingCart
