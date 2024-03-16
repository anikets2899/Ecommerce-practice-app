import React from 'react'
import { useState,useEffect } from 'react'
import './ecommerce.css';
import { UseDispatch,useSelector } from 'react-redux'
import CardComponent from './CardComponent';
function Ecommerce() {
  let cards  =  useSelector(state=>state.cart.productdata)
//     async function data(){
//         let resp = await fetch('https://fakestoreapi.com/products');
//         let json = await resp.json()
//         // console.log(json) 
//         setCard(json);
//       }
    // const [card,setCard] = useState([]);  
    //  useEffect(()=>{
    //      data()
    //  },[]) 
  return (
    <div className='Ecommerce'>
        {
            cards.map((item)=>(
              <CardComponent item={item} id={item.id} key={item.id} title={item.title}  image={item.image} price={item.price}/>

            ))
        }

    </div>
  )
}

export default Ecommerce