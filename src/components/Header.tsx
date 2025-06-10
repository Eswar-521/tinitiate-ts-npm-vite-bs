import React from 'react';

const Header = () => {
  const text = "ts-npm-vite-bs";

  const colors = [
    '#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24',
    '#f0932b', '#eb4d4b', '#6c5ce7', '#a29bfe',
    '#fd79a8', '#00b894',
  ];

  const getCharStyle = (index: number) => {
    const color = colors[index % colors.length];
    return {
      color: color,
      textShadow: `0 0 10px ${color}, 0 0 20px ${color}60`,
      animationDelay: `${index * 0.1}s`,
    };
  };

  return (
    <div>
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          .float-char {
            animation: float 2s ease-in-out infinite;
          }
          .header-bg {
            background: radial-gradient(circle at center, #1e1e2f 0%, #0f0f1f 100%);
          }
        `}
      </style>

      <header
        className="text-white text-center py-10 header-bg"
        style={{
          boxShadow: "0 0 50px rgba(0, 0, 0, 0.4)",
          borderBottom: "2px solid #ffffff22",
        }}
      >
        <h1 className="m-0 text-5xl font-bold tracking-widest">
          {text.split('').map((char, index) => (
            <span
              key={index}
              className="float-char inline-block transition-all duration-300 hover:scale-125 hover:rotate-12 cursor-pointer"
              style={getCharStyle(index)}
            >
              {char === '-' ? <span className="text-gray-400 mx-1">-</span> : char}
            </span>
          ))}
        </h1>
      </header>
    </div>
  );
};

export default Header;
