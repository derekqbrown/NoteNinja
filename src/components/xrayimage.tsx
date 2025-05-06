import React, { useState } from 'react';

const XRayImage = ({ frontImage, backImage, shape = 'circle', size = 100 }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
      // Get the position relative to the container
      const container = e.currentTarget;
      const { left, top } = container.getBoundingClientRect();
      
      // Calculate mouse position relative to the container
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
  
        {/* Optionally, create a visible circle */}
        <div
          style={{
            position: 'absolute',
            left: mousePosition.x - size / 2,
            top: mousePosition.y - size / 2,
            width: size,
            height: size,
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            borderRadius: shape === 'circle' ? '50%' : '0%',
            pointerEvents: 'none',
          }}
        ></div>
      </div>
    );
  };

export default XRayImage;