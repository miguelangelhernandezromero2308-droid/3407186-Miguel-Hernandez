/* ============================================
   PROYECTO SEMANA 01 - SISTEMA DE CITAS MÉDICAS
   ============================================ */

// ============================================
// DATOS DEL DOMINIO
// ============================================

const entityData = {
  name: "Sistema de Citas Médicas Online",
  title: "Plataforma Digital de Salud",
  description:
    "Sistema web para agendar, gestionar y administrar citas médicas de forma rápida y segura.",
  identifier: "MED-001",

  contact: {
    email: "soporte@medicitas.com",
    phone: "+57 300 123 4567",
    location: "Bogotá, Colombia"
  },

  items: [
    { name: "Consulta General", level: 90, category: "Medicina" },
    { name: "Odontología", level: 80, category: "Salud Oral" },
    { name: "Pediatría", level: 85, category: "Infantil" },
    { name: "Psicología", level: 75, category: "Mental" },
    { name: "Ginecología", level: 70, category: "Especialidad" },
    { name: "Cardiología", level: 65, category: "Especialidad" }
  ],

  links: [
    {
      platform: "Website",
      url: "https://www.medicitas.com",
      icon: "🌐"
    },
    {
      platform: "WhatsApp",
      url: "https://wa.me/573001234567",
      icon: "💬"
    },
    {
      platform: "Instagram",
      url: "https://instagram.com/medicitas",
      icon: "📸"
    }
  ],

  stats: {
    users: 1200,
    doctors: 28,
    appointments: 5400,
    rating: 4.7
  }
};

// ============================================
// REFERENCIAS DOM
// ============================================
 
const userName = document.getElementById("userName");
const userTitle = document.getElementById("userTitle");
const userLocation = document.getElementById("userLocation");
const userBio = document.getElementById("userBio");

const userEmail = document.getElementById("userEmail");
const userPhone = document.getElementById("userPhone");
const copyEmailBtn = document.getElementById("copyEmailBtn");

const skillsList = document.getElementById("skillsList");
const toggleSkills = document.getElementById("toggleSkills");

const socialLinks = document.getElementById("socialLinks");
const statsContainer = document.getElementById("stats");

const themeToggle = document.getElementById("themeToggle");

const toast = document.getElementById("toast");
const toastMessage = document.getElementById("toastMessage");

// ============================================
// RENDER INFO BÁSICA
// ============================================

const renderBasicInfo = () => {
  const {
    name,
    title,
    description,
    contact: { email, phone, location }
  } = entityData;

  userName.textContent = name;
  userTitle.textContent = title;
  userLocation.textContent = `📍 ${location}`;
  userBio.textContent = description;

  userEmail.textContent = email;
  userPhone.textContent = phone;
};

// ============================================
// RENDER SERVICIOS
// ============================================

const renderItems = (showAll = false) => {
  const { items } = entityData;

  const itemsToShow = showAll ? items : items.slice(0, 4);

  const itemsHtml = itemsToShow
    .map(item => {
      const { name, level } = item;

      return `
      <div class="skill-item">
        <div class="skill-name">${name}</div>
        <div class="skill-level">
          <span>${level}%</span>
          <div class="skill-bar">
            <div class="skill-bar-fill" style="width:${level}%"></div>
          </div>
        </div>
      </div>
    `;
    })
    .join("");

  skillsList.innerHTML = itemsHtml;
};

// ============================================
// RENDER ENLACES
// ============================================

const renderLinks = () => {
  const { links } = entityData;

  const linksHtml = links
    .map(link => {
      const { platform, url, icon } = link;

      return `
      <a href="${url}" target="_blank" class="social-link">
        ${icon} ${platform}
      </a>
    `;
    })
    .join("");

  socialLinks.innerHTML = linksHtml;
};

// ============================================
// RENDER ESTADÍSTICAS
// ============================================

const renderStats = () => {
  const { stats } = entityData;

  const statsArray = [
    { label: "Usuarios", value: stats.users },
    { label: "Médicos", value: stats.doctors },
    { label: "Citas", value: stats.appointments },
    { label: "Rating", value: stats.rating }
  ];

  const statsHtml = statsArray
    .map(
      stat => `
    <div class="stat-item">
      <span class="stat-value">${stat.value}</span>
      <span class="stat-label">${stat.label}</span>
    </div>
  `
    )
    .join("");

  statsContainer.innerHTML = statsHtml;
};

// ============================================
// TEMA OSCURO
// ============================================

const toggleTheme = () => {
  const currentTheme = document.documentElement.dataset.theme;

  const newTheme = currentTheme === "dark" ? "light" : "dark";

  document.documentElement.dataset.theme = newTheme;

  themeToggle.textContent = newTheme === "dark" ? "☀️" : "🌙";

  localStorage.setItem("theme", newTheme);
};

const loadTheme = () => {
  const savedTheme = localStorage.getItem("theme") ?? "light";

  document.documentElement.dataset.theme = savedTheme;

  themeToggle.textContent = savedTheme === "dark" ? "☀️" : "🌙";
};

// ============================================
// COPIAR INFO
// ============================================

const copyInfo = () => {
  const {
    name,
    description,
    contact: { email }
  } = entityData;

  const infoText = `
${name}
${description}
Contacto: ${email}
`.trim();

  navigator.clipboard.writeText(infoText);

  showToast("¡Información copiada!");
};

// ============================================
// TOAST
// ============================================

const showToast = message => {
  toastMessage.textContent = message;

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
};

// ============================================
// MOSTRAR / OCULTAR
// ============================================

let showingAllItems = false;

const handleToggleItems = () => {
  showingAllItems = !showingAllItems;

  renderItems(showingAllItems);

  toggleSkills.textContent = showingAllItems
    ? "Show Less"
    : "Show More";
};

// ============================================
// EVENTOS
// ============================================

themeToggle.addEventListener("click", toggleTheme);

copyEmailBtn.addEventListener("click", copyInfo);

toggleSkills.addEventListener("click", handleToggleItems);

// ============================================
// INIT
// ============================================

const init = () => {
  loadTheme();
  renderBasicInfo();
  renderItems();
  renderLinks();
  renderStats();

  console.log("✅ Sistema de Citas Médicas inicializado");
};

init();

