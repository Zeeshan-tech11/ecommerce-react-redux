import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Details from "./components/Details";
import './index.css'
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { connect } from "react-redux";
import { getAllProducts } from "./action/productAction";

function App(props) {

useEffect(()=>{
  console.log(props.Products);
  try {
       props.dispatch(getAllProducts())
  } catch (e) {
    console.error("Error adding document: ", e);
  }
},[])

// const Adddata=()=>{
//   let d=async()=>{
//     const docRef = await addDoc(collection(db, "products"), {
//       title:'Red Sofa',
//       description:"mai hun don mai hun don mai hun don mai hun don mai hun don mai hun don v mai hun don mai hun don mai hun don",
//       price:800,
//       rating:3,
//       img:'https://wakefitdev.gumlet.io/img/sofa-sets/Miami/regular/1/FORD/2.jpg?w=2880'
//     });
//   }
//   d().then(()=>{}).catch(()=>{})
// }
console.log('ddd',props.Products?.data);
const data=props.Products?.data?props.Products.data:[];
  return (
    <div style={{width:'90%',margin:'auto'}}>
      <Router>
      <Navigation/>
        <div className="container">
        <Routes>
            <Route path="/" element={<Home data={data}/>} />
            <Route path="/details" element={<Details/>} />
        </Routes>
        </div>
      </Router>
    </div>
  );
}
const mapStateToProps=(state)=>{
return {
  Products:state.ProductReducer
}
}

export default connect(mapStateToProps)(App);
