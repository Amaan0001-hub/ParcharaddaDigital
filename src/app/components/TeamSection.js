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
    bio: "I define the company’s vision, mission, and long-term strategy.I lead overall business operations, ensuring sustainable growth and profitability.I make key strategic decisions and guide the leadership team toward shared goals.I represent the company in partnerships, client relationships, and public forums.I foster a strong culture of innovation, accountability, and excellence across the organization.",
    phone: "+91 9140449464",
    email: "faraz@example.com",
    address: "26 Manor St, Braintree UK",
    social: {
      instagram: "https://www.instagram.com/faraz_ahmad_khan_?igsh=MTAzYmUwbWZ3bGM0cQ==",
      facebook: "https://www.facebook.com/share/1CHjdJB5ES/",
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
    email: "fahad261299@gmail.com",
    address: "Tech Park, Bangalore",
    social: {
      instagram: "https://www.instagram.com/sayed_fahad_777?igsh=bDMxNjcxaW80NDVn",
      facebook: "https://www.facebook.com/share/1C4MxN5Fye/",
      twitter: "https://twitter.com/fahad",
      linkedin: "https://linkedin.com/in/fahad"
    }
  },
  {
    id: 3,
    name: "Pratibha Negi",
    position: "Creative Visual Head (photography, onsite shoots, and design)",
    imageSrc: "/img/CO1.png",
    bio: "I play a key role in shaping the brand’s creative vision and overall visual identity.I lead all photography initiatives, ensuring high-quality, impactful visuals across platforms.I plan and execute onsite shoots, managing concepts, angles, lighting, and composition.I collaborate closely with design and marketing teams to maintain visual consistency.From ideation to final output, I ensure every visual tells a strong and authentic brand story.",
    phone: "+91 8765 432 109",
    email: "pratibha@example.com",
    address: "Creative Hub, Mumbai",
    social: {
      instagram: "https://www.instagram.com/pratibhasinghnegi?igsh=M2pwOHdtaXczYXg=",
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
    bio: "I define and lead the brand’s overall content vision and direction.I oversee the creation of posts, ensuring they are engaging, relevant, and on-brand.I plan content strategies aligned with marketing goals and audience behavior.I manage creative content across platforms, maintaining consistency in tone and quality.",
    phone: "+91 91618 80825",
    email: "ali@example.com",
    address: "Content Studio, Delhi",
    social: {
      instagram: "https://www.instagram.com/uxwithali?igsh=ZmZkNTBobzVobjRz",
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