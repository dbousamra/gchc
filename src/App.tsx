import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Doctors from "./components/Doctors";
import Team from "./components/Team";
import Info from "./components/Info";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Doctors />
        <Team />
        <Info />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
