import { REMOVE_FAV, ADD_FAV, FILTER, ORDER } from "./action-typs";

export const addFav = (character) => { // funciones que retornar objetos
    return { type: ADD_FAV, payload: character }
}

export const removeFav = (id) => { // funciones que retornar objetos
    return { type: REMOVE_FAV, payload: id } // las constantes se escriben en mayusculas
};

export const filterCards = (gender) => {
    return { type: FILTER, payload: gender } 
};

export const orderCards = (order) => {
    return { type: ORDER, payload: order } 
};


// se puede hacer export default; */