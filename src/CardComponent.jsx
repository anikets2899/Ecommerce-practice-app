import React from 'react'
import './CardComponent.css';
import { useDispatch,useSelector } from 'react-redux';
import { addToCart } from './cartSlice';
function CardComponent({title,image,price,id,item}) {
  let dispatch  = useDispatch()
  return (
    <div className='CardComponent'>
        <img src={image}/>
        <h3>Name: {title}</h3>
        <p>Price: {price}</p>
        <button onClick={()=>dispatch(addToCart(item))}>Add to Cart</button>
    </div>
  )
}

export default CardComponent