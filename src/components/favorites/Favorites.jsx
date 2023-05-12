
import Card from '../card/Card';
import { connect, useDispatch } from 'react-redux';
import { filterCards, orderCards } from '../../Redux/actions';
import { useState } from 'react';


const Favorites = ({ myFavorites }) => {
    const dispatch = useDispatch();
    const [aux, setAux] = useState(false); // no se está usando este auxiliar

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value));
        setAux(true);
    };

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value));
    };

    return (

        <div>
            <select onChange={handleOrder}>
                <option value='A'> Ascendente </option>
                <option value='D'> Descendente </option>
            </select>

            <select onChange={handleFilter}>
                <option value='Male'> Male </option>
                <option value='Female'> Female </option>
                <option value='Genderless'> Genderless </option>
                <option value='unknown'> unknown </option>
                <option value='allCharacters'> All Characters </option>
            </select>

            {myFavorites?.map( // conditional 
                ({ id, name, status, species, gender, origin, image, onClose }) => {
                    return (
                        <Card
                            key={id}
                            id={id}
                            name={name}
                            status={status}
                            species={species}
                            gender={gender}
                            origin={origin}
                            image={image}
                            onClose={onClose}
                        />
                    );
                }
            )}
        </div>
    );
};


const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
};

export default connect(
    mapStateToProps, // Me permite traer info del estado global y que el componente lo reciba por props.
    null
)(Favorites);