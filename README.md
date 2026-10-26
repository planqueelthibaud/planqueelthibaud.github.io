# planqueelthibaud.github.io

Page de présentation, TypeScript sans framework, construite avec Vite.

Le contenu est dans `src/data/profile.ts`, le fond dans `src/data/layers.ts`.

```bash
npm install
npm run dev
```

```bash
docker build -t vitrine .
docker run -p 8080:80 vitrine
```

Chaque push sur `main` lint, build et publie sur GitHub Pages.
