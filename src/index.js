import React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware, compose} from "redux";
import {Provider} from "react-redux";
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    composeEnhancer(applyMiddleware(reduxThunk))
);

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.querySelector("#root")
);