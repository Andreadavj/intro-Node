const fs = require("fs");
const path = './citas.json';

// Función para registrar una nueva cita
function registrar(nombre, edad, animal, color, enfermedad) {
    // Comprobar si el archivo existe, si no lo crea con un array vacío
    if (!fs.existsSync(path)) {
        fs.writeFileSync(path, JSON.stringify([])); // Crea el archivo vacío si no existe
    }

    const data = fs.readFileSync(path, "utf8");
    const citas = JSON.parse(data);

    // Crear la nueva cita
    const nuevaCita = { nombre, edad, animal, color, enfermedad };

    // Añadir la nueva cita al arreglo de citas
    citas.push(nuevaCita);

    // Guardar las citas actualizadas en el archivo
    fs.writeFileSync(path, JSON.stringify(citas, null, 2), "utf8");
    console.log("Cita registrada con éxito.");
}

// Función para leer todas las citas
function leer() {
    // Verificar si el archivo existe antes de leerlo
    if (fs.existsSync(path)) {
        const data = fs.readFileSync(path, "utf8");
        const citas = JSON.parse(data);
      
        // Mostrar todas las citas
        console.log("Citas registradas:");
        citas.forEach((cita, index) => {
            console.log(`\nCita #${index + 1}`);
            console.log(`Nombre: ${cita.nombre}`);
            console.log(`Edad: ${cita.edad}`);
            console.log(`Animal: ${cita.animal}`);
            console.log(`Color: ${cita.color}`);
            console.log(`Enfermedad: ${cita.enfermedad}`);
        });
    } else {
        console.log("No hay citas registradas.");
    }
}

module.exports = { registrar, leer };
