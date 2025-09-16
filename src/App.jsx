import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen w-full bg-black text-white font-[intern]">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
};

export default App;
