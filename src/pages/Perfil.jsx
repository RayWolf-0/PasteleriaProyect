export default function Perfil() {

    return (
        <div>
                <main class="perfil">
                    <section class="info-usuario">
                        <img className="rounded mx-auto d-block img-fluid" src="https://i.pravatar.cc/150?img=47" alt="Foto de usuario"/>
                            <div class="datos">
                                <h2>Perfil de Usuario</h2>
                                <p><strong>Nombre:</strong> Ana López</p>
                                <p><strong>Correo:</strong> ana.lopez@duocuc.cl</p>
                                <p><strong>Edad:</strong> 52 años</p>
                                <p><strong>Beneficio activo:</strong> 🎉 50% de descuento en todas las compras</p>
                            </div>
                    </section>

                    <section class="seccion">
                        <h3>Preferencias de compra</h3>
                        <ul>
                            <li>🍫 Tortas de Chocolate</li>
                            <li>🎂 Tortas Circulares medianas</li>
                            <li>🍪 Productos Sin Azúcar</li>
                        </ul>
                    </section>

                    <section class="seccion">
                        <h3>Historial de pedidos</h3>
                        <ul>
                            <li>Torta Circular de Manjar - $42.000 CLP</li>
                            <li>Mousse de Chocolate - $5.000 CLP</li>
                            <li>Empanada de Manzana - $3.000 CLP</li>
                        </ul>
                    </section>

                    <section class="seccion">
                        <h3>Beneficios especiales</h3>
                        <ul>
                            <li>✅ 50% de descuento por ser mayor de 50 años</li>
                            <li>✅ Tortas gratis en cumpleaños con correo institucional DUOC</li>
                            <li>✅ 10% de descuento de por vida con el código “FELICES50”</li>
                        </ul>
                    </section>

                    <section class="seccion">
                        <h3>Recomendaciones personalizadas</h3>
                        <ul>
                            <li>🎁 Torta Especial de Cumpleaños</li>
                            <li>🥮 Brownie Sin Gluten</li>
                            <li>🍮 Tiramisú Clásico</li>
                        </ul>
                    </section>

                    <section class="seccion impacto">
                        <h3>Impacto comunitario</h3>
                        <p>Con tus compras estás apoyando a los <strong>estudiantes de gastronomía de Duoc</strong>, quienes
                            participan en el desarrollo de nuevas recetas y aprendizajes.</p>
                    </section>
                </main>

        </div>
    );
}