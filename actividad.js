// Creación de arreglos: Lista de especialistas disponibles
let especialistas = [
  { nombre: "Sofía Ramírez", rol: "Estratega" },
  { nombre: "Diego Vargas", rol: "Redactor" },
  { nombre: "Clara Morales", rol: "Diseñadora Gráfica" }]

// TODO 1
especialistas.push({nombre: "Lucía Fernández", rol: "Analista de Datos"});
console.log(especialistas)
// TODO 2
let eliminado = especialistas.pop();
console.log(eliminado);
// TODO 3
let nuevoEspecialista = especialistas.unshift({nombre: "Mateo González", rol:"Community Manager"});
console.log(especialistas);
console.log(nuevoEspecialista);
// TODO 4
let Eliminado = especialistas.shift();
console.log(Eliminado);
console.log(especialistas);
// TODO 5
let extracion_de_los_dos_primeros_nombres = especialistas.slice(0, 2);
console.log(extracion_de_los_dos_primeros_nombres);
// TODO 6
let campanas = [
  [
    { nombre: "Sofía Ramírez", rol: "Estratega" },
    { nombre: "Diego Vargas", rol: "Redactor" }
  ],
  [
    { nombre: "Clara Morales", rol: "Diseñadora Gráfica" },
    { nombre: "Lucía Fernández", rol: "Analista de Datos" }
  ]
];

console.log("Reporte de proyectos:");
campanas.forEach((campanas, indice) => {
  console.log(`Proyecto ${indice + 1}:`);
  campanas.forEach(especialistas => {
    console.log(`- ${especialistas.nombre} (${especialistas.rol})`);
  });
});
// TODO 7
for (let campana of campanas){
  console.log(`campanas con ${campanas.length} especialistas: `);
  for (let especialista of campana) {
    console.log(`  ${especialista.nombre}`);
  }
}
// TODO 8
let nombresMayusculas = especialistas.map(especialista => ({
  nombre: especialista.nombre.toUpperCase(),
  rol: especialista.rol
}));
console.log(nombresMayusculas);

// TODO 9
function generarReporteCompleto() {
  console.log("Reporte Completo:");
 
  for (let i = 0; i < campañas.length; i++) {
    const campaña = campañas[i];
    const numEspecialistas = campaña.especialistas.length;
    
    
    console.log(`Campaña ${i + 1} (${numEspecialistas} especialistas):`);
    
    
    for (let j = 0; j < campaña.especialistas.length; j++) {
      const especialista = campaña.especialistas[j];
      console.log(`  ${j + 1}. ${especialista.nombre} - ${especialista.rol}`);
    }
  }
}