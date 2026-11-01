export default class Collapse {
  constructor(container) {
    this.container = container;
    this.button = container.querySelector('.collapse__button');
    this.content = container.querySelector('.collapse__content');
    this.expanded = false;

    this.button.addEventListener('click', () => this.toggle());
  }

  toggle() {
    this.expanded = !this.expanded;
    this.container.classList.toggle('collapse--expanded', this.expanded);
    this.button.setAttribute('aria-expanded', String(this.expanded));
    this.content.setAttribute('aria-hidden', String(!this.expanded));
    this.content.inert = !this.expanded;
  }
}
