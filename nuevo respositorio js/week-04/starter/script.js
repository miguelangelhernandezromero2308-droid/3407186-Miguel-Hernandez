// ============================================
// PROYECTO SEMANA 04: Generador de Mensajes
// Dominio: Sistema de Citas Médicas Online
// ============================================


// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================

// Nombre del dominio
const DOMAIN_NAME = "Sistema de Citas Médicas Online";

// Nombre de la entidad principal (cita médica)
const rawEntityName = "  Consulta Médica General  ";

// Categoría
const entityCategory = "Consulta médica";

// Código identificador
const entityCode = "CIT-001";

// Descripción
const entityDescription = "Cita médica programada para atención general en el sistema de citas médicas online.";

// Valor numérico relevante (precio de consulta)
const mainValue = 50_000;

// Estado de la cita
const isActive = true;


// ============================================
// SECCIÓN 2: Transformaciones de string
// ============================================

// Limpiar espacios
const entityName = rawEntityName.trim();

// Nombre en mayúsculas
const entityNameUpper = entityName.toUpperCase();

// Nombre en minúsculas
const entityNameLower = entityName.toLowerCase();

// Prefijo del código
const codePrefix = entityCode.slice(0, 3);


// ============================================
// SECCIÓN 3: Validaciones con búsqueda
// ============================================

// Validar prefijo del código
const hasValidPrefix = entityCode.startsWith(codePrefix);

// Verificar si la descripción contiene una palabra clave
const descriptionIsRelevant = entityDescription.includes("citas");

// Verificar si el código termina correctamente
const hasValidSuffix = entityCode.endsWith("001");


// ============================================
// SECCIÓN 4: Generación de la ficha principal
// ============================================

const separator = "=".repeat(45);
const subSeparator = "-".repeat(45);

const mainCard = `
${separator}
  ${DOMAIN_NAME.toUpperCase()} — FICHA DE CITA
${separator}
Nombre:      ${entityNameUpper}
Categoría:   ${entityCategory}
Código:      ${entityCode}
Prefijo:     ${codePrefix}
Valor:       $${mainValue}
Estado:      ${isActive ? "Activo" : "Inactivo"}

${subSeparator}
Descripción:
${entityDescription}
${separator}
`;

console.log(mainCard);


// ============================================
// SECCIÓN 5: Validaciones
// ============================================

console.log("--- Validaciones ---");

console.log(`¿Código empieza con '${codePrefix}'?: ${hasValidPrefix}`);

console.log(`¿Descripción contiene 'citas'?: ${descriptionIsRelevant}`);

console.log(`¿Código termina con '001'?: ${hasValidSuffix}`);

console.log("");


// ============================================
// SECCIÓN 6: Mensaje de notificación corto
// ============================================

console.log("--- Notificación ---");

const notification = `📢 Nueva cita médica disponible: ${entityName} (${entityCode})`;

console.log(notification);

console.log("");
