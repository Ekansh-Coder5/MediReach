function showLoader() {
    const loader = document.querySelector('.loader-container');
    const body = document.querySelector('body');
  
    loader.classList.add('show');
    body.style.visibility = 'hidden';
  
    setTimeout(() => {
      loader.classList.remove('show');
      body.style.visibility = 'visible';
    }, 2000);
  }
  
  // On page load
  window.addEventListener('load', showLoader);
  