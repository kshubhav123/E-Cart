import { GET_CATEGORIES_PRODUCT_DATA, GET_CATEGORY_PRODUCT_DATA, GET_PRODUCT_DATA,  GET_SEARCH_PRODUCT_DATA,  SET_LOADING } from "../constant";

export const getProductList = () => {
    return {
        type: GET_PRODUCT_DATA,
    }
}

export const catgoriesProduct = () => {
    return ({
        type: GET_CATEGORIES_PRODUCT_DATA,
    })
}

export const getCatgoryProduct = (slug) => {
    return ({
        type: GET_CATEGORY_PRODUCT_DATA,
        payload:slug
    })
}

export const searchProduct = (query) => {
    return ({
        type: GET_SEARCH_PRODUCT_DATA,
        payload:query
    })
}


export const setLoading = (status) => {
    return {
        type: SET_LOADING,
        payload: status
    }
}