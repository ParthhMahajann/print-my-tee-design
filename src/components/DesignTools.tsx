
import { ChangeEvent } from "react";
import { useDesign } from "../contexts/DesignContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";

export default function DesignTools() {
  const { 
    design, 
    updateText, 
    updateFont, 
    updateTextColor, 
    updateImage,
    addToCart,
    saveDesign
  } = useDesign();

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    updateText(e.target.value);
  };

  const handleFontChange = (e: ChangeEvent<HTMLSelectElement>) => {
    updateFont(e.target.value);
  };

  const handleColorChange = (e: ChangeEvent<HTMLInputElement>) => {
    updateTextColor(e.target.value);
  };

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (event) => {
      if (typeof event.target?.result === 'string') {
        updateImage(event.target.result);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-full lg:w-auto">
      <h2 className="text-xl font-bold mb-4">Customize Your Design</h2>
      
      <div className="mb-4">
        <Label htmlFor="text-content">Text:</Label>
        <Input 
          id="text-content" 
          type="text" 
          value={design.text} 
          onChange={handleTextChange} 
          className="mt-1"
        />
      </div>
      
      <div className="mb-4">
        <Label htmlFor="font-family">Font:</Label>
        <select 
          id="font-family" 
          value={design.font} 
          onChange={handleFontChange}
          className="w-full p-2 mt-1 border border-gray-300 rounded-md"
        >
          <option value="Arial">Arial</option>
          <option value="Verdana">Verdana</option>
          <option value="Helvetica">Helvetica</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Courier New">Courier New</option>
        </select>
      </div>
      
      <div className="mb-4">
        <Label htmlFor="text-color">Text Color:</Label>
        <Input 
          id="text-color" 
          type="color" 
          value={design.textColor} 
          onChange={handleColorChange} 
          className="w-full h-10 mt-1"
        />
      </div>
      
      <div className="mb-6">
        <Label htmlFor="image-upload" className="block mb-1">Upload Image:</Label>
        <div className="flex items-center">
          <label className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition-colors">
            Choose File
            <input 
              type="file" 
              id="image-upload" 
              accept="image/*" 
              onChange={handleImageUpload} 
              className="hidden"
            />
          </label>
          <span className="ml-3 text-sm text-gray-600">
            {design.image ? 'Image uploaded' : 'No file chosen'}
          </span>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <Button 
          onClick={addToCart} 
          className="bg-green-500 hover:bg-green-600"
        >
          Add to Cart
        </Button>
        <Button 
          onClick={saveDesign} 
          className="bg-blue-500 hover:bg-blue-600"
        >
          Save Design
        </Button>
      </div>
    </div>
  );
}
