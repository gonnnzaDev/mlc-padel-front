import "./ProductsList.css";
import ProductCard from "./ProductCard";
import { useState, useEffect, useMemo } from 'react';

import type { Producto } from './AdminTypes'

import { useSearchParams } from 'react-router-dom';

export default function ProductsList() {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q') || '';

    const { productos, loading } = useFetchProductos(query || undefined);

    if (loading) return <p>Cargando productos...</p>;

    return (
        <section className='products-container'>
            <h2>{query ? `Buscaste: ${query}` : 'Productos Disponibles:'}</h2>
            <div className='products'>
                {productos.map((p) => (
                    <ProductCard key={p.id} {...p} />
                ))}
            </div>
        </section>
    );


}

export function useFetchProductos(query?: string) {
    const [loading, setLoading] = useState(true);
    const [productos, setProductos] = useState<Producto[]>([]);

    useEffect(() => {
        setLoading(true);
        const base = `${import.meta.env.VITE_API_URL}/productos`;

        const url = query ? `${base}/buscar?q=${encodeURIComponent(query)}` : base;

        fetch(url)
            .then(res => res.json())
            .then(setProductos)
            .catch(console.error)
            .finally(() => setLoading(false))
    }, [query]);

    return { productos, loading };
}
