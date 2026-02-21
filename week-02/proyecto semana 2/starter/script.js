// ============================================
// ESTADO GLOBAL
// ============================================

let items = [];
let editingItemId = null;

// ============================================
// CATEGORÍAS - DOMINIO MÉDICO
// ============================================

const CATEGORIES = {
  general: { name: 'Medicina General', emoji: '🩺' },
  pediatrics: { name: 'Pediatría', emoji: '👶' },
  dentistry: { name: 'Odontología', emoji: '🦷' },
  psychology: { name: 'Psicología', emoji: '🧠' },
  other: { name: 'Otro', emoji: '📌' }
};

const PRIORITIES = {
  high: { name: 'Alta', color: '#ef4444' },
  medium: { name: 'Media', color: '#f59e0b' },
  low: { name: 'Baja', color: '#22c55e' }
};

// ============================================
// PERSISTENCIA
// ============================================

const loadItems = () => {
  return JSON.parse(localStorage.getItem('medicalAppointments') ?? '[]');
};

const saveItems = itemsToSave => {
  localStorage.setItem('medicalAppointments', JSON.stringify(itemsToSave));
};

// ============================================
// CRUD
// ============================================

const createItem = (itemData = {}) => {
  const newItem = {
    id: Date.now(),
    name: itemData.name ?? '',
    description: itemData.description ?? '',
    category: itemData.category ?? 'general',
    priority: itemData.priority ?? 'medium',
    active: true,
    createdAt: new Date().toISOString(),
    updatedAt: null
  };

  const newItems = [...items, newItem];

  saveItems(newItems);

  return newItems;
};

const updateItem = (id, updates) => {
  const updatedItems = items.map(item =>
    item.id === id
      ? { ...item, ...updates, updatedAt: new Date().toISOString() }
      : item
  );

  saveItems(updatedItems);

  return updatedItems;
};

const deleteItem = id => {
  const filteredItems = items.filter(item => item.id !== id);

  saveItems(filteredItems);

  return filteredItems;
};

const toggleItemActive = id => {
  const updatedItems = items.map(item =>
    item.id === id
      ? { ...item, active: !item.active, updatedAt: new Date().toISOString() }
      : item
  );

  saveItems(updatedItems);

  return updatedItems;
};

const clearInactive = () => {
  const activeItems = items.filter(item => item.active);

  saveItems(activeItems);

  return activeItems;
};

// ============================================
// FILTROS
// ============================================

const filterByStatus = (itemsToFilter, status = 'all') => {
  if (status === 'all') return itemsToFilter;
  if (status === 'active') return itemsToFilter.filter(i => i.active);
  if (status === 'inactive') return itemsToFilter.filter(i => !i.active);

  return itemsToFilter;
};

const filterByCategory = (itemsToFilter, category = 'all') => {
  if (category === 'all') return itemsToFilter;

  return itemsToFilter.filter(i => i.category === category);
};

const filterByPriority = (itemsToFilter, priority = 'all') => {
  if (priority === 'all') return itemsToFilter;

  return itemsToFilter.filter(i => i.priority === priority);
};

const searchItems = (itemsToFilter, query = '') => {
  if (!query.trim()) return itemsToFilter;

  const term = query.toLowerCase();

  return itemsToFilter.filter(item =>
    item.name.toLowerCase().includes(term) ||
    (item.description ?? '').toLowerCase().includes(term)
  );
};

const applyFilters = (itemsToFilter, filters = {}) => {
  const {
    status = 'all',
    category = 'all',
    priority = 'all',
    search = ''
  } = filters;

  let result = filterByStatus(itemsToFilter, status);
  result = filterByCategory(result, category);
  result = filterByPriority(result, priority);
  result = searchItems(result, search);

  return result;
};

// ============================================
// ESTADÍSTICAS
// ============================================

const getStats = (itemsToAnalyze = []) => {
  const total = itemsToAnalyze.length;
  const active = itemsToAnalyze.filter(i => i.active).length;
  const inactive = total - active;

  const byCategory = itemsToAnalyze.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] ?? 0) + 1;
    return acc;
  }, {});

  const byPriority = itemsToAnalyze.reduce((acc, item) => {
    acc[item.priority] = (acc[item.priority] ?? 0) + 1;
    return acc;
  }, {});

  return { total, active, inactive, byCategory, byPriority };
};

// ============================================
// RENDER
// ============================================

const getCategoryEmoji = category => {
  return CATEGORIES[category]?.emoji ?? '📌';
};

const formatDate = dateString => {
  return new Date(dateString).toLocaleDateString('es-ES');
};

const renderItem = item => {
  const { id, name, description, category, priority, active, createdAt } = item;

  return `
  <div class="task-item ${!active ? 'completed' : ''} priority-${priority}" data-item-id="${id}">
    
    <input 
      type="checkbox" 
      class="task-checkbox" 
      ${active ? 'checked' : ''}
    >

    <div class="task-content">
      <h3>${name}</h3>

      ${description ? `<p>${description}</p>` : ''}

      <div class="task-meta">
        <span class="task-badge badge-category">
          ${getCategoryEmoji(category)} ${CATEGORIES[category]?.name}
        </span>

        <span class="task-badge badge-priority priority-${priority}">
          ${PRIORITIES[priority]?.name}
        </span>

        <span class="task-date">
          📅 ${formatDate(createdAt)}
        </span>
      </div>
    </div>

    <div class="task-actions">
      <button class="btn-edit">✏️</button>
      <button class="btn-delete">🗑️</button>
    </div>
  </div>
  `;
};

const renderItems = itemsToRender => {
  const list = document.getElementById('item-list');
  const empty = document.getElementById('empty-state');

  if (itemsToRender.length === 0) {
    list.innerHTML = '';
    empty.style.display = 'block';
  } else {
    empty.style.display = 'none';

    list.innerHTML = itemsToRender
      .map(renderItem)
      .join('');
  }
};

const renderStats = stats => {
  document.getElementById('stat-total').textContent = stats.total;
  document.getElementById('stat-active').textContent = stats.active;
  document.getElementById('stat-inactive').textContent = stats.inactive;

  const details = Object.entries(stats.byCategory)
    .map(
      ([cat, count]) =>
        `${getCategoryEmoji(cat)} ${CATEGORIES[cat]?.name}: ${count}`
    )
    .join(' | ');

  document.getElementById('stats-details').textContent = details;
};

// ============================================
// EVENTOS
// ============================================

const handleFormSubmit = e => {
  e.preventDefault();

  const name = document.getElementById('item-name').value.trim();
  const description = document.getElementById('item-description').value.trim();
  const category = document.getElementById('item-category').value;
  const priority = document.getElementById('item-priority').value;

  if (!name) {
    alert('El nombre del paciente es obligatorio');
    return;
  }

  const itemData = { name, description, category, priority };

  if (editingItemId) {
    items = updateItem(editingItemId, itemData);
  } else {
    items = createItem(itemData);
  }

  resetForm();
  renderItems(applyCurrentFilters());
  renderStats(getStats(items));
};

const handleItemToggle = id => {
  items = toggleItemActive(id);

  renderItems(applyCurrentFilters());
  renderStats(getStats(items));
};

const handleItemEdit = id => {
  const item = items.find(i => i.id === id);

  if (!item) return;

  document.getElementById('item-name').value = item.name;
  document.getElementById('item-description').value = item.description;
  document.getElementById('item-category').value = item.category;
  document.getElementById('item-priority').value = item.priority;

  document.getElementById('form-title').textContent = '✏️ Editar Cita';
  document.getElementById('submit-btn').textContent = 'Actualizar';
  document.getElementById('cancel-btn').style.display = 'inline-block';

  editingItemId = id;
};

const handleItemDelete = id => {
  if (!confirm('¿Eliminar esta cita?')) return;

  items = deleteItem(id);

  renderItems(applyCurrentFilters());
  renderStats(getStats(items));
};

const getCurrentFilters = () => {
  return {
    status: document.getElementById('filter-status').value,
    category: document.getElementById('filter-category').value,
    priority: document.getElementById('filter-priority').value,
    search: document.getElementById('search-input').value
  };
};

const applyCurrentFilters = () => {
  return applyFilters(items, getCurrentFilters());
};

const handleFilterChange = () => {
  renderItems(applyCurrentFilters());
};

const resetForm = () => {
  document.getElementById('item-form').reset();

  document.getElementById('form-title').textContent = '➕ Nueva Cita';
  document.getElementById('submit-btn').textContent = 'Crear';
  document.getElementById('cancel-btn').style.display = 'none';

  editingItemId = null;
};

// ============================================
// LISTENERS
// ============================================

const attachEventListeners = () => {

  document.getElementById('item-form')
    .addEventListener('submit', handleFormSubmit);

  document.getElementById('cancel-btn')
    .addEventListener('click', resetForm);

  ['filter-status','filter-category','filter-priority','search-input']
    .forEach(id => {
      document.getElementById(id)
        .addEventListener('input', handleFilterChange);
    });

  document.getElementById('clear-inactive')
    .addEventListener('click', () => {
      if (confirm('Eliminar citas canceladas?')) {
        items = clearInactive();
        renderItems(applyCurrentFilters());
        renderStats(getStats(items));
      }
    });

  document.getElementById('item-list')
    .addEventListener('click', e => {

      const itemEl = e.target.closest('.task-item');
      if (!itemEl) return;

      const id = parseInt(itemEl.dataset.itemId);

      if (e.target.classList.contains('task-checkbox')) {
        handleItemToggle(id);
      }

      if (e.target.classList.contains('btn-edit')) {
        handleItemEdit(id);
      }

      if (e.target.classList.contains('btn-delete')) {
        handleItemDelete(id);
      }
    });
};

// ============================================
// INIT
// ============================================

const init = () => {
  items = loadItems();

  renderItems(items);
  renderStats(getStats(items));

  attachEventListeners();

  console.log('✅ Sistema de Citas Médicas inicializado');
};

document.addEventListener('DOMContentLoaded', init);

