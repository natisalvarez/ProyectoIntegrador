import { REMOVE_FAV, ADD_FAV, FILTER, ORDER} from "./action-typs";

// en este archivo la función es poder guardar los personajes favoritos sin perder el estado de personajes.
// Character viene por payload desde action.

const intialState = { //no es una función
    myFavorites: [],
    allCharactersFav: []
};

const reducer = (state = intialState, { type, payload }) => {  // podemos pasar la acción directamente sin desestructurar sus propiedes, escribiendo "action", simplemente.
    switch (type) {  //sino desesctruturamenos se escribe action.type

    case ADD_FAV:
        return {
            ...state,
            myFavorites: [...state.myFavorites, payload], 
            // en este caso necesitamos el objeto entero que es payload (personaje), no vamos a desestructurarlo
            allCharactersFav: [...state.myFavorites, payload]
        };

        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: state.myFavorites.filter(
                    (fav) => fav.id !== Number (payload)
                ),
               
                //filtrame los personajes que tenga un id distinto al que te paso por payload 
                //(porque esos serían los que quiero borrar)
                // el id se lo pasamos por actions.js 
                //devuelve un array con los no eliminados 
            };

            case FILTER:
                const allCharactersFiltered = state.allCharactersFav.filter(character => character.gender === payload)
                return {
                    ...state,
                    myFavorites: allCharactersFiltered
                };
    
            case ORDER:
                const allCharactersFavCopy = [...state.allCharactersFav];
                return {
                    ...state,
                    myFavourites:
                        payload === 'A'
                            ? allCharactersFavCopy.sort((a, b) => a.id - b.id)
                            : allCharactersFavCopy.sort((a, b) => b.i - a.id)
                }
    
            default: return { ...state }
        }
    };
    
    //. le pasamos el estado inicial por defecto.
    
    export default reducer;


/*
const intialState = {
    myFavourites: [],
    allCharactersFav: []
}

const reducer = (state = intialState, { type, payload }) => {  // podemos pasar la acción directamente sin desestructurar sus propiedes, escribiendo "action", simplemente.
    switch (type) {  //sino desesctruturamenos se escribe action.type
    case ADD_FAV:
        return {
            ...state,
            myFavourites: [...state.allCharactersFav, payload], // en este caso necesitamos el objeto entero que es payload (personaje), no vamos a desestructurarlo
            allCharactersFav: [...state.allCharactersFav, payload]
        };

        case REMOVE_FAV:
            return {
                ...state,
                myFavourites: state.myFavourites.filter(fav => fav.id === !payload)
                //filtrame los personajes que tenga un id distinto al que te paso por payload (porque esos serían los que quiero borrar)
                // el id se lo pasamos por actions.js 
                //devuelve un array con los no eliminados 
            };


    default: return { ...state }
}
}

export default reducer; 

/* 

import { REMOVE_FAV, ADD_FAV, FILTER, ORDER } from "./action-typs";

const intialState = {
    myFavourites: [],
    allCharactersFav: []
}

const reducer = (state = intialState, { type, payload }) => {  // podemos pasar la acción directamente sin desestructurar sus propiedes, escribiendo "action", simplemente.
    switch (type) {  //sino desesctruturamenos se escribe action.type
        case ADD_FAV:
            return {
                ...state,
                myFavourites: [...state.allCharactersFav, payload], // en este caso necesitamos el objeto entero que es payload (personaje), no vamos a desestructurarlo
                allCharactersFav: [...state.allCharactersFav, payload]
            };

        case REMOVE_FAV:
            return {
                ...state,
                myFavourites: state.myFavourites.filter(fav => fav.id === !payload)
                //filtrame los personajes que tenga un id distinto al que te paso por payload (porque esos serían los que quiero borrar)
                // el id se lo pasamos por actions.js 
                //devuelve un array con los no eliminados 
            };

        case FILTER:
            const allCharactersFiltered = state.allCharactersFav.filter(character => character.gender === payload)
            return {
                ...state,
                myFavourites:
                payload === 'allCharacters'
                ? [...state.allCharactersFav]
                :allCharactersFiltered
            };

        case ORDER:
            const allCharactersFavCopy = [...state.allCharactersFav];
            return {
                ...state,
                myFavourites:
                    payload === 'A'
                        ? allCharactersFavCopy.sort((a, b) => a.id - b.id)
                        : allCharactersFavCopy.sort((a, b) => b.i - a.id)
            }

        default: return { ...state }
    }
};

//. le pasamos el estado inicial por defecto.

export default reducer; 

*/