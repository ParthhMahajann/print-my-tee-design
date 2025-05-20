import { useRef, useEffect } from "react";
import { useDesign } from "../contexts/DesignContext";

export default function TShirtCanvas() {
  const { design, updatePosition } = useDesign();
  const designAreaRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  
  // Set t-shirt background color
  const getTshirtBackground = () => {
    return design.tshirtColor;
  };

  // Make design area draggable
  useEffect(() => {
    const designArea = designAreaRef.current;
    const canvas = canvasRef.current;
    if (!designArea || !canvas) return;

    let isDragging = false;
    let offsetX = 0, offsetY = 0;
    
    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true;
      offsetX = e.clientX - designArea.getBoundingClientRect().left;
      offsetY = e.clientY - designArea.getBoundingClientRect().top;
      designArea.style.cursor = 'grabbing';
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      
      const canvasRect = canvas.getBoundingClientRect();
      let newX = e.clientX - canvasRect.left - offsetX;
      let newY = e.clientY - canvasRect.top - offsetY;
      
      // Keep design area within canvas bounds
      newX = Math.max(0, Math.min(newX, canvasRect.width - designArea.offsetWidth));
      newY = Math.max(0, Math.min(newY, canvasRect.height - designArea.offsetHeight));
      
      designArea.style.left = `${newX}px`;
      designArea.style.top = `${newY}px`;
      
      updatePosition({ x: newX, y: newY });
    };
    
    const handleMouseUp = () => {
      isDragging = false;
      designArea.style.cursor = 'grab';
    };

    // Touch events for mobile
    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0];
      isDragging = true;
      offsetX = touch.clientX - designArea.getBoundingClientRect().left;
      offsetY = touch.clientY - designArea.getBoundingClientRect().top;
    };
    
    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      
      const touch = e.touches[0];
      const canvasRect = canvas.getBoundingClientRect();
      let newX = touch.clientX - canvasRect.left - offsetX;
      let newY = touch.clientY - canvasRect.top - offsetY;
      
      // Keep design area within canvas bounds
      newX = Math.max(0, Math.min(newX, canvasRect.width - designArea.offsetWidth));
      newY = Math.max(0, Math.min(newY, canvasRect.height - designArea.offsetHeight));
      
      designArea.style.left = `${newX}px`;
      designArea.style.top = `${newY}px`;
      
      updatePosition({ x: newX, y: newY });
      e.preventDefault(); // Prevent scrolling while dragging
    };
    
    const handleTouchEnd = () => {
      isDragging = false;
    };
    
    designArea.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    
    designArea.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchmove', handleTouchMove);
    document.addEventListener('touchend', handleTouchEnd);
    
    return () => {
      designArea.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      
      designArea.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [updatePosition]);

  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-full">
      <div className="relative mx-auto w-full max-w-[400px] h-[500px]" ref={canvasRef}>
        <div 
          className="w-full h-full bg-contain bg-center bg-no-repeat"
          style={{ 
            backgroundColor: getTshirtBackground(),
            backgroundImage: `url(${getImageForStyle(design.tshirtStyle, design.tshirtColor)})` 
          }}
        ></div>
        <div 
          className="absolute top-[150px] left-[100px] w-[200px] h-[200px] bg-transparent border border-dashed border-gray-400 flex justify-center items-center cursor-grab"
          ref={designAreaRef}
          style={{
            left: `${design.position.x}px`,
            top: `${design.position.y}px`
          }}
        >
          {design.image ? (
            <img 
              src={design.image} 
              alt="User design" 
              className="max-w-full max-h-full"
            />
          ) : (
            <div 
              style={{
                fontFamily: design.font,
                color: design.textColor
              }}
            >
              {design.text}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Helper function to get t-shirt image (in a real app, you'd have actual t-shirt images)
function getImageForStyle(style: string, color: string) {
  // For now return an empty string since we're using backgroundColor
  // In a real app, this would return the URL to the appropriate t-shirt image
  return "";
}
