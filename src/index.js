import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './global.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
//import App from './components/App';
import App from './pages/prueba';


const contenedor = document.getElementById('app');

ReactDOM.render(<App />, contenedor);
