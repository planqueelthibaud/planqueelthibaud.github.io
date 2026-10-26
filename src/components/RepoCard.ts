/** Carte d'un repo. */
import type { Repo } from '../data/profile';
import { Component } from './Component';

export class RepoCard extends Component {
  constructor(private readonly repo: Repo) {
    super();
  }

  render(): HTMLElement {
    const head = this.el('div', 'card-head');
    head.append(
      this.el('h3', 'card-title', this.repo.title),
      this.link('Voir le repo', this.repo.url),
    );

    const card = this.el('article', 'card');
    card.append(
      head,
      this.el('p', 'card-description', this.repo.description),
      this.el('p', 'card-stack', this.repo.stack.join(' · ')),
    );
    return card;
  }
}
