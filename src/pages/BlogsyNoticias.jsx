export default function BlogyNoticias(){
    return(
        <div className="mi-fondo ">
            <h1 className="h2">
                Blogs y Noticias
            </h1>
            <div className="ratio ratio-16x9">
                <iframe src="https://elpais.com/noticias/pasteleria/" 
                    frameBorder={0}
                    title="Blogs y Noticias"
                    loading="lazy"
                    style={{border:0}}
                    >


                </iframe>
            </div>

            <p>
                si no carga la página presione el boton
            </p>
            <a href="https://elpais.com/noticias/pasteleria/">
                Abrir Noticias
            </a>
        </div>
    )
}