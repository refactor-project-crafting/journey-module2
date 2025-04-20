const Project7Requirements: React.FC = () => {
  return (
    <>
      <h2 id="functional-requirements">Functional requirements</h2>
      <h3 id="front">Front</h3>
      <p>
        La aplicación no tendrá aún ningún sistema de autenticación, por lo que
        tendrá el acceso abierto.
      </p>
      <p>
        La aplicación debe tener tres páginas:
        <ul>
          <li>Listado de todos los posts</li>
          <li>Detalle de un post</li>
          <li>Añadir un post</li>
        </ul>
      </p>
      <h3 id="back">Back</h3>
      <p>La API REST debe ofrecer los siguientes endpoints:</p>
      <ul>
        <li>
          <code>GET /posts</code>: Devuelve un array con todos los posts.
        </li>
        <li>
          <code>GET /posts/:postId</code>: Devuelve un post.
        </li>
        <li>
          <code>POST /posts</code>: Añade un nuevo post.
        </li>
        <li>
          <code>DELETE /posts/:postId</code>: Elimina un post existente.
        </li>
      </ul>
      <h2 id="technical-requirements">Technical requirements</h2>
      <h3 id="front">Front</h3>
      <p>
        Se debe montar una SPA con React que se comunique con una API REST. Debe
        desplegarse en Netlify.
      </p>
      <h3 id="back">Back</h3>
      <p>
        La API REST debe ser desarrollada con Node.js y Express. Debe
        desplegarse en Render.
      </p>
      <p>
        Los datos estarán en una base de datos MongoDB alojada en Atlas. Para
        comunicarse con ella se utilizará un ODM.
      </p>
    </>
  );
};

export default Project7Requirements;
