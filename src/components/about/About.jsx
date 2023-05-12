import style from './About.module.css';

const About = () => {
    return (

        <div>
        <span><h2> Bienvenido a mi primera app!</h2></span>
            <br />
            <br />
            <div className={style.about}>
            <p> Hola! Mi nombre es Natalia y estoy en proceso de ser desarrolladora fullstack!</p>
            <p> Este proyecto es un ejercicio de aprendizaje y prueba de conceptos básicos de React.</p>
            <p> Espero que lo disfrutes! </p>
            <br />
        </div>
        </div>
    )
}


export default About;