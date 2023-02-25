import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getAllCarts } from '../action/productAction'
import ItemList from './ItemList'
function Cart(props) {
    
    useEffect(()=>{
    props.dispatch(getAllCarts())
    },[])
    let data=props.Products.cart?props.Products.cart:[]
  return (
    <div style={{backgroundColor:'InfoBackground',marginTop:'20px'}}>
      {data.map((item,index)=>(
        <div key={index}>
          <ItemList item={item} id={index} isCart={true}/>
        </div>
      ))}
    </div>
  )
}
const mapStateToProps=(state)=>{
    return {
      Products:state.ProductReducer
    }
    }
export default connect(mapStateToProps)(Cart)