# Troubleshooting

Como estás exportando las funciones que creas, para luego usarlas en otros archivos deben ser importadas.

Cuando en un archivo escribes una función que está escrita en otro archivo, pero exportada, Intellisense te permitirá importarla automáticamente. Pero la línea `import` que se añade al principio del archivo no siempre es correcta.

Puedes acabar en alguna de estas situaciones de error (y TS no compilará):

- Que se esté importando una carpeta en lugar de un archivo: añade el nombre del archivo `index.js` al final de la ruta.

```ts
import { myFunction } from "./functions"; // Error
import { myFunction } from "./functions/index.js"; // Correcto
```

- Que el archivo importado no tenga extensión `.js`: añádesela manualmente.

```ts
import { myFunction } from "./myFunction"; // Error
import { myFunction } from "./myFunction.js"; // Correcto;
```
