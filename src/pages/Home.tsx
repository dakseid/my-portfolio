

const Home = () => {
  return (
    <div className="min-h-screen relative hero-background">
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50 dark:bg-black/70"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-white">Hi, I'm Your Name</span>
          </h1>
          
          <p className="text-xl text-gray-200 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            I'm a passionate developer who creates beautiful, functional, and user-centered digital experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/projects"
              className="btn-primary inline-flex items-center gap-2"
            >
              View My Work
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Frontend Development</h3>
            <p className="text-gray-600 dark:text-gray-300">Creating responsive and interactive user interfaces with React, TypeScript, and modern CSS.</p>
          </div>
          
          <div className="glass-card p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">UI/UX Design</h3>
            <p className="text-gray-600 dark:text-gray-300">Designing intuitive and beautiful user experiences that delight and engage users.</p>
          </div>
          
          <div className="glass-card p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Web Performance</h3>
            <p className="text-gray-600 dark:text-gray-300">Optimizing websites for speed, accessibility, and search engine visibility.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
