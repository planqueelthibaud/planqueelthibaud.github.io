/** Point d'entrée : construit la page et lance le suivi du scroll. */
import { ParallaxLayer } from './background/ParallaxLayer';
import { ScrollTracker } from './background/ScrollTracker';
import { Header } from './components/Header';
import { RepoCard } from './components/RepoCard';
import { Section } from './components/Section';
import { layers } from './data/layers';
import { profile } from './data/profile';

function byId(id: string): HTMLElement {
  const node = document.getElementById(id);
  if (!node) throw new Error(`#${id} absent de index.html`);
  return node;
}

byId('background').append(...layers.map((config) => new ParallaxLayer(config).render()));

const app = byId('app');
app.append(new Header(profile).render());

if (profile.repos.length > 0) {
  app.append(new Section('Repos', profile.repos.map((repo) => new RepoCard(repo))).render());
}

new ScrollTracker().start();
