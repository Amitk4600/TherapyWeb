import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Cta from "./components/Cta";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans">
      <Header />
      <main>
        <Hero />
        <Features />
        <Cta />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
