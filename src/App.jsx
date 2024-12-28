import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MovieRow from "./components/MovieRow";
import Footer from "./components/Footer";
import CategoryPage from "./components/CategoryPage";
import UserSelection from "./components/UserSelection";
import PixelCharacter from "./components/PixelCharacter"; // PixelCharacter con carta

function App() {
  const [selectedUser, setSelectedUser] = useState(null); // Maneja la selección de usuario
  const [currentSection, setCurrentSection] = useState("Inicio"); // Maneja la navegación

  return (
    <div>
      {/* Pantalla inicial de selección de usuario */}
      {selectedUser === null ? (
        <UserSelection onSelectUser={setSelectedUser} />
      ) : (
        <>
          {/* Navbar y navegación */}
          <Navbar onNavigate={setCurrentSection} />

          {/* Contenido de la página principal */}
          {currentSection === "Inicio" && (
            <>
              <Hero user={selectedUser} />
              <MovieRow />
              <PixelCharacter />
            </>
          )}

          {/* Contenido dinámico por categoría */}
          {["Paisajes", "Medicina", "Ocio", "Varios"].includes(
            currentSection
          ) && <CategoryPage category={currentSection} />}

          {/* Footer */}
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
