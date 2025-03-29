
const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C++", "JavaScript", "HTML/CSS"]
    },
    {
      title: "Web Technologies",
      skills: ["React.js", "Node.js", "MongoDB"]
    },
    {
      title: "Other Skills",
      skills: ["Data Structures and Algorithms", "Soft Skills"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Skills</h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-gray-600">My technical expertise and capabilities</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-lg font-bold text-center mb-4 pb-2 border-b border-gray-100">
                {category.title}
              </h3>
              
              <div className="space-y-3">
                {category.skills.map((skill, i) => (
                  <div key={i} className="relative">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700">{skill}</span>
                    </div>
                    
                    <div className="h-2 w-full bg-gray-200 rounded-full">
                      <div 
                        className="h-full bg-accent rounded-full"
                        style={{ 
                          width: `${85 - (i * 10)}%`, 
                          transition: 'width 1s ease-in-out' 
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <h3 className="text-xl font-bold mb-6">Additional Skills</h3>
          
          <div className="flex flex-wrap justify-center gap-3">
            {["Problem Solving", "Team Collaboration", "Project Management", "Communication", "Adaptability", "Critical Thinking"].map((skill, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-white border border-gray-200 rounded-full text-gray-700 shadow-sm hover:shadow hover:border-accent transition-all duration-300"
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
