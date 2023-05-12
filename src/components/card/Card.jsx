import style from './card.module.css'
import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../../Redux/actions';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';


function Card(props) {

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false);
         removeFav(props.id); // 
      } else {
         setIsFav(true)
         addFav(props.character)
      }
   }

   useEffect(() => {
      props.myFavorites.forEach((fav) => {
        if (fav.id === props.id) {
          setIsFav(true);
        }
      });
    }, [props.myFavorites, props.id]);
   

   return (
      <div className={style.card}>

      <button onClick={handleFavorite}>{isFav ? '❤️' : '🤍'}</button>

         <div className={style.circle}></div>
         <div className={style.circle}></div>
         <div className={style.cardin}></div>

         <img src={props.image} alt='' class={style.foto} />

         <button onClick={()=>{ props.onClose (props.id)}}>X</button>
         <Link to={`/detail/${ props.id }`} >
            <h3 className="card-name">{ props.name }</h3>
         </Link>
       
         <h2>{props.status}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <h2>{props.removeFav}</h2>
         <h2>{props.addFav}</h2>
         <h2>{props.myFavorites}</h2>
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => { dispatch(addFav(character)) },
      removeFav: (id) => { dispatch(removeFav(id)) } // el que se despacha es que se importa, el otro id es por props
   }
};

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
};


export default connect(
   mapStateToProps,
   mapDispatchToProps, // vamos a conectar Card a las dos funciones y exportarla para conectarla con nuestro componente global
      )(Card);
