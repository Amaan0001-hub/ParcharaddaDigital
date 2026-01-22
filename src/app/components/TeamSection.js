'use client';

import { useEffect } from 'react';
import TeamCard from './TeamCard';

// Team member data
// const teamMembers = [
//   { id: 1, name: "Faraz Ahmad", position: "Founder & CEO", imageSrc: "/img/CEO.png" },
//   { id: 3, name: "Pratibha Negi", position: "Creative Visual Head(photography,onsite shoots,anddesign)", imageSrc: "/img/CO1.png" },
//   { id: 2, name: "Sayed Fahad Ali", position: "Tech/AI Lead(responsible for automationandAI integration)", imageSrc: "/img/CO2.png" },
  
//   { id: 4, name: "Ali Zafar", position: "Head of Content Strategy (since they createposts and manage creative content)", imageSrc: "/img/CO3.png" },
  
// ];

// data/teamData.js
export const teamMembers = [
  {
    id: 1,
    name: "Faraz Ahmad",
    position: "Founder & CEO",
    imageSrc: "/img/CEO.png",
    bio: "Prior to joining company, she spent 20+ years at Inmosys, where he held a wide range of global leadership roles, from services to products, and across operations and sales. Most recently, he was SVP & Global Head of the Manufacturing business. He is also an avid cook and history buff. You can find him dining late at night with the chefs of the hotels where he stays during his travels.",
    phone: "+91 5698 0 036 420",
    email: "faraz@example.com",
    address: "26 Manor St, Braintree UK",
    social: {
      instagram: "https://instagram.com/faraz",
      facebook: "https://facebook.com/faraz",
      twitter: "https://twitter.com/faraz",
      linkedin: "https://linkedin.com/in/faraz"
    }
  },
  {
    id: 2,
    name: "Sayed Fahad Ali",
    position: "Tech/AI Lead (responsible for automation and AI integration)",
    imageSrc: "/img/CO2.png",
    bio: "Fahad is responsible for all automation and AI integration projects. With 10+ years of experience in AI and machine learning, he leads our technical innovation efforts.",
    phone: "+91 9876 543 210",
    email: "fahad@example.com",
    address: "Tech Park, Bangalore",
    social: {
      instagram: "https://instagram.com/fahad",
      facebook: "https://facebook.com/fahad",
      twitter: "https://twitter.com/fahad",
      linkedin: "https://linkedin.com/in/fahad"
    }
  },
  {
    id: 3,
    name: "Pratibha Negi",
    position: "Creative Visual Head (photography, onsite shoots, and design)",
    imageSrc: "/img/CO1.png",
    bio: "Pratibha heads our creative visual department, managing photography, onsite shoots, and design. She has a keen eye for detail and brings creative visions to life.",
    phone: "+91 8765 432 109",
    email: "pratibha@example.com",
    address: "Creative Hub, Mumbai",
    social: {
      instagram: "https://instagram.com/pratibha",
      facebook: "https://facebook.com/pratibha",
      twitter: "https://twitter.com/pratibha",
      linkedin: "https://linkedin.com/in/pratibha"
    }
  },
  {
    id: 4,
    name: "Ali Zafar",
    position: "Head of Content Strategy",
    imageSrc: "/img/CO3.png",
    bio: "Ali manages all content creation and strategy. Since they create posts and manage creative content, he ensures our messaging is consistent and engaging across all platforms.",
    phone: "+91 7654 321 098",
    email: "ali@example.com",
    address: "Content Studio, Delhi",
    social: {
      instagram: "https://instagram.com/alizafar",
      facebook: "https://facebook.com/alizafar",
      twitter: "https://twitter.com/alizafar",
      linkedin: "https://linkedin.com/in/alizafar"
    }
  }
];

const TeamSection = () => {
  return (
    <div className="px-4 mx-auto container-fluid max-w-7xl sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-8">
        {teamMembers.map((member) => (
          <TeamCard
            key={member.id}
            id={member.id}
            name={member.name}
            position={member.position}
            imageSrc={member.imageSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
export { teamMembers };