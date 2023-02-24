import { getAllProductAction ,addToCartAction} from "./ActionCreator";
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