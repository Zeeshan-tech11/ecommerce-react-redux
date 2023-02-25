import React,{useState} from 'react'
import { getAllProducts } from '../action/productAction'
import {db} from '../index'
import {collection, addDoc} from "firebase/firestore";
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
function AddProduct(props) {
    let [img,setImage]=useState("")
    let[title,setTitle]=useState('')
    let[description,setDescription]=useState('')
    let[price,setPrice]=useState('')
    let navigate=useNavigate()
    const handleAddToProducts=async()=>{
        let data={img,title,description,price}
        try {
            const docRef = await addDoc(collection(db, "products"),data);
            await props.dispatch(getAllProducts())
            window.alert('added to database succesfully')
            navigate('/')
        } catch (error) {
            
        }   
    }
  return (
    <div style={{width:'60%',backgroundColor:'red',margin:'auto'}}>
        <div style={{backgroundColor:'green',display:'flex',justifyContent:'center'}}>
            ADD PRODUCT
        </div>
        <div style={{margin:'10px',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <input style={{width:'80%',padding:'2%',borderWidth:'2px',borderColor:'ActiveBorder'}} type='text' value={img} onChange={(e)=>setImage(e.target.value)} placeholder={'Image Url'}/>
        </div>
        <div style={{margin:'10px',display:'flex',justifyContent:'center'}}>
            <input style={{width:'80%',padding:'2%',borderWidth:'2px',borderColor:'ActiveBorder'}} type='text' value={title} onChange={(e)=>setTitle(e.target.value)} placeholder={'Name of The Product'}/>
        </div>
        <div style={{margin:'10px',display:'flex',justifyContent:'center'}}>
            <input style={{width:'80%',padding:'2%',borderWidth:'2px',borderColor:'ActiveBorder'}} type='text' value={description} onChange={(e)=>setDescription(e.target.value)} placeholder={'Describe the Product'}/>
        </div>
        <div style={{margin:'10px',display:'flex',justifyContent:'center'}}>
            <input style={{width:'80%',padding:'2%',borderWidth:'2px',borderColor:'ActiveBorder'}} type='text' value={price} onChange={(e)=>setPrice(e.target.value)} placeholder={'Price'}/>
        </div>
        <div style={{display:'flex',justifyContent:'center'}}>
        <button style={{padding:'10px',borderRadius:'8px', margin:'10px',border:'none',backgroundColor:'purple',color:'white'}} onClick={()=>{handleAddToProducts()}}>ADD TO PRODUCTS</button>
        </div>
    </div>
  )
}

const mapStateToProps=(state)=>{
    return {
      Products:state.ProductReducer
    }
    }
export default connect(mapStateToProps)(AddProduct)