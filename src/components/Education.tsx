
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology (CSE)",
      institution: "IILM College of Engineering & Technology",
      duration: "2021-2025",
      ongoing: true
    },
    {
      degree: "Intermediate",
      institution: "S.G.J Secondary school, Sheohar, Bihar",
      duration: "2020-2021"
    },
    {
      degree: "Matriculation",
      institution: "S.G.J Secondary school, Sheohar, Bihar",
      duration: "2017-2018"
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Education</h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-gray-600">My academic journey and qualifications</p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 transform md:translate-x-[-0.5px]"></div>
            
            {/* Education Items */}
            {education.map((item, index) => (
              <div 
                key={index} 
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:pr-12 md:text-right md:mr-auto md:ml-0' : 'md:pl-12 md:ml-auto md:mr-0'
                } ml-12 md:ml-auto md:w-1/2 animate-slide-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Dot on the timeline */}
                <div className="absolute left-[-30px] md:left-1/2 top-0 w-6 h-6 rounded-full bg-accent border-4 border-white transform md:translate-x-[-50%] shadow-md"></div>
                
                {/* Content */}
                <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-2">
                    <GraduationCap className="text-accent mr-2" size={20} />
                    <h3 className="text-xl font-bold">{item.degree}</h3>
                    {item.ongoing && (
                      <span className="ml-2 px-2 py-0.5 text-xs bg-green-100 text-green-800 rounded-full">
                        Ongoing
                      </span>
                    )}
                  </div>
                  
                  <h4 className="text-lg text-gray-700 mb-2">{item.institution}</h4>
                  
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar size={14} className="mr-1" />
                    <span>{item.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
