"use strict";

// ============================================
// PROYECTO SEMANA 07 — Librería de Funciones
// Dominio: Sistema de Citas Médicas Online
// ============================================


// ============================================
// SECCIÓN 1: Constantes y datos del dominio
// ============================================

const DOMAIN_NAME = "Sistema de Citas Médicas Online";
const VALUE_LABEL = "citas";

// Lista de citas médicas
const appointments = [
  { id: 1, name: "Consulta General", category: "general", value: 30, active: true },
  { id: 2, name: "Consulta Pediatría", category: "specialist", value: 20, active: true },
  { id: 3, name: "Consulta Cardiología", category: "specialist", value: 25, active: false },
  { id: 4, name: "Urgencia Básica", category: "emergency", value: 40, active: true },
  { id: 5, name: "Control Médico", category: "general", value: 15, active: true }
];


// ============================================
// SECCIÓN 2: Función de formato (arrow)
// ============================================

const formatAppointment = (appointment) =>
  `🩺 ${appointment.name} [${appointment.category}] — ${VALUE_LABEL}: ${appointment.value}`;


// ============================================
// SECCIÓN 3: Función de cálculo (pura)
// ============================================

const calculateTotalAppointments = (value, factor = 1) => value * factor;


// ============================================
// SECCIÓN 4: Función de validación (arrow)
// ============================================

const isAppointmentActive = (appointment) => appointment.active === true;


// ============================================
// SECCIÓN 5: Función con parámetro por defecto
// ============================================

const formatSummary = (value, label = VALUE_LABEL, unit = "") => {
  return unit
    ? `${label}: ${unit} ${value}`
    : `${label}: ${value}`;
};


// ============================================
// SECCIÓN 6: Reporte usando funciones
// ============================================

console.log(`\n${"═".repeat(45)}`);
console.log(`   REPORTE — ${DOMAIN_NAME}`);
console.log(`${"═".repeat(45)}`);

if (appointments.length === 0) {
  console.log("\n⚠️  No hay citas registradas.");
} else {

  // LISTADO
  console.log("\n📋 Listado:");
  let i = 1;

  for (const appointment of appointments) {
    console.log(`  ${i}. ${formatAppointment(appointment)}`);
    i++;
  }

  // VALIDACIÓN
  let activeCount = 0;

  for (const appointment of appointments) {
    if (isAppointmentActive(appointment)) {
      activeCount++;
    }
  }

  console.log(`\n✅ Citas activas: ${activeCount} / ${appointments.length}`);

  // CÁLCULO
  let totalAppointments = 0;

  for (const appointment of appointments) {
    totalAppointments += calculateTotalAppointments(appointment.value);
  }

  console.log(formatSummary(totalAppointments, "Total de citas"));
}

console.log(`\n${"═".repeat(45)}\n`);
