import React from 'react'
import { connect } from 'react-redux'
import { doc, updateDoc,deleteDoc,addDoc,collection } from "firebase/firestore";
import {db} from '../index'
import { getAllCarts } from '../action/productAction';
function Details(props) {
  const{detail}=props.Products;
  let[disable,setDisable]=React.useState(false)
  const handleAddToCart=async()=>{
    try {
        setDisable(true)
        const docRef = await addDoc(collection(db, "cart"),detail);
        setDisable(false)
        window.alert('added to cart')
        await props.dispatch(getAllCarts())

    } catch (error) {
        
    }   
  }
  return (
    <div style={{padding:'10px', width:'50%',margin:'auto',marginTop:'40px',boxShadow:'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
      <div>
        <img src={detail.img} width={400} height={400}/>
      </div>
      <div style={{fontSize:'1.5rem'}}>
        {detail.description}
      </div>
      <div style={{fontSize:'1.5rem'}}>
        Rs :{detail.price}
      </div>
      <button disabled={disable} style={{padding:'10px',borderRadius:'8px', margin:'10px',border:'none',backgroundColor:disable?'grey':'purple',color:'white',marginLeft:0}} onClick={handleAddToCart}>ADD TO CART</button>
    </div>
  )
}

const mapStateToProps=(state)=>{
  return {
    Products:state.ProductReducer
  }
  }
export default connect(mapStateToProps) (Details)