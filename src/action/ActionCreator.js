import { GET_ALL_PRODUCTS,ADDED_TO_CART } from "./ActionType"


export const getAllProductAction=(data)=>{
    return(
        {
            type:GET_ALL_PRODUCTS,
            data
        }
    )
    
}

export const addToCartAction=(data)=>{
    return (
        {
            type:ADDED_TO_CART,
            cartData:data
        }
    )
}