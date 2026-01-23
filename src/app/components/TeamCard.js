// import Image from 'next/image';
// import Link from 'next/link';
// import { FaInstagram, FaFacebook, FaTwitter, FaLinkedinIn, FaShare } from 'react-icons/fa';

// const TeamCard = ({ id, name, position, imageSrc }) => {
//   return (
//     <div className="wow fadeInUp group" data-wow-delay=".2s">
//       <div className="relative overflow-hidden transition-all duration-300 bg-white shadow-lg team-card-items rounded-xl hover:shadow-2xl hover:-translate-y-2">
//         {/* Team Image */}
//         <div className="overflow-hidden team-image h-80">
//           <Image 
//             src={imageSrc} 
//             alt={name}
//             width={400}
//             height={320}
//             className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
//           />
//         </div>
        
//         {/* Team Content */}
//         <div className="relative z-10 p-6 team-content">
//           <h3 className="mb-1 text-xl font-bold">
//             <Link 
//               href="/team-details" 
//               className="text-gray-800 transition-colors duration-300 hover:text-blue-600"
//             >
//               {name}
//             </Link>
//           </h3>
//           <p className="text-sm text-gray-600">{position}</p>
//         </div>
        
//         {/* Social Icons Overlay */}
//         <div className="absolute z-20 icon-shape top-6 right-6">
//           <div className="relative">
//             {/* Social Profile Icons */}
//             <div className="transition-all duration-300 transform translate-y-4 opacity-0 social-profile group-hover:opacity-100 group-hover:translate-y-0">
//               <ul className="flex flex-col items-center justify-center space-y-3">
//                 <li>
//                   <Link 
//                     href={`/team-details/${encodeURIComponent(position)}`}
//                     className="flex items-center justify-center w-8 h-8 text-white transition-colors duration-300 bg-blue-600 rounded-full hover:text-blue-300"
//                   >
//                     <FaInstagram size={14} />
//                   </Link>
//                 </li>
//                 <li>
//                   <Link 
//                     href={`/team-details/${encodeURIComponent(position)}`}
//                     className="flex items-center justify-center w-8 h-8 text-white transition-colors duration-300 bg-blue-600 rounded-full hover:text-blue-300"
//                   >
//                     <FaFacebook size={14} />
//                   </Link>
//                 </li>
//                 <li>
//                   <Link 
//                     href={`/team-details/${encodeURIComponent(position)}`}
//                     className="flex items-center justify-center w-8 h-8 text-white transition-colors duration-300 bg-blue-600 rounded-full hover:text-blue-300"
//                   >
//                     <FaTwitter size={14} />
//                   </Link>
//                 </li>
//                 <li>
//                   <Link 
//                     href={`/team-details/${encodeURIComponent(position)}`}
//                     className="flex items-center justify-center w-8 h-8 text-white transition-colors duration-300 bg-blue-600 rounded-full hover:text-blue-300"
//                   >
//                     <FaLinkedinIn size={14} />
//                   </Link>
//                 </li>
//               </ul>
              
//               {/* Share Button */}
//               <span className="absolute flex items-center justify-center w-10 h-10 text-gray-800 transition-all duration-300 transform -translate-x-1/2 bg-white rounded-full shadow-lg cursor-pointer plus-btn -bottom-8 left-1/2 hover:bg-blue-600 hover:text-white group-hover:bottom-2">
//                 <FaShare size={16} />
//               </span>
//             </div>
//           </div>
//         </div>
        
//         {/* Gradient Overlay */}
//         <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/20 via-transparent to-transparent group-hover:opacity-100"></div>
//       </div>
//     </div>
//   );
// };

// export default TeamCard;

import Image from 'next/image';
import Link from 'next/link';
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedinIn, FaShare } from 'react-icons/fa';

const TeamCard = ({ id, name, position, imageSrc }) => {
  // Use ID for slug (more reliable and unique)
  const slug = id.toString();
  
  return (
    <div className="wow fadeInUp group" data-wow-delay=".2s">
      <div className="relative overflow-hidden transition-all duration-300 bg-white shadow-lg team-card-items rounded-xl hover:shadow-2xl hover:-translate-y-2">
        {/* Team Image */}
        <div className="overflow-hidden team-image h-80">
          <Link href={`/team-details/${slug}`}>
            <Image 
              src={imageSrc} 
              alt={name}
              width={400}
              height={320}
              className="object-cover w-full h-full transition-transform duration-500 cursor-pointer group-hover:scale-110"
            />
          </Link>
        </div>
        
        {/* Team Content */}
        <div className="relative z-10 p-6 team-content">
          <h3 className="mb-1 text-xl font-bold">
            <Link 
              href={`/team-details/${slug}`} 
              className="text-gray-800 transition-colors duration-300 hover:text-blue-600"
            >
              {name}
            </Link>
          </h3>
          <p className="text-sm text-gray-600">{position}</p>
        </div>
        
        {/* Social Icons Overlay
        <div className="absolute z-20 icon-shape top-6 right-6">
          <div className="relative">
            <div className="transition-all duration-300 transform translate-y-4 opacity-0 social-profile group-hover:opacity-100 group-hover:translate-y-0">
              <ul className="flex flex-col items-center justify-center space-y-3">
                <li>
                  <a 
                    href="#" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-8 h-8 text-white transition-colors duration-300 bg-blue-600 rounded-full hover:text-blue-300"
                  >
                    <FaInstagram size={14} />
                  </a>
                </li>
                <li>
                  <a 
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-8 h-8 text-white transition-colors duration-300 bg-blue-600 rounded-full hover:text-blue-300"
                  >
                    <FaFacebook size={14} />
                  </a>
                </li>
                <li>
                  <a 
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-8 h-8 text-white transition-colors duration-300 bg-blue-600 rounded-full hover:text-blue-300"
                  >
                    <FaTwitter size={14} />
                  </a>
                </li>
                <li>
                  <a 
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-8 h-8 text-white transition-colors duration-300 bg-blue-600 rounded-full hover:text-blue-300"
                  >
                    <FaLinkedinIn size={14} />
                  </a>
                </li>
              </ul>
              
              <button className="absolute flex items-center justify-center w-10 h-10 text-gray-800 transition-all duration-300 transform -translate-x-1/2 bg-white rounded-full shadow-lg cursor-pointer plus-btn -bottom-8 left-1/2 hover:bg-blue-600 hover:text-white group-hover:bottom-2">
                <FaShare size={16} />
              </button>
            </div>
          </div>
        </div> */}
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/20 via-transparent to-transparent group-hover:opacity-100"></div>
      </div>
    </div>
  );
};

export default TeamCard;