

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://i.pinimg.com/736x/c6/0c/0c/c60c0c960a41d79213ba0460726b90a5.jpg",
      github: "#",
      demo: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management tool with real-time updates.",
      tech: ["React", "Firebase", "Tailwind CSS"],
      image: "https://i.pinimg.com/1200x/29/55/60/2955605cbece2fdf0797fa5ba0e1a0d2.jpg",
      github: "#",
      demo: "#"
    },
    {
      title: "Weather Dashboard",
      description: "A responsive weather application with location-based forecasts.",
      tech: ["JavaScript", "API Integration", "CSS3"],
      image: "https://i.pinimg.com/1200x/9d/09/c7/9d09c73ec5decc01aa987de7d053fef4.jpg",
      github: "#",
      demo: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
