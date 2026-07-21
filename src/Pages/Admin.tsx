import Productos from "./Productos";
import './Admin.css'
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
interface Producto {
    id: number;
    nombre: string;
    descripcion: string;
    stock: number;
    precioLista: number;
    precio: number;
    categoria: string;
    importado: boolean;
    imagenes: string[];
}

interface Productos {
    productos: Producto[];
}

//Productos de prueba - - -----------


const productoInstanciado: Producto = {
    id: 101,
    nombre: "Teclado Mecánico RGB",
    descripcion: "Teclado hot-swappable con switches Red y retroiluminación personalizada.",
    stock: 25,
    precioLista: 85000,
    precio: 72000,
    categoria: "Periféricos",
    importado: true,
    imagenes: [
        "https://ejemplo.com",
        "https://ejemplo.com"
    ]
};

const productosList = [productoInstanciado, productoInstanciado, productoInstanciado, productoInstanciado, productoInstanciado, productoInstanciado, productoInstanciado, productoInstanciado, productoInstanciado, productoInstanciado];

//---------------------------------------------
export default function Admin() {

    return (
        <>
            <Navbar />

            <div className="general-container">

                <div className="admin-container">

                    <h1>Panel Administrador</h1>
                    <section className="contadores-container">
                        <ContadorStock
                            productos={productosList} />
                        <ContadorProductosSinStock
                            productos={productosList} />
                    </section>
                    <section className="manage-container">
                        <div className="productos-manage-container">
                            <header>

                                <h2>Productos</h2>
                                <input type="text" />
                                <Link to="agregar-producto">Agregar Producto</Link>
                            </header>
                            <ResumenProductos productos={productosList} />



                        </div>

                    </section>


                    <section className="manage-container">
                        <div className="pedidos-manage-container">
                            <header>

                                <h2>Pedidos</h2>

                            </header>

                            <table></table>


                        </div>

                    </section>

                </div>
            </div>
        </>
    );
}


// contador
function ContadorStock(productos: Productos) {


    const total = productos
        .productos
        .reduce((aux, producto) => {
            return aux + producto.stock;

        }, 0)

    return (

        <div className="contador">
            <h4>Stock Total</h4>
            <p>{total}</p>

        </div>

    );

}

function ContadorProductosSinStock(productos: Productos) {

    const total =
        productos
            .productos
            .filter(p => p.stock === 0)
            .length;


    return (

        <div className="contador">
            <h4>Productos sin stock</h4>
            <p>{total}</p>

        </div>

    );

}

//productos o 2da aseccion
function ResumenProductos(productos: Productos) {


    var cont = 0;
    return (

        <div className="productos-container">{

            productos.productos.map(p => {

                cont++;

                return <ProductoManager
                    key={p.id} producto={p}
                    cont={cont}
                />;


            })
        }
        </div>
    );

}

function ProductoManager({ producto, cont }: { producto: Producto, cont: number }) {
    const code = (<>
        <p>N: {producto.nombre} --- Stock: {producto.stock}</p>
        <div className="boton-producto-manage">

            <button style={{ backgroundColor: 'rgb(205, 8, 8)' }} key={producto.id}>Borrar</button>
            <button key={producto.id}>Editar</button>
        </div>
    </>);

    if (cont % 2 === 0) {
        return (<>
            <div className="producto-manage">
                {code}
            </div>
        </>);
    } else {
        return (<>
            <div className="producto-manage" style={{
                backgroundColor: ' rgba(71, 71, 71, 0.12)',
            }}>
                {code}

            </div>
        </>);
    }





}

interface Cliente {
    nombre: string;
    email: string;
    telefono: string

}

interface Pago {
    metodoDePago: string;
    referencia: string;
    montoTotal: number;
}

interface Envio {

    direccion: string;
    ciudad: string;
    cp: number;
}

interface ProductoComprado{
    nombre: string;
    cantidad : number;
    precioUnitario: number;
}
interface Pedido {
    estado: string;
    id: number;
    fecha: string;
    pago: Pago;
    detalleEnvio: Envio;
    detalleCliente: Cliente;
    productos: ProductoComprado[];
}

interface Pedidos {
    pedidos: Pedido[];
}

function ResumenPedidos(pedidosList: Pedidos) {


    return (

        <div className="pedidos-container">
            {pedidosList.pedidos.map(p => {
                return <PedidoManager
                    pedido={p}
                />
            })}
        </div>


    );

}

function PedidoManager({ pedido }: { pedido: Pedido }) {
    var total = 0;
    
    return (
        <div className="pedido-container">
            <header>

                <p>#{pedido.id}</p>
                <p>{pedido.estado}</p>
                <p>{pedido.fecha}</p>
                <p>{pedido.pago.montoTotal}</p>
            </header>
            <main className="detalle-container">
                <section className="detalle-cliente">
                    <p>Nombre: {pedido.detalleCliente.nombre} </p>
                    <p>Email: {pedido.detalleCliente.email}</p>
                    <p>Telefono: {pedido.detalleCliente.telefono}</p>
                </section>
                <section className="detalle-envio">
                    <p>Direccion: {pedido.detalleEnvio.direccion}</p>
                    <p>Ciudad: {pedido.detalleEnvio.ciudad}</p>
                    <p>Codigo Postal: {pedido.detalleEnvio.cp}</p>
                </section>
                <section className="detalle-productos">
                    <p>Productos</p>
                    {
                        pedido.productos.map(p => {
                            return <div className="pedido-producto-particular">
                                <p>{p.nombre}</p>
                                <p>{p.cantidad}</p>
                                <p>{p.precioUnitario}</p>
                            </div>
                            total += p.precioUnitario;
                        })
                    }

                    <p>Total : {total}</p>
                </section>
                <section className="detalle-pago">
                    <p>Metodo de pago : {pedido.pago.metodoDePago}</p>
                    <p>Referencia: {pedido.pago.referencia}</p>
                </section>
            </main>
        </div>
    );



}