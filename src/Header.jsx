import React from 'react'
import "./Header.css";
import { Toggle } from './cartSlice';
import { useDispatch,useSelector } from 'react-redux'
function Header() {
  let dispatch = useDispatch()
  let toggle = useSelector(state=>state.cart.toggle)
  return (
    <div className='Header'>
        <p className='logo'>Ecom-App</p>
        <div className="bot">
        <button className='cartbtn' onClick={()=>dispatch(Toggle(true))}>Cart</button>
        </div>
    </div>
  )
}

export default Header