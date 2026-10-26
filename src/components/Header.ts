/** En-tête de la page. */
import type { Profile } from '../data/profile';
import { Component } from './Component';

export class Header extends Component {
  constructor(private readonly profile: Profile) {
    super();
  }

  render(): HTMLElement {
    const links = this.el('nav', 'links');
    links.append(...this.profile.links.map((item) => this.link(item.label, item.url)));

    const header = this.el('header', 'header');
    header.append(
      this.el('p', 'name', this.profile.name),
      this.el('h1', 'title', this.profile.title),
      this.el('p', 'summary', this.profile.summary),
      links,
      this.el('p', 'note', this.profile.note),
    );
    return header;
  }
}
