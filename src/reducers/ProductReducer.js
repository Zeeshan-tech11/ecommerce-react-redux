import { GET_ALL_PRODUCTS,ADDED_TO_CART } from "../action/ActionType";
let initialState={
    data:[],
    cart:[]
}

export const ProductReducer=(state=initialState,action)=>{
switch (action.type) {
    case GET_ALL_PRODUCTS:
        return (
            {
                ...state,
                data:[...action.data],
            }
        )
    case ADDED_TO_CART:
        return(
           {
            ...state,
            cart:[action.cartData,...state.cart]
           }
        )       

    default:
        return state;
}
}