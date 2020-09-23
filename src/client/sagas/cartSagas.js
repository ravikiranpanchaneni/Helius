import {takeEvery, call, fork, put} from "redux-saga/effects";
import * as actions from "../actions/cartActions";
import * as  api from '../api/cartApi';

function* getCart(){
	try{
		const result  = yield call(api.getCart);
		yield put(actions.fetchCartSucess( result.data.data ))
	}catch(e){
		
	}
}

function* watchFetchCartStart(){
	yield takeEvery(actions.actionTypes.FETCH_CART_START, getCart);
} 

const cartSagas = [
	fork(watchFetchCartStart)
]

export default cartSagas;