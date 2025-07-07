import React from 'react';
import { Users, Star } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: "Gabriel González",
      position: "CEO & Lead Developer",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQGO8TVUfQurbw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1723032214850?e=1757548800&v=beta&t=cTj8x0h5cV3kzT_Jz6idwmrw7HIXPXVT9msv6JjbrPE",
      specialty: "Ingeniero en Informática",
      color: "from-blue-500 to-indigo-600",
      bgColor: "from-blue-900/30 to-indigo-900/30",
      borderColor: "border-blue-500/20"
    },
    {
      name: "Damaris Urzúa",
      position: "Abogada & Legal Tech Specialist",
      image: "https://media.licdn.com/dms/image/v2/D4E03AQHOkNXBm9KlZg/profile-displayphoto-scale_200_200/B4EZfXh4mSGcAY-/0/1751667675270?e=1757548800&v=beta&t=wntLGWFxGKhq62GP_y3A7F8NyryspGJCND9fzzvIfbY",
      specialty: "Especialista en Derecho Digital",
      color: "from-slate-400 to-slate-600",
      bgColor: "from-slate-800/30 to-slate-900/30",
      borderColor: "border-slate-500/20"
    },
    {
      name: "Luffy",
      position: "El Jefesito",
      image: "DSC9771.jpg",
      specialty: "Mascota del equipo",
      color: "from-indigo-400 to-indigo-600",
      bgColor: "from-indigo-900/30 to-slate-900/30",
      borderColor: "border-indigo-500/20"
    },
  ];

  return (
    <section id="equipo" className="py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-blue-400/30 to-indigo-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-br from-slate-400/30 to-slate-600/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-400/30 to-indigo-600/30 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full text-blue-300 text-sm font-bold mb-8 border border-blue-500/30 backdrop-blur-sm">
            <Users className="w-5 h-5 mr-2 animate-bounce" />
            CONOCE AL EQUIPO
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            LOS RIDERS QUE
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-slate-400 to-indigo-400">
              HACEN MAGIA
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Profesionales apasionados que transforman cada desafío en una oportunidad de innovación
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br ${member.bgColor} backdrop-blur-sm rounded-3xl p-8 border ${member.borderColor} hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1`}
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${member.color} opacity-0 group-hover:opacity-20 rounded-3xl blur-xl transition-opacity duration-500`}></div>

              <div className="relative z-10 text-center">
                {/* Profile Image */}
                <div className="relative mb-6">
                  <div className={`w-24 h-24 mx-auto rounded-2xl overflow-hidden border-4 border-gradient-to-r ${member.color} group-hover:scale-110 transition-all duration-300 shadow-2xl`}>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  {/* Status indicator */}
                  <div className={`absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r ${member.color} rounded-full flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform`}>
                    <Star className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Member Info */}
                <h3 className="text-xl font-black text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {member.name}
                </h3>
                <p className={`text-transparent bg-clip-text bg-gradient-to-r ${member.color} font-bold mb-3 text-sm`}>
                  {member.position}
                </p>
                <p className="text-gray-400 text-sm mb-4 group-hover:text-gray-300 transition-colors">
                  {member.specialty}
                </p>

                {/* Skills indicator */}
                <div className="flex justify-center space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <div
                      key={star}
                      className={`w-2 h-2 bg-gradient-to-r ${member.color} rounded-full group-hover:scale-125 transition-transform duration-300`}
                      style={{ animationDelay: `${star * 100}ms` }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
