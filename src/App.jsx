import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import ProjectDetail from "./Components/ProjectDetail/ProjectDetail";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Routes>
        <Route path="/" element={<Services />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
      <Contact />
      <Footer />
    </>
  );
};

export default App;
