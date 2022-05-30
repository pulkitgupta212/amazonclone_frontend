import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { cardApi5, cardApi6 } from '../../src/services/getapi/getApi'
import {  useDispatch } from 'react-redux';
import { deleteCartItems } from './Comman/Redux/cartReducerCumActions';

export default function Cardshow() {
  const [cartData, setCartData] = useState([])
 
const dispatch = useDispatch();

  useEffect( () => {
    gitList()

  }, [])
  console.log(cartData);
  const gitList=()=> {
    cardApi5().then(res => { setCartData(res.data.data) })

  }
  console.log(cartData);
  const deleteItem = async (id) => {
    dispatch(deleteCartItems(id))
    gitList()
  }


  return (<React.Fragment>
    <div style={{ backgroundColor: 'white', height: 'auto', width: '100%', display: 'flex', flexDirection: 'column' }}>
      {cartData.map((val, key) => {
        return (<React.Fragment key={key}>
          <div key={key} style={{ display: 'flexlex', justifyContent: 'center', height: 'auto', width: '100%' }}>
            <h3>{val.title}</h3>
            <img style={{ height: '200px', width: '200px' }} src={val.image} />
            <h1> <b>Price:  {val.price}</b></h1>
          </div>

          <div style={{ paddingTop: '20px', marginLeft: '200px', height: '100%' }}>
            <button onClick={() => { deleteItem(val._id) }}>Delete</button>

          </div>
          <div style={{width:'300px',height:'100px'}}>
            <button onClick={() => {deleteItem(val._id)}} style={{width:'100px'}}>-</button>
            <button style={{width:'100px'}}>+</button>
          </div>

        </React.Fragment>

        )

      })}

    </div>




  </React.Fragment>

  )
}
