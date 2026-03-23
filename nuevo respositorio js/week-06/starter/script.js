// ============================================
// PROYECTO SEMANA 06: Reporte con Bucles
// Dominio: Sistema de Citas Médicas Online
// ============================================


// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================

// Lista de citas médicas
const appointments = [
  { name: "Consulta General", category: "general", value: 30 },
  { name: "Consulta Pediatría", category: "specialist", value: 20 },
  { name: "Consulta Cardiología", category: "specialist", value: 25 },
  { name: "Urgencia Básica", category: "emergency", value: 40 },
  { name: "Control Médico", category: "general", value: 15 },
  { name: "Consulta Dermatología", category: "specialist", value: 18 }
];

// Categorías del sistema
const categories = ["general", "specialist", "emergency"];

// Nombre del valor numérico
const valueLabel = "citas por día";


// ============================================
// SECCIÓN 2: Listado completo con for...of
// ============================================
console.log("=== LISTADO COMPLETO ===");

let lineNumber = 0;

for (const item of appointments) {
  lineNumber++;
  console.log(`${lineNumber}. ${item.name} — ${item.category} — ${valueLabel}: ${item.value}`);
}

console.log("");


// ============================================
// SECCIÓN 3: Contadores por categoría
// ============================================
console.log("=== CONTEO POR CATEGORÍA ===");

for (const category of categories) {
  let count = 0;

  for (const item of appointments) {
    if (item.category === category) {
      count++;
    }
  }

  console.log(`${category}: ${count} elemento(s)`);
}

console.log("");


// ============================================
// SECCIÓN 4: Totales y promedio
// ============================================
console.log("=== ESTADÍSTICAS ===");

let totalValue = 0;

for (const item of appointments) {
  totalValue += item.value;
}

const averageValue = appointments.length > 0 ? totalValue / appointments.length : 0;

console.log(`Total ${valueLabel}: ${totalValue}`);
console.log(`Promedio ${valueLabel}: ${averageValue.toFixed(1)}`);

console.log("");


// ============================================
// SECCIÓN 5: Máximo y mínimo
// ============================================
console.log("=== MÁXIMO Y MÍNIMO ===");

let maxItem = appointments[0] ?? null;
let minItem = appointments[0] ?? null;

if (appointments.length > 0) {
  for (const item of appointments) {

    if (item.value > maxItem.value) {
      maxItem = item;
    }

    if (item.value < minItem.value) {
      minItem = item;
    }
  }

  console.log(`Mayor ${valueLabel}: ${maxItem.name} (${maxItem.value})`);
  console.log(`Menor ${valueLabel}: ${minItem.name} (${minItem.value})`);
}

console.log("");


// ============================================
// SECCIÓN 6: Reporte con for clásico
// ============================================
console.log("=== REPORTE DETALLADO ===");

for (let i = 0; i < appointments.length; i++) {
  const item = appointments[i];

  // Ejemplo de uso de continue
  if (item.value === 0) continue;

  const comparison = item.value >= averageValue
    ? "sobre el promedio"
    : "bajo el promedio";

  console.log(`${i + 1}. ${item.name} — ${comparison}`);
}

console.log("");
console.log("=== FIN DEL REPORTE ===");