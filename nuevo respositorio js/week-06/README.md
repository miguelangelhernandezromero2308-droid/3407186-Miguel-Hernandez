# Semana 6 - Reporte con Bucles

## 📌 Información General

- **Programa:** Análisis y Desarrollo de Software  
- **Ficha:** 3065273  
- **Proyecto:** Sistema de Citas Médicas Online  
- **Semana:** 6  
- **Lenguaje:** JavaScript  

---

## 📖 Descripción del Proyecto

En esta sexta semana se desarrolló un **sistema de reporte basado en colecciones de datos**, aplicado al dominio **Sistema de Citas Médicas Online**.

El objetivo principal fue procesar múltiples registros de citas médicas utilizando diferentes tipos de bucles en JavaScript, permitiendo generar estadísticas, clasificaciones y reportes detallados.

Este sistema simula cómo una aplicación real puede analizar información de múltiples citas para la toma de decisiones.

---

## 🎯 Objetivo

Implementar un sistema de reporte que procese una colección de datos utilizando:

- `for...of`
- `for` clásico
- Contadores
- Acumuladores
- Comparaciones (máximo y mínimo)

Aplicado al dominio de un sistema de citas médicas online.

---

## 🧠 Conceptos Aplicados

Durante el desarrollo de esta actividad se aplicaron los siguientes conceptos:

- Arrays (colecciones de datos)
- Bucles `for...of`
- Bucles `for` clásicos
- Contadores y acumuladores
- Cálculo de promedios
- Búsqueda de valores máximos y mínimos
- Uso de `continue`
- Template literals
- `console.log()` para salida en consola

---

## 🏥 Dominio del Proyecto

El dominio asignado es:

**Sistema de Citas Médicas Online**

El sistema simula funcionalidades como:

- Registro de múltiples citas médicas
- Clasificación por tipo de consulta
- Conteo de citas por categoría
- Cálculo de estadísticas (total y promedio)
- Identificación de citas con mayor y menor demanda
- Generación de reportes detallados

---

## 📂 Estructura del Proyecto

```
semana6/
│
├── README.md
└── starter
    └── script.js
```

---

## ▶️ Ejecución del Proyecto

Para ejecutar el proyecto se debe utilizar **Node.js**.

1. Abrir la terminal  
2. Ubicarse en la carpeta del proyecto  
3. Ejecutar el siguiente comando:

```
node starter/script.js
```

---

## 💻 Ejemplo de Salida en Consola

```
=== LISTADO COMPLETO ===
1. Consulta General — general — citas por día: 30
2. Consulta Pediatría — specialist — citas por día: 20
3. Consulta Cardiología — specialist — citas por día: 25
4. Urgencia Básica — emergency — citas por día: 40
5. Control Médico — general — citas por día: 15
6. Consulta Dermatología — specialist — citas por día: 18

=== CONTEO POR CATEGORÍA ===
general: 2 elemento(s)
specialist: 3 elemento(s)
emergency: 1 elemento(s)

=== ESTADÍSTICAS ===
Total citas por día: 148
Promedio citas por día: 24.7

=== MÁXIMO Y MÍNIMO ===
Mayor citas por día: Urgencia Básica (40)
Menor citas por día: Control Médico (15)

=== REPORTE DETALLADO ===
1. Consulta General — sobre el promedio
2. Consulta Pediatría — bajo el promedio
3. Consulta Cardiología — sobre el promedio
4. Urgencia Básica — sobre el promedio
5. Control Médico — bajo el promedio
6. Consulta Dermatología — bajo el promedio

=== FIN DEL REPORTE ===
```

---

## ✅ Requisitos Cumplidos

✔ Uso de `for...of`  
✔ Uso de `for` clásico  
✔ Uso de contadores por categoría  
✔ Uso de acumuladores (total y promedio)  
✔ Cálculo de valor máximo y mínimo  
✔ Uso de `continue`  
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