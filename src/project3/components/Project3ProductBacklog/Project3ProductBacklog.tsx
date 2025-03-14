const Project3ProductBacklog: React.FC = () => {
  return (
    <>
      <h1>Product Backlog</h1>
      <p>
        Aquí tienes el backlog de producto. Si necesitas crear tareas
        auxiliares, hazlo, pero recuerda que deben ser pequeñas y concretas.
      </p>
      <h2>Tareas</h2>
      <h3 id="ms-0-crear-layout-general">MS-0: Crear layout general</h3>
      <p>Crear el layout general de la aplicación.</p>
      <h4 id="acceptance-criteria">Acceptance criteria</h4>
      <ul>
        <li>El layout tiene un header con el nombre de la app como mínimo.</li>
      </ul>
      <h3 id="ms-1-crear-el-tablero-de-juego">
        MS-1: Crear el tablero de juego
      </h3>
      <p>
        Crear, en TypeScript (nada de UI), un tablero de juego. Para ello
        deberás crear un tipo que represente una casilla del tablero y otro tipo
        que represente el tablero entero.
      </p>
      <p>El tablero debe tener tantas filas como columnas.</p>
      <p>
        Cada casilla del tablero debe tener un valor que indique si contiene una
        mina o no, y otro que indique cuántas minas hay a su alrededor (ponlo
        por ahora en 0 en todas). Rellena el tablero con minas aleatorias.
      </p>
      <h4 id="acceptance-criteria">Acceptance criteria</h4>
      <ul>
        <li>El tablero tiene el mismo número de filas que de columnas.</li>
        <li>
          Cada casilla del tablero tiene un valor que indica si contiene una
          mina o no.
        </li>
        <li>
          Cada casilla del tablero tiene un valor que indica cuántas minas hay a
          su alrededor, y todas son 0.
        </li>
      </ul>
      <h3>MS-2: Mostrar el tablero</h3>
      <p>Mostrar el tablero en la UI, con las minas ocultas.</p>
      <h4 id="acceptance-criteria">Acceptance criteria</h4>
      <ul>
        <li>Se muestra un tablero cuadrado.</li>
        <li>Cada casilla del tablero con mina renderiza una mina.</li>
        <li>Las minas están ocultas.</li>
      </ul>
      <h3 id="ms-2-calcular-las-minas-adyacentes">
        MS-3: Calcular las minas adyacentes
      </h3>
      <p>
        Cada casilla del tablero debe calcular cuántas minas hay a su alrededor
        y almacenar dicha cantidad.
      </p>
      <h4 id="acceptance-criteria">Acceptance criteria</h4>
      <ul>
        <li>
          Cada casilla del tablero tiene un valor que indica cuántas minas hay a
          su alrededor.
        </li>
      </ul>
      <h3>MS-4: Completar el tablero</h3>
      <p>
        En la UI, cada casilla que no contenga una mina debe contener el número
        de minas adyacentes, pero este contenido no debe verse.
      </p>
      <h4 id="acceptance-criteria">Acceptance criteria</h4>
      <ul>
        <li>
          Cada casilla que no tenga mina debe contener el número de minas
          adyacentes.
        </li>
        <li>Las casillas no deben mostrar el número de minas adyacentes.</li>
      </ul>
      <h3 id="ms-4-revelar-una-casilla">MS-5: Revelar una casilla</h3>
      <p>
        Cuando el usuario haga clic en una casilla, se debe revelar su
        contenido.
      </p>
      <h4 id="acceptance-criteria">Acceptance criteria</h4>
      <ul>
        <li>
          Al hacer clic en una casilla que no tiene una bomba, se muestra el
          número de minas adyacentes.
        </li>
        <li>
          Al hacer clic en una casilla que tiene una bomba, se muestra una
          bomba.
        </li>
      </ul>
      <h3>MS-6: Encontrarse una bomba</h3>
      <p>
        Cuando el usuario haga clic en una casilla que contiene una bomba, se
        deben mostrar todas las bombas. También se le debe mostrar un mensaje de
        que ha perdido y no se le debe permitir seguir jugando.
      </p>
      <h4 id="acceptance-criteria">Acceptance criteria</h4>
      <ul>
        <li>
          Al hacer clic en una casilla que contiene una bomba, aparecen todas
          las minas del tablero.
        </li>
        <li>
          Al hacer clic en una casilla que contiene una bomba, aparece un
          mensaje diciendo que ha perdido la partida.
        </li>
        <li>Después de perder, al hacer clic en una casilla no ocurre nada.</li>
      </ul>
      <h3>MS-7: Ganar la partida</h3>
      <p>
        Cuando el usuario haya clicado en todas las casillas que no contienen
        una bomba, se debe mostrar un mensaje de que ha ganado y no se le debe
        permitir seguir jugando.
      </p>
      <h4 id="acceptance-criteria">Acceptance criteria</h4>
      <ul>
        <li>
          Al hacer clic en la última casilla que no contiene una bomba, aparece
          un mensaje diciendo que ha ganado la partida.
        </li>
        <li>Después de ganar, al hacer clic en una casilla no ocurre nada.</li>
      </ul>
    </>
  );
};

export default Project3ProductBacklog;
