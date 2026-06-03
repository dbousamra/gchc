import Header from "./components/Header";
import Hero from "./components/Hero";
import Location from "./components/Location";
import Services from "./components/Services";
import Conditions from "./components/Conditions";
import Mission from "./components/Mission";
import Doctors from "./components/Doctors";
import Credentials from "./components/Credentials";
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
        <Location />
        <Services />
        <Conditions />
        <Mission />
        <Doctors />
        <Credentials />
        <Team />
        <Info />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
