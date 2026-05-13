let nextId = 6;

// Initial inventory array
const inventory = [
  { id: 1, name: "Mechanical Keyboard",  price: 129.99, stock: 42  },
  { id: 2, name: "4K Ultrawide Monitor", price: 649.00, stock: 7   },
  { id: 3, name: "Wireless Mouse",       price: 59.95,  stock: 0   },
  { id: 4, name: "USB-C Hub (7-in-1)",   price: 39.99,  stock: 120 },
  { id: 5, name: "Webcam 1080p",         price: 89.50,  stock: 3   },
];

// Returns the CSS class based on stock level
function stockClass(qty) {
  if (qty === 0)  return 'stock-out';
  if (qty <= 10)  return 'stock-low';
  return 'stock-ok';
}

// Returns a display label based on stock level
function stockLabel(qty) {
  if (qty === 0)  return 'Out of Stock';
  if (qty <= 10)  return `Low — ${qty}`;
  return qty;
}

// Shows a temporary toast notification
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2200);
}

// Clears tbody, loops inventory with for...of, injects rows via innerHTML
function renderTable() {
  const tbody = document.getElementById('table-body');
  tbody.innerHTML = '';

  for (const item of inventory) {
    const cls = stockClass(item.stock);
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td class="td-id">#${String(item.id).padStart(3, '0')}</td>
      <td class="td-name">${item.name}</td>
      <td class="td-price">$${item.price.toFixed(2)}</td>
      <td><span class="stock-badge ${cls}">${stockLabel(item.stock)}</span></td>
      <td><button class="btn-delete" data-id="${item.id}">Remove</button></td>
    `;
    tbody.appendChild(tr);
  }

  document.getElementById('item-count').textContent =
    `${inventory.length} item${inventory.length !== 1 ? 's' : ''}`;
}

// Form submit — add new product
document.getElementById('product-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const name  = document.getElementById('inp-name').value.trim();
  const price = parseFloat(document.getElementById('inp-price').value);
  const stock = parseInt(document.getElementById('inp-stock').value, 10);

  if (!name || isNaN(price) || isNaN(stock)) return;

  inventory.push({ id: nextId++, name, price, stock });
  renderTable();
  showToast(`"${name}" added to inventory`);
  this.reset();
  document.getElementById('inp-name').focus();
});

// Delete row via event delegation
document.getElementById('table-body').addEventListener('click', function(e) {
  if (!e.target.classList.contains('btn-delete')) return;

  const id  = parseInt(e.target.dataset.id, 10);
  const idx = inventory.findIndex(item => item.id === id);
  if (idx === -1) return;

  const removed = inventory.splice(idx, 1)[0];
  renderTable();
  showToast(`"${removed.name}" removed`);
});

// Initial render on page load
renderTable();
