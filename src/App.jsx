import logo from './logo.svg';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Login from './pages/login';
import Indice from './pages/indice';
import Header from './Components/Header'
import './Styles/estilos.css'
import Footer from './Components/Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import BlogNoticias from './pages/BlogsNoticias';

function App() {
  return (
    <div className='App'>

        <Header />
        <Routes>
          <Route path="/" element={<Indice />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/indice" element={<Indice />}/>
          <Route path="/noticias" element={<BlogNoticias />}/>
        </Routes>
        <Footer />



    </div>
  );
}

export default App;
