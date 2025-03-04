import CodeTs from "../../../components/CodeTs/CodeTs";

const Project1Intro: React.FC = () => {
  return (
    <>
      <h1>
        Módulo 2: Inmersión práctica en Desarrollo Web Full Stack (Journey)
      </h1>
      <h2>Proyecto 1: Text Analyzer</h2>
      <img src="/images/libro.webp" alt="Un rotulador sobre un libro abierto" />
      <p>
        Ahora que formas parte del equipo Crafters, te han asignado tu primer
        proyecto. Se trata de una aplicación web que analiza el texto que el
        usuario introduzca y devuelve información sobre el mismo.
      </p>
      <p>
        El proyecto tiene la UI empezada, pero le faltan funcionalidades. Tu
        misión es completar la aplicación para que cumpla con los requisitos del
        cliente. También tendrás que aplicar algunos cambios visuales a la UI.
      </p>
      <h3>Repo</h3>
      <p>
        El código del proyecto se encuentra en el siguiente repositorio de
        GitHub:{" "}
        <a
          href="https://github.com/refactor-project-crafting/w1-text-analyzer.git"
          target="_blank"
          rel="noopener"
        >
          w1-text-analyzer
        </a>
        .
      </p>
      <h3>Estructura del proyecto</h3>
      <p>
        En <code>src</code> encontrarás dos módulos:
      </p>
      <ul>
        <li>
          <code>Storage</code>: contiene el código para guardar y recuperar
          datos del Local Storage.
        </li>
        <li>
          <code>ui</code>: contiene todo el código para gestionar la interfaz de
          usuario.
        </li>
      </ul>
      <p>
        Cuando empieces la primera tarea, crea una carpeta para un tercer módulo{" "}
        <code>analysis</code> y dentro de ella crea un archivo{" "}
        <code>index.ts</code> para empezar a trabajar. Todas las funciones de
        análisis de texto que crees deben ir en este archivo.
      </p>
      <p>
        Recuerda que la declaración de cada función{" "}
        <strong>
          debe ir precedida de <code>export</code>
        </strong>
        , para que puedan ser usadas en otros archivos.
      </p>
      <CodeTs>{`export const sum = (numberA: number, numberB: number): number => {
  return numberA + numberB;
};`}</CodeTs>
      <p>
        En el archivo <code>src/ui/analysis.ts</code> encontrarás una función{" "}
        <code>analyzeText</code> que será la encargada de ir realizando todo el
        análisis y mostrar los resultados en la interfaz. Es la que se invoca
        cuando el usuario pulsa el botón de analizar texto.
      </p>
      <p>
        En este archivo también encontrarás las funciones que muestran los datos
        en la interfaz.
      </p>
      <p>
        En el código tienes comentarios aclaratorios que te ayudarán a entender
        dónde tienes que añadir tu código.
      </p>
    </>
  );
};

export default Project1Intro;
