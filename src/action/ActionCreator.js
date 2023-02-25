import { GET_ALL_PRODUCTS,ADDED_TO_CART ,GET_ALL_CARTS,ADDED_TO_DETAILS} from "./ActionType"


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
export const getAllCartsAction=(data)=>{
    return {
        type:GET_ALL_CARTS,
        cart:data
    }
}

export const addToDetailAction=(data)=>{
    return {
        type:ADDED_TO_DETAILS,
        detail:data
    }
}