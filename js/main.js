/* Tercera pre-entrega con al menos:
1 función
1 ciclo
1 condicional
1 objeto
1 array
1 método de búsqueda y filtrado (funciones de orden superior)
-Manipulación del DOM
1 Evento
-JSON y Storage
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

// Función para una cuenta regresiva desde un número dado
function cuentaRegresiva(n) {
  console.log(
    `Cuenta regresiva para el evento "${evento.nombre}" que dura ${evento.duracion} días.`
  );
  for (let i = n; i >= 0; i--) {
    console.log(i);
    if (i === 0) {
      console.log(
        `¡Cuenta regresiva terminada para el evento "${evento.nombre}"!`
      );
    }
  }
}

cuentaRegresiva(evento.duracion);

// Filtrar los participantes mayores de 30 años
console.log("Participantes mayores de 30:", filtrarPorEdad(30));

// DOM
function mostrarResultados(resultado) {
  const resultadosDiv = document.getElementById("resultados");
  resultadosDiv.innerHTML = ""; // Limpiar resultados previos

  if (resultado) {
    const { nombre, rol, edad } = resultado;
    resultadosDiv.innerHTML = `<p>Participante encontrado: ${nombre}, Rol: ${rol}, Edad: ${edad}</p>`;
  } else {
    resultadosDiv.innerHTML = `<p>No se encontró al participante.</p>`;
  }
}

// Evento para buscar participante
document.getElementById("buscarBtn").addEventListener("click", () => {
  const nombreInput = document.getElementById("nombreParticipante").value;
  const participante = buscarParticipante(nombreInput);
  mostrarResultados(participante);
});

// Guardar participantes en localStorage como JSON
localStorage.setItem("participantes", JSON.stringify(participantes));

// Recuperar participantes del localStorage
const participantesGuardados = JSON.parse(
  localStorage.getItem("participantes")
);
console.log("Participantes guardados:", participantesGuardados);
