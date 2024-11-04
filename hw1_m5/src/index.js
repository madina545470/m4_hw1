import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import reducer from './redux/reducer';

ReactDOM.render(
    <Provider store={reducer}>
        <App />
    </Provider>,
    document.getElementById('root')
);
