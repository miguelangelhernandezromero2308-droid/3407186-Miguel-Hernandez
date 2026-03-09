// ============================================
// PROYECTO SEMANA 02: Ficha de Datos del Dominio
// Dominio: Sistema de citas médicas online
// ============================================

// ============================================
// SECCIÓN 1: DATOS PRINCIPALES
// ============================================

// Nombre del dominio
const DOMAIN_NAME = "Sistema de citas médicas online";

// Nombre del elemento principal del sistema
const itemName = "Consulta Medicina General";

// Categoría o tipo de cita médica
const itemCategory = "Consulta médica presencial";

// Número relevante del dominio (precio de la consulta)
const itemQuantity = 50_000;

// Boolean con prefijo semántico
const isItemAvailable = true;

// Valor null que indica algo no asignado aún
const assignedDoctor = null;


// ============================================
// SECCIÓN 2: MOSTRAR FICHA DE DATOS
// ============================================
console.log("===========================");
console.log(`FICHA DE DATOS: ${DOMAIN_NAME}`);
console.log("===========================");
console.log("");

console.log(`Nombre:     ${itemName}`);
console.log(`Categoría:  ${itemCategory}`);
console.log(`Precio:     ${itemQuantity}`);
console.log(`Disponible: ${isItemAvailable}`);

console.log("");


// ============================================
// SECCIÓN 3: VERIFICACIÓN DE TIPOS CON typeof
// ============================================
console.log("--- Tipos de datos ---");

console.log("typeof itemName:        ", typeof itemName);
console.log("typeof itemQuantity:    ", typeof itemQuantity);
console.log("typeof isItemAvailable: ", typeof isItemAvailable);

console.log("");


// ============================================
// SECCIÓN 4: CONVERSIONES EXPLÍCITAS
// ============================================
console.log("--- Conversiones ---");

// Convertir número a texto
const priceAsText = String(itemQuantity);

console.log("Precio como texto:", priceAsText);
console.log("typeof precio convertido:", typeof priceAsText);

console.log("");


// ============================================
// SECCIÓN 5: VALOR NULL
// ============================================
console.log("--- Valor nulo ---");

console.log("Doctor asignado:", assignedDoctor);
console.log("typeof doctor:", typeof assignedDoctor);
console.log("¿Es null?:", assignedDoctor === null);

console.log("");


// ============================================
// CIERRE
// ============================================
console.log("===========================");
console.log("FIN DE FICHA");
console.log("===========================");
