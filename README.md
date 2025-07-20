# Sistema de Alertas Climáticas

Este proyecto es una demostración práctica del uso de Programación Orientada a Objetos (POO) en JavaScript junto con la implementación de tres patrones de diseño muy importantes: Factory, Observer y Strategy. Todo se muestra de forma visual en un archivo HTML sin necesidad de consola, por lo que se puede abrir directamente en el navegador para ver los resultados.

## ¿Qué se hizo?

Creamos un pequeño sistema que simula alertas (normales y climáticas), las notifica a usuarios registrados y las envía por distintos medios (correo o SMS), utilizando buenas prácticas de programación y separación de responsabilidades.

## Estructura del proyecto

scripts/
├── models/
│ ├── Alerta.js // Clases base y derivadas (POO)
│ └── patterns/
│ ├── factory.js // Patrón Factory
│ ├── Observer.js // Patrón Observer
│ └── strategy.js // Patrón Strategy
└── main.js // Lógica principal que junta todo
index.html // Vista principal

## Conceptos aplicados

### Programación Orientada a Objetos (POO)

- Encapsulación: Cada clase tiene sus propios atributos y métodos bien definidos. Por ejemplo, las alertas manejan sus propios datos y muestran su mensaje con un método `mostrar()`.
- Herencia: Creamos una clase base `Alerta` y una clase hija `AlertaClimatica` que hereda de ella y agrega información adicional (como el nivel de alerta).

### Patrón Factory

En `factory.js` se implementó el patrón Factory, que permite crear objetos sin exponer la lógica de instanciación directamente. Esto nos permite generar distintos tipos de alerta (normal o climática) desde una misma función.

### Patrón Observer

En `Observer.js`, tenemos un `ServicioAlertas` que mantiene una lista de usuarios suscritos. Cada vez que se genera una nueva alerta, todos los usuarios reciben la notificación. Esto simula cómo funcionan los sistemas de notificaciones en tiempo real.

### Patrón Strategy

En `strategy.js` implementamos una estrategia de envío de alertas. Dependiendo del contexto, se puede enviar por correo o por SMS, y cambiar la estrategia en tiempo de ejecución.

## ¿Qué se muestra al ejecutar el HTML?

Cuando abres `index.html` en el navegador, se muestra:

1. Dos alertas generadas (una normal y una climática).
2. Las notificaciones que reciben dos usuarios.
3. El envío de la alerta usando dos estrategias diferentes (correo y SMS).
4. Todo esto se ve visualmente, sin necesidad de abrir la consola.

## ¿Para qué sirve este proyecto?

Este proyecto es ideal para:

- Aprender cómo aplicar POO en JavaScript.
- Entender la lógica y estructura detrás de los patrones de diseño más usados.
- Ver cómo estructurar un proyecto real en carpetas separadas.
- Tener una base sólida para escalar a proyectos más complejos.

## ¿Cómo ejecutarlo?

1. Clona el repositorio o descarga los archivos.
2. Abre el archivo `index.html` en tu navegador.
3. Listo. Verás cómo funciona el sistema de alertas paso a paso.

## Autor

Wilson René Martínez Jiménez  
Estudiante de Tecnologías de la Información en la UIDE  
