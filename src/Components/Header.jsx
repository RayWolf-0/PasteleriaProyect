import logopasteleria from "../Assets/img/logopasteleria.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

export default function Header() {
  const { isAuthenticated, user, logout } = useAuth();
  const navigate = useNavigate();

  const manejarLogout = (e) => {
    e.preventDefault();
    logout();
    navigate("/", { replace: true });
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark pastel-navbar">
        <div className="container-fluid">
          <img className="logo" src={logopasteleria} alt="Logo Pastelería" />
          <a className="navbar-brand ms-3" href="#">
            Pastelería Mil Sabores
          </a>

          <button
            className="navbar-toggler pastel-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#header"
            aria-controls="header"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="toggler-bar"></span>
            <span className="toggler-bar"></span>
            <span className="toggler-bar"></span>
          </button>

          <div className="collapse navbar-collapse" id="header">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link text-decoration-none">
                  Inicio
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/noticias" className="nav-link text-decoration-none">
                  Blogs y Noticias
                </Link>
              </li>

              <li className="nav-item dropdown">
                <a
                  id="txtmenu"
                  className="nav-link dropdown-toggle text-decoration-none"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  onClick={(e) => e.preventDefault()} // evita navegación
                >
                  Menú
                </a>

                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/menu/pasteles">
                      Pasteles
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/menu/galletas">
                      Galletas
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/menu/dulces">
                      Dulces
                    </Link>
                  </li>
                </ul>
              </li>

              {/*usuario común */}
              {user?.role === "user" && (
                <>
                  <li className="nav-item">
                    <Link
                      to="/perfil"
                      className="nav-link text-decoration-none"
                    >
                      Perfil
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/carrito"
                      className="nav-link text-decoration-none"
                    >
                      Carrito
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/pedido"
                      className="nav-link text-decoration-none"
                    >
                      Pedido
                    </Link>
                  </li>
                </>
              )}

              {/*admin */}
              {user?.role === "admin" && (
                <li className="nav-item">
                  <Link
                    to="/administrador"
                    className="nav-link text-decoration-none"
                  >
                    Administrador
                  </Link>
                </li>
              )}
            </ul>

            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Buscar..."
                aria-label="Buscar"
              />
              <button className="btn btn-buscar" type="submit">
                Buscar
              </button>
            </form>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {!isAuthenticated && (
                <>
                  <li className="nav-item">
                    <Link to="/login" className="nav-link text-decoration-none">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/registro"
                      className="nav-link text-decoration-none"
                    >
                      Registro
                    </Link>
                  </li>
                </>
              )}

              {isAuthenticated && (
                <li className="nav-item">
                  <a
                    href="#"
                    className="button"
                    id="txtsalir"
                    role="button"
                    onClick={manejarLogout}
                  >
                    Salir
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
