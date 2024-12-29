import React from "react";

const MovieRow = () => {
  const movies = [
    {
      title: "Película 1",
      image: "https://i.ibb.co/q1fvzns/Peli1.png",
    },
    {
      title: "Película 2",
      image: "https://i.ibb.co/Fz6rPQj/peli2.png",
    },
    {
      title: "Película 3",
      image: "https://i.ibb.co/BCHysq3/Peli3.png",
    },
    {
      title: "Película 4",
      image: "https://i.ibb.co/0YpxQr0/peli4.png",
    },
    {
      title: "Película 5",
      image: "https://i.ibb.co/sVPPr8J/peli5.png",
    },
    {
      title: "Película 6",
      image: "https://i.ibb.co/Sy127Mp/peli6.png",
    },
    {
      title: "Película 7",
      image: "https://i.ibb.co/wsTbWbq/peli7.png",
    },
    {
      title: "Película 8",
      image: "https://i.ibb.co/qBRfVng/peli8.png",
    },
    {
      title: "Película 9",
      image: "https://i.ibb.co/Z8dNdmT/peli9.png",
    },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Explora nuestras recomendaciones</h2>
      <div style={styles.row}>
        {movies.map((movie) => (
          <img
            key={movie.title}
            src={movie.image}
            alt={movie.title}
            style={styles.image}
            className="movie-image"
          />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    background: "#141414",
    position: "relative",
    overflowY: "auto", // Permite desplazar verticalmente
    maxHeight: "90vh", // Limita la altura máxima del contenedor
  },
  title: {
    color: "#fff",
    marginBottom: "10px",
    fontSize: "2rem", // Aumenta el tamaño de la fuente
    textAlign: "center", // Centra el título
    textTransform: "uppercase", // Hace que el texto esté en mayúsculas
  },
  row: {
    display: "flex",
    gap: "13px", // Aumenta la distancia entre los elementos
    overflowX: "hidden", // Oculta la barra de desplazamiento horizontal
    paddingBottom: "20px",
  },
  image: {
    width: "200px",
    height: "300px",
    borderRadius: "10px", // Hace las esquinas más redondeadas
    cursor: "pointer",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
};

// Animaciones globales específicas para los elementos .movie-image
const globalStyles = `
  .movie-image:hover {
    transform: scale(1.1); /* Crece un 10% */
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5); /* Sombra al pasar el cursor */
  }

  /* Estilo personalizado para la barra de desplazamiento vertical */
  ::-webkit-scrollbar {
    width: 10px;
    background: #141414; /* Color de la barra de desplazamiento */
  }
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

document.head.insertAdjacentHTML(
  "beforeend",
  `<style>${globalStyles}</style>` // Inserta las animaciones globales específicas
);

export default MovieRow;
