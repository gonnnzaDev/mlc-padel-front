import './IniciarSesion.css'

export default function IniciarSesion() {
    return (

        <>

            <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height : '100vh',
                width : '100vw',
                margin: 0,

            }}>

                <ModalInciarSesion />
            </div>
        </>

    );
}

import { Link } from "react-router-dom";
function ModalInciarSesion() {
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

                        <Link to="/admin">
                        Pasar
                    </Link>

                    <button>Iniciar Sesion</button>
                </section>
            </div >
        </>
    );
}