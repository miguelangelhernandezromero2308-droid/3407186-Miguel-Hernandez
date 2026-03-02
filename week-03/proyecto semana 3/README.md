# 📘 Proyecto Week-03  
# 🏥 Online Clinic Management System

---

## 🎯 Descripción del Proyecto

Este proyecto consiste en el desarrollo de un Sistema de Gestión para una Clínica Online, implementado utilizando JavaScript moderno (ES2023) y aplicando los principios fundamentales de la Programación Orientada a Objetos (POO).

El sistema permite:

- Gestionar servicios médicos ofrecidos por la clínica
- Administrar pacientes y doctores con diferentes roles
- Realizar operaciones CRUD con validación
- Controlar estados (activo/inactivo)
- Implementar búsqueda y filtrado dinámico
- Registrar historial de transacciones clínicas

El desarrollo respeta la política de dominio único asignado por el instructor.

---

## 🏗️ Arquitectura de Clases

El sistema fue estructurado siguiendo una jerarquía basada en herencia y encapsulación.

### 🔹 Clase Base Abstracta

#### `BaseItem`

Representa cualquier entidad médica gestionable dentro del sistema.

Campos privados obligatorios:

- `#id`
- `#name`
- `#active`
- `#location`
- `#dateCreated`

Funcionalidades:

- Getters para todas las propiedades
- Setter con validación para `location`
- Métodos de estado: `activate()` y `deactivate()`
- Método abstracto `getInfo()`
- Método `getType()`

---

### 🔹 Clases Derivadas (Servicios Médicos)

```
BaseItem
├── GeneralConsultation
├── SpecialistConsultation
└── LaboratoryTest
```

Cada clase derivada:

- Extiende `BaseItem`
- Llama correctamente a `super()`
- Define propiedades privadas adicionales (ej: specialty, duration, cost)
- Implementa su propio método `getInfo()`
- Incluye métodos específicos según el tipo de servicio

---

### 🔹 Sistema de Usuarios

#### Clase Base: `Person`

Campos privados:

- `#id`
- `#name`
- `#email`
- `#registrationDate`

Incluye:

- Getters controlados
- Setter con validación de formato de correo electrónico

---

### 🔹 Roles del Sistema

```
Person
├── Patient
└── Doctor
```

#### Doctor
- Puede gestionar servicios médicos
- Tiene propiedades adicionales como especialidad
- Métodos específicos de gestión

#### Patient
- Puede visualizar servicios
- Puede solicitar consultas
- Tiene historial clínico

---

### 🔹 Clase Principal del Sistema

#### `ClinicSystem`

Es la clase central del sistema.

Campos privados:

- `#items`
- `#users`
- `#transactions`

Incluye:

- Static block para configuración (`VERSION`, `MAX_ITEMS`)
- Métodos CRUD
- Métodos de búsqueda
- Métodos de filtrado
- Estadísticas del sistema
- Registro automático en historial

---

## 🔒 Encapsulación Implementada

El sistema utiliza:

- Campos privados con `#`
- Acceso controlado mediante getters
- Validaciones en setters
- Protección de datos internos del sistema

---

## 🧠 Conceptos de POO Aplicados

| Concepto | Aplicación en el Proyecto |
|----------|--------------------------|
| Clases | Representación de servicios y usuarios |
| Herencia | Especialización de tipos médicos |
| Encapsulación | Protección de datos con campos privados |
| Polimorfismo | Sobrescritura de `getInfo()` |
| Getters/Setters | Validación y control de acceso |
| Métodos estáticos | Utilidades globales |
| Static blocks | Configuración inicial del sistema |

---

## 🎨 Interfaz de Usuario

La aplicación web incluye:

- Header con estadísticas dinámicas
- Formulario para crear servicios médicos
- Lista dinámica de servicios
- Filtros por tipo
- Búsqueda por nombre
- Estados visuales (activo/inactivo)
- Sección de detalles del servicio
- Historial de operaciones clínicas

---

## 📊 Cumplimiento de Rúbrica

### ✅ Clases y Herencia (40 pts)

- Clase base abstracta correctamente implementada
- Mínimo 3 clases derivadas
- Uso correcto de `extends` y `super()`
- Métodos sobrescritos correctamente

### ✅ Encapsulación (30 pts)

- Campos privados `#`
- Getters y setters apropiados
- Validaciones en setters

### ✅ Características Modernas (30 pts)

- Static blocks
- Métodos estáticos
- Integración funcional con el DOM

---

## 🚀 Cómo Ejecutar el Proyecto

1. Abrir `index.html` en un navegador moderno.
2. Crear servicios médicos.
3. Gestionar usuarios.
4. Probar filtros y búsquedas.
5. Visualizar estadísticas y registros en tiempo real.

---

## 🛠️ Tecnologías Utilizadas

- JavaScript ES2023
- HTML5
- CSS3
- Programación Orientada a Objetos

---

## 📌 Conclusión

Este proyecto demuestra la aplicación completa de la Programación Orientada a Objetos en un contexto real de una Clínica Online, integrando arquitectura escalable, encapsulación real, herencia estructurada y manipulación dinámica del DOM.