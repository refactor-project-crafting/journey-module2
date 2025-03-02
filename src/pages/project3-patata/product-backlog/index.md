# Product Backlog

Aquí tienes el backlog de producto. Si necesitas crear tareas auxiliares, hazlo, pero recuerda que deben ser pequeñas y concretas.

## Tareas

### MS-0: Crear layout general

Crear el layout general de la aplicación.

#### Acceptance criteria

- El layout tiene un header con el nombre de la app como mínimo.

### MS-1: Crear el tablero de juego

Crear, en TypeScript (nada de UI), un tablero de juego. Para ello deberás crear un tipo que represente una casilla del tablero y otro tipo que represente el tablero entero.

El tablero debe tener tantas filas como columnas.

Cada casilla del tablero debe tener un valor que indique si contiene una mina o no, y otro que indique cuántas minas hay a su alrededor (ponlo por ahora en 0 en todas). Rellena el tablero con minas aleatorias.

#### Acceptance criteria

- El tablero tiene el mismo número de filas que de columnas.
- Cada casilla del tablero tiene un valor que indica si contiene una mina o no.
- Cada casilla del tablero tiene un valor que indica cuántas minas hay a su alrededor, y todas son 0.

### MS-2: Calcular las minas adyacentes

Cada casilla del tablero debe calcular cuántas minas hay a su alrededor y almacenar dicha cantidad.

#### Acceptance criteria

- Cada casilla del tablero tiene un valor que indica cuántas minas hay a su alrededor.

### MS-3: Mostrar el tablero

Mostrar el tablero en la UI, con las casillas ocultas. Cada casilla debe tener dentro o el número de minas adyacentes o una mina, pero este contenido no debe verse.

#### Acceptance criteria

- Se muestra un tablero cuadrado.
- Cada casilla del tablero está oculta.

### MS-4: Revelar una casilla

Cuando el usuario haga clic en una casilla, se debe revelar su contenido.

#### Acceptance criteria

- Al hacer clic en una casilla que no tiene una bomba, se muestra el número de minas adyacentes.
- Al hacer clic en una casilla que tiene una bomba, se muestra una bomba.

### MS-5: Encontrarse una bomba

Cuando el usuario haga clic en una casilla que contiene una bomba, se debe mostrar un mensaje de que ha perdido y no se le debe permitir seguir jugando.

#### Acceptance criteria

- Al hacer clic en una casilla que contiene una bomba, aparece un mensaje diciendo que ha perdido la partida.
- Después de perder, al hacer clic en una casilla no ocurre nada.

### MS-6: Ganar la partida

Cuando el usuario haya clicado en todas las casillas que no contienen una bomba, se debe mostrar un mensaje de que ha ganado y no se le debe permitir seguir jugando.

#### Acceptance criteria

- Al hacer clic en la última casilla que no contiene una bomba, aparece un mensaje diciendo que ha ganado la partida.
- Después de ganar, al hacer clic en una casilla no ocurre nada.
