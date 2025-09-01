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
        <div class="relative h-full w-full bg-slate-950"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div></div>
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