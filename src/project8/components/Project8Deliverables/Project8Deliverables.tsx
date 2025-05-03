const Project8Deliverables: React.FC = () => {
  return (
    <>
      <h2 id="functional-requirements">Deliverables</h2>
      <h3 id="entrega-inicial">Entrega inicial</h3>
      <ul>
        <li>Nombre de la app</li>
        <li>URL del tablero Trello</li>
        <li>URL del Figma</li>
        <li>URL de los repos de GitHub con el primer commit</li>
        <li>URL Netlify y Render</li>
      </ul>
      <p>Notas:</p>
      <ul>
        <li>
          Trello: El panel tiene que ser público y llamarse
          NombreApellidoFinal-202502.{" "}
          <strong>Publica la URL del panel, no del workspace.</strong> Invitar a
          info@the-refactor-project.com.
        </li>
        <li>
          Figma: El archivo tiene que llamarse NombreApellidoFinal-202502.{" "}
          <strong>Publica la URL del archivo, no del team.</strong>
        </li>
        <li>
          Netlify / Render: el subdominio tiene que ser
          nombre-apellido-202502-front y nombre-apellido-202502-back
        </li>
        <li>Todas las tareas del Trello tienen que tener descripción.</li>
        <li>
          Los feedbacks de info/error deben mostrar visualmente la diferencia
          entre info y error.
        </li>
        <li>No diseñar diálogos de confirmación.</li>
        <li>
          Las cards deben mostrar suficientes datos, no sólo imagen + nombre.
        </li>
        <li>La página de detalles no debe ser sólo una card grande.</li>
        <li>
          El usuario tiene que poder navegar en todo momento por el site y debe
          saber en qué página se encuentra.
        </li>
        <li>
          Recuerda que para mobile, los iconos pulsables deben ser
          suficientemente grandes y/o tener la suficiente separación entre
          ellos.
        </li>
        <li>No olvides la accesibilidad.</li>
      </ul>
    </>
  );
};

export default Project8Deliverables;
