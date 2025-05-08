import React, { useState } from 'react';

const XRayImage = ({ frontImage, backImage, shape = 'square', size }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
      const container = e.currentTarget;
      const { left, top } = container.getBoundingClientRect();
      
      const mouseX = e.clientX - left;
      const mouseY = e.clientY - top;
  
      setMousePosition({ x: mouseX, y: mouseY });
    };
  
    return (
      <div
        className="relative w-full h-full"
        onMouseMove={handleMouseMove}
        style={{
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Front image */}
        <img
          src={frontImage}
          alt="front"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
  
        {/* Back image */}
        <img
          src={backImage}
          alt="back"
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{
            clipPath: `circle(${size / 2}px at ${mousePosition.x}px ${mousePosition.y}px)`,
            transition: 'clip-path 0.1s ease',
          }}
        />
  
      </div>
    );
  };

export default XRayImage;