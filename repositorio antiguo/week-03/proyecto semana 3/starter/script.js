// =============================
// BASE ABSTRACTA
// =============================

class BaseItem {
    #id;
    #name;
    #active;
    #location;
    #dateCreated;
    #userId;

    constructor(name, location, userId) {
        if (new.target === BaseItem) {
            throw new Error("BaseItem es abstracta");
        }

        this.#id = Date.now();
        this.#name = name;
        this.#location = location;
        this.#userId = userId;
        this.#active = true;
        this.#dateCreated = new Date();
    }

    get id() { return this.#id; }
    get name() { return this.#name; }
    get isActive() { return this.#active; }
    get location() { return this.#location; }
    get dateCreated() { return this.#dateCreated; }
    get userId() { return this.#userId; }

    activate() { this.#active = true; }
    deactivate() { this.#active = false; }

    getType() { return this.constructor.name; }

    getInfo() {
        throw new Error("Debe implementarse en la clase hija");
    }
}

// =============================
// CLASES DERIVADAS
// =============================

class GeneralAppointment extends BaseItem {
    #doctor = "Medicina General";

    constructor(name, date, userId) {
        super(name, date, userId);
    }

    getInfo() {
        return `Consulta General - ${this.#doctor}`;
    }
}

class SpecialistAppointment extends BaseItem {
    #specialty = "Especialista";

    constructor(name, date, userId) {
        super(name, date, userId);
    }

    getInfo() {
        return `Consulta con ${this.#specialty}`;
    }
}

class EmergencyAppointment extends BaseItem {
    #priority = "Alta";

    constructor(name, date, userId) {
        super(name, date, userId);
    }

    getInfo() {
        return `Urgencia Prioridad ${this.#priority}`;
    }
}

// =============================
// PERSONAS
// =============================

class Person {
    #id;
    #name;
    #email;

    constructor(name, email) {
        this.#id = Date.now();
        this.#name = name;
        this.email = email;
    }

    get id() { return this.#id; }
    get name() { return this.#name; }
    get email() { return this.#email; }

    set email(value) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(value)) {
            throw new Error("Email inválido");
        }
        this.#email = value;
    }
}

class Patient extends Person {}
class Doctor extends Person {}

// =============================
// SISTEMA PRINCIPAL
// =============================

class ClinicSystem {
    #items = [];
    #users = [];
    #transactions = [];

    static VERSION = "1.0.0";
    static MAX_ITEMS = 1000;

    // =============================
    // USUARIOS
    // =============================

    addUser(user) {
        this.#users.push(user);

        this.#transactions.push({
            message: "Usuario registrado",
            userId: user.id,
            date: new Date().toLocaleString()
        });

        this.renderUsers();
        this.renderHistory();
        this.updateStatsUI();
    }

    getUserByName(name) {
        return this.#users.find(u => u.name === name);
    }

    // =============================
    // CITAS
    // =============================

    addItem(item) {
        if (this.#items.length >= ClinicSystem.MAX_ITEMS) {
            alert("Se alcanzó el límite máximo de citas.");
            return;
        }

        const user = this.#users.find(u => u.id === item.userId);
        if (!user) {
            alert("Paciente no registrado.");
            return;
        }

        this.#items.push(item);

        this.#transactions.push({
            message: `Cita creada (${item.getType()})`,
            userId: item.userId,
            date: new Date().toLocaleString()
        });

        this.renderAppointments(this.#items);
        this.renderHistory();
    }

    toggleState(id) {
        const item = this.#items.find(i => i.id === id);
        if (!item) return;

        item.isActive ? item.deactivate() : item.activate();

        this.#transactions.push({
            message: `Estado cambiado (${item.getType()})`,
            userId: item.userId,
            date: new Date().toLocaleString()
        });

        this.renderAppointments(this.#items);
        this.renderHistory();
    }

    // =============================
    // MÉTODOS EXIGIDOS POR README
    // =============================

    searchByName(query) {
        return this.#items.filter(item =>
            item.name.toLowerCase().includes(query.toLowerCase())
        );
    }

    filterByType(type) {
        if (type === "all") return this.#items;
        return this.#items.filter(item => item.getType() === type);
    }

    getStats() {
        const total = this.#items.length;
        const active = this.#items.filter(i => i.isActive).length;

        return {
            total,
            active,
            inactive: total - active,
            users: this.#users.length
        };
    }

    // =============================
    // RENDER
    // =============================

    renderAppointments(list) {
        const container = document.getElementById("item-list");
        const empty = document.getElementById("empty-state");
        container.innerHTML = "";

        if (list.length === 0) {
            empty.style.display = "block";
        } else {
            empty.style.display = "none";
        }

        list.forEach(app => {
            const card = document.createElement("div");
            card.className = "item-card";

            card.innerHTML = `
                <div class="item-title">${app.name}</div>
                <p><strong>Fecha:</strong> ${app.location}</p>
                <p><strong>Tipo:</strong> ${app.getType()}</p>
                <p><strong>Estado:</strong> ${app.isActive ? "Activo" : "Inactivo"}</p>
                <p>${app.getInfo()}</p>
                <button onclick="system.toggleState(${app.id})">
                    Cambiar Estado
                </button>
            `;

            container.appendChild(card);
        });

        this.updateStatsUI();
    }

    renderUsers() {
        const container = document.getElementById("user-list");
        container.innerHTML = "";

        this.#users.forEach(user => {
            const div = document.createElement("div");
            div.className = "item-card";
            div.innerHTML = `
                <strong>${user.name}</strong>
                <p>${user.email}</p>
            `;
            container.appendChild(div);
        });
    }

    renderHistory() {
        const container = document.getElementById("transaction-list");
        container.innerHTML = "";

        this.#transactions.forEach(record => {
            const user = this.#users.find(u => u.id === record.userId);

            const div = document.createElement("div");
            div.className = "transaction-item";
            div.innerHTML = `
                <p><strong>${user ? user.name : "Desconocido"}</strong></p>
                <p>${record.message}</p>
                <small>${record.date}</small>
                <hr>
            `;
            container.appendChild(div);
        });
    }

    updateStatsUI() {
        const stats = this.getStats();

        document.getElementById("stat-total").textContent = stats.total;
        document.getElementById("stat-active").textContent = stats.active;
        document.getElementById("stat-inactive").textContent = stats.inactive;
        document.getElementById("stat-users").textContent = stats.users;
    }

    applyFilters() {
        const query = document.getElementById("search-input").value;
        const type = document.getElementById("filter-type").value;

        let filtered = this.searchByName(query);
        filtered = filtered.filter(item =>
            type === "all" ? true : item.getType() === type
        );

        this.renderAppointments(filtered);
    }
}

const system = new ClinicSystem();

// =============================
// PESTAÑAS
// =============================

document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
        document.querySelectorAll(".tab-panel").forEach(p => p.classList.remove("active"));

        btn.classList.add("active");
        document.getElementById(btn.dataset.tab).classList.add("active");
    });
});

// =============================
// MODAL
// =============================

const modal = document.getElementById("item-modal");

document.getElementById("add-item-btn")
.addEventListener("click", () => modal.classList.add("active"));

document.getElementById("close-modal")
.addEventListener("click", () => modal.classList.remove("active"));

// =============================
// FORM CITAS
// =============================

document.getElementById("appointment-form")
.addEventListener("submit", function (e) {

    e.preventDefault();

    const type = document.getElementById("type").value;
    const patientName = document.getElementById("patient").value;
    const date = document.getElementById("date").value;

    const user = system.getUserByName(patientName);

    if (!user) {
        alert("Paciente no registrado.");
        return;
    }

    let appointment;

    if (type === "general") {
        appointment = new GeneralAppointment(user.name, date, user.id);
    } else if (type === "specialist") {
        appointment = new SpecialistAppointment(user.name, date, user.id);
    } else {
        appointment = new EmergencyAppointment(user.name, date, user.id);
    }

    system.addItem(appointment);

    this.reset();
    modal.classList.remove("active");
});

// =============================
// FILTROS
// =============================

document.getElementById("search-input")
.addEventListener("input", () => system.applyFilters());

document.getElementById("filter-type")
.addEventListener("change", () => system.applyFilters());

// =============================
// AGREGAR USUARIO
// =============================

document.getElementById("add-user-btn")
.addEventListener("click", () => {

    const name = prompt("Nombre:");
    const email = prompt("Email:");

    if (name && email) {
        try {
            const user = new Patient(name, email);
            system.addUser(user);
        } catch (error) {
            alert(error.message);
        }
    }
});