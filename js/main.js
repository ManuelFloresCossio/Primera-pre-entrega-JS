/* Primera pre-entrega con al menos:
1 función
1 ciclo
1 condicional
*/
// Función para una cuenta regresiva desde un número dado
function cuentaRegresiva(n) {
  // Bucle para contar hacia atrás desde n hasta 0
  for (let i = n; i >= 0; i--) {
    console.log(i); // Imprimir el número actual

    // Condicional para verificar si ha llegado a 0
    if (i === 0) {
      console.log("¡Cuenta regresiva terminada!");
    }
  }
}

// Ejemplo de uso
cuentaRegresiva(5);
// Salida:
// 5
// 4
// 3
// 2
// 1
// 0
// ¡Cuenta regresiva terminada!
