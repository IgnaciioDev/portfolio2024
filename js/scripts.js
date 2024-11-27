document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const subject = document.getElementById('subject').value.trim();
      const message = document.getElementById('message').value.trim();
  
      if (!name || !email || !subject || !message) {
        alert('Por favor, llena todos los campos.');
        return;
      }
  
      if (!validateEmail(email)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        return;
      }
  
      alert('¡Mensaje enviado con éxito!');
      form.reset();
    });
  
    function validateEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    }
});