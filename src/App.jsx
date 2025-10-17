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

function App() {
  return (
    <div className='App'>
      <div>
      <AuthProvider>
      <Header />
        <Routes>
          <Route path="/" element={<Indice />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/Perfil" element={<Perfil />}/>
          <Route path="/noticias" element={<BlogsyNoticias />}/>
          <Route path="/Registro" element={<Registro />}/>
        </Routes>
      <Footer />
      </AuthProvider>
      </div>
        



    </div>
  );
}

export default App;
