const WHATSAPP_NUMBER = "6281234567890"; // Ganti dengan nomor asli

document.addEventListener('DOMContentLoaded', () => {
  const checkoutForm = document.getElementById('checkoutForm');
  const serviceTypeRadios = document.querySelectorAll('input[name="serviceType"]');
  const tableNumberGroup = document.getElementById('tableNumberGroup');
  
  if (checkoutForm) {
    // Handle service type change
    serviceTypeRadios.forEach(radio => {
      radio.addEventListener('change', (e) => {
        if (e.target.value === 'Indoor') {
          tableNumberGroup.style.display = 'block';
          document.getElementById('tableNumber').required = true;
        } else {
          tableNumberGroup.style.display = 'block'; // Or hide, based on requirements, but PRD says maybe required for both
          document.getElementById('tableNumber').required = false; // we can make it optional for outdoor
        }
      });
    });

    // Handle form submit
    checkoutForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      if (cart.items.length === 0) {
        alert("Keranjang kosong. Silakan pilih menu terlebih dahulu.");
        return;
      }

      const name = document.getElementById('customerName').value;
      const serviceType = document.querySelector('input[name="serviceType"]:checked').value;
      const tableNumber = document.getElementById('tableNumber').value;
      const notes = document.getElementById('orderNotes').value;

      let message = `HALO OLA CAFE & RESTO!\n\nSaya ingin melakukan pemesanan.\n\n`;
      message += `Nama: ${name}\n`;
      message += `Jenis Layanan: ${serviceType}\n`;
      
      if (tableNumber) {
        message += `Nomor Meja: ${tableNumber}\n`;
      }
      
      message += `\nDETAIL PESANAN:\n\n`;

      cart.items.forEach((item, index) => {
        const subtotal = item.price * item.quantity;
        message += `${index + 1}. ${item.name}\n`;
        message += `   Qty: ${item.quantity}\n`;
        message += `   Harga: ${formatCurrency(item.price)}\n`;
        message += `   Subtotal: ${formatCurrency(subtotal)}\n\n`;
      });

      message += `--------------------------------\n\n`;
      message += `Total Pesanan: ${formatCurrency(cart.getTotal())}\n\n`;

      if (notes) {
        message += `Catatan:\n${notes}\n\n`;
      }

      message += `Pesanan dibuat melalui website Ola Cafe & Resto.`;

      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
      
      // Buka WhatsApp
      window.open(whatsappUrl, '_blank');
      
      // Optional: Clear cart after successful redirection (wait a bit or require confirmation)
      // cart.clear();
      // $('#checkoutModal').modal('hide');
    });
  }
});
