import { useState } from 'react';
import './Search.css'
import { useNavigate, useSearchParams } from 'react-router-dom';

export default function Search() {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const [input, setInput] = useState(searchParams.get('q') || '');

    return (
        <section className='buscador-container'>
            <input
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => {
                    if (e.key === 'Enter') {
                        navigate(input ? `/productos?q=${encodeURIComponent(input)}` : '/productos');
                    }
                }}
                placeholder='¿Qué estás buscando para tu juego?'
            />
        </section>
    );
}