import React from "react";

const Categories = ({ category }) => {
  const categoryContent = {
    Paisajes: "Aquí encontrarás los paisajes más hermosos.",
    Medicina: "Artículos y contenido sobre medicina.",
    Ocio: "Disfruta de contenido de entretenimiento.",
    Varios: "Una mezcla de contenido interesante.",
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>{category}</h2>
      <p>{categoryContent[category]}</p>
    </div>
  );
};

export default Categories;
