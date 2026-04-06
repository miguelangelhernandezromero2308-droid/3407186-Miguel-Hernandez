# 📦 Proyecto Semana 8: Gestión de Inventario con Arrays

> 🎯 **ÚNICO ENTREGABLE**: Este proyecto es el único entregable obligatorio para aprobar la semana.

---

## 🎯 Objetivo

Aplicar los métodos de arrays en JavaScript para construir un sistema de gestión de inventario basado en el dominio asignado.

---

## 📋 Dominio del Proyecto

**Sistema de Citas Médicas Online**

El sistema gestiona citas médicas, permitiendo registrar pacientes, médicos, fechas, costos y estado de la cita.

---

## ⚙️ Funcionalidades implementadas

### 🧱 Estructura de datos
- Array de citas médicas (objetos)
- Cada cita contiene:
  - id
  - nombre del paciente
  - doctor
  - fecha
  - precio (numérico)
  - estado (activo/inactivo)

---

### 🔧 Métodos de mutación
- `push()` → agregar nueva cita
- `unshift()` → agregar cita prioritaria
- `splice()` → eliminar por índice
- `pop()` → eliminar última cita

---

### 🔍 Métodos de búsqueda
- `find()` → buscar cita por nombre
- `filter()` → obtener citas activas

---

### 🔁 Métodos de iteración
- `forEach()` → mostrar citas
- `map()` → transformar datos:
  - lista de nombres
  - precios con descuento

---

### ⚡ Spread Operator
- Creación de copia del inventario sin modificar el original

---

## 📊 Reporte generado

El sistema muestra:

- Inventario inicial
- Cambios después de mutaciones
- Resultados de búsqueda y filtrado
- Transformaciones de datos
- Resumen final del inventario

---

## 🚀 Cómo ejecutar

```bash
node starter/script.js