import style from './detail.module.css'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Detail = ({ match, history }) => {
const { id } = useParams();
const [character, setCharacter] = useState({});

useEffect(() => {
axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
    if (data.name) {
        setCharacter(data);
    } else {
        window.alert('No hay personajes con ese ID');
        history.push('/'); 
        
        // Redireccionar a la página principal si no se encuentra un personaje con el ID dado.
    }
    });
}, [id, history]);

console.log(character);
return (
    <div className={style.detail}>
        
        <h2>{character.name}</h2>
        <img src={character.image} alt={character.name} />
        <p>Especie: {character.species}</p>
        <p>Estado: {character.status}</p>
        <p>Gender: {character.gender}</p>
        <p>Origen: {character.origin?.name}</p>
        
    </div>
);
}

export default Detail;