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
  },
  title: {
    color: "#fff",
    marginBottom: "10px",
  },
  row: {
    display: "flex",
    gap: "10px",
    overflowX: "scroll",
  },
  image: {
    width: "200px",
    height: "300px",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "transform 0.3s",
  },
};

export default MovieRow;
