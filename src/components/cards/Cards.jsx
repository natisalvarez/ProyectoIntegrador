import Card from '../card/Card';
//import style from './cards.module.css';

export default function Cards(props) {
   const {characters} = props;
   return(
      <div>
         {characters.map((character) => (
            <Card
            id={character.id}
            key={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin}
            image={character.image}
            onClose={props.onClose}
            /> 
         ))}

      </div>
   )
}
