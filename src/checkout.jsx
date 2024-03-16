import React from 'react'
import "./checkout.css"
import { Toggle } from './cartSlice'
import { useSelector,useDispatch } from 'react-redux'
function Checkout() {
    let dispatch = useDispatch()
    let toggle =  useSelector(state=>state.cart.toggle)
    let cart = useSelector(state=>state.cart.cart)
  return (
    <div className={toggle?"Checkout":"nom"}>
        <div className='cross'>
            <button id='Kross' onClick={()=>dispatch(Toggle(false))}>X</button>
        </div>
              {
                cart.map((item)=>
                      <p style={{fontSize:'12px'}}>{item.title}</p>   
                )
              }
      
    </div>
  )
}

export default Checkout