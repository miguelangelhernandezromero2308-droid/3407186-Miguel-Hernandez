// ============================================
// SEMANA 08 — PROYECTO: Gestión de Inventario
// Dominio: Sistema de Citas Médicas
// ============================================

const DOMAIN_NAME = "Sistema de Citas Médicas";
const VALUE_LABEL = "citas";

// ============================================
// 1. ARRAY INICIAL
// ============================================

const items = [
  { id: 1, name: "Juan Pérez", doctor: "Dr. Gómez", date: "2026-04-10", price: 50_000, active: true },
  { id: 2, name: "María López", doctor: "Dra. Ruiz", date: "2026-04-11", price: 70_000, active: true },
  { id: 3, name: "Carlos Díaz", doctor: "Dr. Torres", date: "2026-04-12", price: 40_000, active: false },
  { id: 4, name: "Ana Martínez", doctor: "Dra. Rojas", date: "2026-04-13", price: 60_000, active: true },
  { id: 5, name: "Luis Gómez", doctor: "Dr. Castro", date: "2026-04-14", price: 55_000, active: false }
];

// ============================================
// 2. FUNCIONES DE GESTIÓN
// ============================================

const addItem = (newItem) => {
  items.push(newItem);
  console.log(`Agregado: ${newItem.name}`);
};

const removeLastItem = () => {
  const removed = items.pop();
  console.log(`Eliminado: ${removed?.name}`);
  return removed;
};

const addPriorityItem = (priorityItem) => {
  items.unshift(priorityItem);
  console.log(`Elemento prioritario agregado: ${priorityItem.name}`);
};

const removeByIndex = (index) => {
  const removed = items.splice(index, 1);
  console.log(`Eliminado por índice: ${removed[0]?.name}`);
};

const getActiveItems = () => {
  return items.filter(item => item.active === true);
};

const findByName = (name) => {
  return items.find(item => item.name === name);
};

const formatItem = (item) => {
  return `[${item.id}] ${item.name} — ${item.doctor} — ${item.date} — $${item.price} — ${item.active ? "Activa" : "Cancelada"}`;
};

// ============================================
// 3. REPORTE
// ============================================

console.log(`\n${"=".repeat(50)}`);
console.log(`📦 GESTIÓN DE ${DOMAIN_NAME.toUpperCase()}`);
console.log(`${"=".repeat(50)}\n`);

console.log(`📋 Inventario inicial (${items.length} ${VALUE_LABEL}):`);
items.forEach(item => console.log(`  ${formatItem(item)}`));

console.log("\n--- Operaciones de mutación ---\n");

// Agregar nuevo
addItem({ id: 6, name: "Sofía Ramírez", doctor: "Dr. León", date: "2026-04-15", price: 65_000, active: true });

// Prioritario
addPriorityItem({ id: 0, name: "Paciente Urgente", doctor: "Dr. Urgencias", date: "2026-04-09", price: 80_000, active: true });

// Eliminar por índice
removeByIndex(2);

// Eliminar último
removeLastItem();

console.log("\n--- Inventario después de mutaciones ---\n");
items.forEach(item => console.log(`  ${formatItem(item)}`));

console.log("\n--- Búsqueda y filtrado ---\n");

// Buscar
const found = findByName("Ana Martínez");
console.log("Búsqueda:", found ? formatItem(found) : "No encontrado");

// Filtrar activos
const activeItems = getActiveItems();
console.log(`Activos: ${activeItems.length}`);

// Spread
const snapshot = [...items, { id: 99, name: "Extra", doctor: "Dr. Extra", date: "2026-05-01", price: 100_000, active: true }];
console.log("Snapshot (copia):", snapshot.length);

console.log("\n--- Transformación con map ---\n");

// Nombres
const names = items.map(item => item.name);
console.log("Nombres:", names);

// Precios con descuento
const discounted = items.map(item => ({
  ...item,
  price: item.price * 0.9
}));
console.log("Precios con descuento:", discounted);

console.log("\n--- Resumen final ---\n");
console.log(`Total en inventario: ${items.length} ${VALUE_LABEL}`);

const activeCount = getActiveItems().length;
console.log(`Activos: ${activeCount} | Inactivos: ${items.length - activeCount}`);

console.log(`\n${"=".repeat(50)}`);
console.log("✅ Reporte completado");
console.log(`${"=".repeat(50)}\n`);
