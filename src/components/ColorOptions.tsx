
import { useDesign } from "../contexts/DesignContext";
import { TShirtColor } from "../types/design";

const colors: { color: TShirtColor; hex: string }[] = [
  { color: "white", hex: "#ffffff" },
  { color: "black", hex: "#000000" },
  { color: "blue", hex: "#3498db" },
  { color: "red", hex: "#e74c3c" },
  { color: "green", hex: "#2ecc71" }
];

export default function ColorOptions() {
  const { design, updateTShirtColor } = useDesign();
  
  return (
    <div className="my-6">
      <h2 className="text-xl font-bold mb-3">Select Color</h2>
      <div className="flex flex-wrap gap-3">
        {colors.map(({ color, hex }) => (
          <div
            key={color}
            className={`w-8 h-8 rounded-full cursor-pointer border-2 transition-transform hover:scale-110 ${
              design.tshirtColor === color ? "border-gray-800 scale-110" : "border-transparent"
            }`}
            style={{ backgroundColor: hex }}
            onClick={() => updateTShirtColor(color)}
            title={color.charAt(0).toUpperCase() + color.slice(1)}
          />
        ))}
      </div>
    </div>
  );
}
