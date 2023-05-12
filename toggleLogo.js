// Wait for the page to finish loading before running the code
window.addEventListener('load', function() {
  // Get references to the two logo images
  var logoLight = document.getElementById('logo-light');
  var logoDark = document.getElementById('logo-dark');

  // Check if the device prefers dark mode
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // User prefers dark color scheme
    // Hide the light logo and show the dark logo
    if (logoLight) {
      logoLight.style.display = 'none';
    }
    if (logoDark) {
      logoDark.style.display = 'inline';
    }
  } else {
    // User prefers light color scheme
    // Hide the dark logo and show the light logo
    if (logoDark) {
      logoDark.style.display = 'none';
    }
    if (logoLight) {
      logoLight.style.display = 'inline';
    }
  }
});
