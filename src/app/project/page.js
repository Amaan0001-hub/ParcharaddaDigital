
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import Header from '../components/Header';

import Aboutbanner from '../components/Aboutinternal';

export default function Project() {
  return (
    <div>
        <Header />
    <div className="min-h-screen">
        <Aboutbanner/>
      
      <CTA/>
      <Footer/>
    </div>
    </div>
  );
}