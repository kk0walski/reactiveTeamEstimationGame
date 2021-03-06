import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import Board from './components/Board';
import initialData from './initial-data';
import * as serviceWorker from './serviceWorker';
import './styles/styles.scss';

const store = configureStore();

store.dispatch({
    type: "SET_BOARD",
    payload: {
        data: initialData
    }
})

render(
    <Provider store={store}>
        <Board />
    </Provider>,
    document.getElementById('root')
)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
