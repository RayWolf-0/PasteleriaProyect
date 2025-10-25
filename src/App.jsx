import logo from './logo.svg';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Login from './pages/login';
import Indice from './pages/indice';
import Header from './Components/Header'
import Perfil from './pages/Perfil';
import BlogsyNoticias from './pages/BlogsyNoticias';
import Registro from './pages/Registro';
import './Styles/estilos.css'
import Footer from './Components/Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { AuthProvider } from "./auth/AuthContext";
import Admin from './pages/Administrador';
import Carrito from './pages/carrito';
import Pedido from './pages/pedido';
import { CarritoProvider } from "./auth/CarritoContext";


function App() {
  return (
    <div className='App'>
      <div>
      <AuthProvider>
      <CarritoProvider>
      <Header />
        <Routes>
          <Route path="/" element={<Indice />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/Perfil" element={<Perfil />}/>
          <Route path="/noticias" element={<BlogsyNoticias />}/>
          <Route path="/Registro" element={<Registro />}/>
          <Route path="/Administrador" element={<Admin />}/>
          <Route path="/carrito" element={<Carrito />}/>
          <Route path="/pedido" element={<Pedido />}/>
        </Routes>
      <Footer />
      </CarritoProvider>
      </AuthProvider>
      </div>
        



    </div>
  );
}

export default App;
