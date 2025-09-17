import { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

const roles = ["Spring Boot Developer",
  "Software Engineer", "Full Stack Engineer"];

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);

  // Fade-in effect
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Typing effect for roles
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center bg-gradient-to-br from-primary/10 via-background to-accent/5"
    >
      {/* Abstract background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Section - Text */}
          <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-snug">
              <span className="block">Hi, I'm</span>
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                Shivam Kumar
              </span>
            </h1>
            
            {/* Dynamic role */}
            <h2 className="text-2xl md:text-3xl font-medium mb-6 text-gray-700 h-10 transition-all duration-500">
              {roles[currentRole]}
            </h2>

            <p className="text-lg text-gray-600 mb-8 max-w-lg leading-relaxed">
              I’m a software engineer skilled in <span className="font-semibold text-accent">React</span>, 
              <span className="font-semibold text-accent"> Spring Boot</span>, <span className="font-semibold text-accent">Node.js</span>, 
              <span className="font-semibold text-accent"> MySQL</span>, and <span className="font-semibold text-accent">MongoDB</span>. 
              I love building scalable, user-friendly apps and integrating AI for smarter solutions.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <a 
                href="#projects" 
                className="px-6 py-3 bg-accent text-white rounded-md shadow-md hover:shadow-lg hover:scale-105 transition-transform"
              >
                🚀 View Projects
              </a>
            </div>
          </div>
          
          {/* Right Section - Image */}
          <div className={`justify-self-center md:justify-self-end transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl group">
              <img 
                src="/lovable-uploads/dp.jpeg" 
                alt="Shivam Kumar" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full ring-4 ring-accent/40 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Down Arrow */}
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce flex flex-col items-center text-accent"
        aria-label="Scroll down"
      >
        <ArrowDown size={28} />
        <span className="text-xs mt-1">Scroll</span>
      </a>
    </section>
  );
};

export default Hero;
