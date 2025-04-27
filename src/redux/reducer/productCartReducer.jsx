import { REMOVE_TO_CART_PRODUCT, SET_ADD_TO_CART_PRODUCT } from "../constant";

const initialState = {
    cart: JSON.parse(localStorage.getItem('cart')) || []
}

export const getCartData = (data = initialState, action) => {
    switch (action.type) {
        case SET_ADD_TO_CART_PRODUCT:
            let duplicate = data.cart.find((cart) => cart.id === action.payload.id)
            if (duplicate) {
                localStorage.setItem('cart', JSON.stringify(data.cart));
                return {
                    cart: [...data.cart]
                }
            } else {
                const updatedCart = [...data.cart, action.payload];
                localStorage.setItem('cart', JSON.stringify(updatedCart));
                return {
                    cart: updatedCart
                }
            }
        case REMOVE_TO_CART_PRODUCT:
            let cartData = JSON.parse(localStorage.getItem('cart'));
            const updatedCart = cartData.filter((cart) => cart.id !== action.payload)
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            return {
                cart: updatedCart
            }
            default:
            return data;
    }
}