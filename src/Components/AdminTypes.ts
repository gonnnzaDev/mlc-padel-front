export interface Cliente {
    nombre: string;
    email: string;
    telefono: string;
}

export interface Pago {
    metodoDePago: string;
    referencia: string;
    montoTotal: number;
}

export interface Envio {
    direccion: string;
    ciudad: string;
    cp: number;
}

export interface ProductoComprado {
    cantidad: number;
    producto: Producto;
}

export interface Pedido {
    estado: string;
    id: number;
    fecha: string;
    pago: Pago;
    detalleEnvio: Envio;
    detalleCliente: Cliente;
    productos: ProductoComprado[];
}

export interface Pedidos {
    pedidos: Pedido[];
}

export interface Producto {
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

export interface Productos {
    productos: Producto[];
}
