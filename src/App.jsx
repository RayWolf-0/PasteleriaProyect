import logo from './logo.svg';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Login from './pages/login';
import Indice from './pages/indice';
import Header from './Components/Header'
import Perfil from './pages/Perfil';
import BlogNoticias from './pages/BlogsyNoticias';
import Registro from './pages/Registro';
import './Styles/estilos.css'
import Footer from './Components/Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"
<<<<<<< HEAD
import validarusuario from './Components/validarusuario'
=======
import BlogNoticias from './pages/BlogsNoticias';
>>>>>>> c68ef56e66a9b1d69c5276b3d34cb28df797f63c

function App() {
  return (
    <div className='App'>

      <Header />
        <Routes>
          <Route path="/" element={<Indice />}/>
          <Route path="/login" element={<Login />}/>
<<<<<<< HEAD
          <Route path="/Perfil" element={<Perfil />}/>
          <Route path="/noticias" element={<BlogNoticias />}/>
          <Route path="/Registro" element={<Registro />}/>
        </Routes>
      <Footer />
      </div>
        
=======
          <Route path="/indice" element={<Indice />}/>
          <Route path="/noticias" element={<BlogNoticias />}/>
        </Routes>
        <Footer />
>>>>>>> c68ef56e66a9b1d69c5276b3d34cb28df797f63c



    </div>
  );
}

export default App;
