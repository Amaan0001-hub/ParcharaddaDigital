
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Pricing from '../components/Pricing';
import Aboutbanner from '../components/Aboutinternal';

export default function Pricicng() {
  return (
    <div>
        <Header />
    <div className="min-h-screen">
        <Aboutbanner/>
      <Pricing/>
      <CTA/>
      <Footer/>
    </div>
    </div>
  );
}