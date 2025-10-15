export default function login() {
    return (
        <div>
            <main className="d-flex justify-content-center align-items-center">
                <div className="w-50 w-md-25 text-center">
                    <h2>Inicio de sesión</h2>
                    <div className="mb-3">
                        <label for="usuario">Usuario:</label>
                        <input type="text" name="usuario" id="usuario" className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <label for="contraseña">Contraseña:</label>
                        <input type="password" name="contraseña" id="contrasena" className="form-control"/>
                    </div>
                    <div className="mb-3">
                        <button id="btnLogin" className="btn button" type="button">Login</button>
                    </div>
                </div>
            </main>

            <div className="modal fade" id="loginError" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Error</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <p>Usuario o contraseña incorrecta</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}