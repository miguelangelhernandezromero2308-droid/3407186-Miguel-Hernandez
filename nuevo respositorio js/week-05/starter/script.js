// ============================================
// PROYECTO SEMANA 05: Clasificador
// Dominio: Sistema de Citas Médicas Online
// ============================================

// ============================================
// SECCIÓN 1: Datos del elemento de tu dominio
// ============================================

// Datos de una cita médica
const elementName = "Consulta Medicina General";
const elementStatus = "active"; // active / inactive
const elementValue = 32; // número de citas del día
const elementType = "general"; // tipo de consulta

// Información adicional (objeto opcional)
const elementInfo = {
  doctor: "Dr. Juan Pérez",
  location: "Consultorio 3",
  detail: "Cita médica prioritaria"
};


// ============================================
// SECCIÓN 2: Clasificación con if / else if / else
// ============================================

// Clasificación según número de citas
let classification;

if (elementValue >= 30) {
  classification = "Alta demanda";
} else if (elementValue >= 15) {
  classification = "Demanda media";
} else {
  classification = "Baja demanda";
}


// ============================================
// SECCIÓN 3: Estado binario con operador ternario
// ============================================

// Estado activo o inactivo
const statusLabel = elementStatus === "active" ? "Activo" : "Inactivo";


// ============================================
// SECCIÓN 4: Tipo con switch
// ============================================

let typeLabel;

switch (elementType) {
  case "general":
    typeLabel = "Consulta general";
    break;
  case "specialist":
    typeLabel = "Consulta especializada";
    break;
  case "emergency":
    typeLabel = "Urgencia médica";
    break;
  default:
    typeLabel = "Tipo desconocido";
}


// ============================================
// SECCIÓN 5: Valor por defecto con ??
// ============================================

// Si el nombre es null o undefined
const displayName = elementName ?? "Sin nombre";

// Acceso seguro con fallback
const infoDetail = elementInfo?.detail ?? "Sin información adicional";


// ============================================
// SECCIÓN 6: Acceso seguro con ?.
// ============================================

// Acceder a propiedad opcional
const safeProperty = elementInfo?.location ?? "Ubicación no especificada";


// ============================================
// SECCIÓN 7: Ficha de salida
// ============================================

console.log("=".repeat(40));
console.log("FICHA DE CLASIFICACIÓN");
console.log("=".repeat(40));

console.log(`Nombre: ${displayName}`);
console.log(`Estado: ${statusLabel}`);
console.log(`Clasificación: ${classification}`);
console.log(`Tipo: ${typeLabel}`);
console.log(`Detalle: ${infoDetail}`);
console.log(`Ubicación: ${safeProperty}`);

console.log("=".repeat(40));
