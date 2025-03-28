const Project1Sprint1Backlog: React.FC = () => {
  return (
    <>
      <h1>Sprint 1 backlog</h1>
      <p>
        El objetivo del Sprint 1 es completar todas las funcionalidades de
        análisis del texto y presentar los datos al usuario.
      </p>
      <h2>Backlog del Sprint 1</h2>
      <h3 id="1-calcular-total-de-p-rrafos">1. Calcular total de párrafos</h3>
      <p>
        Crear una función que reciba un texto y devuelva el número total de
        párrafos que contiene. Un párrafo se considera como un conjunto de
        líneas separadas por una línea en blanco.
      </p>
      <p>
        <strong>Acceptance Criteria:</strong>
      </p>
      <ul>
        <li>La función debe devolver 0 si el texto está vacío.</li>
        <li>La función debe devolver 1 si el texto contiene una sola línea.</li>
        <li>
          La función debe devolver el número correcto de párrafos si el texto
          contiene varios párrafos.
        </li>
      </ul>
      <h3 id="2-mostrar-total-de-p-rrafos">2. Mostrar total de párrafos</h3>
      <p>Mostrar el total de párrafos en la interfaz de usuario.</p>
      <p>
        <strong>Acceptance Criteria:</strong>
      </p>
      <ul>
        <li>
          Cuando el usuario introduce un texto y hace clic en el botón de
          análisis, se debe mostrar el total de párrafos en la interfaz.
        </li>
      </ul>
      <h3 id="3-calcular-total-de-palabras">3. Calcular total de palabras</h3>
      <p>
        Crear una función que reciba un texto y devuelva el número total de
        palabras que contiene.
      </p>
      <p>
        <strong>Acceptance Criteria:</strong>
      </p>
      <ul>
        <li>La función debe devolver 0 si el texto está vacío.</li>
        <li>
          La función debe devolver el número correcto de palabras si el texto
          contiene varias palabras.
        </li>
      </ul>
      <h3 id="4-mostrar-total-de-palabras">4. Mostrar total de palabras</h3>
      <p>Mostrar el total de palabras en la interfaz de usuario.</p>
      <p>
        <strong>Acceptance Criteria:</strong>
      </p>
      <ul>
        <li>
          Cuando el usuario introduce un texto y hace clic en el botón de
          análisis, se debe mostrar el total de palabras en la interfaz.
        </li>
      </ul>
      <h3 id="5-calcular-total-de-caracteres">
        5. Calcular total de caracteres
      </h3>
      <p>
        Crear una función que reciba un texto y devuelva el número total de
        caracteres que contiene.
      </p>
      <p>
        <strong>Acceptance Criteria:</strong>
      </p>
      <ul>
        <li>La función debe devolver 0 si el texto está vacío.</li>
        <li>
          La función debe devolver el número correcto de caracteres si el texto
          contiene varios caracteres.
        </li>
      </ul>
      <h3 id="6-mostrar-total-de-caracteres">6. Mostrar total de caracteres</h3>
      <p>Mostrar el total de caracteres en la interfaz de usuario.</p>
      <p>
        <strong>Acceptance Criteria:</strong>
      </p>
      <ul>
        <li>
          Cuando el usuario introduce un texto y hace clic en el botón de
          análisis, se debe mostrar el total de caracteres en la interfaz.
        </li>
      </ul>
      <h3 id="7-calcular-n-mero-de-palabras-cortas">
        7. Calcular número de palabras cortas
      </h3>
      <p>
        Crear una función que reciba un texto y una longitud máxima (por
        defecto, 4), y que devuelva el número total de palabras que contiene el
        texto que cumplen con la longitud.
      </p>
      <p>
        <strong>Acceptance Criteria:</strong>
      </p>
      <ul>
        <li>La función debe devolver 0 si el texto está vacío.</li>
        <li>
          La función debe devolver el número correcto de palabras cortas si el
          texto contiene varias palabras que cumplen con la longitud.
        </li>
      </ul>
      <h3 id="8-mostrar-n-mero-de-palabras-cortas">
        8. Mostrar número de palabras cortas
      </h3>
      <p>Mostrar el número de palabras cortas en la interfaz de usuario.</p>
      <p>
        <strong>Acceptance Criteria:</strong>
      </p>
      <ul>
        <li>
          Cuando el usuario introduce un texto y hace clic en el botón de
          análisis, se debe mostrar el número de palabras cortas en la interfaz.
        </li>
      </ul>
      <h3 id="9-listar-palabras">9. Listar palabras</h3>
      <p>
        Crear una función que reciba un listado de palabras y las devuelva como
        un string separado por comas.
      </p>
      <p>
        <strong>Acceptance Criteria:</strong>
      </p>
      <ul>
        <li>
          La función debe devolver una cadena vacía si el listado de palabras
          está vacío.
        </li>
        <li>
          La función debe devolver las palabras separadas por comas si el
          listado de palabras contiene varias palabras.
        </li>
      </ul>
      <h3 id="10-mostrar-listado-de-palabras-cortas">
        10. Mostrar listado de palabras cortas
      </h3>
      <p>Mostrar el listado de palabras cortas en la interfaz de usuario.</p>
      <p>
        <strong>Acceptance Criteria:</strong>
      </p>
      <ul>
        <li>
          Cuando el usuario introduce un texto y hace clic en el botón de
          análisis, se debe mostrar el listado de palabras cortas en la
          interfaz.
        </li>
      </ul>
      <h3>11. Calcular frecuencia de palabra</h3>
      <p>
        Crear una función que reciba un texto y una palabra, y devuelva el
        número de veces que aparece la palabra en el texto.
      </p>
      <p>
        <strong>Acceptance Criteria:</strong>
      </p>
      <ul>
        <li>
          La función debe devolver 0 si la palabra no aparece en el texto.
        </li>
        <li>
          La función debe devolver el número correcto de veces que aparece la
          palabra si la palabra aparece en el texto.
        </li>
      </ul>
      <h3>12. Mostrar frecuencia de palabras</h3>
      <p>
        Mostrar la frecuencia de las tres palabras escogidas por el usuario en
        la interfaz de usuario.
      </p>
      <p>
        <strong>Acceptance Criteria:</strong>
      </p>
      <ul>
        <li>
          Cuando el usuario introduce una palabra en el bloque de frecuencias,
          se debe mostrar el número de veces que aparece la palabra en el texto.
        </li>
      </ul>
      <h3>13. Obtener las palabras al revés</h3>
      <p>
        Crear una función que reciba un texto y devuelva el mismo texto pero con
        cada palabra escrita al revés.
      </p>
      <p>
        <strong>Acceptance Criteria:</strong>
      </p>
      <ul>
        <li>
          La función debe devolver una cadena vacía si el texto está vacío.
        </li>
        <li>
          La función debe devolver el texto con las palabras al revés si el
          texto contiene palabras.
        </li>
      </ul>
      <h3>14. Mostrar palabras al revés</h3>
      <p>
        Mostrar el texto con las palabras al revés en la interfaz de usuario.
      </p>
      <p>
        <strong>Acceptance Criteria:</strong>
      </p>
      <ul>
        <li>
          Cuando el usuario introduce un texto y hace clic en el botón de
          análisis, se debe mostrar el texto con las palabras al revés en la
          interfaz.
        </li>
      </ul>
      <h3>15. Ocultar palabras prohibidas</h3>
      <p>
        Crear una función que reciba un texto y un listado de palabras
        prohibidas, y devuelva el mismo texto pero con las palabras prohibidas
        reemplazadas por asteriscos.
      </p>
      <p>
        <strong>Acceptance Criteria:</strong>
      </p>
      <ul>
        <li>
          La función debe devolver una cadena vacía si el texto está vacío.
        </li>
        <li>
          La función debe devolver el texto con las palabras prohibidas
          reemplazadas por asteriscos si el texto contiene palabras prohibidas.
        </li>
      </ul>
      <h3>16. Mostrar texto con palabras prohibidas ocultas</h3>
      <p>
        Mostrar el texto con las palabras prohibidas ocultas en la interfaz de
        usuario.
      </p>
      <p>
        <strong>Acceptance Criteria:</strong>
      </p>
      <ul>
        <li>
          Cuando el usuario introduce palabras prohibidas separadas por comas,
          se muestra el texto con las palabras prohibidas reemplazadas por
          asteriscos en la interfaz.
        </li>
      </ul>
      <h3>17. Convertir a camel case</h3>
      <p>
        Crear una función que reciba un texto y devuelva el mismo texto pero
        escrito en <em>camel case</em>.
      </p>
      <p>
        <strong>Acceptance Criteria:</strong>
      </p>
      <ul>
        <li>
          La función debe devolver una cadena vacía si el texto está vacío.
        </li>
        <li>
          La función debe devolver el texto en <em>camel case</em> si el texto
          contiene palabras.
        </li>
      </ul>
      <h3>18. Mostrar texto en camel case</h3>
      <p>
        Mostrar el texto en <em>camel case</em> en la interfaz de usuario.
      </p>
      <p>
        <strong>Acceptance Criteria:</strong>
      </p>
      <ul>
        <li>
          Cuando el usuario introduce un texto y hace clic en el botón de
          análisis, se debe mostrar el texto en <em>camel case</em> en la
          interfaz.
        </li>
      </ul>
    </>
  );
};

export default Project1Sprint1Backlog;
