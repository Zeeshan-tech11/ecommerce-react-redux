import React, { useEffect } from 'react'
import ItemList from './ItemList'
import { connect } from 'react-redux'
import { getAllProducts } from '../action/productAction'
function Home(props) {
  useEffect(()=>{
    console.log(props);
  try {
       props?.dispatch(getAllProducts())
  } catch (e) {
    console.error("Error adding document: ", e);
  }
  },[])
  return (
    <div style={{backgroundColor:'ButtonShadow'}}>
      {props.Products?.data?.map((item,index)=>(
        <div key={index}>
          <ItemList item={item} id={index}/>
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
export default connect(mapStateToProps)(Home)