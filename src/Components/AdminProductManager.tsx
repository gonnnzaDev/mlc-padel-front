import './AdminProductManager.css'
import type { Producto, Productos } from "./AdminTypes";

export function ResumenProductos({ productos }: Productos) {
    var cont = 0;
    return (
        <div className="productos-container">
            {productos.map(p => {
                cont++;
                return <ProductoManager key={p.id} producto={p} cont={cont} />;
            })}
        </div>
    );
}

export function ProductoManager({ producto, cont }: { producto: Producto; cont: number }) {
    const code = (
        <>
            <p>N: {producto.nombre} --- Stock: {producto.stock}</p>
            <div className="boton-producto-manage">
                <button style={{ backgroundColor: 'rgb(205, 8, 8)' }} key={producto.id}>Borrar</button>
                <button key={producto.id}>Editar</button>
            </div>
        </>
    );

    if (cont % 2 === 0) {
        return <div className="producto-manage">{code}</div>;
    } else {
        return (
            <div className="producto-manage" style={{ backgroundColor: 'rgba(71, 71, 71, 0.12)' }}>
                {code}
            </div>
        );
    }
}
