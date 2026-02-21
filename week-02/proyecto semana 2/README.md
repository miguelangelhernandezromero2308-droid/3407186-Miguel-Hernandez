# 🏥 Sistema de Citas Médicas Online  
**Proyecto Semana 02 – Gestión de Estado con JavaScript**

---

## 📌 Descripción del Proyecto

Este proyecto consiste en el desarrollo de un **Sistema de Citas Médicas Online**, implementado con JavaScript moderno (ES2023), aplicando principios de:

- Gestión de estado
- Inmutabilidad
- Programación funcional
- Manipulación del DOM
- Persistencia con LocalStorage

El sistema permite gestionar citas médicas de forma dinámica, incluyendo creación, edición, eliminación, filtrado y estadísticas en tiempo real.

---

## 🎯 Objetivo Académico

Aplicar conceptos avanzados de JavaScript como:

- map()
- filter()
- reduce()
- Spread Operator (...)
- Arrow Functions
- Destructuring
- LocalStorage
- Render dinámico

Manteniendo una arquitectura limpia, modular y organizada.

---

## 🚀 Funcionalidades Implementadas

### ✅ CRUD Completo
- Crear nueva cita médica
- Editar cita existente
- Eliminar cita
- Activar / Desactivar cita
- Limpiar citas inactivas

---

### 🔎 Sistema de Filtros
- Filtrar por estado (Activas / Inactivas / Todas)
- Filtrar por categoría médica
- Filtrar por prioridad
- Búsqueda por nombre o descripción

---

### 📊 Estadísticas Dinámicas
- Total de citas
- Citas activas
- Citas inactivas
- Conteo por categoría
- Conteo por prioridad

---

### 💾 Persistencia de Datos
- Uso de localStorage
- Las citas permanecen guardadas al recargar la página

---

## 🧠 Modelo de Datos

Cada cita médica tiene la siguiente estructura:

```js
{
  id: number,
  name: string,          // Nombre del paciente
  description: string,   // Motivo de la consulta
  category: string,      // Especialidad médica
  priority: string,      // Nivel de urgencia
  active: boolean,       // Estado de la cita
  createdAt: string,     // Fecha de creación
  updatedAt: string|null // Fecha de modificación
}
```

---

## 🏥 Categorías Médicas

- 🩺 Medicina General
- 👶 Pediatría
- 🦷 Odontología
- 🧠 Psicología
- 📌 Otro

---

## 🔥 Prioridades

- 🔴 Alta
- 🟡 Media
- 🟢 Baja

---

## 🛠 Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript ES2023
- LocalStorage API

No se utilizaron frameworks externos.

---

## 📂 Estructura del Proyecto

```
starter/
│
├── index.html
├── styles.css
└── script.js
```

---

## ▶️ Cómo Ejecutar el Proyecto

1. Clonar o descargar el repositorio.
2. Abrir la carpeta del proyecto.
3. Ejecutar en la terminal:

```bash
npx serve .
```

4. Abrir el navegador en:

```
http://localhost:3000
```

---

## 🧩 Conceptos Aplicados

- Estado global controlado
- Inmutabilidad (no se modifican arrays directamente)
- Separación de responsabilidades
- Funciones puras para filtros y estadísticas
- Renderización dinámica
- Manejo de eventos centralizado

---

## 📈 Aprendizajes Clave

Durante el desarrollo de este proyecto se reforzaron habilidades como:

- Gestión estructurada del estado
- Uso correcto de LocalStorage
- Aplicación de programación funcional
- Diseño de una aplicación modular y escalable
- Implementación de filtros compuestos

---

## 👨‍💻 Autor

Proyecto desarrollado como evidencia académica para la Semana 02.

---

## 📌 Estado del Proyecto

✅ Funcional  
✅ Persistente  
✅ Modular  
✅ Cumple con los requisitos de la Semana 02  
