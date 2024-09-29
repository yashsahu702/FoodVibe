import React from 'react'
import { MdDelete } from "react-icons/md";
import { GrSubtractCircle } from "react-icons/gr";
import { RiAddCircleLine } from "react-icons/ri";
import { useSelector,useDispatch } from 'react-redux';
import { removeToCart,incrementQty,decrementQty } from '../redux/Slice/CartSlice';

const CartItems = ({item}) => {
  const cart=useSelector((state)=>state.cart.cart)
  const dispatch=useDispatch();
  let id=item.id;
  return (
    <div className='cart-item'>

      <MdDelete
        className='delete-button' onClick={()=>dispatch(removeToCart(item.id))}

      />
      <img src={item.img} alt="" className='cart-img' />

      <div className='cart-details'>
        <h3 className='cart-name'>{item.name}</h3>
        <div className='cart-subdetails'>
          <span className='cart-price'>₹{item.price}</span>
          <div className='cart-icon'>
           
              <GrSubtractCircle  className='cart-icons' onClick={()=>item.qty > 1 && dispatch(decrementQty(id)) } />
             
             <span>{item.qty}</span>
            
             <RiAddCircleLine className='cart-icons'  onClick={()=>dispatch(incrementQty(id))} />
            
          </div>
        </div>
      </div>

    </div>
  )
}

export default CartItems