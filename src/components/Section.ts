/** Section titrée qui affiche une liste de composants. */
import { Component } from './Component';

export class Section extends Component {
  constructor(
    private readonly title: string,
    private readonly children: Component[],
  ) {
    super();
  }

  render(): HTMLElement {
    const head = this.el('div', 'section-head');
    head.append(this.el('h2', 'section-title', this.title), this.el('div', 'section-line'));

    const content = this.el('div', 'section-content');
    content.append(...this.children.map((child) => child.render()));

    const section = this.el('section', 'section');
    section.append(head, content);
    return section;
  }
}
