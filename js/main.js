/* Proyecto Final con:
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

// Array con personas involucradas en el evento
let participantes = [];

// Función para cargar participantes desde un archivo JSON
function cargarParticipantes() {
  fetch("./js/participantes.json")
    .then((response) => response.json())
    .then((data) => {
      participantes = data;
      console.log("Participantes cargados:", participantes);
      guardarParticipantes(); // Guarda en localStorage después de cargar
    })
    .catch((error) => console.error("Error al cargar el JSON:", error));
}

// Llama a la función para cargar participantes al iniciar
cargarParticipantes();

// Función para filtrar y ordenar participantes por edad usando lodash
function ordenarParticipantes() {
  return _.orderBy(participantes, ["edad"], ["asc"]);
}

// Función para mostrar todos los participantes en el DOM
function mostrarTodos() {
  const resultadosDiv = document.getElementById("resultados");
  resultadosDiv.innerHTML = ""; // Limpiar resultados previos

  const participantesOrdenados = ordenarParticipantes();
  participantesOrdenados.forEach(({ nombre, rol, edad }) => {
    resultadosDiv.innerHTML += `<p>${nombre} - Rol: ${rol}, Edad: ${edad}</p>`;
  });
}

// Evento para mostrar todos los participantes
document
  .getElementById("mostrarTodosBtn")
  .addEventListener("click", mostrarTodos);

// Función para buscar un participante por nombre
function buscarParticipante(nombre) {
  return participantes.find(
    (participante) => participante.nombre.toLowerCase() === nombre.toLowerCase()
  );
}

// Evento para buscar participante por nombre
document.getElementById("buscarBtn").addEventListener("click", () => {
  const nombreInput = document.getElementById("nombreParticipante").value;
  const participante = buscarParticipante(nombreInput);
  mostrarResultados(participante);
});

// Función para mostrar un participante encontrado
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

// Guardar participantes en localStorage como JSON
function guardarParticipantes() {
  localStorage.setItem("participantes", JSON.stringify(participantes));
}

// Recuperar participantes del localStorage al iniciar
function recuperarParticipantes() {
  const participantesGuardados = JSON.parse(
    localStorage.getItem("participantes")
  );
  if (participantesGuardados) {
    participantes = participantesGuardados;
  }
}

// Llamar a la función para recuperar participantes al iniciar
recuperarParticipantes();
