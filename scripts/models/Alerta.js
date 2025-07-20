class Alerta {
  constructor(mensaje) {
    this.mensaje = mensaje;
  }

  mostrar() {
    return `ALERTA: ${this.mensaje}`;
  }
}

class AlertaClimatica extends Alerta {
  constructor(mensaje, nivel) {
    super(mensaje);
    this.nivel = nivel;
  }

  mostrar() {
    return `ALERTA CLIMÁTICA (${this.nivel}): ${this.mensaje}`;
  }
}

export { Alerta, AlertaClimatica };
