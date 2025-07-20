import AlertaFactory from './patterns/factory.js';
import { ServicioAlertas, Usuario } from './patterns/Observer.js';
import { EnvioContexto, EnvioCorreo, EnvioSMS } from './patterns/strategy.js';


function mostrarMensaje(texto) {
  const contenedor = document.getElementById('alertas');
  const mensajeElem = document.createElement('p');
  mensajeElem.textContent = texto;
  contenedor.appendChild(mensajeElem);
}

// Crear alertas
const factory = new AlertaFactory();
const alerta1 = factory.crearAlerta('normal', 'Todo está bien.');
const alerta2 = factory.crearAlerta('climatica', 'Tormenta eléctrica en la zona', 'ALTA');

mostrarMensaje(alerta1.mostrar());
mostrarMensaje(alerta2.mostrar());

// Observer
const servicio = new ServicioAlertas();
const usuario1 = new Usuario('Wilson');
const usuario2 = new Usuario('Andrea');

servicio.suscribir(usuario1);
servicio.suscribir(usuario2);

servicio.notificar(alerta2);

// Strategy
const envio = new EnvioContexto();
envio.setEstrategia(new EnvioCorreo());
mostrarMensaje(envio.enviar(alerta2));

envio.setEstrategia(new EnvioSMS());
mostrarMensaje(envio.enviar(alerta1));
