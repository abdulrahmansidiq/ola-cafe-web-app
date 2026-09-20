class Cart {
  constructor() {
    this.items = JSON.parse(localStorage.getItem('cartItems')) || [];
    this.updateCartCount();
  }

  save() {
    localStorage.setItem('cartItems', JSON.stringify(this.items));
    this.updateCartCount();
    this.renderCart();
  }

  addItem(productId) {
    const product = menuData.find(p => p.id === productId);
    if (!product || !product.available) return;

    const existingItem = this.items.find(item => item.id === productId);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.items.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1
      });
    }
    this.save();
    
    // Optional: show a small toast or alert
    // alert(`${product.name} added to cart!`);
  }

  removeItem(productId) {
    this.items = this.items.filter(item => item.id !== productId);
    this.save();
  }

  updateQuantity(productId, quantity) {
    if (quantity <= 0) {
      this.removeItem(productId);
      return;
    }
    
    const item = this.items.find(item => item.id === productId);
    if (item) {
      item.quantity = quantity;
      this.save();
    }
  }

  clear() {
    this.items = [];
    this.save();
  }

  getTotal() {
    return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  }
  
  updateCartCount() {
    const count = this.items.reduce((sum, item) => sum + item.quantity, 0);
    const countElements = document.querySelectorAll('.cart-count');
    countElements.forEach(el => {
      el.textContent = count;
      el.style.display = count > 0 ? 'inline-block' : 'none';
    });
  }

  renderCart() {
    const cartItemsContainer = document.getElementById('cartItemsList');
    if (!cartItemsContainer) return;

    if (this.items.length === 0) {
      cartItemsContainer.innerHTML = '<p class="text-center text-muted my-4">Keranjang kosong</p>';
      document.getElementById('cartTotal').textContent = formatCurrency(0);
      document.getElementById('btnCheckoutMenu').disabled = true;
      return;
    }

    document.getElementById('btnCheckoutMenu').disabled = false;
    
    let html = '';
    this.items.forEach(item => {
      const subtotal = item.price * item.quantity;
      html += `
        <div class="cart-item d-flex align-items-center mb-3 pb-3 border-bottom">
          <img src="${item.image}" alt="${item.name}" class="rounded mr-3" style="width: 60px; height: 60px; object-fit: cover;">
          <div class="flex-grow-1">
            <h6 class="mb-0">${item.name}</h6>
            <small class="text-muted">${formatCurrency(item.price)}</small>
            <div class="mt-2">
              <button class="btn btn-sm btn-outline-secondary" onclick="cart.updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
              <span class="mx-2">${item.quantity}</span>
              <button class="btn btn-sm btn-outline-secondary" onclick="cart.updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
            </div>
          </div>
          <div class="text-right ml-2">
            <div class="font-weight-bold mb-2">${formatCurrency(subtotal)}</div>
            <button class="btn btn-sm btn-outline-danger" onclick="cart.removeItem(${item.id})">
              <i class="fas fa-trash"></i>
            </button>
          </div>
        </div>
      `;
    });

    cartItemsContainer.innerHTML = html;
    document.getElementById('cartTotal').textContent = formatCurrency(this.getTotal());
  }
}

const cart = new Cart();
