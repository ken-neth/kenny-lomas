
import { createStore, applyMiddleware } from "redux";
import reducers from '../reducers/index.js'
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

const logger = createLogger({
    collapsed: true
  })
  

const store = createStore(reducers, applyMiddleware(thunk,logger))

export default store