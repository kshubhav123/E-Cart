import { put, takeEvery } from "redux-saga/effects";
import { GET_CATEGORIES_PRODUCT_DATA, GET_CATEGORY_PRODUCT_DATA, GET_PRODUCT_DATA, GET_SEARCH_PRODUCT_DATA, SET_CATEGORIES_PRODUCT_DATA, SET_LOADING, SET_PRODUCT_DATA } from "../constant";

function* getProducts() {
    yield put({ type: SET_LOADING, payload: true })
    const data = yield fetch("https://dummyjson.com/products")
    const result = yield data.json()
    yield put({ type: SET_PRODUCT_DATA, payload: result.products })
    yield put({ type: SET_LOADING, payload: false })
}


function* getCatProducts() {
    const data = yield fetch("https://dummyjson.com/products/categories")
    const result = yield data.json()
    yield put({ type: SET_CATEGORIES_PRODUCT_DATA, payload: result })
}

function* getCatProduct(slug) {
    const data = yield fetch(`https://dummyjson.com/products/category/${slug.payload}`)
    const result = yield data.json()
    yield put({ type: SET_PRODUCT_DATA, payload: result.products })
}

function* getSearchProduct(query) {
    const data = yield fetch(`https://dummyjson.com/products/search?q=${query.payload}`)
    const result = yield data.json()    
    yield put({ type: SET_PRODUCT_DATA, payload: result.products })
}

function* productSaga() {
    yield takeEvery(GET_PRODUCT_DATA, getProducts)
    yield takeEvery(GET_CATEGORIES_PRODUCT_DATA, getCatProducts)
    yield takeEvery(GET_CATEGORY_PRODUCT_DATA, getCatProduct)
    yield takeEvery(GET_SEARCH_PRODUCT_DATA, getSearchProduct)
}

export default productSaga