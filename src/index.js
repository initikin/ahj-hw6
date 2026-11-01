import './styles.css';
import Collapse from './js/Collapse';

document.querySelectorAll('[data-collapse]').forEach((container) => {
  new Collapse(container);
});
