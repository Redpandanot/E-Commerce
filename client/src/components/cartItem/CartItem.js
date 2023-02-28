import React from 'react'
import "./CartItem.scss";
import {AiOutlineClose} from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/cartSlice';

function CartItem({cart}) {
    const dispatch=useDispatch();
  return (
    <div className='CartItem'>
        <div className="item-img">
            <img src={cart.image} alt="" />
        </div>
        <div className="item-info-wrapper">
        <div className="item-info">
            <h4 className="title">{cart.title}</h4>
            <p className="price">₹ {cart.price}</p>
            <div className="quantity-selector">
                <span className="btn decrement" onClick={() => dispatch(removeFromCart(cart))}>-</span>
                <span className="quantity">{cart.quantity}</span>
                <span className="btn increment" onClick={() => dispatch(addToCart(cart))}>+</span>
            </div>
            <p className="total-price">
               Subtotal: ₹ {cart.quantity * cart.price}
            </p>
        </div>
        {/* <div className="item-remove">
            <AiOutlineClose/>
        </div> */}
        </div>
    </div>
  )
}

export default CartItem;