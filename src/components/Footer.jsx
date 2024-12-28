import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2024- Todos los derechos reservados a Julieta Rouzies.</p>
      <p>Developer FullStack.</p>
    </footer>
  );
};

const styles = {
  footer: {
    textAlign: "center",
    padding: "20px",
    background: "#141414",
    color: "#fff",
    fontSize: "0.9rem",
  },
};

export default Footer;
