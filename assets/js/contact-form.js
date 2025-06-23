document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.php-email-form');
  const loading = document.querySelector('.loading');
  const errorMessage = document.querySelector('.error-message');
  const sentMessage = document.querySelector('.sent-message');

  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Show loading state
      loading.style.display = 'block';
      errorMessage.style.display = 'none';
      sentMessage.style.display = 'none';
      
      // Get form data
      const formData = new FormData(form);
      
      // Submit to Formspree
      fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok');
      })
      .then(data => {
        // Hide loading
        loading.style.display = 'none';
        
        // Show success message
        sentMessage.style.display = 'block';
        
        // Reset form
        form.reset();
        
        console.log('Success:', data);
      })
      .catch(error => {
        // Hide loading
        loading.style.display = 'none';
        
        // Show error message
        errorMessage.innerHTML = 'There was a problem sending your message. Please try again.';
        errorMessage.style.display = 'block';
        
        console.error('Error:', error);
      });
    });
  }
});