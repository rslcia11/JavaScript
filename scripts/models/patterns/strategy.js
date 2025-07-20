import { mostrarMensaje } from './Observer.js'; // opcional si quieres mostrar mensajes dentro

class EnvioContexto {
  setEstrategia(estrategia) {
    this.estrategia = estrategia;
  }

  enviar(alerta) {
    return this.estrategia.enviar(alerta);
  }
}

class EnvioCorreo {
  enviar(alerta) {
    return `📧 Enviando por correo: ${alerta.mostrar()}`;
  }
}

class EnvioSMS {
  enviar(alerta) {
    return `📱 Enviando por SMS: ${alerta.mostrar()}`;
  }
}

export { EnvioContexto, EnvioCorreo, EnvioSMS };
