# Music Oasis: Product Backlog

Aquí tienes el backlog de producto. Si necesitas crear tareas auxiliares, hazlo, pero recuerda que deben ser pequeñas y concretas.

Por ejemplo, antes de ponerte con la primera tarea de la lista, podrías crear tareas iniciales para crear los archivos iniciales del proyecto.

Recuerda crear un módulo `ui` para incluir las funciones de UI que te vamos a dar aquí.

## Tareas

### MO0. Crear capa de datos

Crea un módulo para los discos, que tenga un archivo `types.ts` con el tipado de los discos, y un archivo `data.ts` con un array de discos.

Cada disco tiene:

- Una id numérica.
- Un nombre.
- Un nombre de artista o banda.
- Una URL con la imagen de la portada.
- Un tipo (vinilo o digital).
- Un precio.
- Un precio original, si tiene descuento.
- Si es el disco del mes o no.

### MO1. Maquetación responsive de la cabecera

![Cabecera de la aplicación](/images/figma/header.png)

Se debe maquetar la cabecera de la aplicación.

### MO2. Campo de búsqueda en la cabecera

![Campo de búsqueda en la cabecera](/images/figma/search.png)

Cuando el usuario haga clic en el icono de buscar, se debe mostrar un campo de texto para que pueda introducir el nombre del disco que busca, y un icono para cerrar el campo. Añádele al grupo (input + icono) una clase `hidden` para que no se muestre al principio.

Para que aparezca y desaparezca, incluye la siguiente función e invócala:

```typescript
const listenSearchIcon = (): void => {
  const searchIcon = document.querySelector(
    ".la-clase-de-tu-icono-de-busqueda",
  )!;
  const closeSearchBoxIcon = document.querySelector(
    ".la-clase-de-tu-icono-de-cerrar-busqueda",
  )!;
  const searchBox = document.querySelector(
    ".la-clase-de-tu-grupo-de-busqueda",
  )!;

  searchIcon.addEventListener("click", () => {
    searchBox.classList.remove("hidden");
  });

  closeSearchBoxIcon.addEventListener("click", () => {
    searchBox.classList.add("hidden");
  });
};
```

Out of scope: La funcionalidad de búsqueda de discos no hay que implementarla.

### MO3. Maquetación del cuerpo central

Se debe maquetar el cuerpo central de la aplicación para que todo lo próximo que se maquete quede en su interior.

### MO4. Maquetación de los filtros

![Filtros del listado de discos](/images/figma/filtros.png)

Se debe maquetar la barra superior de filtrado por tipo de disco. Se debe crear una clase que marque el filtro activo.

Por ahora no hay que implementar la funcionalidad de filtrado.

### MO5. Maquetación de la lista de discos

Maquetar la lista de discos sin mostrar aún el contenido de las cards. Sólo tienen que verse los huecos (puedes usar un borde para orientarte y luego quitarlo).

### MO6. Maquetación de la portada de un disco

Maquetar una card de disco con la portada de un disco. No hay que mostrar aún el resto de la información.

### MO7. Maquetación del nombre del disco

Maquetar el nombre del disco y artista/banda en la card de disco.

### MO8. Maquetación del tipo de disco

Maquetar el tipo de disco (vinilo o digital) en la card de disco. También el aviso de si tiene descuento o no.

### MO9. Maquetación del precio del disco

Maquetar en la card del disco el precio y los iconos de favorito y carrito.

### MO10. Funciones para crear las cards

En el módulo `ui` crea una función que se llame `renderRecordCard`y que tenga esta firma:

```typescript
(record: Record, recordCard: HTMLElement): void
```

Esta función va a recibir un disco y un elemento HTML que será una copia de la card que has maquetado. Por ahora déjala vacía.

Añade al módulo `ui` esta función e invócala en el archivo principal:

```typescript
const renderRecordsList = (records: Record[]): void => {
  const recordsList = document.querySelector(".records")!;
  const dummyRecord = recordsList.querySelector(".record")!;
  recordsList.innerHTML = "";

  records.forEach((record) => {
    const newRecordCard = dummyRecord.cloneNode(true) as HTMLElement;
    renderRecordCard(record, newRecordCard);
    recordsList.appendChild(newRecordCard);
  });
};
```

Ahora se deberían ver tantas cards como discos haya en el array de datos.

### MO11. Renderizar la portada de un disco

En la función `renderRecordCard` que has creado en el paso anterior, añade el código necesario para que se muestre la portada del disco.

Para acceder al elemento `<img>` de la card, puedes hacerlo así:

```typescript
const recordCover = recordCard.querySelector(
  ".clase-de-tu-portada",
) as HTMLImageElement;
```

Y para acceder a su `src`, puedes hacerlo así:

```typescript
recordCover.src = "URL de la portada del disco";
```

### MO12. Renderizar el nombre del disco y artista/banda

En la función `renderRecordCard`, añade el código necesario para que se muestre el nombre del disco y el nombre del artista/banda.

Para acceder a un elemento a partir de su clase, puedes hacerlo así:

```typescript
const element = parentElement.querySelector(".clase")!;
```

Y para cambiar su contenido, puedes hacerlo así:

```typescript
element.textContent = "Texto que quieres mostrar";
```

### MO13. Renderizar el precio del disco

Haz que la card que habías maquetado en el HTML muestre siempre precio normal y precio de descuento.

En la función `renderRecordCard`, añade el código necesario para que se muestre el precio del disco. Si no tiene descuento, no debe mostrarse el precio de descuento.

Para eliminar un elemento HTML, puedes hacerlo así:

```typescript
element.remove();
```

### MO14. Renderizar si el disco tiene descuento

Haz que la card que habías maquetado en el HTML muestre siempre el cartel de descuento.

En la función `renderRecordCard`, añade el código necesario para que el cartel se oculte si el disco no tiene descuento.

### MO15. Renderizar el tipo de disco

Haz que la card que habías maquetado en el HTML muestre ambos tipos de disco.

En la función `renderRecordCard`, añade el código necesario para que se oculte uno de los dos tipos de disco.

### MO16. Funcionalidad de filtrado

En el módulo `ui`, crea una función que filtre los discos por tipo (vinilo, digital o todos) al hacer clic en los filtros.

### MO17. Maquetar el bloque de disco del mes

Se debe maquetar la sidebar con el bloque que muestra el disco del mes. Sólo debe aparecer en desktop.

### MO18. Funcionalidad del disco del mes

En el módulo `ui`, crea una función para renderizar el disco del mes.

### MO19. Maquetar el bloque de más vendidos

Se debe maquetar el bloque de la sidebar que muestra los discos más vendidos. Sólo debe aparecer en desktop.

### MO20. Maquetar el bloque de géneros

Se debe maquetar el bloque de la sidebar que muestra los géneros de música. Sólo debe aparecer en desktop.

### MO21. Maquetar el footer

Se debe maquetar el footer de la aplicación.

### MO22. Maquetar una fila del carrito

Se debe maquetar una fila del carrito de la aplicación.

### MO23. Maquetar la lista de artículos del carrito

Se deben maquetar varias filas del carrito de la aplicación.

### MO24. Artículos del carrito

Debe existir en `data.ts` una variable que represente los discos que el usuario ha añadido al carrito.

### MO25. Funcionalidad de listar las filas del carrito

En el módulo `ui`, crea una función que renderice las filas del carrito.

### MO26. Funcionalidad de añadir al carrito

En el módulo `ui`, crea una función que añada un disco al carrito de la compra.

Para que ocurra algo cuando el usuario hace clic en algún elemento HTML, puedes hacerlo así:

```typescript
element.addEventListener("click", () => {
  // Código que se ejecuta al hacer clic
});
```

### MO27. Funcionalidad de eliminar del carrito

En el módulo `ui`, crea una función que elimine un disco del carrito de la compra al hacer clic en el icono correspondiente.

### MO28. Funcionalidad de cambiar las unidades

En el módulo `ui`, crea una función que permita cambiar las unidades de un disco en el carrito al hacer clic en los iconos correspondientes.

### MO29. Maquetar las opciones del carrito

Se deben maquetar en el carrito de la aplicación las opciones de método de pago y de método de envío.

### MO30. Maquetar el resumen del carrito

Se debe maquetar en el carrito de la aplicación el resumen de la compra.

### MO31. Funcionalidad de calcular el total

En el módulo `ui`, crea una función que calcule los totales de la compra y los muestre.

### MO32. Maquetar el botón de comprar

Se debe maquetar en el carrito de la aplicación el botón de checkout.

### MO33. Funcionalidad de vaciar el carrito

En el módulo `ui`, crea una función que vacíe el carrito de la compra al hacer clic en el botón de checkout.

### MO34. Maquetar el bloque de features

Se debe maquetar el bloque de features de la aplicación. Debe aparecer sólo en desktop.
