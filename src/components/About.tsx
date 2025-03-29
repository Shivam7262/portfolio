
import { Briefcase } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">About Me</h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold mb-4">Career Objective</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Innovative problem-solver with a background in computer science, seeking a technical position that values creative thinking and modern solutions. Passionate about using advanced technologies to challenge conventional practices and improve overall system performance.
            </p>
            
            <div className="flex items-center mb-6">
              <Briefcase className="text-accent mr-3" size={24} />
              <div>
                <h4 className="font-semibold">Technical Skills</h4>
                <p className="text-gray-600">Web Development, Data Structures, Algorithms</p>
              </div>
            </div>
            
            <a 
              href="#contact" 
              className="inline-block px-6 py-3 bg-accent text-white rounded-md hover:bg-accent/90 transition-colors"
            >
              Get In Touch
            </a>
          </div>
          
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-accent">Personal Info</h3>
              
              <div className="space-y-4">
                <div className="grid grid-cols-3 border-b border-gray-200 pb-3">
                  <span className="font-medium text-gray-600">Name:</span>
                  <span className="col-span-2">Shivam Kumar</span>
                </div>
                
                <div className="grid grid-cols-3 border-b border-gray-200 pb-3">
                  <span className="font-medium text-gray-600">Phone:</span>
                  <span className="col-span-2">+91 6207237277</span>
                </div>
                
                <div className="grid grid-cols-3 border-b border-gray-200 pb-3">
                  <span className="font-medium text-gray-600">Email:</span>
                  <span className="col-span-2 break-words">sahshivam73200@gmail.com</span>
                </div>
                
                <div className="grid grid-cols-3 border-b border-gray-200 pb-3">
                  <span className="font-medium text-gray-600">Location:</span>
                  <span className="col-span-2">Sector 36, Greater Noida, 201308</span>
                </div>
                
                <div className="grid grid-cols-3 pb-3">
                  <span className="font-medium text-gray-600">LinkedIn:</span>
                  <a 
                    href="https://www.linkedin.com/in/shivam-kumar-05428726" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="col-span-2 text-accent hover:underline break-words"
                  >
                    shivam-kumar-05428726
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
