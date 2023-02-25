import { getAllProductAction ,addToCartAction,getAllCartsAction,addToDetailAction} from "./ActionCreator";
import { getFirestore ,collection, addDoc,getDocs} from "firebase/firestore";
import { db } from "../index";




export const getAllProducts=()=>{
    let data=[]
    return async(dispatch)=>{
        try {
            const querySnapshot = await getDocs(collection(db, "products"));
            querySnapshot.forEach((doc) => {

               data=[...data , {...doc.data(),id:doc.id}];
         });
         console.log('thisss',data);
         dispatch(getAllProductAction(data))

        } catch (error) {
            console.log('error in getAllProducts',error);
        }
        
    }
}
export const addToCart=(data)=>{
   return async(dispatch)=>{
    try {
        dispatch(addToCartAction(data))
    } catch (error) {
        
    }
   }
}

export const getAllCarts=()=>{
    let cart=[]
    return async (dispatch)=>{
        try {
            const querySnapshot = await getDocs(collection(db, "cart"));
            querySnapshot.forEach((doc) => {
    
               cart=[...cart , {...doc.data(),id:doc.id}];
         });
         console.log('thisss cart',cart);
           dispatch(getAllCartsAction(cart))
        } catch (error) {
            console.log('error in getAllProducts',error);
        }
    }
    
}
export const addToDetail=(data)=>{
    return async(dispatch)=>{
        try {
            await dispatch(addToDetailAction(data))
        } catch (error) {
            
        }
    }
}
