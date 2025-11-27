export class Usuario {
  constructor({
    idUsuario = null,
    nombre,
    apellido,
    email,
    contrasena,
    fecha_nacimiento = null,
    tipo_usuario = "cliente",
    direccion = null,
    telefono = null,
    puntos = 0
  }) {
    this.idUsuario = idUsuario;
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.contrasena = contrasena;
    this.fecha_nacimiento = fecha_nacimiento;
    this.tipo_usuario = tipo_usuario;
    this.direccion = direccion;
    this.telefono = telefono;
    this.puntos = puntos;
  }
}
  