import CTA from '../components/CTA';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Aboutbanner from '../components/Aboutinternal';
import TeamSection from '../components/TeamSection';

export default function Team() {
  return (
    <div>
      <Header />
      <div className="min-h-screen">
        <Aboutbanner 
          title="Our Team" 
          subtitle="Meet our dedicated professionals"
          backgroundImage="/assets/img/team/banner.jpg"
        />
        
        {/* Team Section */}
        <section className="py-12 md:py-16">
          <div className="container px-4 mx-auto">
            {/* Section Header */}
            <div className="mb-12 text-center md:mb-16">
              <h2 className="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
                Meet Our <span className="text-blue-600">Professional Team</span>
              </h2>
              <p className="max-w-2xl mx-auto text-gray-600">
                Our team of experts is dedicated to providing exceptional service and innovative solutions.
                Each member brings unique skills and experience to deliver outstanding results.
              </p>
            </div>
            
            {/* Team Grid */}
            <TeamSection />
          </div>
        </section>
        
        <CTA/>
        <Footer/>
      </div>
    </div>
  );
}