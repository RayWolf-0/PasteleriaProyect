import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

export default function Login() {
    const navigate = useNavigate();
    const { login, isAuthenticated } = useAuth();

    const [email, setEmail] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [errorInline, setErrorInline] = useState("");

    useEffect(() => {
        if (isAuthenticated) navigate("/", { replace: true });
    }, [isAuthenticated, navigate]);

    const mostrarModalError = () => {
        const modalEl = document.getElementById("loginError");
        if (modalEl && window.bootstrap?.Modal) {
            const modal = new window.bootstrap.Modal(modalEl);
            modal.show();
        } else {
            setErrorInline("Email o contraseña incorrecta");
        }
    };

    const manejarLogin = async () => {
        setErrorInline("");

        const res = await login(email.trim(), contrasena);

        if (res.ok) {
            navigate("/", { replace: true });
        } else {
            mostrarModalError();
        }
    };

    const manejarEnter = (e) => {
        if (e.key === "Enter") manejarLogin();
    };

    return (
        <div className="mi-fondo">
            <Helmet>
                <title className="h2">Login</title>
                <meta name="description" content="Página Login" />
            </Helmet>

            <main
                className="d-flex justify-content-center align-items-center"
                style={{ minHeight: "60vh" }}
            >
                <div className="w-50 w-md-25 text-center" style={{ maxWidth: 420 }}>
                    <h2>Inicio de sesión</h2>

                    <div className="mb-3 text-start">
                        <label htmlFor="email" className="form-label">
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onKeyDown={manejarEnter}
                            autoComplete="username"
                        />
                    </div>

                    <div className="mb-3 text-start">
                        <label htmlFor="contrasena" className="form-label">
                            Contraseña:
                        </label>
                        <input
                            type="password"
                            id="contrasena"
                            className="form-control"
                            value={contrasena}
                            onChange={(e) => setContrasena(e.target.value)}
                            onKeyDown={manejarEnter}
                            autoComplete="current-password"
                        />
                    </div>

                    {errorInline && (
                        <div className="alert alert-danger py-2" role="alert">
                            {errorInline}
                        </div>
                    )}

                    <div className="mb-3">
                        <button
                            id="btnLogin"
                            className="button"
                            type="button"
                            onClick={manejarLogin}
                        >
                            Login
                        </button>
                    </div>

                    <div className="text-muted small">
                        <strong>Demo:</strong><br />
                        Usuario → email <code>usuario@test.com</code> — clave <code>123456</code>
                    </div>
                </div>
            </main>

            <div
                className="modal fade"
                id="loginError"
                tabIndex={-1}
                aria-labelledby="loginErrorLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="loginErrorLabel">
                                Error
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Cerrar"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <p>Email o contraseña incorrecta</p>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Cerrar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
