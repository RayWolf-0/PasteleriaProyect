export default function Admin() {
    return (
        <main>
            <div className="container">
                
                <div className="card mb-4 p-3">
                    <h2 className="mi-texto">Gestión de Usuarios</h2>
                    <table className="table table-bordered align-middle text-center">
                        <thead className="table-light">
                            <tr>
                                <th>Nombre</th>
                                <th>Email</th>
                                <th>Rol</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Ana López</td>
                                <td>ana@example.com</td>
                                <td>Cliente</td>
                                <td>
                                    <button className="button me-2" type="button">Editar</button>
                                    <button className="button" type="button">Eliminar</button>
                                </td>
                            </tr>
                            <tr>
                                <td>Juan Soto</td>
                                <td>juan@duoc.cl</td>
                                <td>Cliente (Beneficio)</td>
                                <td>
                                    <button className="button me-2" type="button">Editar</button>
                                    <button className="button" type="button">Eliminar</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                
                <div className="card mb-4 p-3">
                    <h2 className="mi-texto">Gestión de Productos</h2>
                    <div className="text-center mb-2">
                        <button className="button" type="button">+ Agregar Producto</button>
                    </div>
                    <table className="table table-bordered align-middle text-center">
                        <thead className="table-light">
                            <tr>
                                <th>Código</th>
                                <th>Nombre</th>
                                <th>Precio</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>TC001</td>
                                <td>Pastel Red Velvet</td>
                                <td>$25.000</td>
                                <td>
                                    <button className="button me-2" type="button">Editar</button>
                                    <button className="button" type="button">Eliminar</button>
                                </td>
                            </tr>
                            <tr>
                                <td>PI002</td>
                                <td>Pie de Limón</td>
                                <td>$15.000</td>
                                <td>
                                    <button className="button me-2" type="button">Editar</button>
                                    <button className="button" type="button">Eliminar</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                
                <div className="card p-3">
                    <h2 className="mi-texto">Gestión de Pedidos</h2>
                    <table className="table table-bordered align-middle text-center">
                        <thead className="table-light">
                            <tr>
                                <th>ID Pedido</th>
                                <th>Cliente</th>
                                <th>Producto</th>
                                <th>Estado</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>001</td>
                                <td>Ana Pérez</td>
                                <td>Galletas de Chocolate</td>
                                <td>En preparación</td>
                                <td>
                                    <button className="button" type="button">Actualizar</button>
                                </td>
                            </tr>
                            <tr>
                                <td>002</td>
                                <td>Juan Soto</td>
                                <td>Pastel de Fresa</td>
                                <td>Entregado</td>
                                <td>
                                    <button className="button" type="button">Actualizar</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
}
