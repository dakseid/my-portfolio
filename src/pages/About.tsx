

const About = () => {
  const skills = [
    "JavaScript", "TypeScript", "React", "Node.js", "Python",
    "HTML5", "CSS3", "Tailwind CSS", "Git", "MongoDB", "PostgreSQL"
  ];

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              About Me
            </h1>
            <p className="text-xl text-gray-600">
              Passionate developer with a love for creating amazing digital experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://via.placeholder.com/400x500"
                alt="Profile"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">Hi, I'm [Your Name]</h2>
              <p className="text-gray-600 mb-6">
                I'm a passionate full-stack developer with over 3 years of experience
                creating web applications and digital solutions. I love turning complex
                problems into simple, beautiful, and intuitive solutions.
              </p>
              <p className="text-gray-600 mb-8">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or enjoying a good cup of coffee
                while reading about the latest web development trends.
              </p>
              
              <h3 className="text-xl font-semibold mb-4">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
