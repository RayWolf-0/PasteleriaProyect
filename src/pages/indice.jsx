import React from "react";
import { useCarrito } from "../auth/CarritoContext";
import pasteleracherry from "../Assets/img/pasteleracherry.jpg";
import pastelero from "../Assets/img/pastelero-1jpg.webp";
import pistacho from "../Assets/img/pistacho.jpg";
import dulcechocolate from "../Assets/img/haz dulces de chocolate.jpg";
import pchocolate from "../Assets/img/haz un pastel de chocolate.jpg";
import limon from "../Assets/img/haz un pie de limon.jpg";
import dufresas from "../Assets/img/haz dulces de fresa.jpg"
import paletas from "../Assets/img/haz paletas de caramelo de colores.jpg"
import pavellana from "../Assets/img/haz un pastel de avellanas.jpg"
export default function Home() {
  const { agregarProducto } = useCarrito(); 

  const Productos = [
    {
      id: 1,
      titulo: "Bombones de chocolate",
      precio: 1500,
      imagen: dulcechocolate,
    },
    {
      id: 2,
      titulo: "Pastel de chocolate",
      precio: 20000,
      imagen: pchocolate,
    },
    {
      id: 3,
      titulo: "Pie de Limón",
      precio: 18000,
      imagen: limon,
    },
    {
      id: 4,
      titulo: "Dulces de Frutilla",
      precio: 1500,
      imagen: dufresas,
    },
    {
      id: 5,
      titulo: "Paletas de caramelo",
      precio: 2000,
      imagen: paletas,
    },
    {
      id: 6,
      titulo: "Pastel de avellanas",
      precio: 30000,
      imagen: pavellana,
    },
  ];

  return (
    <div>
      <br />
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="1000"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="imgCarrusel rounded mx-auto d-block img-fluid"
              src={pasteleracherry}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              className="imgCarrusel rounded mx-auto d-block img-fluid"
              src={pastelero}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              className="imgCarrusel rounded mx-auto d-block img-fluid"
              src={pistacho}
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>

      <div className="container-fluid">
        <div className="row">
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <h1 className="pastel-navbar">Nuestros Productos</h1>
            <div className="container-fluid">
              <div className="row">
                {Productos.map((prod) => (
                  <div className="col-12 col-sm-6 col-md-4 mb-4" key={prod.id}>
                    <div className="card h-100" data-testid="producto">
                      <img
                        className="card-img-top"
                        src={prod.imagen}
                        alt={prod.titulo}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{prod.titulo}</h5>
                        <p className="card-text">
                          Valor: ${prod.precio.toLocaleString("es-CL")}
                        </p>
                        <button
                          className="button"
                          type="button"
                          onClick={() => agregarProducto(prod)}
                        >
                          Añadir
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
