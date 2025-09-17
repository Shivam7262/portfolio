import { Calendar, Code } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Experience</h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Timeline Item */}
          <div className="relative border-l-2 border-accent pl-8 pb-12 ml-4 stagger-animation">
            <div className="absolute w-4 h-4 bg-accent rounded-full -left-[9px] top-0"></div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
              {/* Header */}
              <div className="flex flex-wrap justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-gray-900">React Intern</h3>
                <div className="flex items-center text-sm text-gray-600 mt-1 sm:mt-0">
                  <Calendar size={16} className="mr-1 text-accent" />
                  <span>05/2024 - 07/2024</span>
                </div>
              </div>
              
              <h4 className="text-lg font-medium mb-3 text-accent">Celebal Technologies</h4>
              
              {/* Bullet Points */}
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="min-w-[20px] h-5 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                  </div>
                  <p className="text-gray-700">
                    Completed an intensive 8-week Celebal Summer Internship program, acquiring hands-on experience with cutting-edge technologies and industry best practices.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="min-w-[20px] h-5 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                  </div>
                  <p className="text-gray-700">
                    Developed and maintained dynamic, interactive web applications using <span className="font-semibold">React.js</span>, enhancing user experience through responsive design and smooth navigation.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="min-w-[20px] h-5 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                  </div>
                  <p className="text-gray-700">
                    Utilized tools like <span className="font-semibold">Git</span> for version control and jira for project management in an Agile environment, ensuring efficient workflow and collaboration.
                  </p>
                </li>
              </ul>
              
              {/* Skills / Tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-800">React.js</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-800">JavaScript</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-800">Responsive Design</span>
              </div>
            </div>
          </div>
          
          {/* Footer Note */}
          <div className="text-center mt-8">
            <p className="text-gray-600 italic flex justify-center items-center gap-2">
              <Code size={18} className="text-accent" />
              Looking forward to adding more experiences to my journey!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
