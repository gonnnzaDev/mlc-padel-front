import Navbar from "../Components/Navbar";
import './AgregarProducto.css'
export default function AgregarProducto() {
    return (<>
        <Navbar />
        <div className="general-container">
            <div className="formulario-container">
                <div className="formulario-info">
                <h1>Agregar Producto</h1>
                <p>Nombre</p>
                <input type="text"></input>
                <p>Descripcion</p>
                <input type="text"></input>
                <p>Precio Lista</p>
                <input type="number"></input>
                <p>Precio Efectivo/ Transferencia</p>
                <input type="number"></input>
                <div className="importado">

                <p>Importado</p>
                <button className="slide"></button>
                </div>

                <p>Categoria</p>
                <select>
                    
                    <option>Aca van las categorias</option>
                </select>

                <p>Imagenes</p>
                <button>Agregar Imagen</button>
                <button>Guardar Producto</button>

                </div>
            </div>
        </div>
    </>);
}