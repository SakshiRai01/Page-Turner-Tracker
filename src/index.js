import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {Provider} from './context/books';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider>
    <App/>
    </Provider>
);