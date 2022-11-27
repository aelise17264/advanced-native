import {createStore, compose, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import {AsyncStorage} from 'react-native';
import reducers from '../reducers';

const store = createStore(() => [], {}, applyMiddleware());

persistStore(store, {storage: AsyncStorage, whitelist: ['likedJobs']});

export default store;
