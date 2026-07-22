import './AdminOrderManager.css'
import type { Pedido, Pedidos } from "./AdminTypes";

export function ResumenPedidos({ pedidos }: Pedidos) {
    return (
        <div className="pedidos-container">
            {pedidos.map(p => (
                <PedidoManager key={p.id} pedido={p} />
            ))}
        </div>
    );
}

export function PedidoManager({ pedido }: { pedido: Pedido }) {
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
                    <p>Nombre: {pedido.detalleCliente.nombre}</p>
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
                    {pedido.productos.map(p => {
                        total += p.producto.precio;
                        return (
                            <div className="pedido-producto-particular">
                                <p>{p.producto.nombre}</p>
                                <p>{p.cantidad}</p>
                                <p>{p.producto.precio}</p>
                            </div>
                        );
                    })}
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
