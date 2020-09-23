import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../client/reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../client/sagas'
export default ()=>{
	const sagaMiddleware = createSagaMiddleware();
	const store = createStore(reducers, {}, applyMiddleware(sagaMiddleware));
	sagaMiddleware.run(rootSaga);
return store;
}