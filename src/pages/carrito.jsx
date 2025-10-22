export default function carrito() {
    return (
        <main>
            
                <div className="card">
                    <h2>Carrito de Compras</h2>
                    <p>Revisa los productos seleccionados antes de finalizar tu compra.</p>

                    <table>
                        <tr>
                            <th>Producto</th>
                            <th>Cantidad</th>
                            <th>Precio Unitario</th>
                            <th>Subtotal</th>
                            <th>Acciones</th>
                        </tr>
                        <tr>
                            <td>Torta Cuadrada de Chocolate</td>
                            <td>
                                <input type="number" value="1" min="1" className="cantidad"></input>
                            </td>
                            <td>$45.000</td>
                            <td>$45.000</td>
                            <td><button className="boton-compra">Eliminar</button></td>
                        </tr>
                        <tr>
                            <td>Tiramisú Clásico</td>
                            <td>
                                <input type="number" value="2" min="1" className="cantidad"></input>
                            </td>
                            <td>$5.500</td>
                            <td>$11.000</td>
                            <td><button className="boton-compra">Eliminar</button></td>
                        </tr>
                    </table>
                    
                        <div classNameName="resumen">
                            <h2>Resumen del Pedido</h2>
                            <p><strong>Subtotal:</strong> $56.000</p>
                            <p><strong>Descuento (Mayor de 50):</strong> -50%</p>
                            <p><strong>Total a pagar:</strong> <span className="total">$28.000</span></p>
                            <button className="boton-compra">Finalizar Compra</button>
                        </div>
                
                
                    <div className="card">
                        <h2>Recomendaciones para Ti</h2>
                        <p>Basado en tus preferencias, podrías disfrutar de estos productos:</p>
                        <ul>
                            <li>Torta Sin Azúcar de Naranja</li>
                            <li>Torta Vegana de Chocolate</li>
                            <li>Galletas Veganas de Avena</li>
                        </ul>
                    </div>
                </div>
        </main>
    )
}   