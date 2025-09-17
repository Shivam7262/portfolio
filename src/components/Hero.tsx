
import { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center bg-gradient-to-br from-primary/10 via-background to-accent/5"
    >
      {/* Modern abstract background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="block">Hi, I'm</span>
              <span className="text-accent">Shivam Kumar</span>
            </h1>
            <h2 className="text-3xl font-medium mb-6 text-gray-700">B.Tech CSE Graduate</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              I’m a software engineer skilled in React, Spring Boot, Node.js, MySQL, and MongoDB. I focus on building scalable, user-friendly applications and love integrating AI for smarter solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              {/* <a 
                href="#contact" 
                className="px-6 py-3 bg-accent text-white rounded-md hover:bg-accent/90 transition-colors"
              >
                Contact Me
              </a> */}
              <a 
                href="#projects" 
                className="px-6 py-3 border border-accent text-accent rounded-md hover:bg-accent/10 transition-colors"
              >
                View Projects
              </a>
            </div>
          </div>
          
          <div className={`justify-self-center md:justify-self-end transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img 
                src="/lovable-uploads/dp.jpeg" 
                alt="Shivam Kumar" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="text-accent" size={28} />
      </a>
    </section>
  );
};

export default Hero;
