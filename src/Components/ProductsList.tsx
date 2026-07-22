import './ProductsList.css'
import ProductCard from "./ProductCard";

const productos = [
    { name: 'Gonzalo', priceMoney: 2999, priceTransfer: 3000, stock: 9, photo: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm90JUMzJUIzZ3JhZm98ZW58MHx8MHx8fDA%3D' },
    { name: 'Gonzalo', priceMoney: 2999, priceTransfer: 3000, stock: 9, photo: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm90JUMzJUIzZ3JhZm98ZW58MHx8MHx8fDA%3D' },
    { name: 'Gonzalo', priceMoney: 2999, priceTransfer: 3000, stock: 9, photo: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm90JUMzJUIzZ3JhZm98ZW58MHx8MHx8fDA%3D' },
    { name: 'Gonzalo', priceMoney: 2999, priceTransfer: 3000, stock: 9, photo: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm90JUMzJUIzZ3JhZm98ZW58MHx8MHx8fDA%3D' },
    { name: 'Gonzalo', priceMoney: 2999, priceTransfer: 3000, stock: 9, photo: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm90JUMzJUIzZ3JhZm98ZW58MHx8MHx8fDA%3D' },
    { name: 'Gonzalo', priceMoney: 2999, priceTransfer: 3000, stock: 9, photo: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm90JUMzJUIzZ3JhZm98ZW58MHx8MHx8fDA%3D' },
    { name: 'Gonzalo', priceMoney: 2999, priceTransfer: 3000, stock: 9, photo: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm90JUMzJUIzZ3JhZm98ZW58MHx8MHx8fDA%3D' },
    { name: 'Gonzalo', priceMoney: 2999, priceTransfer: 3000, stock: 9, photo: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm90JUMzJUIzZ3JhZm98ZW58MHx8MHx8fDA%3D' },
    { name: 'Gonzalo', priceMoney: 2999, priceTransfer: 3000, stock: 9, photo: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm90JUMzJUIzZ3JhZm98ZW58MHx8MHx8fDA%3D' },
    { name: 'Gonzalo', priceMoney: 2999, priceTransfer: 3000, stock: 9, photo: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm90JUMzJUIzZ3JhZm98ZW58MHx8MHx8fDA%3D' },
];

export default function ProductsList() {
    return (
        <section className='products-container'>
            <h2>Productos Disponibles</h2>
            <div className='products'>
                {productos.map((p, i) => (
                    <ProductCard key={i} {...p} />
                ))}
            </div>
        </section>
    );
}
