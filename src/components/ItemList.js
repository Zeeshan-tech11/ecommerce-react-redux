import React, {} from 'react'
import { useState } from 'react';
import{TbEdit} from  "react-icons/tb";
import { MdDeleteForever } from "react-icons/md";
import {db} from '../index'
import { useNavigate} from 'react-router-dom';
import { doc, updateDoc,deleteDoc,addDoc,collection } from "firebase/firestore";
import { connect } from 'react-redux';
import { getAllProducts,addToCart,getAllCarts ,addToDetail} from '../action/productAction';


function ItemList({item,id,isCart,...props}) {
  let[index,setIndex]=useState(-1);
  let[title,setTitle]=useState(item.title);
  let[price,setPrice]=useState(item.price);
  let[description,setDescription]=useState(item.description)
  let[disable,setDisable]=useState(false)
  const ProductsRef = doc(db, "products", item.id);
  const navigate=useNavigate()
  const handleUpdate=async(e)=>{
    e.stopPropagation()
    let res=await updateDoc(ProductsRef, {
      title,
      price,
      description,
    });
    await props.dispatch(getAllProducts())
    setIndex(-1)
  }
  const handleCancel=(e)=>{
    e.stopPropagation()
     setIndex(-1)
     setTitle(item.title)
  }
  const handleAddToCart=async(e)=>{
    e.stopPropagation()
    try {
        setDisable(true)
        const docRef = await addDoc(collection(db, "cart"),item);
        setDisable(false)
        window.alert('added to cart')
        await props.dispatch(getAllCarts())
    } catch (error) {
        
    }   
  }
  const handleDelete=async(e)=>{
    e.stopPropagation()
  try {
    await deleteDoc(doc(db, "products", item.id));
    await props.dispatch(getAllProducts())
  } catch (error) {
    
  }
  }
  const handleRemoveFromCart=async(e)=>{
    e.stopPropagation()
    try {
      setDisable(true)
      await deleteDoc(doc(db, "cart", item.id));
      setDisable(false)
      await props.dispatch(getAllCarts())
    } catch (error) {
      
    }
  }
  const handleDivClicked=async(item)=>{
    try {
      await props.dispatch(addToDetail(item))
      console.log('innnn',props.Products);
      navigate('/detail')
    } catch (error) {
      
    }
  }
  return (
    <div style={{display:'flex',padding:'10px',justifyContent:'space-between',alignItems:'center'}}>
        <div style={{display:'flex',width:'40%'}} >
            <div style={{width:'100%',marginRight:'10px'}} onClick={()=>handleDivClicked(item)}>
            <img  src={item.img} width={'100%'} height={'200'}/>
            </div>
            <div style={{display:'flex',flexDirection:'column',justifyContent:'center', marginTop:'0px',marginRight:'10px',maxWidth:'40%'}}>
            <div style={{fontSize:'1.5rem',marginBottom:'10px',width:'100%'}}>
                {index==id ?<input type='text' value={title} onChange={(e)=>setTitle(e.target.value)} />:item.title}
            </div>
            <div style={{fontSize:'1.5rem',marginBottom:'10px',width:'100%'}}>
            Rs : {index==id ?<input type='text' value={price} onChange={(e)=>setPrice(e.target.value)} />:item.price}
            </div>
            
            </div>
        </div>
        <div style={{width:'60%',marginLeft:'10px'}}>
                <div style={{fontSize:'1.2rem',marginBottom:'20px'}}>
                    {index==id?
                    <input type='text' value={description} onChange={(e)=>setDescription(e.target.value)}/>
                    :item.description}
                </div>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                <div>
                  {index==id?
                  <>
                    <button style={{padding:'10px',borderRadius:'8px', margin:'10px',border:'none',backgroundColor:'skyblue',color:'white'}} onClick={handleUpdate}>UPDATE</button>
                    <button style={{padding:'10px',borderRadius:'8px', margin:'10px',border:'none',backgroundColor:'grey',color:'white'}}onClick={handleCancel}>CANCEL</button>
                    </>
                    :
                    isCart?
                    <button disabled={disable} style={{padding:'10px',borderRadius:'8px', margin:'10px',border:'none',backgroundColor:'grey',color:'white',marginLeft:0}} onClick={handleRemoveFromCart}>REMOVE FROM CART</button>
                    :
                    <button disabled={disable} style={{padding:'10px',borderRadius:'8px', margin:'10px',border:'none',backgroundColor:disable?'grey':'purple',color:'white',marginLeft:0}} onClick={handleAddToCart}>ADD TO CART</button>
                  }
                </div>
                {isCart?null
                :
                <div>
                     <TbEdit size={40} style={{margin:'10px'}} color={id==index?'purple':'skyblue'} onClick={(e)=>{e.stopPropagation();setIndex(id)}}/>
                     <MdDeleteForever size={40} style={{margin:'10px'}} color={'red'} onClick={handleDelete}/>
                </div>
                }
                
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

export default connect(mapStateToProps)(ItemList)