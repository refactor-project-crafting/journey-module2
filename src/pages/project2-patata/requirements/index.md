# Requirements

## Functional requirements

Los requisitos funcionales del proyecto están descritos en las User Stories.

La aplicación debe tener las siguientes páginas:

- **Listado de discos**: muestra todos los discos que se venden en la tienda.
- **Carrito de la compra**: muestra los discos que se han añadido al carrito.

## Out of scope

Las siguientes features no forman parte de esta fase del proyecto:

- Autenticación de usuarios.
- Proceso de checkout.
- Vista de detalle de un disco.

## Git requirements

Está prohibido hacer commits en la rama `main`. Todos los commits deben ser realizados en una rama auxiliar y luego hacer una _pull request_ a `main`.

Debéis configurar vuestro repositorio con una protección de rama que no permita hacer _push_ directamente a `main`, y que no permita mergear si no hay como mínimo **1 approval** en la PR.

Es obligatorio usar hooks de Husky para las siguientes comprobaciones:

- El mensaje del commit debe tener entre 10 y 72 caracteres.
- El mensaje del commit debe comenzar con una letra mayúscula.
- No se puede commitear directamente en la rama `main`.
- El código debe estar formateado.
- El código no debe tener errores de ESLint.
- La rama debe empezar por `feature/` o `bugfix/`.

## Deploy requirements

El proyecto debe ser desplegado en Netlify.

## Tests

Todas las funciones deben estar testeadas.
