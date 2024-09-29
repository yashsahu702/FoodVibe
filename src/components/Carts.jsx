import React, { useState } from 'react';
import { RxCrossCircled } from "react-icons/rx";
import { useSelector } from 'react-redux';
import CartItems from './CartItems';
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Carts = () => {

  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart.cart);
  const [visibleCart, setVisibleCart] = useState(false);

  const qtyCart = cart.reduce((intial, curr) => {
    return curr.qty + intial;
  }, 0)

  const totalAmount = cart.reduce((intial, curr) => {
    return (curr.qty * curr.price) + intial;
  }, 0)

  console.log(cart.length)
  return (
    <>
      {visibleCart ? (
        <div className='carts'>
          <div className='cart-head'>
            <span className='cart-subhead'>My Order</span>
            <RxCrossCircled className='cart-headicon' onClick={() => setVisibleCart(false)} />
          </div>
          {
          cart.length > 0 ? (cart.map((item) => (
            <CartItems key={item.id} item={item} />
          ))) : <h2 className='empty-cart'>Your Cart is Empty</h2>
          }
          <div className='cart-foot'>
            <h3 className='cart-qty'>Items: {qtyCart}</h3>
            <h3 className='cart-amount'>Total Amount: {totalAmount}</h3>
            <hr className='cart-hr' />
            <button className='cart-button' onClick={() => { navigate("/success") }} >CheckOut</button>
          </div>
        </div>
      ) : (
        <div>

          <FaShoppingCart onClick={() => setVisibleCart(true)} className='cart-logo' />
          <span className={`${qtyCart > 0 ? 'bounce-animation' : 'zero'}`}> {qtyCart} </span>

        </div>


      )}
    </>
  );
};

export default Carts;
