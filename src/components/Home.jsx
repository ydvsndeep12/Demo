import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Services from "./Services";
import Works from "./Works";
import About from "./About";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Footer from "./Footer";
import AIChatbot from "./AIChatbot";

const Home = () => {
  return (
    <div className="bg-[#0a0a0a]">
      <Navbar />
      <Hero />
      <Services />
      <Works />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
      <AIChatbot />
    </div>
  );
};

export default Home;
