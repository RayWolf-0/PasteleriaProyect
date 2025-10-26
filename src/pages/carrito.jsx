import { useCarrito } from "../auth/CarritoContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Carrito() {
  const { carrito, eliminarProducto, vaciarCarrito } = useCarrito();
  const [mostrarModal, setMostrarModal] = useState(false);
  const navigate = useNavigate();

  const calcularTotal = () =>
    carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  const pagarPedido = () => {
    if (carrito.length === 0) return;
    setMostrarModal(true);
    setTimeout(() => {
      setMostrarModal(false);
      vaciarCarrito();
      navigate("/pedido");
    }, 2000);
  };

  if (carrito.length === 0) {
    return (
      <main>
        <div className="card p-3 text-center mt-4">
          <h2 className="mi-texto">Tu carrito está vacío 🛒</h2>
          <p>Agrega productos desde el menú para verlos aquí.</p>
        </div>
      </main>
    );
  }

  return (
    <main>
      <div className="card p-3">
        <h2>Carrito de Compras</h2>

        <table className="table">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Precio Unitario</th>
              <th>Subtotal</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {carrito.map((item) => (
              <tr key={item.id}>
                <td>{item.titulo}</td>
                <td>{item.cantidad}</td>
                <td>${item.precio.toLocaleString("es-CL")}</td>
                <td>${(item.precio * item.cantidad).toLocaleString("es-CL")}</td>
                <td>
                  <button
                    className="boton-compra"
                    onClick={() => eliminarProducto(item.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}

            <tr>
              <td colSpan="3" className="text-end fw-bold">
                Total:
              </td>
              <td className="fw-bold">
                ${calcularTotal().toLocaleString("es-CL")}
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>

        <div className="resumen mt-3 text-center">
          <button className="boton-compra me-2" onClick={vaciarCarrito}>
            Vaciar carrito
          </button>
          <button className="boton-compra" onClick={pagarPedido}>
            Pagar
          </button>
        </div>
      </div>

      {mostrarModal && (
        <div
          className="modal fade show"
          style={{
            display: "block",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content text-center p-4">
              <h4 className="mi-texto">Pedido en proceso 🚚</h4>
              <p>Redirigiendo a la página de pedidos...</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}



