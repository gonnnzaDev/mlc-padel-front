import './AdminStockCounters.css'
import type { Productos } from "./AdminTypes";

export function ContadorStock({ productos }: Productos) {
    const total = productos.reduce((aux, producto) => aux + producto.stock, 0);

    return (
        <div className="contador">
            <h4>Stock Total</h4>
            <p>{total}</p>
        </div>
    );
}

export function ContadorProductosSinStock({ productos }: Productos) {
    const total = productos.filter(p => p.stock === 0).length;

    return (
        <div className="contador">
            <h4>Productos sin stock</h4>
            <p>{total}</p>
        </div>
    );
}
