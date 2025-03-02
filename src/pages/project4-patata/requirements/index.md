# Requirements

## Functional requirements

Esta aplicación debe listar un conjunto de personajes de Game of Thrones. Primero trabajaremos la capa de datos, donde vamos a modelar los personajes y sus acciones. Luego, trabajaremos la capa de presentación, donde vamos a mostrar los personajes y el usuario podrá interactuar con el listado.

### Personajes

Un personaje de Game of Thrones tiene la siguiente información:

- Nombre
- Apellido
- Edad
- Estado (vivo o muerto) - inicialmente todos los personajes estarán vivos

Cada personaje realiza las siguientes acciones:

- Morir: cambia su estado a muerto
- Hablar: devuelve un mensaje (cada tipo de personaje dice una frase distinta)

Cada personaje puede ser o un **rey**, o un **luchador**, o un **asesor** o un **escudero**.

#### Rey

Un rey, además de la información que tiene por ser personaje, tiene la siguiente información:

- Años de reinado

Un rey dice la siguiente frase al hablar: "Vais a morir todos".

#### Luchador

Un luchador, además de la información que tiene por ser personaje, tiene la siguiente información:

- Arma
- Destreza (un número entero entre 0 y 10)

Un luchador dice la siguiente frase al hablar: "Primero pego y luego pregunto".

#### Asesor

Un asesor, además de la información que tiene por ser personaje, tiene la siguiente información:

- Personaje al que asesora (puede ser de cualquiera de los tipos de personajes)

Un asesor dice la siguiente frase al hablar: "No sé por qué, pero creo que voy a morir pronto".

#### Escudero

Un escudero, además de la información que tiene por ser personaje, tiene la siguiente información:

- Personaje al que sirve (que sólo puede ser luchador)
- Grado de pelotismo (un número entero entre 0 y 10)

Un escudero dice la siguiente frase al hablar: "Soy un loser".

### UI

El body del documento HTML debe tener únicamente un div con clase `root`. El resto de la UI se generará dinámicamente con JavaScript.

### Definition of Done

Para poder pasar una tarea a _Done_, se deben cumplir los siguientes criterios:

- La tarea está implementada
- La tarea cumple todos sus acceptance criteria
- La tarea está testeada
- La tarea y sus tests están integrados en la aplicación
- Todos los tests pasan
- La tarea ha sido revisada en una PR
