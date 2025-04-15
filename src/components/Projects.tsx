
import { Github, Link } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Projects = () => {
  const projects = [
    {
      title: "Crave-kart",
      description: "A full-stack food delivery application with modern UI and seamless ordering experience",
      features: [
        "User authentication with secure login and registration flow",
        "Interactive menu browsing with categories and search functionality",
        "Real-time order tracking and status updates",
        "Cart management with quantity adjustments and order summary",
        "Responsive design for optimal experience across all devices",
        " Smart AI Chatbot – Our website includes an intelligent AI-powered chatbot that helps users"
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/Shivam7262/Crave-kart.git",
      demo: "https://crave-kart.vercel.app/"
    },
    {
      title: "Expenza",
      description: "MERN stack project for expense tracking and management",
      features: [
        "Add & Categorize Expenses – Easily log expenses with names and categories for better organization.",
        "View & Search Transactions – Quickly find transactions by name or category.",
        "Split Feature – Manage shared expenses by tracking who paid and who owes.",
        "Balance Tracking – Automatically categorize amounts as owed (-) or paid (+).",
        "Real-time Final Balance – Always see the updated financial summary."
      ],
      technologies: ["MongoDB", "Express", "React", "Node.js"],
      github: "https://github.com/Shivam7262/Expenza",
      demo: "https://expenzaa.netlify.app/"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and Tailwind CSS",
      features: [
        "Responsive Design - Optimized for all devices",
        "Modern UI/UX - Clean and intuitive interface",
        "Interactive Elements - Engaging user experience",
        "Performance Optimized - Fast loading times"
      ],
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/Shivam7262/portfolio",
      demo: "https://portfolio-liart-five-69.vercel.app/"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Projects</h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-gray-600">Here are some of the projects I've worked on</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 stagger-animation h-full"
            >
              <div className="h-3 bg-accent"></div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <h4 className="font-semibold text-sm text-gray-700 mb-2">Key Features:</h4>
                <ul className="space-y-2 mb-4">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <div className="min-w-[16px] h-5 flex items-center justify-center mt-0.5">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                      </div>
                      <p className="text-sm text-gray-700 ml-2">{feature}</p>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-2 py-1 bg-gray-200 rounded-md text-xs text-gray-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 mt-4">
                  <a 
                    href={project.github} 
                    className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-accent transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} />
                    <span>Source</span>
                  </a>
                  <a 
                    href={project.demo} 
                    className="flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-accent transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Link size={16} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
