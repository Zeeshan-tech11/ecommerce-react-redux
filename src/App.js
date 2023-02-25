import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Details from "./components/Details";
import './index.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import AddProduct from "./components/AddProduct";
import Cart from "./components/Cart";


function App() {
  
  return (
    <div style={{width:'90%',margin:'auto'}}>
      <Router>
      <Navigation/>
        <div className="container">
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/detail" element={<Details/>} />
            <Route path="/addProduct" element={<AddProduct/>}/>
            <Route path="/cart" element={<Cart/>}/>
        </Routes>
        </div>
      </Router>
    </div>
  );
}


export default (App);
