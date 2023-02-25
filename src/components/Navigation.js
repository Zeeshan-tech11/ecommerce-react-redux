import React from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
function Navigation(props) {
  const navigate=useNavigate()
  let cartUrl="https://static.vecteezy.com/system/resources/thumbnails/011/401/535/small/online-shopping-trolley-click-and-collect-order-logo-design-template-vector.jpg"
  return (
    <div style={{display:"flex",justifyContent:'space-between',boxShadow:'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',padding:'10px',marginBottom:'20px'}}>
      <div style={{display:'flex',alignItems:'center'}}>
        <div>
          <img src={cartUrl} width={60} height={60} style={{objectFit:'cover'}}/>
        </div>
      <div onClick={()=>navigate('/')} style={{fontSize:'1.5rem',margin:'10px'}}>
          Home
        </div>
        <div onClick={()=>navigate('/addProduct')} style={{fontSize:'1.5rem',margin:'10px'}}>
          AddProduct
        </div>
      </div>
        <div style={{display:'flex',alignItems:'center',marginRight:'20px'}}>
        <div onClick={()=>navigate('/cart')}  style={{position:'relative',marginLeft:'5px',fontSize:'1.5rem',margin:'10px'}}>
          Cart
          <div style={{position:'absolute',right:'-30px',top:'-10px', color:'purple',backgroundColor:'purple',color:'white',width:'20px',height:'20px',borderRadius:'10px',padding:'2px',fontSize:'1rem'}}>
          {props.Products.cart?.length}
        </div>
        </div>
       
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