// npm run dev

// website for backgrounds
// https://bg.ibelick.com/

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Resume from "./components/Resume";
import CertsAndBadges from "./components/CertsAndBadges";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cy300 selection:text-cyan-900">

      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      <div className="container mx-auto px-8">
        <Navbar/>
        <Hero />
        <About />
        <Technologies />
        <Resume />
        <CertsAndBadges />
        <Experience />
        <Projects />
        <ContactMe />
      </div>

    </div>
  );
};

export default App;