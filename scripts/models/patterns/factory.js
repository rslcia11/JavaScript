import { Alerta, AlertaClimatica } from "../Alerta.js";

class AlertaFactory {
  crearAlerta(tipo, mensaje, nivel = null) {
    if (tipo === 'normal') {
      return new Alerta(mensaje);
    } else if (tipo === 'climatica') {
      return new AlertaClimatica(mensaje, nivel);
    }
  }
}

export default AlertaFactory;
