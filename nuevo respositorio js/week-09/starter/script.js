// ============================================
// PROYECTO SEMANA 09: Catálogo de Elementos
// Dominio: Sistema de Citas Médicas
// ============================================

const DOMAIN_NAME = "Sistema de Citas Médicas";
const VALUE_LABEL = "citas";

// ============================================
// DATOS DEL CATÁLOGO
// ============================================

const items = [
  { id: 1, name: "Juan Pérez", doctor: "Dr. Gómez", duration: 30, active: true, specialty: "General" },
  { id: 2, name: "María López", doctor: "Dra. Ruiz", duration: 45, active: true },
  { id: 3, name: "Carlos Díaz", doctor: "Dr. Torres", duration: 20, active: false, specialty: "Pediatría" },
  { id: 4, name: "Ana Martínez", doctor: "Dra. Rojas", duration: 60, active: true, specialty: "Dermatología" },
  { id: 5, name: "Luis Gómez", doctor: "Dr. Castro", duration: 35, active: false },
  { id: 6, name: "Sofía Ramírez", doctor: "Dr. León", duration: 50, active: true, specialty: "Cardiología" }
];

// ============================================
// INSPECCIÓN CON Object.*
// ============================================

const inspectItem = (item) => {
  console.log(`\n📋 Detalle de: ${item.name}`);
  Object.entries(item).forEach(([key, value]) => {
    console.log(`${key.padEnd(12)}: ${value}`);
  });
};

const calculateStats = (numericKey) => {
  const values = items.map(item => item[numericKey]);
  const total = values.reduce((acc, val) => acc + val, 0);
  const avg = total / values.length;
  const max = Math.max(...values);
  const min = Math.min(...values);

  console.log("\n📊 Estadísticas:");
  console.log(`Total: ${total}`);
  console.log(`Promedio: ${avg.toFixed(1)}`);
  console.log(`Máximo: ${max}`);
  console.log(`Mínimo: ${min}`);
};

// ============================================
// VERIFICACIÓN CON Object.hasOwn()
// ============================================

const showWithOptionals = (item) => {
  console.log(`\n→ ${item.name}`);
  console.log(`Doctor: ${item.doctor}`);
  console.log(`Duración: ${item.duration} min`);

  if (Object.hasOwn(item, "specialty")) {
    console.log(`Especialidad: ${item.specialty}`);
  } else {
    console.log("Especialidad: No especificada");
  }
};

// ============================================
// ITERACIÓN CON for...in
// ============================================

const printAllProperties = (item) => {
  console.log(`\n🔍 Propiedades de "${item.name}":`);
  for (const key in item) {
    if (Object.hasOwn(item, key)) {
      console.log(`${key}: ${item[key]}`);
    }
  }
};

// ============================================
// SPREAD OPERATOR
// ============================================

const updateItem = (item, changes) => {
  return { ...item, ...changes };
};

// ============================================
// OPERACIONES CON EL ARRAY
// ============================================

const getAvailable = () => {
  return items.filter(item => item.active === true);
};

const findById = (id) => {
  return items.find(item => item.id === id);
};

const addCalculatedProp = () => {
  return items.map(item => ({
    ...item,
    durationHours: (item.duration / 60).toFixed(2)
  }));
};

const sortByNumericProp = (ascending = true) => {
  return [...items].sort((a, b) =>
    ascending ? a.duration - b.duration : b.duration - a.duration
  );
};

// ============================================
// REPORTE FINAL
// ============================================

const buildReport = () => {
  console.log("\n" + "=".repeat(50));
  console.log(`📦 CATÁLOGO: ${DOMAIN_NAME.toUpperCase()}`);
  console.log("=".repeat(50));

  console.log(`Total citas: ${items.length}`);
  console.log(`Activas: ${getAvailable().length}`);

  calculateStats("duration");

  console.log("\n📋 Listado ordenado:");
  sortByNumericProp().forEach(item => {
    console.log(`${item.name} — ${item.duration} min`);
  });

  const sorted = sortByNumericProp();
  console.log(`\n⏱️ Mayor duración: ${sorted[sorted.length - 1].name}`);
  console.log(`⏱️ Menor duración: ${sorted[0].name}`);

  console.log("=".repeat(50));
};

// ============================================
// EJECUCIÓN
// ============================================

console.log(`\n🚀 Iniciando catálogo: ${DOMAIN_NAME}`);
console.log(`Total de ${VALUE_LABEL}: ${items.length}`);

inspectItem(items[0]);
calculateStats("duration");
items.forEach(showWithOptionals);
printAllProperties(items[0]);

const updated = updateItem(items[0], { duration: 40 });
console.log("\n🔄 Actualización inmutable:", updated);

console.log("\n✅ Disponibles:");
console.log(getAvailable());

console.log("\n🔎 Buscar ID 2:");
console.log(findById(2));

console.log("\n🔎 Buscar ID inexistente:");
console.log(findById(99));

console.log("\n🧮 Con propiedad calculada:");
console.log(addCalculatedProp());

console.log("\n📊 Ordenados:");
console.log(sortByNumericProp());

buildReport();