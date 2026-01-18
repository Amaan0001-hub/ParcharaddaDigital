import Header from "../components/Header";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Aboutbanner from "../components/Aboutinternal";
import Contact from "../components/Contact"; 

export default function ContactPage() {
  return (
    <>
      <Header/>
      <main>
        <Aboutbanner />
        <Contact/>
        <CTA />
      </main>
      <Footer />
    </>
  );
}