const Project4Requirements: React.FC = () => {
  return (
    <>
      <h1>Requirements</h1>
      <h2 id="functional-requirements">Functional requirements</h2>
      <p>
        Esta aplicación debe listar un conjunto de personajes de Game of
        Thrones. Primero trabajaremos la capa de datos, donde vamos a modelar
        los personajes y sus acciones. Luego, trabajaremos la capa de
        presentación, donde vamos a mostrar los personajes y el usuario podrá
        interactuar con el listado.
      </p>
      <h3 id="personajes">Personajes</h3>
      <p>Un personaje de Game of Thrones tiene la siguiente información:</p>
      <ul>
        <li>Nombre</li>
        <li>Apellido</li>
        <li>Edad</li>
        <li>
          Estado (vivo o muerto) - inicialmente todos los personajes estarán
          vivos
        </li>
      </ul>
      <p>Cada personaje realiza las siguientes acciones:</p>
      <ul>
        <li>Morir: cambia su estado a muerto</li>
        <li>
          Hablar: devuelve un mensaje (cada tipo de personaje dice una frase
          distinta)
        </li>
      </ul>
      <h4 id="rey">Rey</h4>
      <p>
        Un rey, además de la información que tiene por ser personaje, tiene la
        siguiente información:
      </p>
      <ul>
        <li>Años de reinado</li>
      </ul>
      <p>
        Un rey dice la siguiente frase al hablar: &quot;Vais a morir
        todos&quot;.
      </p>
      <h4 id="luchador">Luchador</h4>
      <p>
        Un luchador, además de la información que tiene por ser personaje, tiene
        la siguiente información:
      </p>
      <ul>
        <li>Arma</li>
        <li>Destreza (un número entero entre 0 y 10)</li>
      </ul>
      <p>
        Un luchador dice la siguiente frase al hablar: &quot;Primero pego y
        luego pregunto&quot;.
      </p>
      <h4 id="asesor">Asesor</h4>
      <p>
        Un asesor, además de la información que tiene por ser personaje, tiene
        la siguiente información:
      </p>
      <ul>
        <li>
          Personaje al que asesora (puede ser de cualquiera de los tipos de
          personajes)
        </li>
      </ul>
      <p>
        Un asesor dice la siguiente frase al hablar: &quot;No sé por qué, pero
        creo que voy a morir pronto&quot;.
      </p>
      <h4 id="escudero">Escudero</h4>
      <p>
        Un escudero, además de la información que tiene por ser personaje, tiene
        la siguiente información:
      </p>
      <ul>
        <li>Personaje al que sirve (que sólo puede ser luchador)</li>
        <li>Grado de pelotismo (un número entero entre 0 y 10)</li>
      </ul>
      <p>
        Un escudero dice la siguiente frase al hablar: &quot;Soy un loser&quot;.
      </p>
      <h3 id="ui">UI</h3>
      <p>
        El body del documento HTML debe tener únicamente un div con clase{" "}
        <code>root</code>. El resto de la UI se generará dinámicamente con
        JavaScript.
      </p>
      <h3 id="definition-of-done">Definition of Done</h3>
      <p>
        Para poder pasar una tarea a <em>Done</em>, se deben cumplir los
        siguientes criterios:
      </p>
      <ul>
        <li>La tarea está implementada</li>
        <li>La tarea cumple todos sus acceptance criteria</li>
        <li>La tarea está testeada</li>
        <li>La tarea y sus tests están integrados en la aplicación</li>
        <li>Todos los tests pasan</li>
        <li>La tarea ha sido revisada en una PR</li>
      </ul>
    </>
  );
};

export default Project4Requirements;
