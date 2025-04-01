import React, { useState } from "react";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import { formatTitle, getCurrentDate } from "./utils/function"; 

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div className="app">
      <Header />
      <Navigation onNavigate={setCurrentPage} />
      <main>
        <h1>{formatTitle(currentPage)}</h1> 
        <p>Today's Date: {getCurrentDate()}</p> 
        {currentPage === "home" && <Home />}
        {currentPage === "about" && <About />}
        {currentPage === "gallery" && <Gallery />}
      </main>
      <Footer />
    </div>
  );
};

export default App;
