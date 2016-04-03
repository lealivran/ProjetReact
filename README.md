# react Spotify Artist Viewer
by Lea Livran

## Explication du projet

J'ai choisi de me concentrer sur l'affichage des albums de chaque artiste.

Pour cela j'ai créé un lien sur la page de détails de l'artiste qui prend en parametre l'ID de l'artiste et envoie vers une page /albums.
J'ai créé un component Page Album qui récupère les albums grâce à la méthode fetchJSON et la fonction getAlbums qui permet de récupérer l'url de l'api.
Enfin, pour l'affichage des albums, j'ai créé dans un premier temps un component Album qui m'a permi d'afficher les titres d'albums puis j'ai décidé d'utiliser un component Matérial UI : la Grid List que j'ai adapté à mes besoins.

## Development

```console
npm start
```

Then open in your browser at http://localhost:8080

## Production

To generate a minified bundle for prod environment

```console
$ npm run build
```
