import CodeTs from "../../../components/CodeTs/CodeTs";

const Project2ProductBacklog: React.FC = () => {
  return (
    <>
      <h1>Product Backlog</h1>
      <p>
        Aquí tienes el backlog de producto. Si necesitas crear tareas
        auxiliares, hazlo, pero recuerda que deben ser pequeñas y concretas.
      </p>
      <p>
        Por ejemplo, antes de ponerte con la primera tarea de la lista, podrías
        crear tareas iniciales para crear los archivos iniciales del proyecto.
      </p>
      <p>
        Recuerda crear un módulo <code>ui</code> para incluir las funciones de
        UI que te vamos a dar aquí.
      </p>
      <h2>Tareas</h2>
      <h3>MO0. Crear capa de datos</h3>
      <p>
        Crea un módulo para los discos, que tenga un archivo{" "}
        <code>types.ts</code> con el tipado de los discos, y un archivo{" "}
        <code>data.ts</code> con un array de discos.
      </p>
      <p>Cada disco tiene:</p>
      <ul>
        <li>Una id numérica.</li>
        <li>Un nombre.</li>
        <li>Un nombre de artista o banda.</li>
        <li>Una URL con la imagen de la portada.</li>
        <li>Un tipo (vinilo o digital).</li>
        <li>Un precio.</li>
        <li>Un precio original, si tiene descuento.</li>
        <li>Si es el disco del mes o no.</li>
      </ul>
      <h3>MO1. Maquetación responsive de la cabecera</h3>
      <p>
        Se debe maquetar la cabecera de la aplicación en su primera versión. La
        cabecera en esta tarea no debe tener ni la búsqueda ni el carrito de
        compra.
      </p>
      <h3>MO2. Maquetación del título de la página</h3>
      <p>
        Se debe crear el título de la página actual <strong>Records</strong>.
      </p>
      <h3>MO3. Maquetación de la portada de un disco</h3>
      <p>
        Maquetar una card de disco con la portada de un disco. No hay que
        mostrar aún el resto de la información de la card.
      </p>
      <h3>MO4. Maquetación del nombre del disco</h3>
      <p>Maquetar el nombre del disco y artista/banda en la card de disco.</p>
      <h3>MO5. Maquetación del tipo de disco</h3>
      <p>
        Maquetar el tipo de disco (vinilo o digital) en la card de disco.
        También el aviso de si tiene descuento o no.
      </p>
      <h3>MO6. Maquetación del precio del disco</h3>
      <p>
        Maquetar en la card del disco el precio y los iconos de favorito y
        carrito.
      </p>
      <h3>MO7. Funciones para crear las cards</h3>
      <p>
        En el módulo <code>ui</code> crea una función que se llame
        <code>renderRecordCard</code> y que tenga esta firma:
      </p>
      <CodeTs>{`(record: Record, recordCard: HTMLElement): void`}</CodeTs>
      <p>
        Esta función va a recibir un disco y un elemento HTML que será una copia
        de la card que has maquetado. Por ahora déjala vacía.
      </p>
      <p>
        Añade al módulo <code>ui</code> esta función e invócala en el archivo
        principal:
      </p>
      <CodeTs>{`const renderRecordsList = (records: Record[]): void => {
  const recordsList = document.querySelector(".records")!;
  const dummyRecord = recordsList.querySelector(".record")!;
  recordsList.innerHTML = "";

  records.forEach((record) => {
    const newRecordCard = dummyRecord.cloneNode(true) as HTMLElement;
    renderRecordCard(record, newRecordCard);
    recordsList.appendChild(newRecordCard);
  });
};`}</CodeTs>
      <p>
        Ahora se deberían ver tantas cards como discos haya en el array de
        datos. Todas deberían ser una copia de la card que habías maquetado
        previamente.
      </p>
      <h3>MO8. Renderizar la portada de un disco</h3>
      <p>
        En la función <code>renderRecordCard</code> que has creado en el paso
        anterior, añade el código necesario para que se muestre la portada del
        disco.
      </p>
      <p>
        Para acceder al elemento <code>&lt;img&gt;</code> de la card, puedes
        hacerlo así:
      </p>
      <CodeTs>{`const recordCover = recordCard.querySelector(
  ".clase-de-tu-portada",
) as HTMLImageElement;`}</CodeTs>
      <p>
        Y para acceder a su <code>src</code>, puedes hacerlo así:
      </p>
      <CodeTs>recordCover.src = "URL de la portada del disco";</CodeTs>
      <h3>MO9. Renderizar el nombre del disco y artista/banda</h3>
      <p>
        En la función <code>renderRecordCard</code>, añade el código necesario
        para que se muestre el nombre del disco y el nombre del artista/banda.
      </p>
      <p>
        Para acceder a un elemento a partir de su clase, puedes hacerlo así:
      </p>
      <CodeTs>const element = parentElement.querySelector(".clase")!;</CodeTs>
      <p>Y para cambiar su contenido, puedes hacerlo así:</p>
      <CodeTs>element.textContent = "Texto que quieres mostrar";</CodeTs>
      <h3>M10. Renderizar el precio del disco</h3>
      <p>
        Haz que la card que habías maquetado en el HTML muestre siempre precio
        normal y precio de descuento.
      </p>
      <p>
        En la función <code>renderRecordCard</code>, añade el código necesario
        para que se muestre el precio del disco. Si no tiene descuento, no debe
        mostrarse el precio de descuento.
      </p>
      <p>Para eliminar un elemento HTML, puedes hacerlo así:</p>
      <CodeTs>element.remove();</CodeTs>
      <h3>MO11. Renderizar si el disco tiene descuento</h3>
      <p>
        Haz que la card que habías maquetado en el HTML muestre siempre el
        cartel de descuento.
      </p>
      <p>
        En la función <code>renderRecordCard</code>, añade el código necesario
        para que el cartel se oculte si el disco no tiene descuento.
      </p>
      <h3>MO12. Renderizar el tipo de disco</h3>
      <p>
        Haz que la card que habías maquetado en el HTML muestre ambos tipos de
        disco.
      </p>
      <p>
        En la función <code>renderRecordCard</code>, añade el código necesario
        para que se oculte uno de los dos tipos de disco.
      </p>
      <h3>MO13. Maquetación de los filtros</h3>
      <p>
        <img
          src="/images/figma/filtros.png"
          alt="Filtros del listado de discos"
        />
      </p>
      <p>
        Se debe maquetar la barra superior de filtrado por tipo de disco. Se
        debe crear una clase que marque el filtro activo.
      </p>
      <p>Por ahora no hay que implementar la funcionalidad de filtrado.</p>
      <h3>MO14. Maquetar la búsqueda y el carrito</h3>
      <p>
        Completar la maquetación de la cabecera añadiendo los iconos de búsqueda
        y carrito.
      </p>
      <h3>MO15. Funcionalidad de filtrado</h3>
      <p>
        En el módulo <code>ui</code>, crea una función que filtre los discos por
        tipo (vinilo, digital o todos) al hacer clic en los filtros.
      </p>
      <p>
        Utilízala para que el usuario pueda filtrar la lista de discos por tipo.
      </p>
      <h3>MO16. Maquetar el bloque de disco del mes</h3>
      <p>
        Se debe maquetar la sidebar con el bloque que muestra el disco del mes.
        Sólo debe aparecer en desktop.
      </p>
      <h3>MO17. Funcionalidad del disco del mes</h3>
      <p>
        En el módulo <code>ui</code>, crea una función para renderizar el disco
        del mes. Utilízala para mostrar en la UI el disco del mes.
      </p>
      <h3>MO18. Maquetar el bloque de más vendidos</h3>
      <p>
        Se debe maquetar el bloque de la sidebar que muestra los discos más
        vendidos. Sólo debe aparecer en desktop.
      </p>
      <h3>MO19. Maquetar el bloque de géneros</h3>
      <p>
        Se debe maquetar el bloque de la sidebar que muestra los géneros de
        música. Sólo debe aparecer en desktop.
      </p>
      <h3>MO20. Maquetar el footer</h3>
      <p>Se debe maquetar el footer de la aplicación.</p>
    </>
  );
};

export default Project2ProductBacklog;
