import { Routes, Route, Link } from 'react-router-dom'; 
import './App.css';
import Home from './Pages/Home.tsx';
import IniciarSesion from './Pages/IniciarSesion.tsx';
import Productos from './Pages/Productos.tsx';
function App() {

  return (
    <>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/productos' element={<Productos />} />
        <Route path='/iniciar-sesion' element={<IniciarSesion />} />
      </Routes>

    </>

  );
}

export default App
