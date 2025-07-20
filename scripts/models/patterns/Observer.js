export function mostrarMensaje(texto) {
  const contenedor = document.getElementById('alertas');
  const mensajeElem = document.createElement('p');
  mensajeElem.textContent = texto;
  contenedor.appendChild(mensajeElem);
}

class ServicioAlertas {
  constructor() {
    this.usuarios = [];
  }

  suscribir(usuario) {
    this.usuarios.push(usuario);
  }

  notificar(alerta) {
    this.usuarios.forEach(usuario => usuario.recibirAlerta(alerta));
  }
}

class Usuario {
  constructor(nombre) {
    this.nombre = nombre;
  }

  recibirAlerta(alerta) {
    mostrarMensaje(`👉 ${this.nombre}, recibiste una alerta: ${alerta.mostrar()}`);
  }
}

export { ServicioAlertas, Usuario };
