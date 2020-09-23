import {takeEvery, call, fork, put} from "redux-saga/effects";
import * as actions from "../actions/booksActions";
import * as  api from '../api/booksApi';

function* getBooks(){
	try{
		const result  = yield call(api.getBooks);
		yield put(actions.fetchBooksSucess( result.data.data ))
	}catch(e){
		
	}
}

function* watchFetchBooksStart(){
	yield takeEvery(actions.actionTypes.FETCH_BOOKS_START, getBooks);
} 

const booksSagas = [
	fork(watchFetchBooksStart)
]

export default booksSagas;