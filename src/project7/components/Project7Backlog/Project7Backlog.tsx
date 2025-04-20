const Project7Backlog: React.FC = () => {
  return (
    <>
      <h2 id="functional-requirements">Sprint Backlog</h2>
      <p>
        El objetivo de este sprint es generar un CRUD para poder consultar y
        gestionar los posts de un blog.
      </p>
      <p>
        Cada tarea está asociada a una User Story. Recuerda reflejar esta
        asociación en tu panel de Trello.
      </p>
      <p>
        Haz slicing para crear tareas pequeñas a partir de las tareas que hay
        aquí.
      </p>
      <h2 id="us1">US1</h2>
      <p>
        Como administrador, quiero poder visualizar una lista de todos los posts
        paginados para poder gestionarlos.
      </p>
      <h3>Tareas</h3>
      <h4>B1. Header (front)</h4>
      <p>Crear el header principal de la aplicación web.</p>
      <h5 id="acceptance-criteria">Acceptance criteria</h5>
      <ul>
        <li>La aplicación tiene un header con el título de la aplicación.</li>
      </ul>
      <h4>B2. Base de datos (back)</h4>
      <p>
        Crear una base de datos MongoDB en Atlas para almacenar una colección de
        posts.
      </p>
      <p>Un post debe tener los siguientes datos:</p>
      <ul>
        <li>Fecha de publicación</li>
        <li>Autor/a</li>
        <li>Título</li>
        <li>URL imagen</li>
        <li>Texto alternativo de la imagen</li>
        <li>Tags</li>
        <li>Contenido</li>
      </ul>
      <h5 id="acceptance-criteria">Acceptance criteria</h5>
      <ul>
        <li>
          Hay una base de datos llamada <code>blog</code> que tiene una
          colección llamada
          <code>posts</code>.
        </li>
        <li>
          La colección <code>posts</code> tiene varios posts ya introducidos.
        </li>
      </ul>
      <h4>B3. Controller para obtener una página de posts (back)</h4>
      <p>
        Crear un controller para posts, con un método que devuelva una página de
        posts. El número de página (que por defecto será 1) debe llegar por
        query param.
      </p>
      <p>Una página tiene 5 posts.</p>
      <p>
        En la response también debe ir el total de posts de la base de datos.
      </p>
      <h5>Acceptance criteria</h5>
      <ul>
        <li>
          Si no recibe número de página, el método devuelve un array con los 5
          primeros posts ordenados por fecha (primero los más recientes).
        </li>
        <li>
          Si recibe un número de página y es diferente a 1, el método devuelve
          un array con los 5 posts correspondientes al número de página
          recibido, ordenados por fecha (primero los más recientes).
        </li>
        <li>
          La response incluye el número total de posts de la base de datos.
        </li>
      </ul>
      <h4>B4. Router para posts (back)</h4>
      <p>
        Crear un router para posts, con una ruta que devuelva una página de
        posts.
      </p>
      <p>
        Termina de crear el endpoint <code>GET /posts</code> para que devuelva
        un array con los posts correspondientes.
      </p>
      <h5 id="acceptance-criteria">Acceptance criteria</h5>
      <ul>
        <li>
          El endpoint responde con un array con los posts correspondientes.
        </li>
      </ul>
      <h4 id="m5-men-de-navegaci-n-front-">B5. Menú de navegación (front)</h4>
      <p>
        Crear un menú de navegación en el header para que el usuario pueda
        acceder a las diferentes secciones de la aplicación. Por ahora sólo
        tendrá el link de la página de listado.
      </p>
      <h5 id="acceptance-criteria">Acceptance criteria</h5>
      <ul>
        <li>El menú tiene un enlace a la lista de posts.</li>
        <li>
          El menú presenta de algún modo visual cuál es la sección actual.
        </li>
      </ul>
      <h4>B6. Listado de posts (front)</h4>
      <p>
        Crea la página de listado. Haz que pida a la API REST una página de
        posts (el número de página, que será 1 por defecto, estará en los query
        params). Haz que pinte una card por cada post. Crea los estilos
        necesarios para que cuando haya cards, ya se vean con el tamaño
        correspondiente.
      </p>
      <h5>Acceptance criteria</h5>
      <ul>
        <li>La página muestra un encabezado.</li>
        <li>
          La página muestra el total de posts de la página actual y el total de
          posts que hay en la base de datos.
        </li>
        <li>
          La página renderiza tantos contenedores de card como cantidad de posts
          recibe.
        </li>
      </ul>
      <h4 id="m6-carga-de-monumentos-front-">B7. Carga de posts (front)</h4>
      <p>
        Crear una función que pida una página de posts a la API REST y los
        devuelva, junto con el número total de posts de la base de datos.
      </p>
      <h5 id="acceptance-criteria">Acceptance criteria</h5>
      <ul>
        <li>La función devuelve un array con una página de posts.</li>
        <li>La función devuelve el total de posts de la base de datos.</li>
      </ul>
      <h4>B8. Card de un post (front)</h4>
      <p>
        Crear un componente que muestre la vista previa de un post. Debe mostrar
        los siguientes datos:
        <ul>
          <li>Fecha de publicación</li>
          <li>Autor/a</li>
          <li>Título</li>
          <li>Imagen</li>
          <li>Tags</li>
          <li>Las 100 primeras palabras del contenido del post.</li>
        </ul>
      </p>
      <h5 id="acceptance-criteria">Acceptance criteria</h5>
      <ul>
        <li>El componente muestra el título del post recibido.</li>
        <li>El componente muestra la imagen del post recibido.</li>
        <li>El componente muestra la fecha del post recibido.</li>
        <li>El componente muestra el/la autor/a del post recibido.</li>
        <li>
          El componente muestra las 100 primeras palabras del contenido del post
          recibido.
        </li>
      </ul>
      <h4 id="m8-lista-de-monumentos-front-">B9. Lista de cards (front)</h4>
      <p>Mostrar el listado de cards con los posts recibidos del back.</p>
      <p>
        El número de página debe cogerse de los query params, y si no hay debe
        pedirse la página número 1.
      </p>
      <h5 id="acceptance-criteria">Acceptance criteria</h5>
      <ul>
        <li>Se muestran todas las cards de los posts recibidos.</li>
      </ul>
      <h2 id="us2">US2</h2>
      <p>
        Como administrador, quiero poder navegar por las diferentes páginas del
        listado de posts, para poder verlos todos.
      </p>
      <h3 id="tareas">Tareas</h3>
      <h4>B10. Navegación por páginas</h4>
      <p>
        Mostrar debajo de las cards una navegación por páginas, que enseñe el
        número de página actual, un link para ir a la página anterior y otro
        link para ir a la página siguiente.
      </p>
      <p>Los links deben aparecer sólo cuando sea necesario.</p>
      <h5 id="acceptance-criteria">Acceptance criteria</h5>
      <ul>
        <li>La navegación por páginas muestra el número de página actual.</li>
        <li>
          Si el usuario está en una página que no sea la primera, le aparece un
          link para ir a la página anterior.
        </li>
        <li>
          Si el usuario está en una página que no sea la última, le aparece un
          link para ir a la página siguiente.
        </li>
      </ul>
      <h2 id="us3">US3</h2>
      <p>
        Como administrador, quiero poder añadir un nuevo post para que los
        usuarios lo puedan visualizar.
      </p>
      <h3 id="tareas">Tareas</h3>
      <h4 id="m10-controller-para-a-adir-un-monumento-back-">
        B11. Controller para añadir un post (back)
      </h4>
      <p>
        En el controller de posts, crear un método para añadir un nuevo post. El
        método recibe los datos del post a añadir y devuelve el nuevo post
        creado.
      </p>
      <p>No se deben poder crear posts con el mismo título.</p>
      <h5 id="acceptance-criteria">Acceptance criteria</h5>
      <ul>
        <li>El nuevo post se añade a la base de datos.</li>
        <li>El método devuelve el nuevo post creado.</li>
        <li>
          Si ya existe un post con el mismo título, se responde con un error.
        </li>
      </ul>
      <h4 id="m11-router-para-a-adir-un-monumento-back-">
        B12. Router para añadir un post (back)
      </h4>
      <p>Crear una ruta en el router de posts para añadir un nuevo post.</p>
      <p>
        Termina de crear el endpoint <code>POST /posts</code> para que añada un
        nuevo post.
      </p>
      <h5 id="acceptance-criteria">Acceptance criteria</h5>
      <ul>
        <li>El endpoint añade un nuevo post a la base de datos.</li>
        <li>El endpoint devuelve el nuevo post creado.</li>
        <li>
          Si ya existe un post con el mismo título, se responde con un error.
        </li>
      </ul>
      <h4 id="m12-maquetaci-n-de-formulario-de-a-adir-monumento-front-">
        B13. Formulario de añadir post (front)
      </h4>
      <p>
        Crear un formulario para añadir un nuevo post, con validación de campos.
      </p>
      <h5 id="acceptance-criteria">Acceptance criteria</h5>
      <ul>
        <li>
          El usuario puede introducir todos los datos del post usando el
          teclado.
        </li>
        <li>El formulario tiene un botón para enviar los datos.</li>
        <li>
          El usuario puede enviar el formulario con la tecla <code>Enter</code>.
        </li>
        <li>
          El foco se mueve a un control de formulario al clicar en su etiqueta.
        </li>
        <li>El usuario no puede enviar el formulario si hay errores.</li>
      </ul>
      <h4 id="m13-env-o-de-datos-para-a-adir-monumento-front-">
        B14. Envío de datos para añadir post (front)
      </h4>
      <p>
        Hacer que cuando el usuario envíe el formulario, se envíen los datos a
        la API REST.
      </p>
      <h5 id="acceptance-criteria">Acceptance criteria</h5>
      <ul>
        <li>La API REST recibe los datos del post a añadir.</li>
        <li>La API REST devuelve el nuevo post creado.</li>
      </ul>
      <h4 id="m14-a-adir-monumento-a-la-lista-front-">
        B15. Añadir post a la lista (front)
      </h4>
      <p>
        Cuando la API REST devuelve el nuevo post creado, añadirlo a la lista de
        posts y redirigir a la página de la lista de posts.
      </p>
      <h5 id="acceptance-criteria">Acceptance criteria</h5>
      <ul>
        <li>Tras añadir un nuevo post, se redirige a la lista de posts.</li>
        <li>El nuevo post aparece en la lista de posts.</li>
        <li>El nuevo post tiene los datos introducidos por el usuario.</li>
      </ul>
      <h2 id="us3">US4</h2>
      <p>
        Como administrador, quiero poder eliminar un post para que los usuarios
        dejen de verlo.
      </p>
      <h3 id="tareas">Tareas</h3>
      <h4 id="m15-controller-para-eliminar-un-monumento-back-">
        B16. Controller para eliminar un post (back)
      </h4>
      <p>
        En el controller de posts, crear un método para eliminar un post. El
        método recibe el <code>id</code> del post a eliminar en un segmento del
        path, y emite una response con el post eliminado.
      </p>
      <h5 id="acceptance-criteria">Acceptance criteria</h5>
      <ul>
        <li>
          El post con el <code>id</code> especificado no está en la base de
          datos.
        </li>
        <li>Se emite una response con el post eliminado.</li>
        <li>
          Si no existe un post con el <code>id</code> especificado, se responde
          con un error.
        </li>
        <li>
          Si la id no tiene el formato correcto, se responde con un error.
        </li>
      </ul>
      <h4 id="m16-router-para-eliminar-un-monumento-back-">
        B17. Router para eliminar un post (back)
      </h4>
      <p>Crear una ruta en el router de posts para eliminar un post.</p>
      <p>
        Termina de crear el endpoint <code>DELETE /posts/:postId</code> para que
        elimine un post.
      </p>
      <h5 id="acceptance-criteria">Acceptance criteria</h5>
      <ul>
        <li>
          Tras recibir la request, el post con el <code>id</code> especificado
          no está en la base de datos.
        </li>
        <li>Se emite una response con el post eliminado.</li>
        <li>
          Si no existe un post con el <code>id</code> especificado, se responde
          con un error.
        </li>
        <li>
          Si la id no tiene el formato correcto, se responde con un error.
        </li>
      </ul>
      <h4 id="m17-bot-n-para-eliminar-monumento-front-">
        B18. Botón para eliminar post (front)
      </h4>
      <p>
        Añadir a la card de post un botón para eliminar el post. Al clicar en el
        botón, se debe enviar a la API REST la petición para eliminar el post.
      </p>
      <h5 id="acceptance-criteria">Acceptance criteria</h5>
      <ul>
        <li>La card de post tiene un botón para eliminar el post.</li>
        <li>
          Al clicar en el botón, la API REST recibe la petición para eliminar el
          post, con la id correcta.
        </li>
      </ul>
      <h4 id="m18-eliminar-monumento-de-la-lista-front-">
        B19. Eliminar post de la lista (front)
      </h4>
      <p>
        Cuando la API REST devuelve el post eliminado, eliminarlo de la lista de
        posts.
      </p>
      <h5 id="acceptance-criteria">Acceptance criteria</h5>
      <ul>
        <li>
          Tras eliminar un post, el post ya no aparece en la lista de posts.
        </li>
      </ul>
      <h2>US5</h2>
      <p>
        Como administrador, quiero poder ver la ficha detallada de un post, para
        poder leerlo completo.
      </p>
      <h4>B20: Página detalle</h4>
      <p>
        Crear la página para el detalle de un post, que recibirá la{" "}
        <code>id</code> del post a mostrar.
      </p>
      <p>
        La página debe mostrar toda la información de un post. Su diseño no debe
        ser igual que el de la card pero en grande.
      </p>
      <h5>Acceptance criteria</h5>
      <ul>
        <li>
          Al recibir la id de un post, la página muestra el título, la imagen y
          todos los datos del post.
        </li>
        <li>Si no existe el post, esta página debe mostrar un error.</li>
      </ul>
      <h4>B21: Link para ir a la página de detalle</h4>
      <p>
        La card de un post debe tener alguna manera de poder ir a la página de
        detalle de ese post.
      </p>
      <h5>Acceptance criteria</h5>
      <ul>
        <li>
          Al hacer clic en el enlace que presenta la card de un post, se
          redirige al usuario a la página de detalle de ese post.
        </li>
      </ul>
    </>
  );
};

export default Project7Backlog;
