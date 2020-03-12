import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore,applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk'
import reducer from './reducers';
import {Provider} from "react-redux";

// Bootstrap
import './style/bootstrap.min.css';

//CSS
import './index';
import './style/Style.css';
import './style/Reset.css';


const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);
const store = createStoreWithMiddleware(reducer);


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

