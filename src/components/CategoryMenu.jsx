import React, { useEffect, useState } from 'react'
import FoodData from '../data/foodData';
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from '../redux/Slice/CategorySlice';
const CategoryMenu = () => {
    const dispatch = useDispatch()

    const curr=useSelector((state)=>state.category.category)
    const [categories, setCategories] = useState([]);
    const Categories = () => {
        const items = [...new Set(FoodData.map((food) => food.category))];
        setCategories(items);
    }

    useEffect(() => {
        Categories();
        

    }, [])


    return (
        <div className='menu' >
            <h3 className='menu-h3'>Find the best food</h3>
             <div className='menu-opt'>
                <button onClick={() => dispatch(setCategory("All")) } className={curr==="All" ?"menu-sel" : "menu-unsel"}>All</button>
            
            {
                categories.map((food, index) => {
                    return (
                            <button onClick={() => dispatch(setCategory(food)) }  key={index} className={curr===food ?"menu-sel" : "menu-unsel"}>{food}</button>
                         )
                }
                )
            }

        </div>
        </div>
    )
}

export default CategoryMenu;