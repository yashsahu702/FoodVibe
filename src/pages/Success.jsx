import React, { useEffect, useState } from 'react'
import { PropagateLoader } from 'react-spinners';
import { RxCrossCircled } from 'react-icons/rx';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { emptyArray } from '../redux/Slice/CartSlice';
const Success = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const [Loading ,setLoading] = useState(false);
  function clickHandler(){
    dispatch(emptyArray());
    navigate('/');
  }
  useEffect(()=>{
    setTimeout(()=>{
       setLoading(true);
    },3000)
  })
  return (
    <div className='Success'>
      <RxCrossCircled className='success-icon' onClick={clickHandler} />
      {
        Loading ? (
          <div>
            <h2 className="Success-head">
            Order Successful!
          </h2>
          <p>Your order has been sucessfully placed</p>
          </div>

        ) : (<PropagateLoader  color= "#ff6a6c" />)
      }
    </div>
  )
}

export default Success