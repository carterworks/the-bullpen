import './index.css';
import { h, render } from 'preact';
import { ReviewChoosers } from './ReviewChoosers';
function removeNoJSOnlyElements() {
  document.querySelectorAll('.no-js-only').forEach((el) => el.remove());
}

removeNoJSOnlyElements();

render(<ReviewChoosers />, document.getElementById('review-choosers'));
