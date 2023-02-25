import React from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
function Navigation(props) {
  const navigate=useNavigate()
  return (
    <div style={{backgroundColor:'grey' ,display:"flex"}}>
        <div onClick={()=>navigate('/')}>
          Home
        </div>
        <div onClick={()=>navigate('/addProduct')}>
          Add Product
        </div>
        <div onClick={()=>navigate('/cart')}>
          Go to Cart
        </div>
        <div>
          {props.Products.cart?.length}
        </div>
    </div>
  )
}
const mapStateToProps=(state)=>{
  return {
    Products:state.ProductReducer
  }
  }

export default connect(mapStateToProps)(Navigation)