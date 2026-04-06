# 📦 Proyecto Semana 09: Catálogo de Elementos

> 🎯 ÚNICO ENTREGABLE: Este proyecto es el único entregable obligatorio para aprobar la semana 09.

---

## 🎯 Objetivo

Construir un catálogo en consola utilizando objetos en JavaScript, aplicando métodos como `Object.keys`, `Object.values`, `Object.entries`, `Object.hasOwn`, `for...in`, spread operator y operaciones sobre arrays.

---

## 📋 Dominio del Proyecto

**Sistema de Citas Médicas Online**

El sistema representa un catálogo de citas médicas, donde cada elemento contiene información del paciente, doctor, duración de la consulta y estado.

---

## 🧱 Estructura de datos

Cada cita incluye:

- `id`
- `name` (paciente)
- `doctor`
- `duration` (minutos)
- `active` (booleano)
- `specialty` (opcional)

---

## ⚙️ Funcionalidades implementadas

### 🔍 Object.*
- `Object.entries()` → mostrar detalle de cada cita
- `Object.values()` → calcular estadísticas
- `Object.keys()` → implícito en iteraciones

---

### ✅ Object.hasOwn()
- Verificación de propiedad opcional `specialty`

---

### 🔁 Iteración
- `for...in` → recorrer propiedades
- `forEach` → recorrer array

---

### ⚡ Spread Operator
- Copia de objetos
- Actualización inmutable de citas

---

### 🔧 Operaciones con arrays
- `filter()` → citas activas
- `find()` → búsqueda por id
- `map()` → agregar duración en horas
- `sort()` → ordenar por duración

---

## 📊 Reporte generado

El sistema muestra:

- Total de citas
- Cantidad de citas activas
- Estadísticas (promedio, máximo, mínimo)
- Listado ordenado
- Cita con mayor y menor duración

---

## 🚀 Cómo ejecutar

```bash
node starter/script.js