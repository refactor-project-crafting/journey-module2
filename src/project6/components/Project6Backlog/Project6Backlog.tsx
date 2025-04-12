const Project6Backlog: React.FC = () => {
  return (
    <>
      <h2 id="functional-requirements">Sprint Backlog</h2>
      <p>
        El objetivo de este sprint es generar un CRUD para poder consultar y
        gestionar los pokémon de una Pokédex.
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
        Como usuario, quiero poder ver mi Pokédex para consultar todos los
        Pokémon registrados, con sus datos principales, y ver de un vistazo si
        está en mi Poké Ball o no.
      </p>
      <h3>Tareas</h3>
      <h4>P1. Header (front)</h4>
      <p>Crear el header principal de la aplicación web.</p>
      <h5 id="acceptance-criteria">Acceptance criteria</h5>
      <ul>
        <li>La aplicación tiene un header con el título de la aplicación.</li>
      </ul>
      <h4>P2. Capa de datos (back)</h4>
      <p>
        Crear la capa de datos <em>in memory</em> para almacenar los pokémon.
      </p>
      <h5 id="acceptance-criteria">Acceptance criteria</h5>
      <ul>
        <li>
          Hay un array de pokémon con la forma que hayas decidido, pero sin el
          tipo de pokémon ni las habilidades.
        </li>
      </ul>
      <h4>P3. Controller para obtener todos los pokémon (back)</h4>
      <p>
        Crear un controller para pokémon, con un método que devuelva todos los
        pokémon.
      </p>
      <h5>Acceptance criteria</h5>
      <ul>
        <li>El método devuelve un array con todos los pokémon existentes.</li>
      </ul>
      <h4>P4. Router para pokémon (back)</h4>
      <p>
        Crear un router para pokémon, con una ruta que devuelva todos los
        pokémon.
      </p>
      <p>
        Termina de crear el endpoint <code>GET /pokémon</code> para que devuelva
        un array con todos los pokémon.
      </p>
      <h5 id="acceptance-criteria">Acceptance criteria</h5>
      <ul>
        <li>
          El endpoint responde con un array con todos los pokémon existentes.
        </li>
      </ul>
      <h4 id="m5-men-de-navegaci-n-front-">P5. Menú de navegación (front)</h4>
      <p>
        Crear un menú de navegación en el header para que el usuario pueda
        acceder a las diferentes secciones de la aplicación. Por ahora sólo
        tendrá el link de la página de listado.
      </p>
      <h5 id="acceptance-criteria">Acceptance criteria</h5>
      <ul>
        <li>El menú tiene un enlace a la lista de pokémon.</li>
        <li>
          El menú presenta de algún modo visual cuál es la sección actual.
        </li>
      </ul>
      <h4>P6. Listado de Pokémon (front)</h4>
      <p>
        Crea la página de listado. Haz que pida los datos necesarios para pintar
        una card por cada pokémon. Crea los estilos necesarios para que cuando
        haya cards, ya se vean con el tamaño correspondiente.
      </p>
      <h5>Acceptance criteria</h5>
      <ul>
        <li>La página muestra un encabezado.</li>
        <li>La página muestra el total de pokémon que hay en la pokédex.</li>
        <li>
          La página renderiza tantos contenedores de card como cantidad de
          pokémon recibe.
        </li>
      </ul>
      <h4 id="m6-carga-de-monumentos-front-">P7. Carga de pokémon (front)</h4>
      <p>
        Crear una función que pida los pokémon a ambas API REST y los devuelva.
        Con los datos recibidos de las dos API, debe devolver un array de
        pokémon con la forma que tengan en la aplicación.
      </p>
      <h5 id="acceptance-criteria">Acceptance criteria</h5>
      <ul>
        <li>
          La función devuelve un array con todos los pokémon existentes en el
          back.
        </li>
        <li>
          Los pokémon devueltos tienen los datos que se han pedido a ambos
          arrays.
        </li>
      </ul>
      <h4>P8. Card de un pokémon (front)</h4>
      <p>
        Crear un componente que muestre la información de un pokémon. Debe
        mostrar los siguientes datos:
        <ul>
          <li>Nombre</li>
          <li>Imagen</li>
          <li>Tipo</li>
          <li>Si está en la Poké Ball o no</li>
        </ul>
      </p>
      <h5 id="acceptance-criteria">Acceptance criteria</h5>
      <ul>
        <li>El componente muestra el nombre del pokémon recibido.</li>
        <li>El componente muestra la imagen del pokémon recibido.</li>
        <li>El componente muestra el tipo del pokémon recibido.</li>
      </ul>
      <h4 id="m8-lista-de-monumentos-front-">P9. Lista de cards (front)</h4>
      <p>Mostrar el listado de cards con los pokémon recibidos del back.</p>
      <h5 id="acceptance-criteria">Acceptance criteria</h5>
      <ul>
        <li>Se muestran todas las cards de los pokémon recibidos.</li>
      </ul>
      <h2 id="us2">US2</h2>
      <p>
        Como usuario, quiero poder añadir un nuevo Pokémon a mi Pokédex para
        registrar uno que acabo de descubrir o que quiero tener en mi colección.
      </p>
      <h3 id="tareas">Tareas</h3>
      <h4 id="m10-controller-para-a-adir-un-monumento-back-">
        P10. Controller para añadir un pokémon (back)
      </h4>
      <p>
        En el controller de pokémon, crear un método para añadir un nuevo
        pokémon. El método recibe los datos del pokémon a añadir y devuelve el
        nuevo pokémon creado.
      </p>
      <h5 id="acceptance-criteria">Acceptance criteria</h5>
      <ul>
        <li>El nuevo pokémon se añade al array de pokémon.</li>
        <li>El método devuelve el nuevo pokémon creado.</li>
        <li>
          El nuevo pokémon tiene un <code>id</code> único.
        </li>
        <li>
          Si ya existe un pokémon con el mismo nombre, se responde con un error.
        </li>
      </ul>
      <h4 id="m11-router-para-a-adir-un-monumento-back-">
        P11. Router para añadir un pokémon (back)
      </h4>
      <p>
        Crear una ruta en el router de pokémon para añadir un nuevo pokémon.
      </p>
      <p>
        Termina de crear el endpoint <code>POST /pokemon</code> para que añada
        un nuevo pokémon.
      </p>
      <h5 id="acceptance-criteria">Acceptance criteria</h5>
      <ul>
        <li>El endpoint añade un nuevo pokémon al array de pokémon.</li>
        <li>El endpoint devuelve el nuevo pokémon creado.</li>
        <li>
          Si ya existe un pokémon con el mismo nombre, se responde con un error.
        </li>
      </ul>
      <h4 id="m12-maquetaci-n-de-formulario-de-a-adir-monumento-front-">
        P12. Formulario de añadir pokémon (front)
      </h4>
      <p>
        Crear un formulario para añadir un nuevo pokémon, con validación de
        campos.
      </p>
      <h5 id="acceptance-criteria">Acceptance criteria</h5>
      <ul>
        <li>
          El usuario puede introducir todos los datos del pokémon usando el
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
        P13. Envío de datos para añadir pokémon (front)
      </h4>
      <p>
        Hacer que cuando el usuario envíe el formulario, se envíen los datos a
        la API REST.
      </p>
      <h5 id="acceptance-criteria">Acceptance criteria</h5>
      <ul>
        <li>La API REST recibe los datos del pokémon a añadir.</li>
        <li>La API REST devuelve el nuevo pokémon creado.</li>
      </ul>
      <h4 id="m14-a-adir-monumento-a-la-lista-front-">
        P14. Añadir pokémon a la lista (front)
      </h4>
      <p>
        Cuando la API REST devuelve el nuevo pokémon creado, añadirlo a la lista
        de pokémon y redirigir a la página de la lista de pokémon.
      </p>
      <h5 id="acceptance-criteria">Acceptance criteria</h5>
      <ul>
        <li>
          Tras añadir un nuevo pokémon, se redirige a la lista de pokémon.
        </li>
        <li>El nuevo pokémon aparece en la lista de pokémon.</li>
        <li>El nuevo pokémon tiene los datos introducidos por el usuario.</li>
      </ul>
      <h2 id="us3">US3</h2>
      <p>
        Como usuario, quiero poder eliminar un pokémon de mi Pokédex si ya no
        quiero mantenerlo en mi lista.
      </p>
      <h3 id="tareas">Tareas</h3>
      <h4 id="m15-controller-para-eliminar-un-monumento-back-">
        P15. Controller para eliminar un pokémon (back)
      </h4>
      <p>
        En el controller de pokémon, crear un método para eliminar un pokémon.
        El método recibe el <code>id</code> del pokémon a eliminar en un
        segmento del path, y emite una response con el pokémon eliminado.
      </p>
      <h5 id="acceptance-criteria">Acceptance criteria</h5>
      <ul>
        <li>
          El pokémon con el <code>id</code> especificado no está en el array de
          pokémon.
        </li>
        <li>Se emite una response con el pokémon eliminado.</li>
        <li>
          Si no existe un pokémon con el <code>id</code> especificado, se
          responde con un error.
        </li>
      </ul>
      <h4 id="m16-router-para-eliminar-un-monumento-back-">
        P16. Router para eliminar un pokémon (back)
      </h4>
      <p>Crear una ruta en el router de pokémon para eliminar un pokémon.</p>
      <p>
        Termina de crear el endpoint <code>DELETE /pokemon/:pokemonId</code>{" "}
        para que elimine un pokémon.
      </p>
      <h5 id="acceptance-criteria">Acceptance criteria</h5>
      <ul>
        <li>
          Tras recibir la request, el pokémon con el <code>id</code>{" "}
          especificado no está en el array de pokémon.
        </li>
        <li>Se emite una response con el pokémon eliminado.</li>
        <li>
          Si no existe un pokémon con el <code>id</code> especificado, se
          responde con un error.
        </li>
      </ul>
      <h4 id="m17-bot-n-para-eliminar-monumento-front-">
        P17. Botón para eliminar pokémon (front)
      </h4>
      <p>
        Añadir a la card de pokémon un botón para eliminar el pokémon. Al clicar
        en el botón, se debe enviar a la API REST la petición para eliminar el
        pokémon.
      </p>
      <h5 id="acceptance-criteria">Acceptance criteria</h5>
      <ul>
        <li>La card de pokémon tiene un botón para eliminar el pokémon.</li>
        <li>
          Al clicar en el botón, la API REST recibe la petición para eliminar el
          pokémon, con la id correcta.
        </li>
      </ul>
      <h4 id="m18-eliminar-monumento-de-la-lista-front-">
        P18. Eliminar pokémon de la lista (front)
      </h4>
      <p>
        Cuando la API REST devuelve el pokémon eliminado, eliminarlo de la lista
        de pokémon.
      </p>
      <h5 id="acceptance-criteria">Acceptance criteria</h5>
      <ul>
        <li>
          Tras eliminar un pokémon, el pokémon ya no aparece en la lista de
          pokémon.
        </li>
      </ul>
      <h2>US4</h2>
      <p>
        Como usuario, quiero poder añadir un Pokémon a mi Poké Ball para indicar
        que lo he capturado y lo tengo disponible para usar en combate, o
        quitarlo de la Poké Ball para liberarlo o dejarlo fuera de mi equipo
        activo.
      </p>
      <h4>P19: Endpoint para añadir un pokémon a la Poké Ball</h4>
      <p>
        Crea un método del controller, y enrútalo en el router correspondiente,
        que cuando recibe una id de un pokémon, lo mete en la Poké Ball.
      </p>
      <h5>Acceptance criteria</h5>
      <ul>
        <li>
          Tras recibir la request, el pokémon con el <code>id</code>{" "}
          especificado está en la Poké Ball.
        </li>
        <li>
          Si el pokémon ya estaba en la Poké Ball, debe responder con un error.
        </li>
      </ul>
      <h4>P20: Endpoint para quitar un pokémon de la Poké Ball</h4>
      <p>
        Crea un método del controller, y enrútalo en el router correspondiente,
        que cuando recibe una id de un pokémon, lo quita de la Poké Ball.
      </p>
      <h5>Acceptance criteria</h5>
      <ul>
        <li>
          Tras recibir la request, el pokémon con el <code>id</code>{" "}
          especificado no está en la Poké Ball.
        </li>
        <li>
          Si el pokémon no estaba en la Poké Ball, debe responder con un error.
        </li>
      </ul>
      <h4>P21: Botón para añadir o quitar de la Poké Ball</h4>
      <p>
        La card debe mostrar un botón para añadir el pokémon a la Poké Ball, y
        otro para quitarlo de ella. Debe aparecer uno u otro dependiendo de si
        el pokémon está en la Poké Ball o no.
      </p>
      <h5>Acceptance criteria</h5>
      <ul>
        <li>
          La card de un pokémon que no está en la Poké Ball muestra un botón
          para añadirlo a ella.
        </li>
        <li>
          La card de un pokémon que está en la Poké Ball muestra un botón para
          quitarlo de ella.
        </li>
        <li>
          Tras clicar en un botón para añadir a la Poké Ball, el pokémon debe
          estar en la Poké Ball.
        </li>
        <li>
          Tras clicar en un botón para quitar de la Poké Ball, el pokémon no
          debe estar en la Poké Ball.
        </li>
      </ul>
      <h2>US5</h2>
      <p>
        Como usuario, quiero poder ver la ficha detallada de un pokémon, para
        conocer toda su información.
      </p>
      <h4>P22: Página detalle</h4>
      <p>
        Crear la página para el detalle de un pokémon, que recibirá la{" "}
        <code>id</code> del pokémon a mostrar.
      </p>
      <p>
        La página debe mostrar todos los detalles de un pokémon. Su diseño no
        debe ser igual que el de la card pero en grande.
      </p>
      <h5>Acceptance criteria</h5>
      <ul>
        <li>
          Al recibir la id de un pokémon, la página muestra el nombre, la imagen
          y todos los datos del pokémon.
        </li>
        <li>Si no existe el pokémon, esta página debe mostrar un error.</li>
      </ul>
      <h4>P23: Link para ir a la página de detalle</h4>
      <p>
        La card de un pokémon debe tener alguna manera de poder ir a la página
        de detalle de ese pokémon.
      </p>
      <h5>Acceptance criteria</h5>
      <ul>
        <li>
          Al hacer clic en el enlace que presenta la card de un pokémon, se
          redirige al usuario a la página de detalle de ese pokémon.
        </li>
      </ul>
    </>
  );
};

export default Project6Backlog;
