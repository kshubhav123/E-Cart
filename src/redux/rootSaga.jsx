import { all } from 'redux-saga/effects';
import productSaga from './saga/productSaga';
import productCartSaga from './saga/producCartSaga';


export default function* rootSaga() {
  yield all([
    productSaga(),
    productCartSaga(),
  ]);
}