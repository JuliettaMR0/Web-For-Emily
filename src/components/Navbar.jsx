import React, { useState } from "react";

const Navbar = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCategoryClick = (category) => {
    onNavigate(category); // Cambia la sección activa.
    setIsMenuOpen(false); // Cierra el menú.
  };

  return (
    <nav style={styles.navbar}>
      <h1 style={styles.logo}>Emiflix</h1>
      <ul style={styles.navLinks}>
        <li style={styles.navItem} onClick={() => onNavigate("Inicio")}>
          Inicio
        </li>
        <li
          style={styles.navItem}
          onMouseEnter={() => setIsMenuOpen(true)}
          onMouseLeave={() => setIsMenuOpen(false)}
        >
          Categorías
          {isMenuOpen && (
            <ul style={styles.dropdown}>
              {["Paisajes", "Medicina", "Ocio", "Varios"].map((category) => (
                <li
                  key={category}
                  style={styles.dropdownItem}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </li>
              ))}
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    background: "#619b3a",
    color: "#fff",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  logo: {
    fontSize: "2rem", // Tamaño del texto
    fontWeight: "bold",
    cursor: "pointer",
    padding: "10px 20px", // Espaciado interno para el recuadro
    border: "3px solid #fff", // Borde blanco
    borderRadius: "10px", // Bordes redondeados
    background: "#4d4d4d92", // Fondo con transparencia
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)", // Sombra del recuadro
    transition: "transform 0.3s ease, background-color 0.3s ease", // Animaciones
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
    margin: 0,
    padding: 0,
  },
  navItem: {
    cursor: "pointer",
    position: "relative",
  },
  dropdown: {
    position: "absolute",
    top: "50px",
    left: 0,
    background: "#4d4d4d92",
    padding: "15px",
    borderRadius: "5px",
    listStyle: "none",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
    fontSize: "40px",
  },
  dropdownItem: {
    padding: "8px 15px",
    cursor: "pointer",
    color: "#fff",
    transition: "background 0.3s",
  },
  dropdownItemHover: {
    background: "#555",
  },
};

export default Navbar;
