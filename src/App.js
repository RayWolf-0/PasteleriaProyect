import logo from './logo.svg';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Productos from './pages/productos';
import Login from './pages/login';
import Indice from './pages/indice';
import Header from './Components/Header'
import './Styles/estilos.css'
import Footer from './Components/Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"

function App() {
  return (
    <div className='App'>
      <div >

        <Header />
        <Routes>
          <Route path="/" element={<Indice />}/>
          <Route path="/productos" element={<Productos />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/indice" element={<Indice />}/>
        </Routes>

      </div>
        <Footer />

    </div>
  );
}

export default App;
