// // components/TeamDetails.tsx
// import Image from 'next/image';
// import Link from 'next/link';
// import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
// import Header from '../components/Header';
// import Aboutbanner from '../components/Aboutinternal';
// import Footer from '../components/Footer';
// import CTA from '../components/CTA';

// const TeamDetails = () => {
//   return (
//     <div>
//       <Header />
//     <Aboutbanner/>
//     <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
//       <div className="container px-4 mx-auto sm:px-6 lg:px-8">
//         <div className="overflow-hidden bg-white shadow-lg rounded-2xl">
//           <div className="flex flex-col lg:flex-row">
//             {/* Left Column - Image */}
//             <div className="relative lg:w-2/5">
//               <div className="relative h-80 lg:h-full">
//                 {/* Image placeholder - replace with actual image */}
//                 <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-100 to-gray-200">
//                   <div className="text-center">
//                     <div className="flex items-center justify-center w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600">
//                       <span className="text-4xl font-bold text-white">KZB</span>
//                     </div>
//                     <h3 className="text-2xl font-bold text-gray-900">Kenneth Z. Burke</h3>
//                     <p className="mt-1 text-gray-600">Gemini market</p>
//                   </div>
//                 </div>
//                 {/* For actual image, use: */}
//                 {/* <Image 
//                   src="/assets/img/team/details-1.jpg" 
//                   alt="Kenneth Z. Burke"
//                   fill
//                   className="object-cover"
//                   sizes="(max-width: 1024px) 100vw, 40vw"
//                 /> */}
//               </div>
//             </div>

//             {/* Right Column - Content */}
//             <div className="p-8 lg:w-3/5 lg:p-12">
//               {/* Name and Position */}
//               <div className="mb-8">
//                 <h1 className="mb-2 text-3xl font-bold text-gray-900 lg:text-4xl">
//                   Kenneth Z. Burke
//                 </h1>
//                 <span className="text-lg font-semibold text-blue-600">
//                   Gemini market
//                 </span>
//               </div>

//               {/* Description Paragraphs */}
//               <div className="mb-8 space-y-6">
//                 <p className="leading-relaxed text-gray-700">
//                   Prior to joining company, she spent 20+ years at Inmosys, where he held a wide range of global leadership roles, from services to products, and across operations and sales. Most recently, he was SVP & Global Head of the Manufacturing business..
//                 </p>
                
//                 <p className="leading-relaxed text-gray-700">
//                   as well as a board member of their software subsidiary. He is also an avid cook and history buff. You can find him dining late at night with the chefs of the hotels where he stays during his travels
//                 </p>
//               </div>

//               {/* Signature */}
//               <div className="mb-10">
//                 <div className="flex items-center justify-center w-48 h-16 rounded bg-gradient-to-r from-gray-200 to-gray-100">
//                   <span className="text-2xl italic text-gray-700 font-signature">
//                     Kenneth Z. Burke
//                   </span>
//                 </div>
//                 {/* For actual signature image: */}
//                 {/* <Image 
//                   src="/assets/img/team/signature.png" 
//                   alt="Signature"
//                   width={192}
//                   height={64}
//                   className="object-contain"
//                 /> */}
//               </div>

//               {/* Contact Information */}
//               <div className="space-y-6">
//                 {/* Phone */}
//                 <div className="flex items-start space-x-4">
//                   <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full bg-blue-50">
//                     <FaPhone className="w-5 h-5 text-blue-600" />
//                   </div>
//                   <div>
//                     <h5 className="mb-1 font-medium text-gray-900">Phone</h5>
//                     <a 
//                       href="tel:+9156980036420" 
//                       className="text-lg text-gray-700 transition-colors hover:text-blue-600"
//                     >
//                       +91 5698 0 036 420
//                     </a>
//                   </div>
//                 </div>

//                 {/* Email */}
//                 <div className="flex items-start space-x-4">
//                   <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full bg-green-50">
//                     <FaEnvelope className="w-5 h-5 text-green-600" />
//                   </div>
//                   <div>
//                     <h5 className="mb-1 font-medium text-gray-900">Email</h5>
//                     <a 
//                       href="mailto:info@example.com" 
//                       className="text-lg text-gray-700 transition-colors hover:text-blue-600"
//                     >
//                       info@example.com
//                     </a>
//                   </div>
//                 </div>

//                 {/* Address */}
//                 <div className="flex items-start space-x-4">
//                   <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full bg-purple-50">
//                     <FaMapMarkerAlt className="w-5 h-5 text-purple-600" />
//                   </div>
//                   <div>
//                     <h5 className="mb-1 font-medium text-gray-900">Address</h5>
//                     <a 
//                       href="https://www.google.com/maps/place/Egens+Lab/@23.8340712,90.3631117,17z/data=!3m1!4b1!4m6!3m5!1s0x3755c14c8682a473:0xa6c74743d52adb88!8m2!3d23.8340663!4d90.3656866!16s%2Fg%2F11rs9vlwsk?entry=ttu"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-lg text-gray-700 transition-colors hover:text-blue-600"
//                     >
//                       26 Manor St, Braintree UK
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//     <CTA/>
//     <Footer/>
//      </div>
     
//   );
// };

// export default TeamDetails;

// app/team/[slug]/page.js (Next.js 13+ App Router)
// OR
// pages/team/[slug].js (Pages Router)

// app/team-details/[id]/page.js
'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebook, FaTwitter, FaLinkedinIn, FaArrowLeft } from 'react-icons/fa';
import Header from '@/app/components/Header';
import Aboutbanner from '@/app/components/Aboutinternal';
import Footer from '@/app/components/Footer';
import CTA from '@/app/components/CTA';
import { teamMembers } from '@/app/components/TeamSection';

const TeamDetailPage = () => {
  const params = useParams();
  const id = params.id; // Change from slug to id
  
  console.log('Params:', params); // Debugging
  console.log('ID:', id); // Debugging
  
  // Find team member by ID
  const memberId = id ? parseInt(id) : null;
  console.log('Parsed ID:', memberId); // Debugging
  
  const member = teamMembers.find(member => member.id === memberId);
  
  if (!member) {
    return (
      <div>
        <Header />
        <Aboutbanner />
        <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
          <div className="container px-4 mx-auto text-center">
            <h1 className="mb-4 text-3xl font-bold">Team Member Not Found</h1>
            <p className="mb-4 text-gray-600">ID: {id}</p>
            <p className="mb-4">Available IDs: {teamMembers.map(m => m.id).join(', ')}</p>
            <Link href="/team" className="text-blue-600 hover:underline">
              Back to Team Page
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <Aboutbanner />
      
      <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-8">
            <Link 
              href="/team"
              className="inline-flex items-center px-4 py-2 text-white transition-colors duration-300 bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              <FaArrowLeft className="mr-2" />
              Back to Team
            </Link>
          </div>
          
          <div className="overflow-hidden bg-white shadow-lg rounded-2xl">
            <div className="flex flex-col lg:flex-row">
              {/* Left Column - Image */}
              <div className="relative lg:w-2/5">
                <div className="relative h-80 lg:h-full">
                  <Image 
                    src={member.imageSrc} 
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
              </div>

              {/* Right Column - Content */}
              <div className="p-8 lg:w-3/5 lg:p-12">
                {/* Name and Position */}
                <div className="mb-8">
                  <h1 className="mb-2 text-3xl font-bold text-gray-900 lg:text-4xl">
                    {member.name}
                  </h1>
                  <span className="text-lg font-semibold text-blue-600">
                    {member.position}
                  </span>
                </div>

                {/* Description */}
                <div className="mb-8">
                  <p className="leading-relaxed text-gray-700">
                    {member.bio}
                  </p>
                </div>

                {/* Social Media Links */}
                <div className="mb-8">
                  <h4 className="mb-4 text-lg font-semibold">Follow On</h4>
                  <div className="flex space-x-4">
                    <a 
                      href={member.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 text-white transition-colors duration-300 bg-blue-600 rounded-full hover:bg-blue-700"
                    >
                      <FaInstagram size={16} />
                    </a>
                    <a 
                      href={member.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 text-white transition-colors duration-300 bg-blue-600 rounded-full hover:bg-blue-700"
                    >
                      <FaFacebook size={16} />
                    </a>
                    <a 
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 text-white transition-colors duration-300 bg-blue-600 rounded-full hover:bg-blue-700"
                    >
                      <FaTwitter size={16} />
                    </a>
                    <a 
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-10 h-10 text-white transition-colors duration-300 bg-blue-600 rounded-full hover:bg-blue-700"
                    >
                      <FaLinkedinIn size={16} />
                    </a>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full bg-blue-50">
                      <FaPhone className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h5 className="mb-1 font-medium text-gray-900">Phone</h5>
                      <a 
                        href={`tel:${member.phone}`}
                        className="text-lg text-gray-700 transition-colors hover:text-blue-600"
                      >
                        {member.phone}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full bg-green-50">
                      <FaEnvelope className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h5 className="mb-1 font-medium text-gray-900">Email</h5>
                      <a 
                        href={`mailto:${member.email}`}
                        className="text-lg text-gray-700 transition-colors hover:text-blue-600"
                      >
                        {member.email}
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full bg-purple-50">
                      <FaMapMarkerAlt className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h5 className="mb-1 font-medium text-gray-900">Address</h5>
                      <span className="text-lg text-gray-700">
                        {member.address}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <CTA />
      <Footer />
    </div>
  );
};

export default TeamDetailPage;