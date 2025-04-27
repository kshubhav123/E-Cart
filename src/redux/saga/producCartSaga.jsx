import { put, takeEvery } from "redux-saga/effects";
import { ADD_TO_CART_PRODUCT, SET_ADD_TO_CART_PRODUCT } from "../constant";

function* addToCartProd(id) {
    const data = yield fetch(`https://dummyjson.com/products/${id.payload}`)
    const result = yield data.json()
    yield put({type:SET_ADD_TO_CART_PRODUCT,payload:result})
}

function* productCartSaga() {
    yield takeEvery(ADD_TO_CART_PRODUCT, addToCartProd)
}

export default productCartSaga