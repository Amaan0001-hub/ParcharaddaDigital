'use client';

import { useEffect } from 'react';
import TeamCard from './TeamCard';

// Team member data
const teamMembers = [
  { id: 1, name: "Faraz Ahmad", position: "Founder & CEO", imageSrc: "/img/CEO.png" },
  { id: 3, name: "Pratibha Negi", position: "Creative Visual Head(photography,onsite shoots,anddesign)", imageSrc: "/img/CO1.png" },
  { id: 2, name: "Sayed Fahad Ali", position: "Tech/AI Lead(responsible for automationandAI integration)", imageSrc: "/img/CO2.png" },
  
  { id: 4, name: "Ali Zafar", position: "Head of Content Strategy (since they createposts and manage creative content)", imageSrc: "/img/CO3.png" },
  
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