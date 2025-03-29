
import { Calendar, Code } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Experience</h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-accent pl-8 pb-12 ml-4 stagger-animation">
            <div className="absolute w-4 h-4 bg-accent rounded-full -left-[9px] top-0"></div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-wrap justify-between items-start mb-4">
                <h3 className="text-xl font-bold">Web Development Intern</h3>
                <div className="flex items-center text-sm text-gray-600 mt-1 sm:mt-0">
                  <Calendar size={16} className="mr-1" />
                  <span>9/2023 - 10/2023</span>
                </div>
              </div>
              
              <h4 className="text-lg font-medium mb-3">CodeClause</h4>
              
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="min-w-[20px] h-5 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                  </div>
                  <p className="text-gray-700">
                    Proficient in front-end technologies, including HTML, CSS, and JavaScript, for building responsive and visually appealing web applications.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="min-w-[20px] h-5 flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                  </div>
                  <p className="text-gray-700">
                    Developed strong problem-solving skills by web applications, ensuring optimal performance and user experience.
                  </p>
                </li>
              </ul>
              
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-800">HTML</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-800">CSS</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-800">JavaScript</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-800">Web Development</span>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600 italic flex justify-center items-center gap-2">
              <Code size={18} />
              Looking forward to adding more experiences to my journey!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
