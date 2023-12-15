import React, { useState } from 'react'

const FoodBox = (props) => {

  // let {data,index}=props

  // let {cal,id,img,name}=data

  let {data:{cal,id,img,name},index} = props
  
  const[input,setInput] = useState(0)

  const[quantity,setQuantity] = useState(0)

  const quantityHandler = ()=>{
    setQuantity(input)
  }

  return (
    <div className='foodbox-main'>
      <div className='foodbox-main-left'>
          <img src={img} alt="" />
          <div className='foodbox-main-left-1'>
            <h1>{name}</h1>
            <h2>{cal}</h2>
          </div>
          <div className='foodbox-main-left-2'>
            <input type="number" style={{
              padding:"7px 8px" , fontSize:"larger"
            }}
            onChange={(e)=>{
              setInput(e.target.value)
              
            }}
            value={input}
            min={0}
            max={10}
            />
            <button onClick={quantityHandler} className='add'>+</button>
          </div>
      </div>
      <div className='foodbox-main-right'>
            <h4>{name} X {quantity} = {cal * quantity} Calories</h4>
            <button className='reset' onClick={()=>{
              setQuantity(0)
              setInput(0)
            }} >R E S E T</button>
      </div>
    </div>
  )
}

export default FoodBox