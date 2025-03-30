import CodeJson from "../../../components/CodeJson/CodeJson";

const Project5Requirements: React.FC = () => {
  return (
    <>
      <h2 id="functional-requirements">Functional requirements</h2>
      <h3 id="front">Front</h3>
      <p>
        La aplicación web debe tener dos páginas, una para visualizar la lista
        de monumentos y otra para añadir un nuevo monumento. Por ahora no vamos
        a implementar ninguna autenticación, por lo que cualquier visitante
        podrá acceder a estas páginas.
      </p>
      <h3 id="back">Back</h3>
      <p>
        La API REST debe ofrecer los siguientes endpoints, que funcionarán con
        información en formato <code>JSON</code>. Recuerda que todas las
        responses deben llevar los datos en la propiedad de un objeto.
      </p>
      <ul>
        <li>
          <code>GET /monuments</code>: Devuelve un array con todos los
          monumentos.
        </li>
        <li>
          <code>POST /monuments</code>: Añade un nuevo monumento. El body de la
          petición debe contener los datos del monumento a añadir.
        </li>
        <li>
          <code>DELETE /monuments/:monumentId</code>: Elimina un monumento
          existente.
        </li>
      </ul>
      <h2 id="technical-requirements">Technical requirements</h2>
      <h3 id="front">Front</h3>
      <p>
        La aplicación web, montada con Vite, debe comunicarse con una API REST
        para obtener y enviar datos. Debe desplegarse en Netlify.
      </p>
      <p>
        Toda la UI se debe generar mediante JavaScript dentro de un{" "}
        <code>div</code> vacío.
      </p>
      <h3 id="back">Back</h3>
      <p>
        La API REST debe ser desarrollada con Node.js y Express. Debe
        desplegarse en Render.
      </p>
      <p>
        Los datos estarán primero en memoria y luego se usará una base de datos
        MongoDB para almacenarlos.
      </p>
      <p>Un monumento tendrá la siguiente estructura:</p>
      <CodeJson>{`{
  "id": "2611c0ac-9529-4aff-b019-557753a73f85",
  "name": "Coliseo de Roma",
  "description": "El Coliseo de Roma es un anfiteatro de la época del Imperio romano, construido en el siglo I y ubicado en el centro de la ciudad de Roma.",
  "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/66/Colosseum_in_Rome,_Italy_-_April_2007.jpg",
  "country": "Italia",
  "city": "Roma"
}`}</CodeJson>
    </>
  );
};

export default Project5Requirements;
