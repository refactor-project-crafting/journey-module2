const Project2UiDesign: React.FC = () => {
  return (
    <>
      <h1>UI Design</h1>
      <p>La interfaz de usuario ya está diseñada, aquí tienes el Figma:</p>
      <ul>
        <li>
          <a
            href="https://www.figma.com/file/4CkATbxDnct8cESf3jEpFV/Music-Oasis---Mobile-design?type=design&node-id=0%3A1&mode=design&t=ex51eqAPDEL9tEYS-1"
            target="_blank"
          >
            Mobile
          </a>
        </li>
        <li>
          <a
            href="https://www.figma.com/file/J3G7dsTqWtjFguwqMRYEv5/Music-Oasis---Desktop-design?type=design&node-id=0%3A1&mode=design&t=13bqBO12DUU4wYyb-1"
            target="_blank"
          >
            Desktop
          </a>
        </li>
      </ul>
      <p>
        La interfaz de usuario está diseñada para ser responsive, por lo que
        deberás implementar tanto el diseño de mobile como el de desktop,
        siguiendo el enfoque{" "}
        <strong>
          <em>mobile first</em>
        </strong>
        . Por ahora no hay que tener en cuenta tablets.
      </p>
      <h2 id="mobile">Mobile</h2>
      <p>El diseño mobile debe coger todo el ancho del viewport.</p>
      <h2 id="desktop">Desktop</h2>
      <p>
        La cabecera debe coger todo el ancho del viewport, pero el resto del
        contenido debe estar en un bloque de ancho fijo, centrado.
      </p>
      <h2 id="dise-o-global">Diseño global</h2>
      <p>
        Aunque vayas a ir implementando cada componente por separado, es
        importante que previamente hagas un estudio del diseño global de la
        aplicación. Por ejemplo, el uso de colores, tipografías, tamaños de
        texto, espaciados, etc.
      </p>
    </>
  );
};

export default Project2UiDesign;
