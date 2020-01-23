import { createStore, combineReducers } from 'redux';
import global from './reducers/global';

const reducers = combineReducers({
    global
});

const store = createStore(reducers);

export default store;