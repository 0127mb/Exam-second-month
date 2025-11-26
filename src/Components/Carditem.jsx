import React, { useState } from 'react'
import './Carditem.css'


export default function Carditem(props) {
    const [counter,setcounter] = useState(1)
    function plus (){

    setcounter (counter + 1)


    }
        function minus (){

       if( counter > 1  ){
setcounter (counter - 1)
       }

    }
  return (
    <>
    <div className="Item">
        <button className='remove'>{props.remove}</button>
        <img src={props.img} alt="" />
        <h2>{props.name}</h2>
        <div className="purches">
            <span className='current'>{props.price}</span>
            <p className='discount'>{props.discount}</p>
           <div className="counter">
          <button onClick={ minus} disabled ={counter === 1}          style={{
    backgroundColor: counter > 1  ? "red" : "rgba(255, 255, 255, 0.12)",
    color: "white",
  }} className='minus' > {props.button2}</button>
            <div className="result">{counter}</div>
          
                 <button onClick={plus} className='plus'>{props.button1}</button>
   
            
           
           </div>
        </div>

    </div>
     
    
    </>
  )
}
