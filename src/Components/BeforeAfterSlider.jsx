import React, { useState, useRef, useEffect } from 'react';

export default function BeforeAfterSlider({ 
  beforeImage, 
  afterImage, 
  beforeAlt = "Before", 
  afterAlt = "After",
  className = ""
}) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    updateSliderPosition(e);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    updateSliderPosition(e);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    updateSliderPosition(e.touches[0]);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    updateSliderPosition(e.touches[0]);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const updateSliderPosition = (e) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    
    // Clamp between 0 and 100
    const clampedPercentage = Math.max(0, Math.min(100, percentage));
    setSliderPosition(clampedPercentage);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging]);

  return (
    <div 
      ref={containerRef}
      className={`before-after-slider position-relative overflow-hidden ${className}`}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
    >
      {/* Before Image*/}
      <div className="before-image-container">
        <img
          src={beforeImage}
          alt={beforeAlt}
          className="w-100 h-100 object-fit-cover"
        />
      </div>

      {/* After Image */}
      <div 
        className="after-image-container position-absolute top-0 start-0"
        style={{ 
          width: `${sliderPosition}%`,
          clipPath: 'inset(0 0 0 0)'
        }}
      >
        <img
          src={afterImage}
          alt={afterAlt}
          className="w-100 h-100 object-fit-cover"
        />
      </div>

      {/* Slider Line */}
      <div 
        className="slider-line position-absolute top-0"
        style={{ 
          left: `${sliderPosition}%`,
          transform: 'translateX(-50%)'
        }}
      >
        <div className="slider-handle ">
          <div className="slider-circle dark-bg">
            <i className="bi bi-chevron-left text-white"></i>
            <i className="bi bi-chevron-right text-white"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
