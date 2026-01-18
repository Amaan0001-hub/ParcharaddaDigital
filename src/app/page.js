import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import CaseStudies from "./components/CaseStudies";
import Audience from "./components/Audience";
import Team from "./components/Team";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import News from "./components/News";
import CTA from "./components/CTA";
import Footer from "./components/Footer"; 
  

  export default function Home() {
    return (
      <>
        <Header />
        <main>
          <Hero />
          <Services />
          <About />
          <CaseStudies />
          <Audience />
          <Team />
          <Pricing />
          <Testimonials />
          <Contact />
          <News />
          <CTA />
        </main>
        <Footer />
      </>
    );
  }
