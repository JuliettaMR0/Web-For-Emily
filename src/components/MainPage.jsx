import React, { useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Footer from "./Footer";
import MovieRow from "./MovieRow"; // Franja tipo Netflix
import PixelArtSection from "./PixelArtSection"; // Subtítulo y carta

const MainPage = ({ user }) => {
  const [currentSection, setCurrentSection] = useState("Inicio");

  return (
    <div>
      <Navbar onNavigate={setCurrentSection} />
      {currentSection === "Inicio" && (
        <>
          <Hero user={user} />
          <MovieRow />
          <PixelArtSection />
        </>
      )}
      {currentSection !== "Inicio" && (
        <CategoryPage category={currentSection} />
      )}
      <Footer />
    </div>
  );
};

export default MainPage;
