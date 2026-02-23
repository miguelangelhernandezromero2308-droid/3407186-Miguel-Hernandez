// ============================================
// ESTADO GLOBAL
// ============================================

let items = [];
let editingItemId = null;

// ============================================
// CATEGORÍAS (COMPATIBLES CON EL HTML)
// ============================================

const CATEGORIES = {
  category1: { name: 'Categoría 1', emoji: '🔹' },
  category2: { name: 'Categoría 2', emoji: '🔸' },
  category3: { name: 'Categoría 3', emoji: '🔷' },
  other: { name: 'Otro', emoji: '📌' }
};

const PRIORITIES = {
  high: { name: 'Alta' },
  medium: { name: 'Media' },
  low: { name: 'Baja' }
};

// ============================================
// PERSISTENCIA
// ============================================

const loadItems = () =>
  JSON.parse(localStorage.getItem('collectionItems') ?? '[]');

const saveItems = itemsToSave =>
  localStorage.setItem('collectionItems', JSON.stringify(itemsToSave));

// ============================================
// CRUD
// ============================================

const createItem = (itemData = {}) => {
  const newItem = {
    id: Date.now(),
    name: itemData.name ?? '',
    description: itemData.description ?? '',
    category: itemData.category ?? 'category1',
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
  const filtered = items.filter(item => item.id !== id);
  saveItems(filtered);
  return filtered;
};

const toggleItemActive = id => {
  const updated = items.map(item =>
    item.id === id
      ? { ...item, active: !item.active }
      : item
  );

  saveItems(updated);
  return updated;
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
  if (status === 'active') return itemsToFilter.filter(i => i.active);
  if (status === 'inactive') return itemsToFilter.filter(i => !i.active);
  return itemsToFilter;
};

const filterByCategory = (itemsToFilter, category = 'all') =>
  category === 'all'
    ? itemsToFilter
    : itemsToFilter.filter(i => i.category === category);

const filterByPriority = (itemsToFilter, priority = 'all') =>
  priority === 'all'
    ? itemsToFilter
    : itemsToFilter.filter(i => i.priority === priority);

const searchItems = (itemsToFilter, query = '') => {
  if (!query.trim()) return itemsToFilter;

  const term = query.toLowerCase();

  return itemsToFilter.filter(item =>
    item.name.toLowerCase().includes(term) ||
    item.description.toLowerCase().includes(term)
  );
};

const applyFilters = (itemsToFilter, filters = {}) => {
  const { status, category, priority, search } = filters;

  return searchItems(
    filterByPriority(
      filterByCategory(
        filterByStatus(itemsToFilter, status),
        category
      ),
      priority
    ),
    search
  );
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

  return { total, active, inactive, byCategory };
};

// ============================================
// RENDER
// ============================================

const formatDate = date =>
  new Date(date).toLocaleDateString('es-CO');

const renderItem = item => {
  const categoryData = CATEGORIES[item.category] ?? {
    name: 'Sin categoría',
    emoji: '📌'
  };

  const priorityData = PRIORITIES[item.priority] ?? {
    name: 'Media'
  };

  return `
  <div class="task-item ${!item.active ? 'completed' : ''} priority-${item.priority}" data-item-id="${item.id}">
    <input type="checkbox" class="task-checkbox" ${item.active ? 'checked' : ''}>

    <div class="task-content">
      <h3>${item.name}</h3>
      ${item.description ? `<p>${item.description}</p>` : ''}

      <div class="task-meta">
        <span class="task-badge badge-category">
          ${categoryData.emoji} ${categoryData.name}
        </span>

        <span class="task-badge badge-priority priority-${item.priority}">
          ${priorityData.name}
        </span>

        <span class="task-date">
          📅 ${formatDate(item.createdAt)}
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

  if (!itemsToRender.length) {
    list.innerHTML = '';
    empty.style.display = 'block';
    return;
  }

  empty.style.display = 'none';
  list.innerHTML = itemsToRender.map(renderItem).join('');
};

const renderStats = stats => {
  document.getElementById('stat-total').textContent = stats.total;
  document.getElementById('stat-active').textContent = stats.active;
  document.getElementById('stat-inactive').textContent = stats.inactive;

  const statsDetails = Object.entries(stats.byCategory)
    .map(([key, value]) => {
      const cat = CATEGORIES[key];
      return `
        <div class="stat-card">
          <h4>${cat?.emoji} ${cat?.name}</h4>
          <p>${value}</p>
        </div>
      `;
    })
    .join('');

  document.getElementById('stats-details').innerHTML = statsDetails;
};

// ============================================
// EVENTOS
// ============================================

const getCurrentFilters = () => ({
  status: document.getElementById('filter-status').value,
  category: document.getElementById('filter-category').value,
  priority: document.getElementById('filter-priority').value,
  search: document.getElementById('search-input').value
});

const applyCurrentFilters = () =>
  applyFilters(items, getCurrentFilters());

const handleFormSubmit = e => {
  e.preventDefault();

  const itemData = {
    name: document.getElementById('item-name').value.trim(),
    description: document.getElementById('item-description').value.trim(),
    category: document.getElementById('item-category').value,
    priority: document.getElementById('item-priority').value
  };

  if (!itemData.name) return;

  items = editingItemId
    ? updateItem(editingItemId, itemData)
    : createItem(itemData);

  resetForm();
  renderItems(applyCurrentFilters());
  renderStats(getStats(items));
};

const resetForm = () => {
  document.getElementById('item-form').reset();
  editingItemId = null;
};

const attachEventListeners = () => {
  document.getElementById('item-form')
    .addEventListener('submit', handleFormSubmit);

  document.getElementById('cancel-btn')
    .addEventListener('click', resetForm);

  document.getElementById('clear-inactive')
    .addEventListener('click', () => {
      items = clearInactive();
      renderItems(applyCurrentFilters());
      renderStats(getStats(items));
    });

  document.getElementById('item-list')
    .addEventListener('click', e => {
      const itemEl = e.target.closest('.task-item');
      if (!itemEl) return;

      const id = Number(itemEl.dataset.itemId);

      if (e.target.classList.contains('task-checkbox'))
        items = toggleItemActive(id);

      if (e.target.classList.contains('btn-delete'))
        items = deleteItem(id);

      renderItems(applyCurrentFilters());
      renderStats(getStats(items));
    });

  ['filter-status','filter-category','filter-priority','search-input']
    .forEach(id =>
      document.getElementById(id)
        .addEventListener('input', () =>
          renderItems(applyCurrentFilters())
        )
    );
};

// ============================================
// INIT
// ============================================

const init = () => {
  items = loadItems();
  renderItems(items);
  renderStats(getStats(items));
  attachEventListeners();
};

document.addEventListener('DOMContentLoaded', init);