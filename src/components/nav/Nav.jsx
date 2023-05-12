import style from './Nav.module.css'
import SearchBar from '../searchbar/SearchBar';
import { Link } from 'react-router-dom';


export default function Nav({onSearch}){

    return (
        <nav className={style.nav}>

<button className={style.bu}> 
            
            <Link to="/favorites">Favorites</Link>
            </button>
            <button className={style.bu}> 
                <Link to="/home">Home</Link>
            </button>
            <button className={style.bu}>
                <Link to="/about">About</Link>
            </button>
            <ul className={style.sea}>
            <SearchBar onSearch={onSearch} />
            </ul>
        </nav>
    );
}