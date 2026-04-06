// ============================================
// PROYECTO INTEGRADOR — ETAPA 0
// Dominio: Sistema de Citas Médicas
// ============================================

"use strict";

// ============================================
// SECCIÓN 1: Configuración y Constantes
// ============================================

const DOMAIN_NAME = "Sistema de Citas Médicas";
const VALUE_LABEL = "citas";
const MAX_ITEMS = 1_000;

// ============================================
// SECCIÓN 2: Datos — Array Principal
// ============================================

const items = [
  {
    id: 1,
    patient: "Juan Pérez",
    doctor: "Dr. Gómez",
    days: 3,
    active: true,
    type: "general",
  },
  {
    id: 2,
    patient: "María López",
    doctor: "Dra. Ruiz",
    days: 1,
    active: true,
    type: "especialista",
    notes: "Requiere seguimiento",
  },
  {
    id: 3,
    patient: "Carlos Díaz",
    doctor: "Dr. Torres",
    days: 5,
    active: false,
    type: "general",
  },
  {
    id: 4,
    patient: "Ana Martínez",
    doctor: "Dra. Pérez",
    days: 2,
    active: true,
    type: "urgente",
  },
  {
    id: 5,
    patient: "Luis Ramírez",
    doctor: "Dr. Castro",
    days: 4,
    active: false,
    type: "especialista",
  },
  {
    id: 6,
    patient: "Sofía Herrera",
    doctor: "Dra. León",
    days: 1,
    active: true,
    type: "general",
  },
];

// ============================================
// SECCIÓN 3: Funciones CRUD
// ============================================

const addItem = (item) => {
  if (items.length >= MAX_ITEMS) {
    console.log("❌ No se pueden agregar más citas");
    return;
  }
  items.push(item);
  console.log(`✅ Cita agregada para ${item.patient}`);
};

const findById = (id) => {
  return items.find((item) => item.id === id);
};

const getActive = () => {
  return items.filter((item) => item.active);
};

const filterByField = (field, value) => {
  return items.filter((item) => item[field] === value);
};

// ============================================
// SECCIÓN 4: Funciones de Análisis
// ============================================

const updateItem = (id, changes) => {
  return items.map((item) =>
    item.id === id ? { ...item, ...changes } : item
  );
};

const calculateStats = (field) => {
  const values = items.map((i) => i[field]);

  const total = values.reduce((acc, val) => acc + val, 0);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const avg = total / values.length;

  return { min, max, avg, total };
};

// ============================================
// SECCIÓN 5: Funciones de Display
// ============================================

const formatItem = (item) => {
  const notes = item.notes ?? "Sin notas";

  return `${String(item.id).padEnd(3)} | ${item.patient.padEnd(15)} | ${item.type.padEnd(12)} | ${item.days
    .toString()
    .padEnd(5)} | ${item.active ? "Activa" : "Cancelada"} | ${notes}`;
};

const buildReport = () => {
  console.log("\n" + "=".repeat(50));
  console.log(`📊 REPORTE — ${DOMAIN_NAME.toUpperCase()}`);
  console.log("=".repeat(50));

  console.log("\n📋 LISTADO:");
  items.forEach((item) => console.log(formatItem(item)));

  const active = getActive();
  console.log(`\n✅ Activas: ${active.length}`);
  console.log(`❌ Canceladas: ${items.length - active.length}`);

  const stats = calculateStats("days");
  console.log(`\n📈 Estadísticas (días de espera):`);
  console.log(`Min: ${stats.min}`);
  console.log(`Max: ${stats.max}`);
  console.log(`Prom: ${stats.avg.toFixed(2)}`);

  console.log("\n🔍 Propiedades del primer elemento:");
  Object.entries(items[0]).forEach(([key, value]) => {
    console.log(`${key.padEnd(12)}: ${value}`);
  });

  console.log(`\nTotal de ${VALUE_LABEL}: ${items.length}`);
  console.log("=".repeat(50));
};

// ============================================
// SECCIÓN 6: Ejecución Principal
// ============================================

console.log("=".repeat(40));
console.log(`  ${DOMAIN_NAME.toUpperCase()}`);
console.log("=".repeat(40));

console.log(`Total de ${VALUE_LABEL}: ${items.length} / ${MAX_ITEMS}\n`);

// Buscar por id
const found = findById(1);
console.log("🔎 Buscar id=1:", found?.patient ?? "No encontrado");

// Activos
const active = getActive();
console.log(`\n✅ Activos: ${active.length}`);

// Filtro
const filtered = filterByField("type", "general");
console.log(`📌 Citas tipo general: ${filtered.length}`);

// Update
const updated = updateItem(1, { days: 10 });
console.log(`\n✏️ Actualizado id=1 → días: ${updated.find(i => i.id === 1)?.days}`);

// Estadísticas
const stats = calculateStats("days");
console.log(`\n📊 Promedio días: ${stats.avg.toFixed(2)}`);

// Reporte
buildReport();

// Agregar nuevo
addItem({
  id: 7,
  patient: "Nuevo Paciente",
  doctor: "Dr. Nuevo",
  days: 2,
  active: true,
  type: "urgente",
});