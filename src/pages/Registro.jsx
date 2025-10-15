export default function Registro() {
    return (
        <div>
            <main className="col-md-12">
                <div className="d-flex flex-column justify-content-center align-items-center vh-100">
                    <h2>Regitro de usuario</h2>
                    <div>
                        <label for="Nombre completo">nombre completo:</label>
                        <input type="text" name="nombre completo" id="nombre completo" className="form-control"/>
                    </div>
                    <div>
                        <label for="correo">correo:</label>
                        <input type="text" name="correo" id="correo" className="form-control"/>
                    </div>
                    <div>
                        <label for="usuario">usuario:</label>
                        <input type="text" name="usuario" id="usuario" className="form-control"/>
                    </div>
                    <div>
                        <label for="run">run:</label>
                        <input type="text" name="run" id="run" className="form-control"/>
                    </div>
                    <div>
                        <label for="contraseña">contraseña:</label>
                        <input type="password" name="contraseña" id="contraseña" className="form-control"/> <br/>
                        </div>
                            <div>
                                <button type="button" className="btn btn-secondary">Registro</button>
                            </div>
                    </div>
            </main>
        </div>
    );
}