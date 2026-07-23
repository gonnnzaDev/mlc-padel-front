import { useEffect, useEffectEvent, useState } from "react";
import './Filters.css'
import { Link, Navigate, useNavigate } from "react-router-dom";
export default function Filters() {


    const { categorias, loading } = FetchCategorias();

    if (loading) return <p>Cargando categorías...</p>;

    return (
        <div className="filters-container">
            <div className="category-container">
                <h3>Categorias</h3>

                {categorias.map(cat => <Link
                    className="category-link"
                    to={`/productos/?q=${cat}`}
                    key={cat}>{cat}</Link>)}
            </div>
        </div>
    );

}



function FetchCategorias() {

    const baseApi = import.meta.env.VITE_API_URL;
    const [loading, setLoading] = useState(true);
    const [categorias, setCategorias] = useState<string[]>([]);

    useEffect(() => {
        setLoading(true);


        fetch(`${baseApi}/productos/categorias`)
            .then(rta => rta.json())
            .then(setCategorias)
            .catch(console.error)
            .finally(() => setLoading(false))

    }, [])

    return { loading, categorias }
}