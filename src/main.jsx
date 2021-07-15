import './index.css';
function removeNoJSOnlyElements() {
  document.querySelectorAll('.no-js-only').forEach((el) => el.remove());
}

removeNoJSOnlyElements();
