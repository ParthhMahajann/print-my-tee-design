
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { DesignState, Position, TShirtColor, TShirtStyle } from '../types/design';

interface DesignContextType {
  design: DesignState;
  updateText: (text: string) => void;
  updateFont: (font: string) => void;
  updateTextColor: (color: string) => void;
  updateTShirtStyle: (style: TShirtStyle) => void;
  updateTShirtColor: (color: TShirtColor) => void;
  updateImage: (imageUrl: string | null) => void;
  updatePosition: (position: Position) => void;
  addToCart: () => void;
  saveDesign: () => void;
}

const defaultDesign: DesignState = {
  text: 'Your text here',
  font: 'Arial',
  textColor: '#000000',
  tshirtStyle: 'classic',
  tshirtColor: 'white',
  image: null,
  position: { x: 0, y: 0 }
};

const DesignContext = createContext<DesignContextType | undefined>(undefined);

export function DesignProvider({ children }: { children: ReactNode }) {
  const [design, setDesign] = useState<DesignState>(defaultDesign);

  const updateText = (text: string) => {
    setDesign(prev => ({ ...prev, text }));
  };

  const updateFont = (font: string) => {
    setDesign(prev => ({ ...prev, font }));
  };

  const updateTextColor = (textColor: string) => {
    setDesign(prev => ({ ...prev, textColor }));
  };

  const updateTShirtStyle = (tshirtStyle: TShirtStyle) => {
    setDesign(prev => ({ ...prev, tshirtStyle }));
  };

  const updateTShirtColor = (tshirtColor: TShirtColor) => {
    setDesign(prev => ({ ...prev, tshirtColor }));
  };

  const updateImage = (image: string | null) => {
    setDesign(prev => ({ ...prev, image }));
  };

  const updatePosition = (position: Position) => {
    setDesign(prev => ({ ...prev, position }));
  };

  const addToCart = () => {
    // In a real app, this would add the product to cart
    alert('Product added to cart!');
    console.log('Product details:', design);
  };

  const saveDesign = () => {
    // In a real app, this would save to a database
    alert('Design saved!');
    
    // For demo, save to localStorage
    const savedDesigns = JSON.parse(localStorage.getItem('savedDesigns') || '[]');
    savedDesigns.push({
      ...design,
      id: Date.now(),
      date: new Date().toISOString()
    });
    localStorage.setItem('savedDesigns', JSON.stringify(savedDesigns));
  };

  return (
    <DesignContext.Provider value={{
      design,
      updateText,
      updateFont,
      updateTextColor,
      updateTShirtStyle,
      updateTShirtColor,
      updateImage,
      updatePosition,
      addToCart,
      saveDesign
    }}>
      {children}
    </DesignContext.Provider>
  );
}

export function useDesign() {
  const context = useContext(DesignContext);
  if (context === undefined) {
    throw new Error('useDesign must be used within a DesignProvider');
  }
  return context;
}
