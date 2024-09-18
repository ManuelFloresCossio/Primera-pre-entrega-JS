/* Segunda pre-entrega con al menos:
1 función
1 ciclo
1 condicional
1 objeto
1 array
1 método de búsqueda y filtrado (funciones de orden superior)
*/

// Objeto para representar un evento de cuenta regresiva
const evento = {
  nombre: "Lanzamiento de videojuego",
  fecha: "2024-11-30",
  ubicacion: "Online",
  duracion: 7, // duración en días para la cuenta regresiva
};

// Array con personas involucradas en el evento
const participantes = [
  { nombre: "Juan", rol: "Desarrollador", edad: 30 },
  { nombre: "Ana", rol: "Community Manager", edad: 25 },
  { nombre: "Carlos", rol: "Director Creativo", edad: 35 },
  { nombre: "Lucía", rol: "Tester", edad: 29 },
];

// Función para filtrar participantes mayores de cierta edad
function filtrarPorEdad(minEdad) {
  return participantes.filter((participante) => participante.edad > minEdad);
}

// Función para buscar un participante por nombre
function buscarParticipante(nombre) {
  return participantes.find((participante) => participante.nombre === nombre);
}

// Función para una cuenta regresiva desde un número dado (relacionado con la duración del evento)
function cuentaRegresiva(n) {
  console.log(
    `Cuenta regresiva para el evento "${evento.nombre}" que dura ${evento.duracion} días.`
  );
  // Bucle para contar hacia atrás desde n hasta 0
  for (let i = n; i >= 0; i--) {
    console.log(i); // Imprimir el número actual

    // Condicional para verificar si ha llegado a 0
    if (i === 0) {
      console.log(
        `¡Cuenta regresiva terminada para el evento "${evento.nombre}"!`
      );
    }
  }
}

// Ejemplo de uso de la cuenta regresiva
cuentaRegresiva(evento.duracion); // Ejecutar la cuenta regresiva con la duración del evento

// Filtrar participantes mayores de 30 años
console.log("Participantes mayores de 30:", filtrarPorEdad(30));

// Buscar un participante por nombre
console.log("Buscar a Juan:", buscarParticipante("Juan"));
