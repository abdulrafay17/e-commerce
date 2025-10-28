import React from "react";
import Image from "next/image";

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      image: "/images/person1.png",
      name: "Tom Cruise",
      role: "Founder & Chairman",
    },
    {
      id: 2,
      image: "/images/person3.png",
      name: "Emma Watson",
      role: "Managing Director",
    },
    {
      id: 3,
      image: "/images/person2.png",
      name: "Will Smith",
      role: "Product Designer",
    },
  ];

  return (
    <section className="flex items-center justify-center min-h-[60vh] bg-gray-100 py-12 px-6">
      <div className="w-full max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Meet Our Team
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white flex flex-col justify-between rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex h-full justify-center mt-6">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={200}
                  height={200}
                  className=" object-cover"
                />
              </div>    

              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-gray-600 mt-1">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
