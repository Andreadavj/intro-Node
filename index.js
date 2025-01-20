const { registrar, leer } = require("./operaciones");

// Obtener los argumentos de la línea de comandos
const args = process.argv.slice(2);
const operacion = args[0]; // Operación a ejecutar (registrar o leer)

if (operacion === "registrar") {
  const [nombre, edad, animal, color, enfermedad] = args.slice(1);
  if (nombre && edad && animal && color && enfermedad) {
    registrar(nombre, edad, animal, color, enfermedad);
  } else {
    console.log("Faltan argumentos. Uso: node index.js registrar <nombre> <edad> <animal> <color> <enfermedad>");
  }
} else if (operacion === "leer") {
  leer();
} else {
  console.log("Operación no válida. Uso: node index.js <registrar|leer>");
}
