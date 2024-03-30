# Tests

Crea una carpeta llamada `__tests__` dentro de la carpeta `src/analysis` y escribe los tests necesarios para las funciones que has creado. Cada vez que crees una función nueva, crea un archivo en esta carpeta que se llame igual que la función, y añade dentro el test correspondiente.

Cada test debe comprobar que la función hace lo que se espera de ella. Por ejemplo, si tenemos una función que suma dos números, el test sería así:

```ts
const total = sum(3, 6);

if (total === 9) {
  console.log("Test passed");
} else {
  console.log("Test failed");
}
```

**IMPORTANTE**: No se puede pasar una tarea a la columna `Done` si no tiene un test que la valide.
