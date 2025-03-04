const Project1Requirements: React.FC = () => {
  return (
    <>
      <h1>Requirements</h1>
      <h2>Functional requirements</h2>
      <p>
        El usuario debe poder introducir un texto en un campo de texto y, al
        hacer clic en un botón, ver los resultados de un análisis sobre el texto
        introducido. Los resultados deben incluir:
      </p>
      <ul>
        <li>Número de párrafos.</li>
        <li>Número de palabras.</li>
        <li>Número de caracteres.</li>
        <li>Número de palabras cortas (menos de 5 caracteres).</li>
        <li>Listado de palabras cortas.</li>
        <li>Palíndromos en el texto.</li>
        <li>
          Frecuencia de aparición de hasta tres palabras escogidas por el
          usuario.
        </li>
        <li>El mismo texto pero con cada palabra escrita al revés.</li>
        <li>El mismo texto pero escrito todo al revés.</li>
        <li>
          El mismo texto pero con palabras prohibidas reemplazadas por
          asteriscos.
        </li>
        <li>
          El mismo texto pero escrito en <em>camel case</em>.
        </li>
        <li>
          El mismo texto pero escrito en <em>kebab case</em>.
        </li>
        <li>
          El mismo texto pero escrito en <em>snake case</em>.
        </li>
      </ul>
      <h2>Deploy requirements</h2>
      <p>El proyecto debe ser desplegado en Netlify.</p>
      <h2>Tests</h2>
      <p>Todas las funciones deben tener como mínimo un test.</p>
    </>
  );
};

export default Project1Requirements;
