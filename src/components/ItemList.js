import React, {} from 'react'
import { useState } from 'react';
import{TbEdit} from  "react-icons/tb";
import { MdDeleteForever } from "react-icons/md";
import {db} from '../index'
import { doc, updateDoc,deleteDoc } from "firebase/firestore";
import { connect } from 'react-redux';
import { getAllProducts,addToCart } from '../action/productAction';
function ItemList({item,id,...props}) {
  let[index,setIndex]=useState(-1);
  let[title,setTitle]=useState(item.title);
  let[price,setPrice]=useState(item.price);
  let[description,setDescription]=useState(item.description)
  const ProductsRef = doc(db, "products", item.id);
   console.log('ppp',ProductsRef);

  const handleUpdate=async()=>{
    let res=await updateDoc(ProductsRef, {
      title,
    });
    await props.dispatch(getAllProducts())
    setIndex(-1)
  }
  const handleCancel=()=>{
     setIndex(-1)
     setTitle(item.title)
  }
  const handleAddToCart=async()=>{
     try {
      await props.dispatch(addToCart(item))
      console.log('in cet',props.Products);
     } catch (error) {
      
     }
  }
  const handleDelete=async()=>{
  try {
    await deleteDoc(doc(db, "products", item.id));
    await props.dispatch(getAllProducts())
    setIndex(-1)
  } catch (error) {
    
  }
  }
  return (
    <div style={{display:'flex',margin:'10px',justifyContent:'space-between'}}>
        <div style={{display:'flex'}}>
            <div>
            <img src='https://wakefitdev.gumlet.io/img/sofa-sets/Miami/regular/1/FORD/2.jpg?w=2880' width={200} height={200}/>
            </div>
            <div style={{display:'flex',flexDirection:'column',marginTop:'50px',marginLeft:'20px'}}>
            <div style={{fontSize:'30px',marginBottom:'10px'}}>
                {index==id ?<input type='text' value={title} onChange={(e)=>setTitle(e.target.value)} />:item.title}
            </div>
            <div style={{fontSize:'20px',color:'GrayText'}}>
               Rs : {item.price}
            </div>
            </div>
        </div>
        <div style={{width:'60%',marginTop:'40px'}}>
                <div style={{fontSize:'20px',margin:'10px',display:'flex'}}>
                    {item.description}
                </div>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                <div>
                  {index==id?
                  <>
                    <button style={{padding:'10px',borderRadius:'8px', margin:'10px',border:'none',backgroundColor:'skyblue',color:'white'}} onClick={handleUpdate}>UPDATE</button>
                    <button style={{padding:'10px',borderRadius:'8px', margin:'10px',border:'none',backgroundColor:'grey',color:'white'}}onClick={handleCancel}>CANCEL</button>
                    </>
                    :
                    <button style={{padding:'10px',borderRadius:'8px', margin:'10px',border:'none',backgroundColor:'purple',color:'white'}} onClick={handleAddToCart}>ADD TO CART</button>
                  }
                </div>
                <div>
                     <TbEdit size={40} style={{margin:'10px'}} color={id==index?'purple':'skyblue'} onClick={()=>setIndex(id)}/>
                     <MdDeleteForever size={40} style={{margin:'10px'}} color={'red'} onClick={handleDelete}/>
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

export default connect(mapStateToProps)(ItemList)