import { Routes, Route } from 'react-router-dom'; 
import './App.css';
import Home from './Pages/Home.tsx';
import Admin from './Pages/Admin.tsx';
import IniciarSesion from './Pages/IniciarSesion.tsx';
import Productos from './Pages/Productos.tsx';
import AgregarProducto from './Pages/AgregarProducto.tsx';
function App() {

  return (
    <>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/productos' element={<Productos />} />
        <Route path='/iniciar-sesion' element={<IniciarSesion />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/admin/agregar-producto' element={<AgregarProducto />} />
      </Routes>

    </>

  );
}

export default App
