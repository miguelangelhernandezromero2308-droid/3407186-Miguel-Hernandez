# Semana 4 - Generador de Mensajes de Dominio

## 📌 Información General

- **Programa:** Análisis y Desarrollo de Software  
- **Ficha:** 3065273  
- **Proyecto:** Sistema de Citas Médicas Online  
- **Semana:** 4  
- **Lenguaje:** JavaScript  

---

## 📖 Descripción del Proyecto

En esta cuarta semana se desarrolló un **generador de mensajes en consola** aplicado al dominio **Sistema de Citas Médicas Online**.

El objetivo del ejercicio es practicar la manipulación de **cadenas de texto (strings)** utilizando los métodos aprendidos en JavaScript, permitiendo transformar, validar y mostrar información relacionada con el sistema de citas médicas.

El programa genera una **ficha informativa de una cita médica** y un **mensaje corto de notificación**, simulando cómo un sistema real podría mostrar información sobre servicios médicos disponibles.

---

## 🎯 Objetivo

Construir un **generador de mensajes en consola** utilizando **métodos de string y template literals** para mostrar información relacionada con el sistema de citas médicas online.

---

## 🧠 Conceptos Aplicados

Durante el desarrollo de esta actividad se aplicaron los siguientes conceptos:

- Métodos de strings en JavaScript
- `trim()` para limpiar espacios
- `toUpperCase()` y `toLowerCase()`
- `slice()` para extraer partes de texto
- `includes()` para buscar palabras clave
- `startsWith()` y `endsWith()` para validaciones
- `repeat()` para crear separadores
- Template literals para construir mensajes
- Uso de `console.log()` para mostrar resultados

---

## 🏥 Dominio del Proyecto

El dominio asignado es:

**Sistema de Citas Médicas Online**

El programa simula funcionalidades como:

- Mostrar información de una cita médica
- Generar fichas informativas del sistema
- Validar códigos de citas
- Generar notificaciones del sistema médico

---

## 📂 Estructura del Proyecto

```
semana4/
│
├── README.md
└── starter
    └── script.js
```

---

## ▶️ Ejecución del Proyecto

Para ejecutar el proyecto se debe utilizar **Node.js**.

1. Abrir la terminal.
2. Ubicarse en la carpeta del proyecto.
3. Ejecutar el siguiente comando:

```
node starter/script.js
```

---

## 💻 Ejemplo de Salida en Consola

```
=============================================
  SISTEMA DE CITAS MÉDICAS ONLINE — FICHA DE CITA
=============================================
Nombre:      CONSULTA MÉDICA GENERAL
Categoría:   Consulta médica
Código:      CIT-001
Prefijo:     CIT
Valor:       $50000
Estado:      Activo

---------------------------------------------
Descripción:
Cita médica programada para atención general en el sistema de citas médicas online.
=============================================

--- Validaciones ---
¿Código empieza con 'CIT'?: true
¿Descripción contiene 'citas'?: true
¿Código termina con '001'?: true

--- Notificación ---
📢 Nueva cita médica disponible: Consulta Médica General (CIT-001)
```

---

## ✅ Requisitos Cumplidos

✔ Uso de al menos 5 métodos de string  
✔ Uso de `trim()` para limpiar texto  
✔ Uso de `toUpperCase()` y `toLowerCase()`  
✔ Uso de `slice()` para manipulación de texto  
✔ Uso de `includes()`, `startsWith()` y `endsWith()`  
✔ Uso de `repeat()` para crear separadores  
✔ Uso de template literals para construir mensajes  
✔ Generación de ficha multilínea  
✔ Generación de notificación corta  
✔ Adaptación correcta al dominio asignado  

---

## 🛠 Tecnologías Utilizadas

- JavaScript  
- Node.js  
- Visual Studio Code  
- Git  
- GitHub  

---

## 👨‍💻 Autor

Proyecto desarrollado como parte del proceso de formación en el **SENA** dentro del programa **Análisis y Desarrollo de Software**.