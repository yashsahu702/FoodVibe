import React, { useEffect } from 'react'
import FoodData from '../data/foodData'
import FoodCart from './FoodCart'
import { useSelector } from 'react-redux';
const FoodItems = () => {
  console.log(FoodData)
  const currMenu = useSelector((state) => state.category.category);
  const search=useSelector((state)=>state.search.search);
   
  return (
    <div className='fooditems'>
      {
        FoodData.filter((food)=>{
          if(currMenu === "All"){
            return food.name.toLowerCase().includes(search.toLowerCase());
          }
          else{
            return food.category === currMenu && food.name.toLowerCase().includes(search.toLowerCase())
          }
        }).map((item) => 
          (
            <FoodCart key={item.id}
              id={item.id}
              name={item.name}
              img={item.img}
              desc={item.desc}
              price={item.price}
              rating={item.rating}
            ></FoodCart>
          )
         )
      }
    </div>
  )
}

export default FoodItems