# Módulo 2: Inmersión práctica en Desarrollo Web Full Stack

## Proyecto 1: Text Analyzer

![Un rotulador sobre un libro abierto](/images/libro.webp)

Ahora que formas parte del equipo Crafters, te han asignado tu primer proyecto. Se trata de una aplicación web que analiza el texto que el usuario introduzca y devuelve información sobre el mismo.

El proyecto tiene la UI empezada, pero le faltan funcionalidades. Tu misión es completar la aplicación para que cumpla con los requisitos del cliente. También tendrás que aplicar algunos cambios visuales a la UI.

### Repo

El código del proyecto se encuentra en el siguiente repositorio de GitHub: <a href="https://github.com/refactor-project-crafting/w1-text-analyzer.git" target="_blank" rel="noopener">w1-text-analyzer</a>.

### Estructura del proyecto

En `src` encontrarás dos módulos:

- `Storage`: contiene el código para guardar y recuperar datos del Local Storage.
- `ui`: contiene todo el código para gestionar la interfaz de usuario.

Cuando empieces la primera tarea, crea una carpeta para un tercer módulo `analytics` y dentro de ella crea un archivo `index.ts` para empezar a trabajar. Todas las funciones de análisis de texto que crees deben ir en este archivo.

Recuerda que la declaración de cada función **debe ir precedida de `export`**, para que puedan ser usadas en otros archivos.

```ts
export const sum = (numberA: number, numberB: number): number => {
  return numberA + numberB;
};
```

En el archivo `src/ui/analysis.ts` encontrarás una función `analyzeText` que será la encargada de ir realizando todo el análisis y mostrar los resultados en la interfaz. Es la que se invoca cuando el usuario pulsa el botón de analizar texto.

En este archivo también encontrarás las funciones que muestran los datos en la interfaz.

En el código tienes comentarios aclaratorios que te ayudarán a entender dónde tienes que añadir tu código.
