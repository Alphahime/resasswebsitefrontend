import React from "react";
import "./Home.css";

// Import des sections de la page d'accueil
import Banner from "./banner/Banner";
import About from "./about/About";
import Stats from "./stats/Stats";
import Events from "./events/Events";
import Opportunities from "./opportunities/Opportunities";
import Partners from "./partners/Partners";
import Cta from "./cta/Cta";

const Home = () => {
  return (
    <main className="home">
      <Banner />
      <About />
      <Stats />
      <Events />
      <Opportunities />
      <Partners />
      <Cta />
    </main>
  );
};

export default Home;