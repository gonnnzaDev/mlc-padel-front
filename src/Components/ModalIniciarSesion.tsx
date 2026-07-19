import { Link } from "react-router-dom";
import './ModalIniciarSesion.css'
export default function ModalInciarSesion() {
    return (

        <>
            <div className="container">
                <h1>Iniciar Sesion</h1>

                <section className="inputs">
                    <p>Correo Electronico</p>
                    <input type="text" />

                    <p>Contraseña</p>
                    <input type="password" />
                </section>
                <section className="botones">


                    <Link to="/">
                        Volver
                    </Link>

                    <button>Iniciar Sesion</button>
                </section>
            </div >
        </>
    );
}