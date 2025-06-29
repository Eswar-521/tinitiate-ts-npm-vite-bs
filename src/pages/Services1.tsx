import { useState } from "react";
import { Code, Smartphone, Bot, Sun, Moon } from "lucide-react";

const allServices = [
  {
    title: "Web Development",
    icon: <Code size={40} />,
    description: "Building modern, high-performance websites with cutting-edge technologies.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
    category: "Web",
  },
  {
    title: "Mobile Apps",
    icon: <Smartphone size={40} />,
    description: "Responsive and engaging mobile experiences across all platforms.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
    category: "Mobile",
  },
  {
    title: "AI Automation",
    icon: <Bot size={40} />,
    description: "Leveraging AI to automate your workflows and boost productivity.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
    category: "AI",
  },
  {
    title: "Custom CMS",
    icon: <Code size={40} />,
    description: "Tailor-made content management systems for your business needs.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    category: "Web",
  },
  {
    title: "iOS Development",
    icon: <Smartphone size={40} />,
    description: "Premium apps designed specifically for the Apple ecosystem.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop",
    category: "Mobile",
  },
];

const categories = ["All", "Web", "Mobile", "AI"];

export default function Services() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredServices =
    selectedCategory === "All"
      ? allServices
      : allServices.filter((s) => s.category === selectedCategory);

  return (
    <>
      {/* custom CSS keyframes */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes rotate {
          from { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.2); }
          to { transform: rotate(360deg) scale(1); }
        }
        @keyframes rotateReverse {
          from { transform: rotate(360deg) scale(1.2); }
          50% { transform: rotate(180deg) scale(1); }
          to { transform: rotate(0deg) scale(1.2); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        `
      }} />

      <div
        className={`relative min-h-screen transition-all duration-500 ${
          darkMode 
            ? "bg-gradient-to-br from-gray-900 via-emerald-900 to-cyan-900" 
            : "bg-gradient-to-br from-cyan-50 via-emerald-100 to-cyan-200"
        }`}
      >
        {/* animated blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={`absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-30 ${
              darkMode ? "bg-emerald-500" : "bg-cyan-400"
            }`}
            style={{
              animation: 'rotate 20s linear infinite, pulse 4s ease-in-out infinite'
            }}
          />
          <div
            className={`absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-20 ${
              darkMode ? "bg-cyan-500" : "bg-emerald-400"
            }`}
            style={{
              animation: 'rotateReverse 25s linear infinite, pulse 6s ease-in-out infinite'
            }}
          />
        </div>

        {/* toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`fixed top-6 right-6 z-20 p-3 rounded-full transition-all duration-300 shadow-lg ${
            darkMode 
              ? "bg-yellow-500 text-gray-900 hover:bg-yellow-400 hover:scale-110" 
              : "bg-gray-800 text-yellow-400 hover:bg-gray-700 hover:scale-110"
          }`}
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        {/* content */}
        <section className="relative z-10 py-16 px-4">
          <h1 
            className={`text-5xl font-extrabold text-center mb-12 bg-gradient-to-r bg-clip-text text-transparent ${
              darkMode 
                ? "from-emerald-400 to-cyan-400" 
                : "from-cyan-600 to-emerald-600"
            }`}
            style={{
              animation: 'fadeInDown 0.8s ease-out'
            }}
          >
            Our Services
          </h1>

          {/* filters */}
          <div 
            className="flex justify-center gap-4 mb-12 flex-wrap"
            style={{
              animation: 'fadeInUp 0.6s ease-out 0.2s both'
            }}
          >
            {categories.map((category, idx) => (
              <button
                key={category}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both`,
                }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full transition-all duration-300 font-semibold border-2 shadow-lg transform hover:scale-105 active:scale-95 ${
                  selectedCategory === category
                    ? darkMode
                      ? "bg-gradient-to-r from-emerald-500 to-cyan-500 text-white border-emerald-400 shadow-emerald-500/25"
                      : "bg-gradient-to-r from-cyan-500 to-emerald-500 text-white border-cyan-400 shadow-cyan-500/25"
                    : darkMode
                      ? "bg-gray-800/50 border-gray-600 text-gray-200 hover:bg-emerald-500/20 hover:border-emerald-400"
                      : "bg-white/70 border-gray-300 text-gray-700 hover:bg-cyan-500/20 hover:border-cyan-400"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* grid */}
          <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          >
            {filteredServices.map((service, idx) => (
              <div
                key={service.title}
                className="transform transition-all duration-500 opacity-100 scale-100"
                style={{
                  animationDelay: `${idx * 0.1}s`,
                  animation: 'fadeInUp 0.5s ease-out forwards'
                }}
              >
                <div
                  className={`rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm border transition-all duration-300 transform hover:scale-105 hover:rotate-1 ${
                    darkMode 
                      ? "bg-gray-800/40 border-gray-700/50 hover:border-emerald-500/50" 
                      : "bg-white/60 border-gray-200/50 hover:border-cyan-300/50"
                  } perspective-1000`}
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                  onMouseMove={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const rotateX = (y - centerY) / 10;
                    const rotateY = (centerX - x) / 10;
                    e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
                  }}
                >
                  <div className="relative group cursor-pointer">
                    <div className="relative overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className={`absolute inset-0 transition-opacity duration-300 ${
                        darkMode 
                          ? "bg-gradient-to-t from-gray-900/80 to-transparent" 
                          : "bg-gradient-to-t from-gray-900/60 to-transparent"
                      }`} />
                    </div>
                    <div className={`p-6 relative ${
                      darkMode ? "bg-gray-800/60" : "bg-white/80"
                    }`}>
                      <div
                        className={`mb-4 p-3 rounded-full w-fit transform transition-transform duration-300 ${
                          darkMode 
                            ? "bg-emerald-500/20 text-emerald-400" 
                            : "bg-cyan-500/20 text-cyan-600"
                        }`}
                        style={{
                          animation: `float 3s ease-in-out infinite ${idx * 0.2}s`
                        }}
                      >
                        {service.icon}
                      </div>
                      <h3 className={`text-xl font-bold mb-3 ${
                        darkMode ? "text-gray-100" : "text-gray-800"
                      }`}>
                        {service.title}
                      </h3>
                      <p className={`text-sm mb-4 leading-relaxed ${
                        darkMode ? "text-gray-300" : "text-gray-600"
                      }`}>
                        {service.description}
                      </p>
                      <button 
                        className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 shadow-lg transform hover:scale-105 active:scale-95 ${
                          darkMode
                            ? "bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white shadow-emerald-500/25"
                            : "bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-white shadow-cyan-500/25"
                        }`}
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
