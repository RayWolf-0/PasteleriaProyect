export default function pedido() {
    return (
        <main>
            <div class="container">
                
                    <div class="card">
                        <h2>Estado Actual de tu Pedido</h2>
                        <p>Consulta aquí el progreso de tu pedido más reciente.</p>
                        
                            <div class="estado-pedido">
                                <p><strong>ID Pedido:</strong> #004</p>
                                <p><strong>Cliente:</strong> Ana Pérez</p>
                                <p><strong>Producto:</strong> Torta Especial de Cumpleaños</p>
                                <p><strong>Fecha de Pedido:</strong> 17 de octubre de 2025</p>

                                <div class="progreso">
                                    <div class="etapa completada">Preparando</div>
                                    <div class="etapa completada">En Ruta</div>
                                    <div class="etapa actual">Entregando</div>
                                    <div class="etapa pendiente">Completado</div>
                                </div>

                                <p class="mensaje-estado">
                                    Tu pedido está <strong>en proceso de entrega</strong>.
                                    ¡Pronto podrás disfrutar tu torta personalizada!
                                </p>
                            </div>

                    </div>
            
                        <div class="card">
                            
                                <h2>Historial de Pedidos Anteriores</h2>
                                <table>
                                    <tr>
                                        <th>ID Pedido</th>
                                        <th>Producto</th>
                                        <th>Fecha</th>
                                        <th>Estado</th>
                                    </tr>
                                    <tr>
                                        <td>#003</td>
                                        <td>Torta Circular de Manjar</td>
                                        <td>10/10/2025</td>
                                        <td>Completado ✅</td>
                                    </tr>
                                    <tr>
                                        <td>#002</td>
                                        <td>Brownie Sin Gluten</td>
                                        <td>02/10/2025</td>
                                        <td>Completado ✅</td>
                                    </tr>
                                    <tr>
                                        <td>#001</td>
                                        <td>Tiramisú Clásico</td>
                                        <td>25/09/2025</td>
                                        <td>Completado ✅</td>
                                    </tr>
                                </table>
                        </div>
                    </div>
                </main>
            )
}