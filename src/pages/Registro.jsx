import { useState } from "react";
import { registrarUsuario } from "../Api/usuarioService";
import { useNavigate } from "react-router-dom";

export default function Registro() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        idUsuario: "",
        nombre: "",
        apellido: "",
        email: "",
        contrasena: "",
        telefono: "",
        direccion: "",
        tipo_usuario: "cliente",
        fecha_nacimiento: "",
        puntos: 0,
    });

    const manejarCambio = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const manejarRegistro = async () => {
        try {
            await registrarUsuario(form);
            alert("Usuario registrado correctamente");
            navigate("/login");
        } catch (error) {
            alert("Error al registrar: " + error.message);
        }
    };

    return (
        <div className="mi-fondo">
            <main className="col-md-12">
                <div className="d-flex flex-column justify-content-center align-items-center vh-100">

                    <h2>Registro de usuario</h2>

                    <div>
                        <label htmlFor="idUsuario">ID Usuario:</label>
                        <input
                            type="text"
                            name="idUsuario"
                            id="idUsuario"
                            className="form-control"
                            value={form.idUsuario}
                            onChange={manejarCambio}
                        />
                    </div>

                    <div>
                        <label htmlFor="nombre">Nombre:</label>
                        <input
                            type="text"
                            name="nombre"
                            id="nombre"
                            className="form-control"
                            value={form.nombre}
                            onChange={manejarCambio}
                        />
                    </div>

                    <div>
                        <label htmlFor="apellido">Apellido:</label>
                        <input
                            type="text"
                            name="apellido"
                            id="apellido"
                            className="form-control"
                            value={form.apellido}
                            onChange={manejarCambio}
                        />
                    </div>

                    <div>
                        <label htmlFor="email">Correo:</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="form-control"
                            value={form.email}
                            onChange={manejarCambio}
                        />
                    </div>

                    <div>
                        <label htmlFor="contrasena">Contraseña:</label>
                        <input
                            type="password"
                            name="contrasena"
                            id="contrasena"
                            className="form-control"
                            value={form.contrasena}
                            onChange={manejarCambio}
                        />
                    </div>

                    <div>
                        <label htmlFor="telefono">Teléfono:</label>
                        <input
                            type="text"
                            name="telefono"
                            id="telefono"
                            className="form-control"
                            value={form.telefono}
                            onChange={manejarCambio}
                        />
                    </div>

                    <div>
                        <label htmlFor="direccion">Dirección:</label>
                        <input
                            type="text"
                            name="direccion"
                            id="direccion"
                            className="form-control"
                            value={form.direccion}
                            onChange={manejarCambio}
                        />
                    </div>

                    <div>
                        <label htmlFor="fecha_nacimiento">Fecha de nacimiento:</label>
                        <input
                            type="date"
                            name="fecha_nacimiento"
                            id="fecha_nacimiento"
                            className="form-control"
                            value={form.fecha_nacimiento}
                            onChange={manejarCambio}
                        />
                    </div>

                    <div>
                        <button
                            type="button"
                            className="btn btn-secondary mt-3"
                            onClick={manejarRegistro}
                        >
                            Registrar
                        </button>
                    </div>

                </div>
            </main>
        </div>
    );
}
