# Sprint Backlog

El objetivo de este sprint es generar un backoffice CRUD para poder consultar y gestionar los monumentos.

Cada tarea está asociada a una User Story. Recuerda reflejar esta asociación en tu panel de Trello.

## US1

Como administrador, quiero poder visualizar una lista de todos los monumentos para poder gestionarlos.

### Tareas

#### M1. Capa de datos (back)

Crear la capa de datos _in memory_ para almacenar los monumentos.

##### Acceptance criteria

- Hay un array de monumentos con la forma especificada en los requisitos.

#### M2. Controller para obtener todos los monumentos (back)

Crear un controller para monumentos, con un método que devuelva todos los monumentos.

##### Acceptance criteria

- El método devuelve un array con todos los monumentos existentes.

#### M3. Router para monumentos (back)

Crear un router para monumentos, con una ruta que devuelva todos los monumentos.

Termina de crear el endpoint `GET /monuments` para que devuelva un array con todos los monumentos.

##### Acceptance criteria

- El endpoint responde con un array con todos los monumentos existentes.

#### M4. Layout general (front)

Crear un layout general para la aplicación web.

##### Acceptance criteria

- La aplicación tiene un header con el título de la aplicación.
- La aplicación tiene contenedor o contenedores para el contenido.

#### M5. Menú de navegación (front)

Crear un menú de navegación en el header para que el usuario pueda acceder a las diferentes secciones de la aplicación.

##### Acceptance criteria

- El menú tiene un enlace a la lista de monumentos.
- El menú tiene un enlace para añadir un nuevo monumento.
- El menú presenta de algún modo visual cuál es la sección actual.

#### M6. Carga de monumentos (front)

Crear una función que pida los monumentos a la API REST y los devuelva.

##### Acceptance criteria

- La función devuelve un array con todos los monumentos existentes en el back.

#### M7. Card de monumento (front)

Crear un componente que muestre la información de un monumento. Tiene que mostrar sólo el nombre.

##### Acceptance criteria

- El componente muestra el nombre del monumento recibido.

#### M8. Lista de monumentos (front)

Mostrar un listado de cards con los monumentos recibidos del back.

##### Acceptance criteria

- Se muestran todas las cards de los monumentos recibidos.

#### M9. Completar card de monumento (front)

Ampliar la card de monumento para que muestre toda la información del monumento.

##### Acceptance criteria

- La card muestra la imagen del monumento recibido.
- La card muestra la descripción del monumento recibido.
- La card muestra el país y la ciudad del monumento recibido.

## US2

Como administrador, quiero poder añadir un nuevo monumento para que los usuarios lo puedan visualizar.

### Tareas

#### M10. Controller para añadir un monumento (back)

En el controller de monumentos, crear un método para añadir un nuevo monumento. El método recibe los datos del monumento a añadir y devuelve el nuevo monumento creado.

##### Acceptance criteria

- El nuevo monumento se añade al array de monumentos.
- El método devuelve el nuevo monumento creado.
- El nuevo monumento tiene un `id` único.
- El nuevo monumento tiene la forma especificada en los requisitos.
- Si ya existe un monumento con el mismo `id`, se responde con un error.

#### M11. Router para añadir un monumento (back)

Crear una ruta en el router de monumentos para añadir un nuevo monumento.

Termina de crear el endpoint `POST /monuments` para que añada un nuevo monumento.

##### Acceptance criteria

- El endpoint añade un nuevo monumento al array de monumentos.
- El endpoint devuelve el nuevo monumento creado.
- Si ya existe un monumento con el mismo `id`, se responde con un error.

#### M12. Maquetación de formulario de añadir monumento (front)

Maquetar un formulario para añadir un nuevo monumento, con validación de campos.

##### Acceptance criteria

- El usuario puede introducir todos los datos del monumento usando el teclado.
- El formulario tiene un botón para enviar los datos.
- El usuario puede enviar el formulario con la tecla `Enter`.
- El foco se mueve a un control de formulario al clicar en su etiqueta.
- El usuario no puede enviar el formulario si hay errores.

#### M13. Envío de datos para añadir monumento (front)

Hacer que cuando el usuario envíe el formulario, se envíen los datos a la API REST.

##### Acceptance criteria

- La API REST recibe los datos del monumento a añadir.
- La API REST devuelve el nuevo monumento creado.

#### M14. Añadir monumento a la lista (front)

Cuando la API REST devuelve el nuevo monumento creado, añadirlo a la lista de monumentos y redirigir a la página de la lista de monumentos.

##### Acceptance criteria

- Tras añadir un nuevo monumento, se redirige a la lista de monumentos.
- El nuevo monumento aparece en la lista de monumentos.
- El nuevo monumento tiene los datos introducidos por el usuario.

## US3

Como administrador, quiero poder eliminar un monumento para que los usuarios dejen de verlo.

### Tareas

#### M15. Controller para eliminar un monumento (back)

En el controller de monumentos, crear un método para eliminar un monumento. El método recibe el `id` del monumento a eliminar en un segmento del path, y emite una response con el monumento eliminado.

##### Acceptance criteria

- El monumento con el `id` especificado no está en el array de monumentos.
- Se emite una response con el monumento eliminado.
- Si no existe un monumento con el `id` especificado, se responde con un error.

#### M16. Router para eliminar un monumento (back)

Crear una ruta en el router de monumentos para eliminar un monumento.

Termina de crear el endpoint `DELETE /monuments/:monumentId` para que elimine un monumento.

##### Acceptance criteria

- Tras recibir la request, el monumento con el `id` especificado no está en el array de monumentos.
- Se emite una response con el monumento eliminado.
- Si no existe un monumento con el `id` especificado, se responde con un error.

#### M17. Botón para eliminar monumento (front)

Añadir a la card de monumento un botón para eliminar el monumento. Al clicar en el botón, se debe enviar a la API REST la petición para eliminar el monumento.

##### Acceptance criteria

- La card de monumento tiene un botón para eliminar el monumento.
- Al clicar en el botón, la API REST recibe la petición para eliminar el monumento, con la id correcta.

#### M18. Eliminar monumento de la lista (front)

Cuando la API REST devuelve el monumento eliminado, eliminarlo de la lista de monumentos.

##### Acceptance criteria

- Tras eliminar un monumento, el monumento ya no aparece en la lista de monumentos.
