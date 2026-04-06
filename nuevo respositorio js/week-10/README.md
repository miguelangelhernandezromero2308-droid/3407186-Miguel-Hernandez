# 🚀 Proyecto Integrador — Etapa 0

## 📋 Descripción

Este proyecto consiste en una aplicación de consola desarrollada en JavaScript que integra todos los conceptos aprendidos desde la semana 01 hasta la semana 09.

El sistema está basado en un **Sistema de Citas Médicas**, donde se gestionan citas de pacientes, incluyendo información como médico asignado, tipo de cita, estado y días de espera.

---

## 🎯 Objetivo

Aplicar de manera integrada:

- Variables y tipos de datos
- Condicionales
- Bucles
- Funciones
- Arrays
- Objetos
- Métodos de arrays (`map`, `filter`, `find`, etc.)
- Métodos de objetos (`Object.entries`, etc.)

---

## 🏥 Dominio Implementado

**Sistema de Citas Médicas**

Cada objeto representa una cita médica con propiedades como:

- `id`
- `patient`
- `doctor`
- `days` (valor numérico)
- `active` (estado de la cita)
- `type`
- `notes` (propiedad opcional)

---

## ⚙️ Funcionalidades Implementadas

- Agregar citas (`addItem`)
- Buscar cita por ID (`findById`)
- Obtener citas activas (`getActive`)
- Filtrar por campo (`filterByField`)
- Actualizar citas (`updateItem`)
- Calcular estadísticas (`calculateStats`)
- Formatear datos (`formatItem`)
- Generar reporte completo (`buildReport`)

---

## 🛠️ Cómo ejecutar

```bash
node starter/app.js