const Project5Backlog: React.FC = () => {
  return (
    <>
      <h2 id="functional-requirements">Sprint Backlog</h2>
      <p>
        El objetivo de este sprint es generar un backoffice CRUD para poder
        consultar y gestionar los monumentos.
      </p>
      <p>
        Cada tarea está asociada a una User Story. Recuerda reflejar esta
        asociación en tu panel de Trello.
      </p>
      <h2 id="us1">US1</h2>
      <p>
        Como administrador, quiero poder visualizar una lista de todos los
        monumentos para poder gestionarlos.
      </p>
      <h3>Tareas</h3>
      <h4>M1. Layout general (front)</h4>
      <p>Crear un layout general para la aplicación web.</p>
      <h5 id="acceptance-criteria">Acceptance criteria</h5>
      <ul>
        <li>La aplicación tiene un header con el título de la aplicación.</li>
        <li>
          La aplicación tiene contenedor o contenedores para el contenido.
        </li>
      </ul>
      <h4>M2. Capa de datos (back)</h4>
      <p>
        Crear la capa de datos <em>in memory</em> para almacenar los monumentos.
      </p>
      <h5 id="acceptance-criteria">Acceptance criteria</h5>
      <ul>
        <li>
          Hay un array de monumentos con la forma especificada en los
          requisitos.
        </li>
      </ul>
      <h4>M3. Controller para obtener todos los monumentos (back)</h4>
      <p>
        Crear un controller para monumentos, con un método que devuelva todos
        los monumentos.
      </p>
      <h5>Acceptance criteria</h5>
      <ul>
        <li>
          El método devuelve un array con todos los monumentos existentes.
        </li>
      </ul>
      <h4>M4. Router para monumentos (back)</h4>
      <p>
        Crear un router para monumentos, con una ruta que devuelva todos los
        monumentos.
      </p>
      <p>
        Termina de crear el endpoint <code>GET /monuments</code> para que
        devuelva un array con todos los monumentos.
      </p>
      <h5 id="acceptance-criteria">Acceptance criteria</h5>
      <ul>
        <li>
          El endpoint responde con un array con todos los monumentos existentes.
        </li>
      </ul>
      <h4 id="m5-men-de-navegaci-n-front-">M5. Menú de navegación (front)</h4>
      <p>
        Crear un menú de navegación en el header para que el usuario pueda
        acceder a las diferentes secciones de la aplicación. Por ahora sólo
        tendrá el link de la página de listado.
      </p>
      <h5 id="acceptance-criteria">Acceptance criteria</h5>
      <ul>
        <li>El menú tiene un enlace a la lista de monumentos.</li>
        <li>
          El menú presenta de algún modo visual cuál es la sección actual.
        </li>
      </ul>
      <h4 id="m6-carga-de-monumentos-front-">
        M6. Carga de monumentos (front)
      </h4>
      <p>
        Crear una función que pida los monumentos a la API REST y los devuelva.
      </p>
      <h5 id="acceptance-criteria">Acceptance criteria</h5>
      <ul>
        <li>
          La función devuelve un array con todos los monumentos existentes en el
          back.
        </li>
      </ul>
      <h4 id="m7-card-de-monumento-front-">M7. Card de monumento (front)</h4>
      <p>
        Crear un componente que muestre la información de un monumento. Tiene
        que mostrar sólo el nombre.
      </p>
      <h5 id="acceptance-criteria">Acceptance criteria</h5>
      <ul>
        <li>El componente muestra el nombre del monumento recibido.</li>
      </ul>
      <h4 id="m8-lista-de-monumentos-front-">
        M8. Lista de monumentos (front)
      </h4>
      <p>Mostrar un listado de cards con los monumentos recibidos del back.</p>
      <h5 id="acceptance-criteria">Acceptance criteria</h5>
      <ul>
        <li>Se muestran todas las cards de los monumentos recibidos.</li>
      </ul>
      <h4 id="m9-completar-card-de-monumento-front-">
        M9. Completar card de monumento (front)
      </h4>
      <p>
        Ampliar la card de monumento para que muestre toda la información del
        monumento.
      </p>
      <h5 id="acceptance-criteria">Acceptance criteria</h5>
      <ul>
        <li>La card muestra la imagen del monumento recibido.</li>
        <li>La card muestra la descripción del monumento recibido.</li>
        <li>La card muestra el país y la ciudad del monumento recibido.</li>
      </ul>
      <h2 id="us2">US2</h2>
      <p>
        Como administrador, quiero poder añadir un nuevo monumento para que los
        usuarios lo puedan visualizar.
      </p>
      <h3 id="tareas">Tareas</h3>
      <h4 id="m10-controller-para-a-adir-un-monumento-back-">
        M10. Controller para añadir un monumento (back)
      </h4>
      <p>
        En el controller de monumentos, crear un método para añadir un nuevo
        monumento. El método recibe los datos del monumento a añadir y devuelve
        el nuevo monumento creado.
      </p>
      <h5 id="acceptance-criteria">Acceptance criteria</h5>
      <ul>
        <li>El nuevo monumento se añade al array de monumentos.</li>
        <li>El método devuelve el nuevo monumento creado.</li>
        <li>
          El nuevo monumento tiene un <code>id</code> único.
        </li>
        <li>
          El nuevo monumento tiene la forma especificada en los requisitos.
        </li>
        <li>
          Si ya existe un monumento con el mismo <code>id</code>, se responde
          con un error.
        </li>
      </ul>
      <h4 id="m11-router-para-a-adir-un-monumento-back-">
        M11. Router para añadir un monumento (back)
      </h4>
      <p>
        Crear una ruta en el router de monumentos para añadir un nuevo
        monumento.
      </p>
      <p>
        Termina de crear el endpoint <code>POST /monuments</code> para que añada
        un nuevo monumento.
      </p>
      <h5 id="acceptance-criteria">Acceptance criteria</h5>
      <ul>
        <li>El endpoint añade un nuevo monumento al array de monumentos.</li>
        <li>El endpoint devuelve el nuevo monumento creado.</li>
        <li>
          Si ya existe un monumento con el mismo <code>id</code>, se responde
          con un error.
        </li>
      </ul>
      <h4 id="m12-maquetaci-n-de-formulario-de-a-adir-monumento-front-">
        M12. Maquetación de formulario de añadir monumento (front)
      </h4>
      <p>
        Maquetar un formulario para añadir un nuevo monumento, con validación de
        campos.
      </p>
      <h5 id="acceptance-criteria">Acceptance criteria</h5>
      <ul>
        <li>
          El usuario puede introducir todos los datos del monumento usando el
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
        M13. Envío de datos para añadir monumento (front)
      </h4>
      <p>
        Hacer que cuando el usuario envíe el formulario, se envíen los datos a
        la API REST.
      </p>
      <h5 id="acceptance-criteria">Acceptance criteria</h5>
      <ul>
        <li>La API REST recibe los datos del monumento a añadir.</li>
        <li>La API REST devuelve el nuevo monumento creado.</li>
      </ul>
      <h4 id="m14-a-adir-monumento-a-la-lista-front-">
        M14. Añadir monumento a la lista (front)
      </h4>
      <p>
        Cuando la API REST devuelve el nuevo monumento creado, añadirlo a la
        lista de monumentos y redirigir a la página de la lista de monumentos.
      </p>
      <h5 id="acceptance-criteria">Acceptance criteria</h5>
      <ul>
        <li>
          Tras añadir un nuevo monumento, se redirige a la lista de monumentos.
        </li>
        <li>El nuevo monumento aparece en la lista de monumentos.</li>
        <li>El nuevo monumento tiene los datos introducidos por el usuario.</li>
      </ul>
      <h2 id="us3">US3</h2>
      <p>
        Como administrador, quiero poder eliminar un monumento para que los
        usuarios dejen de verlo.
      </p>
      <h3 id="tareas">Tareas</h3>
      <h4 id="m15-controller-para-eliminar-un-monumento-back-">
        M15. Controller para eliminar un monumento (back)
      </h4>
      <p>
        En el controller de monumentos, crear un método para eliminar un
        monumento. El método recibe el <code>id</code> del monumento a eliminar
        en un segmento del path, y emite una response con el monumento
        eliminado.
      </p>
      <h5 id="acceptance-criteria">Acceptance criteria</h5>
      <ul>
        <li>
          El monumento con el <code>id</code> especificado no está en el array
          de monumentos.
        </li>
        <li>Se emite una response con el monumento eliminado.</li>
        <li>
          Si no existe un monumento con el <code>id</code> especificado, se
          responde con un error.
        </li>
      </ul>
      <h4 id="m16-router-para-eliminar-un-monumento-back-">
        M16. Router para eliminar un monumento (back)
      </h4>
      <p>
        Crear una ruta en el router de monumentos para eliminar un monumento.
      </p>
      <p>
        Termina de crear el endpoint <code>DELETE /monuments/:monumentId</code>{" "}
        para que elimine un monumento.
      </p>
      <h5 id="acceptance-criteria">Acceptance criteria</h5>
      <ul>
        <li>
          Tras recibir la request, el monumento con el <code>id</code>{" "}
          especificado no está en el array de monumentos.
        </li>
        <li>Se emite una response con el monumento eliminado.</li>
        <li>
          Si no existe un monumento con el <code>id</code> especificado, se
          responde con un error.
        </li>
      </ul>
      <h4 id="m17-bot-n-para-eliminar-monumento-front-">
        M17. Botón para eliminar monumento (front)
      </h4>
      <p>
        Añadir a la card de monumento un botón para eliminar el monumento. Al
        clicar en el botón, se debe enviar a la API REST la petición para
        eliminar el monumento.
      </p>
      <h5 id="acceptance-criteria">Acceptance criteria</h5>
      <ul>
        <li>La card de monumento tiene un botón para eliminar el monumento.</li>
        <li>
          Al clicar en el botón, la API REST recibe la petición para eliminar el
          monumento, con la id correcta.
        </li>
      </ul>
      <h4 id="m18-eliminar-monumento-de-la-lista-front-">
        M18. Eliminar monumento de la lista (front)
      </h4>
      <p>
        Cuando la API REST devuelve el monumento eliminado, eliminarlo de la
        lista de monumentos.
      </p>
      <h5 id="acceptance-criteria">Acceptance criteria</h5>
      <ul>
        <li>
          Tras eliminar un monumento, el monumento ya no aparece en la lista de
          monumentos.
        </li>
      </ul>
    </>
  );
};

export default Project5Backlog;
