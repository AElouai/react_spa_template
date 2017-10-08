import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'

import 'bulma/css/bulma.css'

import RootContainer from './containers/Root.container';
import configureStore from './redux/store/configureStore';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store={configureStore()}>
        <BrowserRouter>
            <RootContainer />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'),
);
registerServiceWorker();
