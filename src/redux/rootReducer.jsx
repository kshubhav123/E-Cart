import { combineReducers } from "redux"
import { getData } from "./reducer/productReducer"
import { getCartData } from "./reducer/productcartReducer"

export const rootReducer=combineReducers({
    getData,getCartData
})