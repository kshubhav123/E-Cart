import { SET_CATEGORIES_PRODUCT_DATA, SET_LOADING, SET_PRODUCT_DATA } from "../constant";

const initialState = {
    products: [],
    loading: true,
    categories:[]
}

export const getData = (data = initialState, action) => {        
    switch (action.type) {
        case SET_PRODUCT_DATA:
            return {
                ...data,
                products: action.payload
            }
        case SET_LOADING:
            return {
                ...data,
                loading: action.payload
            }
        case SET_CATEGORIES_PRODUCT_DATA:
            return {
                ...data,
                categories: action.payload
        }
        default:
            return data;
    }
}








