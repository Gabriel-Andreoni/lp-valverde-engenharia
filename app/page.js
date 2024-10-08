import About from "./components/About";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Services from "./components/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <CTA />
      <Services />
      <Footer />
    </>
  )
}