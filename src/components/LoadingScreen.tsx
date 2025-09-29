const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="text-center">
        {/* Animated Logo/Text */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="gradient-text animate-pulse">Learning</span>
          </h1>
        </div>

        {/* Loading Animation */}
        <div className="relative mb-8">
          {/* Spinning Circle */}
          <div className="w-16 h-16 mx-auto mb-4 relative">
            <div className="absolute inset-0 border-4 border-blue-200 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-transparent border-t-blue-600 rounded-full animate-spin"></div>
          </div>

          {/* Pulse Dots */}
          <div className="flex justify-center space-x-2">
            <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-purple-600 rounded-full animate-bounce delay-100"></div>
            <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce delay-200"></div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="space-y-2">
          <p className="text-lg text-gray-600 animate-pulse">Loading amazing experiences...</p>
          <div className="flex justify-center space-x-1">
            <span className="text-sm text-gray-500 animate-pulse">●</span>
            <span className="text-sm text-gray-500 animate-pulse delay-500">●</span>
            <span className="text-sm text-gray-500 animate-pulse delay-1000">●</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-8 w-64 mx-auto">
          <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full loading-progress"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;