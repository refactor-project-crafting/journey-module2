const Project1ProductBacklog: React.FC = () => {
  return (
    <>
      <h1>Product backlog</h1>
      <p>
        Tenemos planificados dos sprints para completar el proyecto. Crea dos
        tableros públicos en Trello, uno para cada sprint, con las siguientes
        listas:
      </p>
      <ol>
        <li>
          <strong>Sprint Backlog</strong>: contiene todas las tareas que deben
          realizarse en el sprint.
        </li>
        <li>
          <strong>In progress</strong>: contiene las tareas que se están
          realizando en ese momento.
        </li>
        <li>
          <strong>Done</strong>: contiene las tareas que ya han sido
          completadas.
        </li>
      </ol>
      <p>
        Cada tarea debe tener una descripción y unos criterios de aceptación
        claros.
      </p>
      <figure className="picture">
        <img
          src="/images/tarjeta-trello.png"
          alt="Tarjeta de Trello"
          width="500"
        />
        <figcaption>Tarjeta de Trello con la tarea 1</figcaption>
      </figure>
    </>
  );
};

export default Project1ProductBacklog;
