export default function Pedido() {
  return (
    <main>
      <div className="container">
        <div className="card">
          <h2>Estado Actual de tu Pedido</h2>
          <p>Consulta aquí el progreso de tu pedido más reciente.</p>

          <div className="estado-pedido">
            <p><strong>ID Pedido:</strong> #004</p>
            <p><strong>Cliente:</strong> Ana Pérez</p>
            <p><strong>Producto:</strong> Torta Especial de Cumpleaños</p>
            <p><strong>Fecha de Pedido:</strong> 17 de octubre de 2025</p>

            <div className="progreso">
              <div className="etapa completada">Preparando</div>
              <div className="etapa completada">En Ruta</div>
              <div className="etapa actual">Entregando</div>
              <div className="etapa pendiente">Completado</div>
            </div>

            <p className="mensaje-estado">
              Tu pedido está <strong>en proceso de entrega</strong>.
              ¡Pronto podrás disfrutar tu torta personalizada!
            </p>
          </div>
        </div>

        <div className="card">
          <h2>Historial de Pedidos Anteriores</h2>
          <table>
            <thead>
              <tr>
                <th>ID Pedido</th>
                <th>Producto</th>
                <th>Fecha</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>
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
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
