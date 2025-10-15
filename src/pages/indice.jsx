import pasteleracherry from "../Assets/img/pasteleracherry.jpg"
import pastelero from "../Assets/img/pastelero-1jpg.webp"
import pistacho from "../Assets/img/pistacho.jpg"
import dulcechocolate from "../Assets/img/haz dulces de chocolate.jpg"
import pchocolate from "../Assets/img/haz un pastel de chocolate.jpg"
import limon from "../Assets/img/haz un pie de limon.jpg"
export default function Home() {
    const Productos = [
        {
            id: 1,
            titulo: "Bombones de chocolate",
            precio: "1.500",
            imagen: dulcechocolate
        },
        {
            id: 2,
            titulo: "Pastel de chocolate",
            precio: "20.000",
            imagen: pchocolate
        },
        {
            id: 3,
            titulo: "Pie de Limón",
            precio: "18.000",
            imagen: limon
        },
        {
            id: 4,
            titulo: "Bombones de chocolate 2",
            precio: "1.500",
            imagen: dulcechocolate
        },
        {
            id: 5,
            titulo: "Pastel de chocolate 2",
            precio: "20.000",
            imagen: pchocolate
        },
        {
            id: 6,
            titulo: "Pie de Limón 2",
            precio: "18.000",
            imagen: limon
        }

    ]

    return (
        <div>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-bs-interval="10000">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="imgCarrusel rounded mx-auto d-block img-fluid" src={pasteleracherry}
                            alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img className="imgCarrusel rounded mx-auto d-block img-fluid" src={pastelero}
                            alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img className="imgCarrusel rounded mx-auto d-block img-fluid" src={pistacho} alt="..." />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <h1 className="pastel-navbar">Nuestros Productos</h1>
                        <div className="container-fluid">
                            <div className="row">
                                {Productos.map((prod) => (
                                <div className="col-12 vol-sm-6 col-md-4 mb-4">
                                    <div className="card h-100">
                                        <img className="card-img-top" src={prod.imagen} alt={prod.titulo} />
                                        <div className="card-body">
                                            <h5 className="card-title">{prod.titulo}</h5>
                                            <p className="card-text"> Valor: {prod.precio}</p>
                                            <button className="btn button" type="button">Añadir</button>
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