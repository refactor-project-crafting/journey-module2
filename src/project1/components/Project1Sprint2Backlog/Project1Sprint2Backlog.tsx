const Project1Sprint2Backlog: React.FC = () => {
  return (
    <>
      <h1>Sprint 2 backlog</h1>
      <p>El objetivo del Sprint 2 es mejorar los estilos de la UI.</p>
      <h2>Backlog del Sprint 2</h2>
      <h3 id="1-espacios">1. Espacios</h3>
      <p>
        La caja para introducir texto tiene el texto muy pegado al borde, debe
        estar más separado. Los bloques de análisis están pegados entre sí,
        deben tener una separación entre ellos.
      </p>
      <h3 id="2-bloque-frecuencias">2. Bloque frecuencias</h3>
      <p>
        Las listas no deben tener bullets ni espacios laterales. El bloque
        &quot;Frequencies&quot; debe tener una disposición de tres columnas,
        cada palabra debe estar en una columna.
      </p>
      <h3 id="3-encabezados">3. Encabezados</h3>
      <p>
        El título principal &quot;Text Analyzer&quot; debe estar subrayado. El
        tamaño de letra de los encabezados de los bloques de análisis debe ser
        un poco más pequeño que el que tienen actualmente.
      </p>
      <h3 id="4-enlaces">4. Enlaces</h3>
      <p>
        Al pasar el cursor por encima de un link debe desaparecer el subrayado.
        El link del bloque de palíndromos debe estar más separado del texto que
        viene después.
      </p>
      <h3 id="5-inputs">5. Inputs</h3>
      <p>
        Cuando los input tengan el foco, se les tiene que poner el fondo gris
        oscuro y la letra blanca. El color del borde de los inputs debe ser
        azul.
      </p>
      <h3 id="6-esquinas-redondeadas">6. Esquinas redondeadas</h3>
      <p>
        La caja de texto debe tener las esquinas redondeadas. Los bloques de
        análisis deben tener las esquinas redondeadas.
      </p>
      <h3 id="7-cambiar-botones">7. Cambiar botones</h3>
      <p>
        Todos los botones de la web tienen que mostrar un cursor en forma de
        mano cuando se pone el puntero encima. El botón de analizar no debe
        ocupar todo el ancho, debe tener un tamaño fijo y estar alineado a la
        derecha. El botón de analizar debe tener un borde negro de 1px de ancho.
        Al pasar el cursor por encima del botón, su fondo debe ser transparente
        y su texto negro. Cuando el botón esté inactivo, se debe ver con un
        grado alto de transparencia. Al poner el cursor encima debe cambiarse al
        signo de prohibido.
      </p>
      <h3 id="8-cambiar-colores">8. Cambiar colores</h3>
      <p>
        El fondo de la página debe tener algún color. El color de fondo de los
        bloques de análisis debe ser diferente al actual.
      </p>
      <h3 id="9-theme-switcher">9. Theme switcher</h3>
      <p>
        En la parte superior hay un theme switcher. Este switcher añade la clase{" "}
        <code>dark</code> al contenedor general de la web o se la quita, según
        su estado. Cuando esté activo, los colores de la web deben cambiar a un
        tema oscuro.
      </p>
      <h3>10. Vaciar texto</h3>
      <p>
        Coloca el botón "Analyze" a la izquierda y crea un botón a su derecha
        que contenga el texto "Empty text".
      </p>
      <p>
        Al pulsar este botón se debería vaciar el texto que ha introducido el
        usuario.
      </p>
      <h3>11. Eliminar recuadros de análisis sobrantes</h3>
      <p>
        Elimina de la UI los recuadros de análisis cuyas features se sacaron del
        backlog.
      </p>
      <h3>12. Listado de filtros</h3>
      <p>
        Debajo de los dos botones crea un listado de filtros, uno por cada
        recuadro de análisis que aparece después. Cada filtro debe tener un
        checkbox.
      </p>
      <h3>13. Filtrar</h3>
      <p>
        Haz que al marcar y desmarcar un filtro, aparezca y desaparezca el
        recuadro correspondiente.
      </p>
    </>
  );
};

export default Project1Sprint2Backlog;
