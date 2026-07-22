import './Admin.css'
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import { ContadorStock, ContadorProductosSinStock } from "../Components/AdminStockCounters";
import { ResumenProductos } from "../Components/AdminProductManager";
import type { Producto } from "../Components/AdminTypes";

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

export default function Admin() {
    return (
        <>
            <Navbar />

            <div className="general-container">
                <div className="admin-container">
                    <h1>Panel Administrador</h1>
                    <section className="contadores-container">
                        <ContadorStock productos={productosList} />
                        <ContadorProductosSinStock productos={productosList} />
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
