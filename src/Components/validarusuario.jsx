let usuario = document.getElementById("usuario");
let contrasena = document.getElementById("contrasena");
let btnLogin = document.getElementById("btnLogin");


const user = "Admin";
const pass = "123456";

if (btnLogin && usuario && contrasena) {
    btnLogin.addEventListener("click", (e) => {
        e.preventDefault();
        if (usuario.value == user && contrasena.value == pass) {
            localStorage.setItem("logueado", "true");
            localStorage.setItem("usuario", usuario.value);
            window.location.href = "indice.html";
        } else {
            //alert("Usuario o contraseña incorrecta")
            const modal = new bootstrap.Modal(document.getElementById("loginError"));
            modal.show();
        }
    });
}

document.addEventListener("click", (e) => {
    const clicLogout = e.target.closest("#btnLogout, #nav-logout a");
    if (!clicLogout) return;
    e.preventDefault();
    localStorage.removeItem("logueado");
    localStorage.removeItem("usuario");

    const header = document.getElementById("header");
    header?.querySelector("txtlogin")?.classList.remove("d-none");
    header?.querySelector("txtregistro")?.classList.remove("d-none");
    header?.querySelector("txtsalir")?.classList.add("d-none");

    if (!location.pathname.endsWith("indice.html")) {
        window.location.href = "indice.html";
    }
});