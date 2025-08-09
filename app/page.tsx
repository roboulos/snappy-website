import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ClientLogos from "./components/ClientLogos";
import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Banner />
      <Navbar />
      <Hero />
      <ClientLogos />
      <ServicesSection />
      <AboutSection />
      <Newsletter />
      <Footer />
    </>
  );
}