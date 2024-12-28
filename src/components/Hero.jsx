import React from "react";

const Hero = ({ user }) => {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h2>¡Hola, {user}!</h2>
      <p>Feliz Navidad y bienvenida a Emiflix.</p>
    </div>
  );
};

export default Hero;
