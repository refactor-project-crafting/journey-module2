import CodeTs from "../../../components/CodeTs/CodeTs";

const Project1Tests: React.FC = () => {
  return (
    <>
      <h1>Tests</h1>
      <p>
        Crea una carpeta llamada <code>__tests__</code> dentro de la carpeta{" "}
        <code>src/analysis</code> y escribe los tests necesarios para las
        funciones que has creado. Cada vez que crees una función nueva, crea un
        archivo en esta carpeta que se llame igual que la función, y añade
        dentro el test correspondiente.
      </p>
      <p>
        Cada test debe comprobar que la función hace lo que se espera de ella.
        Por ejemplo, si tenemos una función que suma dos números, el test sería
        así:
      </p>
      <CodeTs>{`const total = sum(3, 6);

if (total === 9) {
  console.log("Test passed");
} else {
  console.log("Test failed");
}`}</CodeTs>
      <p>
        <strong>IMPORTANTE</strong>: No se puede pasar una tarea a la columna{" "}
        <code>Done</code> si no tiene un test que la valide.
      </p>
    </>
  );
};

export default Project1Tests;
