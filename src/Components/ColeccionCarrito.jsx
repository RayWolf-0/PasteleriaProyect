import React from "react";
import { useCarrito } from "../auth/CarritoContext";

export default function ColeccionCarrito() {
  const { carrito, eliminarProducto, vaciarCarrito } = useCarrito();

  const calcularTotal = () =>
    carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

  if (carrito.length === 0) {
    return (
      <div className="card p-3 text-center mt-4">
        <h2 className="mi-texto">Tu carrito está vacío 🛒</h2>
        <p>Agrega productos desde el menú para verlos aquí.</p>
      </div>
    );
  }

  return (
    <div className="card mt-4 p-3">
      <h2 className="mi-texto">Colección del Carrito</h2>
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
        </tbody>
      </table>

      <div className="resumen mt-3">
        <h3>Total a pagar:</h3>
        <p className="total">${calcularTotal().toLocaleString("es-CL")}</p>
        <button className="boton-compra" onClick={vaciarCarrito}>
          Vaciar carrito
        </button>
      </div>
    </div>
  );
}
