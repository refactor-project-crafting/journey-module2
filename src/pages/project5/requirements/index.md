# Requirements

## Functional requirements

### Front

La aplicación web debe tener dos páginas, una para visualizar la lista de monumentos y otra para añadir un nuevo monumento. Por ahora no vamos a implementar ninguna autenticación, por lo que cualquier visitante podrá acceder a estas páginas.

### Back

La API REST debe ofrecer los siguientes endpoints, que funcionarán con información en formato `JSON`. Recuerda que todas las responses deben llevar los datos en la propiedad de un objeto.

- `GET /monuments`: Devuelve un array con todos los monumentos.
- `POST /monuments`: Añade un nuevo monumento. El body de la petición debe contener los datos del monumento a añadir.
- `DELETE /monuments/:monumentId`: Elimina un monumento existente.

## Technical requirements

### Front

La aplicación web, montada con Vite, debe comunicarse con una API REST para obtener y enviar datos. Debe desplegarse en Netlify.

Toda la UI se debe generar mediante JavaScript dentro de un `div` vacío.

### Back

La API REST debe ser desarrollada con Node.js y Express. Debe desplegarse en Render.

Los datos estarán primero en memoria y luego se usará una base de datos MongoDB para almacenarlos.

Un monumento tendrá la siguiente estructura:

```json
{
  "id": "2611c0ac-9529-4aff-b019-557753a73f85",
  "name": "Coliseo de Roma",
  "description": "El Coliseo de Roma es un anfiteatro de la época del Imperio romano, construido en el siglo I y ubicado en el centro de la ciudad de Roma.",
  "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/66/Colosseum_in_Rome,_Italy_-_April_2007.jpg",
  "country": "Italia",
  "city": "Roma"
}
```
