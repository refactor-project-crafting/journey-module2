const Project6Requirements: React.FC = () => {
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
          <li>Listado de todos los Pokémon de la Pokédex</li>
          <li>Detalle de un Pokémon</li>
          <li>Añadir un Pokémon a la Pokédex</li>
        </ul>
      </p>
      <h3 id="back">Back</h3>
      <p>
        La API REST debe ofrecer los siguientes endpoints, que funcionarán con
        información en formato <code>JSON</code>. Recuerda que todas las
        responses deben llevar los datos en la propiedad de un objeto.
      </p>
      <ul>
        <li>
          <code>GET /pokemon</code>: Devuelve un array con todos los pokémon de
          la Pokédex.
        </li>
        <li>
          <code>GET /pokemon/:pokemonId</code>: Devuelve un pokémon.
        </li>
        <li>
          <code>POST /pokemon</code>: Añade un nuevo pokémon.
        </li>
        <li>
          <code>DELETE /pokemon/:pokemonId</code>: Elimina un pokémon existente.
        </li>
        <li>
          <code>PATCH /pokemon/add-to-poke-ball/:pokemonId</code>: Añade un
          pokémon a la Poké Ball.
        </li>
        <li>
          <code>PATCH /pokemon/remove-from-poke-ball/:pokemonId</code>: Quita un
          pokémon de la Poké Ball.
        </li>
      </ul>
      <h2 id="technical-requirements">Technical requirements</h2>
      <p>
        Para este proyecto puedes usar el plural <strong>pokemons</strong> para
        identificadores. Aunque no sea correcto, es habitual usarlo en
        programación para poder explicitar los plurales.
      </p>
      <h3 id="front">Front</h3>
      <p>
        Se debe montar una SPA con React que se comunique con dos API REST. Debe
        desplegarse en Netlify.
      </p>
      <p>
        Este front debe consumir los datos de dos API REST:
        <ul>
          <li>
            La que desarrollamos nosotros: de aquí obtendrá toda la información
            principal y la URL de la imagen.
          </li>
          <li>
            La PokéAPI: de aquí obtendrá el tipo y las habilidades de cada
            pokémon.
          </li>
        </ul>
      </p>
      <h3 id="back">Back</h3>
      <p>
        La API REST debe ser desarrollada con Node.js y Express. Debe
        desplegarse en Render.
      </p>
      <p>Los datos estarán in memory.</p>
    </>
  );
};

export default Project6Requirements;
