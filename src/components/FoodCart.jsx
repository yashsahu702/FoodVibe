import React, { useEffect } from 'react'
import { AiFillStar } from "react-icons/ai";
import { useDispatch,  } from 'react-redux';
import { addToCart } from '../redux/Slice/CartSlice';
const FoodCart = ({ id, img, name, price, desc, rating }) => {
    const dispatch=useDispatch();
    
    
    return (
        <div className='food-item'>
            <img src={img} alt="" className='food-img' />
            <div className='food-sec'>
                <h2 className='food-name'>{name}</h2>
                <span className='food-price'>₹{price}</span>
            </div>
            <p className='food-desc'>{desc.slice(0, 50)}...</p>
            <div className="food-rating">
                <span className='food-rating2'>
                    <AiFillStar className='food-icon' />{rating}
                </span>
                <button  onClick={ ()=>{
                        dispatch(addToCart({id ,img ,name ,price ,rating ,qty:1 ,}));
                        }
                        }  className='food-button'>
                    Add to cart
                </button>
            </div>
        </div>
    )
}

export default FoodCart