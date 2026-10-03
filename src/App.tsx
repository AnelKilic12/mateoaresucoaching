import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Expertise } from "./components/Expertise";
import { Benefits } from "./components/Benefits";
import { Programs } from "./components/Programs";
import { Process } from "./components/Process";
import { Gallery } from "./components/Gallery";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Benefits />
        <Programs />
        <Process />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
