import Alpine from 'alpinejs';

function removeNoJSOnlyElements() {
  document.querySelectorAll('.no-js-only').forEach((el) => el.remove());
}

removeNoJSOnlyElements();
window.Alpine = Alpine;
Alpine.start();
