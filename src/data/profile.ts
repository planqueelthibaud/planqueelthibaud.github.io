/** Contenu affiché sur la page. */

export interface Link {
  label: string;
  url: string;
}

export interface Repo {
  title: string;
  description: string;
  stack: string[];
  url: string;
}

export interface Profile {
  name: string;
  title: string;
  summary: string;
  links: Link[];
  note: string;
  repos: Repo[];
}

export const profile: Profile = {
  name: 'Thibaud Planqueel',
  title: 'Data · Machine learning · Ingénierie logicielle',
  summary:
    'Collecte et stockage de données de santé, modélisation (signaux & imagerie), ' +
    'APIs et interopérabilité, intégration et déploiement continus',
  links: [{ label: 'github.com/planqueelthibaud', url: 'https://github.com/planqueelthibaud' }],
  note: 'Lettres de recommandation et informations sur demande',
  repos: [],
};
