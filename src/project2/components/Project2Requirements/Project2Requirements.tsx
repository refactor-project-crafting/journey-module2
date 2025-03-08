const Project2Requirements: React.FC = () => {
  return (
    <>
      <h1>Requirements</h1>
      <h2>Functional requirements</h2>
      <p>
        Los requisitos funcionales del proyecto están descritos en las User
        Stories.
      </p>
      <p>La aplicación debe tener las siguientes páginas:</p>
      <ul>
        <li>
          <strong>Listado de discos</strong>: muestra todos los discos que se
          venden en la tienda.
        </li>
        <li>
          <strong>Carrito de la compra</strong>: muestra los discos que se han
          añadido al carrito.
        </li>
      </ul>
      <h2 id="out-of-scope">Out of scope</h2>
      <p>Las siguientes features no forman parte de esta fase del proyecto:</p>
      <ul>
        <li>Autenticación de usuarios.</li>
        <li>Proceso de checkout.</li>
        <li>Vista de detalle de un disco.</li>
      </ul>
      <h2 id="git-requirements">Git requirements</h2>
      <p>
        Está prohibido hacer commits en la rama <code>main</code>. Todos los
        commits deben ser realizados en una rama auxiliar y luego hacer una{" "}
        <em>pull request</em> a <code>main</code>.
      </p>
      <p>
        Debéis configurar vuestro repositorio con una protección de rama que no
        permita hacer <em>push</em> directamente a <code>main</code>, y que no
        permita mergear si no hay como mínimo <strong>1 approval</strong> en la
        PR.
      </p>
      <p>
        Es obligatorio usar hooks de Husky para las siguientes comprobaciones:
      </p>
      <ul>
        <li>El mensaje del commit debe tener entre 10 y 72 caracteres.</li>
        <li>El mensaje del commit debe comenzar con una letra mayúscula.</li>
        <li>
          No se puede commitear directamente en la rama <code>main</code>.
        </li>
        <li>El código debe estar formateado.</li>
        <li>El código no debe tener errores de ESLint.</li>
        <li>
          La rama debe empezar por <code>feature/</code>, <code>refactor/</code>{" "}
          o <code>bugfix/</code>.
        </li>
      </ul>
      <h2 id="deploy-requirements">Deploy requirements</h2>
      <p>El proyecto debe ser desplegado en Netlify.</p>
      <h2 id="tests">Tests</h2>
      <p>Todas las funciones deben estar testeadas.</p>
    </>
  );
};

export default Project2Requirements;
