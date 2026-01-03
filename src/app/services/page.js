// app/services/page.tsx

import { FaChartLine, FaEnvelope, FaSearch, FaHashtag, FaUsers, FaBullseye,FaArrowRight } from 'react-icons/fa';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Pricing from '../components/Pricing';

export default function ServicesPage() {
  return (
    <div>
        <Header />
    <div className="min-h-screen">
     
      {/* Alternative Version with Icons */}
      <section className="py-20 bg-white">
        <div className="container px-4 mx-auto mt-2">
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Service 1: Digital Marketing */}
            <div className="p-8 transition-all duration-300 border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg">
              <div className="flex items-center justify-center mb-6 bg-blue-100 rounded-lg w-14 h-14">
                <FaChartLine className="text-blue-600 w-7 h-7" />
              </div>
              <h3 className="mb-4 text-xl font-semibold text-gray-900">Digital Marketing</h3>
              <p className="mb-6 text-gray-600">Lorem dolor amet consectetur read adipiscing any more elit.</p>
              <a href="#" className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800">
                READ MORE <FaArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>

            {/* Service 2: Email Marketing */}
            <div className="p-8 transition-all duration-300 border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg">
              <div className="flex items-center justify-center mb-6 bg-green-100 rounded-lg w-14 h-14">
                <FaEnvelope className="text-green-600 w-7 h-7" />
              </div>
              <h3 className="mb-4 text-xl font-semibold text-gray-900">Email Marketing</h3>
              <p className="mb-6 text-gray-600">Lorem dolor amet consectetur read adipiscing any more elit.</p>
              <a href="#" className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800">
                READ MORE <FaArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>

            {/* Service 3: SEO Analytics */}
            <div className="p-8 transition-all duration-300 border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg">
              <div className="flex items-center justify-center mb-6 bg-purple-100 rounded-lg w-14 h-14">
                <FaSearch className="text-purple-600 w-7 h-7" />
              </div>
              <h3 className="mb-4 text-xl font-semibold text-gray-900">SEO Analytics</h3>
              <p className="mb-6 text-gray-600">Lorem dolor amet consectetur read adipiscing any more elit.</p>
              <a href="#" className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800">
                READ MORE <FaArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>

            {/* Service 4: Social Media Marketing */}
            <div className="p-8 transition-all duration-300 border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg">
              <div className="flex items-center justify-center mb-6 bg-pink-100 rounded-lg w-14 h-14">
                <FaHashtag className="text-pink-600 w-7 h-7" />
              </div>
              <h3 className="mb-4 text-xl font-semibold text-gray-900">Social Media Marketing</h3>
              <p className="mb-6 text-gray-600">Lorem dolor amet consectetur read adipiscing any more elit.</p>
              <a href="#" className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800">
                READ MORE <FaArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>

            {/* Service 5: Social Marketing */}
            <div className="p-8 transition-all duration-300 border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg">
              <div className="flex items-center justify-center mb-6 bg-orange-100 rounded-lg w-14 h-14">
                <FaUsers className="text-orange-600 w-7 h-7" />
              </div>
              <h3 className="mb-4 text-xl font-semibold text-gray-900">Social Marketing</h3>
              <p className="mb-6 text-gray-600">Lorem dolor amet consectetur read adipiscing any more elit.</p>
              <a href="#" className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800">
                READ MORE <FaArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>

            {/* Service 6: Better Audiences */}
            <div className="p-8 transition-all duration-300 border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg">
              <div className="flex items-center justify-center mb-6 bg-red-100 rounded-lg w-14 h-14">
                <FaBullseye className="text-red-600 w-7 h-7" />
              </div>
              <h3 className="mb-4 text-xl font-semibold text-gray-900">Better Audiences</h3>
              <p className="mb-6 text-gray-600">Lorem dolor amet consectetur read adipiscing any more elit.</p>
              <a href="#" className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800">
                READ MORE <FaArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
        
        
      </section>
      <Pricing/>
      <CTA/>
      <Footer/>
    </div>
    </div>
  );
}