const Project3Requirements: React.FC = () => {
  return (
    <>
      <h1>Requirements</h1>
      <h2>Functional requirements</h2>
      <p>
        El tablero de juego se creará con una dimensión fija y se rellenará con
        minas aleatorias.
      </p>
      <p>
        Se le debe mostrar al usuario el tablero de juego, con las casillas
        ocultas. El usuario puede clicar en una casilla para descubrirla. Si la
        casilla contiene una mina, el usuario pierde la partida. Si la casilla
        no contiene una mina, se muestra el número de minas que hay alrededor de
        la casilla.
      </p>
      <p>
        En esta primera versión del juego no se puede marcar las casillas con
        banderas.
      </p>
      <p>
        El usuario puede ver en todo momento cuántas minas hay en total. Si el
        usuario descubre todas las casillas que no contienen minas, gana la
        partida.
      </p>
      <h2>UI requirements</h2>
      <p>El diseño de la interfaz debes crearlo tú, en versión mobile.</p>
      <h2>Deploy requirements</h2>
      <p>El proyecto debe ser desplegado en Netlify.</p>
      <h2>Tests</h2>
      <p>Todas las funciones tipo query deben estar testeadas.</p>
    </>
  );
};

export default Project3Requirements;
