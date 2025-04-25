import React, { useEffect, useState } from 'react';

// Define component props interface
interface ErrorPageProps {
  homeUrl?: string;
  contactUrl?: string;
}

// Define interface for generated line properties
interface AnimatedLine {
  top: string;
  delay: string;
  opacity: string;
}

const ErrorPage404: React.FC<ErrorPageProps> = ({ 
  homeUrl = "/", 
  contactUrl = "/contact"
}) => {
  const [lines, setLines] = useState<AnimatedLine[]>([]);
  
  useEffect(() => {
    // Generate random animated lines
    const generatedLines = Array.from({ length: 10 }, () => ({
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 8}s`,
      opacity: `${Math.random() * 0.5}`
    }));
    
    setLines(generatedLines);
    
    // Add animation keyframes to document
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes moveLine {
        0% { transform: translateY(-100%); }
        100% { transform: translateY(100vh); }
      }
      
      @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
        100% { transform: translateY(0px); }
      }
      
      .animate-float {
        animation: float 6s ease-in-out infinite;
      }
      
      .animate-line {
        animation: moveLine 8s infinite linear;
      }
      
      .bg-gradient-premium {
        background-image: radial-gradient(circle at 10% 20%, rgba(100, 100, 100, 0.2) 0%, transparent 30%),
                          radial-gradient(circle at 90% 80%, rgba(120, 120, 120, 0.2) 0%, transparent 30%),
                          linear-gradient(135deg, rgba(30, 30, 30, 1) 0%, rgba(10, 10, 10, 1) 100%);
      }
      
      .text-gradient-silver {
        background: linear-gradient(135deg, #C0C0C0, #E8E8E8, #A0A0A0);
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;
      }
      
      .text-gradient-shadow {
        background: linear-gradient(135deg, #303030, #505050);
        -webkit-background-clip: text;
        background-clip: text;
      }
      
      .btn-gradient {
        background: linear-gradient(135deg, #303030, #1a1a1a);
        transition: all 0.3s ease;
      }
      
      .btn-gradient:hover {
        background: linear-gradient(135deg, #404040, #2a2a2a);
        transform: translateY(-3px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
        border-color: rgba(192, 192, 192, 0.5);
      }
      
      .divider-gradient {
        background: linear-gradient(90deg, transparent, rgba(192, 192, 192, 0.5), transparent);
      }
      
      .line-gradient {
        background: linear-gradient(90deg, transparent, rgba(192, 192, 192, 0.8), transparent);
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#121212] overflow-hidden relative font-sans">
      {/* Background with gradients */}
      <div className="absolute inset-0 bg-gradient-premium -z-10" />
      
      {/* Animated lines container */}
      <div className="absolute inset-0 opacity-20 overflow-hidden -z-10">
        {/* Static lines */}
        {[10, 25, 40, 55, 70, 85].map((top, index) => (
          <div
            key={`static-line-${index}`}
            className="absolute w-full h-px line-gradient animate-line"
            style={{ 
              top: `${top}%`, 
              animationDelay: `${index * 1.5}s` 
            }}
          />
        ))}
        
        {/* Dynamic random lines */}
        {lines.map((line, index) => (
          <div
            key={`dynamic-line-${index}`}
            className="absolute w-full h-px line-gradient animate-line"
            style={{ 
              top: line.top, 
              opacity: line.opacity,
              animationDelay: line.delay 
            }}
          />
        ))}
      </div>
      
   
      <div className="w-4/5 max-w-4xl text-center p-10 bg-opacity-70 bg-[#141414] border border-gray-500/30 rounded-2xl shadow-2xl backdrop-blur-md">
        <div className="animate-float">
          <h1 className="text-9xl font-bold mb-0 text-gradient-silver relative shadow-lg">
            404
            <span className="absolute inset-x-0 top-0.5 text-gradient-shadow opacity-30 -z-10 blur-md">
              404
            </span>
          </h1>
          <h2 className="text-2xl text-[#C0C0C0] my-5">
            Page Not Found
          </h2>
        </div>
        
        <p className="text-gray-400 text-base mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        
        <div className="w-3/5 h-px mx-auto my-8 divider-gradient" />
        
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={homeUrl}
            className="inline-block px-8 py-3 text-[#C0C0C0] rounded-full border border-gray-500/30 btn-gradient font-medium"
          >
            Return Home
          </a>
        
        </div>
      </div>
    </div>
  );
};

export default ErrorPage404;