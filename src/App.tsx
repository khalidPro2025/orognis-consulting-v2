import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Agence from "./components/Agence";
import Expertises from "./components/Expertises";
import Approche from "./components/Approche";
import Impact from "./components/Impact";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-body antialiased">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Agence />
        <Expertises />
        <Approche />
        <Impact />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
