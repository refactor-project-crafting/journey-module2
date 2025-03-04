import CodeTs from "../../../components/CodeTs/CodeTs";

const Project1Troubleshooting: React.FC = () => {
  return (
    <>
      <h1>Troubleshooting</h1>
      <p>
        Como estás exportando las funciones que creas, para luego usarlas en
        otros archivos deben ser importadas.
      </p>
      <p>
        Cuando en un archivo escribes una función que está escrita en otro
        archivo, pero exportada, Intellisense te permitirá importarla
        automáticamente. Pero la línea <code>import</code> que se añade al
        principio del archivo no siempre es correcta.
      </p>
      <p>
        Puedes acabar en alguna de estas situaciones de error (y TS no
        compilará):
      </p>
      <ul>
        <li>
          Que se esté importando una carpeta en lugar de un archivo: añade el
          nombre del archivo <code>index.js</code> al final de la ruta.
        </li>
      </ul>
      <CodeTs>{`import { myFunction } from "./functions"; // Error
import { myFunction } from "./functions/index.js"; // Correcto`}</CodeTs>
      <ul>
        <li>
          Que el archivo importado no tenga extensión <code>.js</code>:
          añádesela manualmente.
        </li>
      </ul>
      <CodeTs>{`import { myFunction } from "./myFunction"; // Error
import { myFunction } from "./myFunction.js"; // Correcto;`}</CodeTs>
    </>
  );
};

export default Project1Troubleshooting;
