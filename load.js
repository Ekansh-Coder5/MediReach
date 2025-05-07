function showLoader() {
    const loader = document.querySelector('.loader-container');
    loader.classList.add('show');
    
    setTimeout(() => {
      loader.classList.remove('show');
    }, 1000);
  }

  // Show loading animation on initial page load
  window.addEventListener('load', () => {
    const loader = document.querySelector('.loader-container');
    loader.classList.add('show');
    
    setTimeout(() => {
      loader.classList.remove('show');
    }, 1000);
  });