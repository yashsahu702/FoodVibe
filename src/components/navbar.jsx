import React from 'react'
import { useDispatch } from 'react-redux';
import { setSearchItem } from '../redux/Slice/SearchSlice';
const Navbar = () => {
  const dispatch = useDispatch();
    function changeHandler(e){
      dispatch(setSearchItem(e.target.value));
    }
  return (
    <div className='nav'>
        <div>
            <h3 className='date'>{new Date().toUTCString().slice(0,16)}</h3>
            <h1 className='heading'>FoodVibe</h1>
        </div>
        <div>
        <input type="search" name="search" placeholder='Search here' autoComplete="off" className='search'  onChange={changeHandler}/>
        </div>
    
    </div>
  )
}

export default Navbar