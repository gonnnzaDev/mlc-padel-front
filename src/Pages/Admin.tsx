import './Admin.css'
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";
import { ContadorStock, ContadorProductosSinStock } from "../Components/AdminStockCounters";
import { ResumenProductos } from "../Components/AdminProductManager";
import { useFetchProductos } from '../Components/ProductsList';


export default function Admin() {

    const { productos: productos, loading } = useFetchProductos();

    if (loading) return <p>Cargando productos...</p>;

    return (
        <>
            <Navbar />

            <div className="general-container">
                <div className="admin-container">
                    <h1>Panel Administrador</h1>
                    <section className="contadores-container">
                        <ContadorStock productos={productos} />
                        <ContadorProductosSinStock productos={productos} />
                    </section>
                    <section className="manage-container">
                        <div className="productos-manage-container">
                            <header>
                                <h2>Productos</h2>
                                <input type="text" />
                                <Link to="agregar-producto">Agregar Producto</Link>
                            </header>
                            <ResumenProductos productos={productos} />
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
