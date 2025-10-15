export default function BlogNoticias(){
    return(
        <div>
            <h1>
                Blogs y Noticias
            </h1>
            <div className="ratio ratio-16x9">
                <iframe src="https://www.duoc.cl/noticias/" 
                    frameborder="0"
                    title="Blogs y Noticias"
                    loading="lazy"
                    style={{border:0}}
                    >


                </iframe>
            </div>

            <p>
                si no carga la página presione el boton
            </p>
            <a href="https://www.duoc.cl/noticias/">
                Abrir Noticias
            </a>
        </div>
    )
}