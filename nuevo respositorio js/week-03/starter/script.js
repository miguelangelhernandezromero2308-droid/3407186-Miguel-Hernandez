// ============================================
// PROYECTO SEMANA 03: Calculadora de Dominio
// Dominio: Sistema de Citas Médicas Online
// ============================================

// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================

// Constantes base del sistema de citas médicas
const CONSULTATION_PRICE = 50_000;
const MAX_APPOINTMENTS_PER_DAY = 40;
const DOCTORS_AVAILABLE = 5;

// Datos de ejemplo del día
const patientsToday = 32;
const extraServiceCost = 10_000;


// ============================================
// SECCIÓN 2: Operaciones aritméticas
// ============================================
console.log("=== Operaciones básicas ===");

// Total de ingresos por consultas del día
const totalRevenue = CONSULTATION_PRICE * patientsToday;
console.log("Ingresos por consultas:", totalRevenue);

// Citas disponibles restantes
const remainingAppointments = MAX_APPOINTMENTS_PER_DAY - patientsToday;
console.log("Citas disponibles:", remainingAppointments);

// Ingreso promedio por médico
const revenuePerDoctor = totalRevenue / DOCTORS_AVAILABLE;
console.log("Ingreso promedio por médico:", revenuePerDoctor);

// Servicios extra vendidos
const extraServicesTotal = patientsToday * extraServiceCost;
console.log("Ingresos por servicios extra:", extraServicesTotal);

// Pacientes que sobran si se reparten equitativamente
const remainderPatients = patientsToday % DOCTORS_AVAILABLE;
console.log("Pacientes restantes por asignación:", remainderPatients);

console.log("");


// ============================================
// SECCIÓN 3: Asignación compuesta
// ============================================
console.log("=== Asignación compuesta ===");

// Total acumulado del sistema durante el día
let runningTotal = 0;

runningTotal += totalRevenue;
console.log("Total tras consultas:", runningTotal);

runningTotal += extraServicesTotal;
console.log("Total tras servicios extra:", runningTotal);

// Aplicar descuento del 10% por promoción del día
runningTotal *= 0.90;
console.log("Total con descuento aplicado:", runningTotal);

console.log("");


// ============================================
// SECCIÓN 4: Comparación estricta
// ============================================
console.log("=== Validaciones con === ===");

// Verificar si el sistema llegó al máximo de citas
const isFullCapacity = patientsToday === MAX_APPOINTMENTS_PER_DAY;
console.log("¿Se alcanzó el máximo de citas?", isFullCapacity);

// Verificar si quedan citas disponibles
const hasAppointmentsAvailable = patientsToday < MAX_APPOINTMENTS_PER_DAY;
console.log("¿Hay citas disponibles?", hasAppointmentsAvailable);

// Verificar si los ingresos superan cierto valor
const highRevenue = totalRevenue >= 1_000_000;
console.log("¿Ingresos mayores o iguales a 1,000,000?", highRevenue);

console.log("");


// ============================================
// SECCIÓN 5: Operadores lógicos
// ============================================
console.log("=== Condiciones lógicas ===");

// Condición para aplicar promoción especial
const isMember = true;
const qualifiesForDiscount = isMember && totalRevenue >= 500_000;

console.log("¿Aplica descuento especial?", qualifiesForDiscount);

// Sistema saturado o casi lleno
const systemBusy = patientsToday > 30 || DOCTORS_AVAILABLE < 3;

console.log("¿Sistema muy ocupado?", systemBusy);

// Negación lógica
const systemAvailable = !isFullCapacity;
console.log("¿El sistema aún acepta citas?", systemAvailable);

console.log("");


// ============================================
// SECCIÓN 6: Resumen final
// ============================================
console.log("=== Resumen ===");

console.log("Pacientes atendidos hoy:", patientsToday);
console.log("Ingresos totales del día:", runningTotal);
console.log("Citas restantes:", remainingAppointments);
console.log("Médicos disponibles:", DOCTORS_AVAILABLE);

console.log("");
