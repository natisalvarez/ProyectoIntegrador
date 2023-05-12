import {createStore, applyMiddleware, compose} from 'redux';
import reducer from './reducer';
import thunkMiddleware from 'redux-thunk'


const composeEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

// esta linea es para conectar don la extensnion de nuestro navegador => REDUX Developer tools

export const store = createStore( //CreateStore ejecutado que en el primer parámetro recibe al reducer
    reducer, 
    composeEnhacer(applyMiddleware(thunkMiddleware))); 

   // esta linea nos permite hacer peticiones a un servidor externo
    //Milddleware es nuestro traductor

  