# Sprint Backlog

El objetivo de este sprint es generar un backoffice CRUD para poder consultar y gestionar los posts.

Cada tarea está asociada a una User Story. Recuerda reflejar esta asociación en tu panel de Trello.

## US1

Como administrador, quiero poder visualizar una lista de todos los posts para poder gestionarlos.

### Tareas

#### B1. Layout general

Crear un layout general para la aplicación web.

##### Acceptance criteria

- La aplicación tiene un header con el título de la aplicación.
- La aplicación tiene contenedor o contenedores para el contenido.

#### B2. Menú de navegación

Crear un menú de navegación en el header para que el usuario pueda acceder a las diferentes secciones de la aplicación.

##### Acceptance criteria

- El menú tiene un enlace a la lista de posts.
- El menú tiene un enlace para añadir un nuevo post.
- El menú presenta de algún modo visual cuál es la sección actual.

#### B3. Carga de posts

Crear una función que pida los posts a la API REST y los devuelva.

##### Acceptance criteria

- La función devuelve un array con todos los posts existentes en el back.

#### B4. Card de post

Crear un componente que muestre la información de un post. Tiene que mostrar sólo el título.

##### Acceptance criteria

- El componente muestra el nombre del post recibido.

#### B5. Lista de posts

Mostrar un listado de cards con los posts recibidos del back.

##### Acceptance criteria

- Se muestran todas las cards de los posts recibidos.

#### B6. Completar card de post

Ampliar la card de post para que muestre toda la información del post.

##### Acceptance criteria

- La card muestra la imagen del post recibido.
- La card muestra los primeros 200 caracteres del contenido del post recibido.
- La card muestra el autor y la fecha del post recibido.

## US2

Como administrador, quiero poder añadir un nuevo post para que los usuarios lo puedan visualizar.

### Tareas

#### B7. Crear nuevo post

Crear una función que envíe una request a la API REST para añadir un nuevo post.

##### Acceptance criteria

- La función envía una request correcta a la API REST, sin `id`.
- La función devuelve el nuevo post creado, con `id`.

#### B8. Maquetación de formulario de añadir post

Maquetar un formulario para añadir un nuevo post.

##### Acceptance criteria

- El usuario puede introducir todos los datos del post usando el teclado.
- El formulario tiene un botón para enviar los datos.
- El usuario puede enviar el formulario con la tecla `Enter`.
- El foco se mueve a un control de formulario al clicar en su etiqueta.

#### B9. Funcionalidad del formulario para añadir post

Vincular los controles del formulario con el estado del componente.

##### Acceptance criteria

- Los controles del formulario se actualizan al cambiar el estado del componente.
- El estado del componente se actualiza al cambiar los controles del formulario.
- El usuario puede escribir en los controles del formulario.

#### B10. Envío de datos para añadir post

Hacer que cuando el usuario envíe el formulario, se envíen los datos a la API REST.

##### Acceptance criteria

- La API REST recibe los datos del post a añadir.
- La API REST devuelve el nuevo post creado.

#### B11. Añadir post a la lista

Cuando la API REST devuelve el nuevo post creado, añadirlo a la lista de posts y redirigir a la página de la lista de posts.

##### Acceptance criteria

- Tras añadir un nuevo post, se redirige a la lista de posts.
- El nuevo post aparece en la lista de posts.
- El nuevo post tiene los datos introducidos por el usuario.

## US3

Como administrador, quiero poder eliminar un post para que los usuarios dejen de verlo.

### Tareas

#### B12. Eliminar post

Crear una función que envíe una request a la API REST para eliminar un post.

##### Acceptance criteria

- La función envía una request correcta a la API REST.
- La función no throwea errores al eliminar un post correcto.
- La función throwea un error al intentar eliminar un post inexistente.

#### B13. Botón para eliminar post

Añadir a la card de post un botón para eliminar el post. Al clicar en el botón, se debe enviar a la API REST la petición para eliminar el post.

##### Acceptance criteria

- La card de post tiene un botón para eliminar el post.
- Al clicar en el botón, la API REST recibe la petición para eliminar el post, con la id correcta.

#### B14. Eliminar post de la lista

Cuando la API REST devuelve el post eliminado, eliminarlo de la lista de posts.

##### Acceptance criteria

- Tras eliminar un post, el post ya no aparece en la lista de posts.
