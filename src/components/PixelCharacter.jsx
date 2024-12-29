import React from "react";

const PixelArtSection = () => {
  return (
    <div style={styles.container}>
      <div style={styles.textContainer} className="pixel-character">
        <h2>Un mensaje especial para ti</h2>
        <p>
          Espero que la hayas pasado muy bien en Navidad, que Santa se haya
          portado bien y que el próximo año esté lleno de cosas lindas,
          objetivos cumplidos y éxitos.
        </p>
        <p>
          Esta página es mucho más que un simple enlace; vas a encontrar
          secciones con cosas que te gustan o pueden gustarte. No puedo darte
          solo una cosa porque, si fuera posible, te daría el mundo, pero por el
          momento, aquí tienes esta web hecha con mucho cariño.
        </p>
        <p>
          Feliz Navidad y espero que sea la tercera de muchas más que vienen por
          delante.
        </p>
        <p>Con amor, Lu ❤️.</p>
      </div>
      <div style={styles.pixelArt}>
        <img
          src="https://i.ibb.co/tqdW7r4/file.png"
          alt="Pixel Art"
          style={styles.image}
          className="pixel-art"
        />
      </div>
      <div style={styles.textContainerRight} className="pixel-character">
        <p>
          Não preciso te dizer o carinho que tenho por você nem mencionar o que
          te digo todos os dias. Que a vida sempre te encontre com coisas lindas
          e que você alcance todos os seus objetivos. Não só foi Natal, mas
          também está prestes a ser Ano Novo e estou feliz porque você continua
          na minha vida mais uma vez.
        </p>
        <p> Com amor, Lu ❤️.</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: "200px",
    padding: "20px",
    paddingLeft: "60px",
    background: "#202020",
    color: "#fff",
  },
  textContainer: {
    maxWidth: "600px",
    textAlign: "left",
  },
  pixelArt: {
    animation: "bounce 2s infinite",
  },
  image: {
    width: "300px",
    height: "300px",
  },
  textContainerRight: {
    maxWidth: "400px",
    textAlign: "left",
    marginLeft: "20px",
  },
};

export default PixelArtSection;
