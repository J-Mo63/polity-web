// React Base
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

// Redux & Router
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

// Stylesheets
import './style/article.css';
import './style/global.css';
import './style/text.css';

// App & Components
import App from './components/App';
import reducers from './reducers';
const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    , document.querySelector('.content')
);
registerServiceWorker();
