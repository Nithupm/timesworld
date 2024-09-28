import { createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import countryReducer from '../reducers/countryReducer';

const rootReducer = combineReducers({
  countries: countryReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
