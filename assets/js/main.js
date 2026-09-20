document.addEventListener('DOMContentLoaded', () => {
  // Render cart initially
  cart.renderCart();

  // Category filter
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      // Remove active class
      filterBtns.forEach(b => b.classList.remove('active', 'btn-primary'));
      filterBtns.forEach(b => b.classList.add('btn-outline-primary'));
      
      // Add active class to clicked button
      e.target.classList.remove('btn-outline-primary');
      e.target.classList.add('active', 'btn-primary');
      
      const category = e.target.getAttribute('data-category');
      const menuItems = document.querySelectorAll('.menu-item');
      
      menuItems.forEach(item => {
        if (category === 'all' || item.getAttribute('data-category') === category) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // Current year for footer
  document.getElementById('currentYear').textContent = new Date().getFullYear();

  // Navbar sticky
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('shadow-sm');
    } else {
      navbar.classList.remove('shadow-sm');
    }
  });
});

function renderMenu(items) {
  const container = document.getElementById('menuContainer');
  if (!container) return;
  
  container.innerHTML = '';
  
  if (items.length === 0) {
    container.innerHTML = '<div class="col-12 text-center py-5"><p class="text-muted">Menu tidak ditemukan.</p></div>';
    return;
  }
  
  items.forEach(item => {
    container.innerHTML += createMenuCard(item);
  });
}



function createMenuCard(item) {
  return `
    <div class="col-12 col-md-6 col-lg-4 mb-4">
      <div class="card h-100 shadow-sm border-0 menu-card">
        <div class="position-relative">
          <img src="${item.image}" class="card-img-top" alt="${item.name}" style="height: 200px; object-fit: cover;">
          <div class="position-absolute" style="top: 10px; right: 10px;">
            <span class="badge badge-primary text-capitalize">${item.category}</span>
          </div>
        </div>
        <div class="card-body d-flex flex-column">
          <h5 class="card-title font-weight-bold mb-1">${item.name}</h5>
          <p class="card-text text-muted small flex-grow-1">${item.description}</p>
          <div class="d-flex justify-content-between align-items-center mt-3">
            <span class="h6 mb-0 font-weight-bold text-primary">${formatCurrency(item.price)}</span>
            <button class="btn btn-sm btn-outline-primary add-to-cart-btn" onclick="cart.addItem(${item.id})">
              <i class="fas fa-plus"></i> Add
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}
