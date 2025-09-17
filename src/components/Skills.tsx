import { FaJava, FaReact, FaNodeJs } from "react-icons/fa";
import { SiSpringboot, SiMongodb, SiC, SiMysql } from "react-icons/si";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", icon: <FaJava className="text-orange-600" /> },
        { name: "C", icon: <SiC className="text-blue-500" /> }
      ]
    },
    {
      title: "Web Technologies",
      skills: [
         { name: "Spring Boot", icon: <SiSpringboot className="text-green-700" /> },
        { name: "React.js", icon: <FaReact className="text-sky-500" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
        { name: "SQL", icon: <SiMysql className="text-blue-600" /> }
      ]
    },
    {
      title: "Other Skills",
      skills: [
        { name: "Data Structures & Algorithms", icon: null },
        { name: "Soft Skills", icon: null }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Skills</h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-gray-600">My technical expertise and capabilities</p>
        </div>
        
        {/* Skills Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-all duration-300 border-t-4 border-accent"
            >
              <h3 className="text-lg font-bold text-center mb-4 text-gray-800">
                {category.title}
              </h3>
              
              <div className="flex flex-col gap-3">
                {category.skills.map((skill, i) => (
                  <div 
                    key={i} 
                    className="flex items-center gap-3 px-3 py-2 bg-gray-100 rounded-lg hover:bg-accent/10 transition"
                  >
                    {skill.icon && <span className="text-xl">{skill.icon}</span>}
                    <span className="text-gray-700 font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Skills */}
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <h3 className="text-xl font-bold mb-6">Additional Skills</h3>
          
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Problem Solving", 
              "Team Collaboration", 
              "Project Management", 
              "Communication", 
              "Adaptability", 
              "Critical Thinking"
            ].map((skill, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-accent to-accent/70 text-white rounded-full shadow-sm hover:shadow-lg transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
