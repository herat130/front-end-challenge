import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { allReducer } from './reducers';
import thunk from 'redux-thunk';
import App from './components/App';
import { HashRouter } from 'react-router-dom';
import { applyPolyfills } from './utils/polyfills';

applyPolyfills();

const middleware = applyMiddleware(thunk);
export const store = createStore(allReducer, middleware);

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App  />
        </HashRouter>
    </Provider>
    ,
    document.getElementById('app-root')
);
