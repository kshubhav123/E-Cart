import { ADD_TO_CART_PRODUCT, REMOVE_TO_CART_PRODUCT } from "../constant"

export const addToCart=(id)=>{
    
    return{
        type:ADD_TO_CART_PRODUCT,
        payload:id
    }
}

export const removeToCart=(id)=>{
    
    return{
        type:REMOVE_TO_CART_PRODUCT,
        payload:id
    }
}