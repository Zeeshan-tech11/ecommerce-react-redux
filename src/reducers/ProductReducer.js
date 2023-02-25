import { GET_ALL_PRODUCTS,ADDED_TO_CART,GET_ALL_CARTS ,ADDED_TO_DETAILS} from "../action/ActionType";
let initialState={
    data:[],
    cart:[],
    detail:{}
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
    case ADDED_TO_DETAILS:
        return ({
            ...state,
            detail:action.detail
        }
        )
    case ADDED_TO_CART:
        return(
           {
            ...state,
            cart:[action.cartData,...state.cart]
           }
        )       
    case GET_ALL_CARTS:
        return({
           ...state,
           cart:[...action.cart]
        }
        )
    default:
        return state;
}
}