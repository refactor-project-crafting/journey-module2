const Project8Requirements: React.FC = () => {
  return (
    <>
      <h2 id="functional-requirements">Functional requirements</h2>
      <h3 id="front">Front</h3>
      <p>
        La aplicación debe tener cuatro páginas:
        <ul>
          <li>Listado de todos los ítems</li>
          <li>Detalle de un ítem</li>
          <li>Añadir un ítem</li>
          <li>Modificar un ítem</li>
        </ul>
      </p>
      <p>
        La aplicación debe gestionar los casos de error y mostrar feedback al
        usuario de cuando hay un problema o de cuando una acción se ha
        completado con éxito. También debe mostrar feedback de cuando se está
        cargando información.
      </p>
      <h3 id="back">Back</h3>
      <p>La API REST debe ofrecer los siguientes endpoints:</p>
      <ul>
        <li>Obtener todos los ítems paginados.</li>
        <li>Obtiene un ítem por su id.</li>
        <li>Añade un nuevo ítem.</li>
        <li>Modifica un ítem existente.</li>
        <li>Modifica una propiedad de un ítem existente.</li>
        <li>Borra un ítem existente.</li>
      </ul>
      <h2 id="technical-requirements">Technical requirements</h2>
      <h3 id="front">Front</h3>
      <ul>
        <li>React</li>
        <li>Gestión del estado con Redux ToolKit</li>
        <li>Mobile only</li>
        <li>README con información sobre la app</li>
        <li>90% coverage</li>
        <li>0 bugs</li>
        <li>0 duplicaciones</li>
        <li>0 deuda técnica</li>
        <li>Lighthouse con métricas en verde explicadas</li>
        <li>Deploy en Netlify</li>
      </ul>
      <h3 id="back">Back</h3>
      <ul>
        <li>Express</li>
        <li>MongoDB</li>
        <li>
          README con información de uso y con endpoints (de cada endpoint
          método, url, body y response)
        </li>
        <li>90% coverage</li>
        <li>0 bugs</li>
        <li>0 duplicaciones</li>
        <li>0 deuda técnica</li>
        <li>
          Colección de endpoints de Postman exportada como JSON (en el root del
          proyecto)
        </li>
        <li>Deploy en Render</li>
      </ul>
      <h3>Diariamente</h3>
      <ul>
        <li>
          Entregar daily por escrito:
          <ul>
            <li>Qué tareas hice ayer</li>
            <li>Qué stoppers tuve</li>
            <li>Qué tareas haré hoy</li>
          </ul>
        </li>
        <li>
          Entregar informes de Sonar sobre la rama principal, front y back
        </li>
        <li>
          &gt;= 80% coverage durante la primera semana, 90% a partir de la
          segunda
        </li>
      </ul>
      <h3>Semanalmente</h3>
      <p>Se hará una review cada lunes para mostrar la iteración semanal.</p>
    </>
  );
};

export default Project8Requirements;
