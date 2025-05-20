
import { useDesign } from "../contexts/DesignContext";
import { TShirtStyle } from "../types/design";

interface ProductOption {
  id: TShirtStyle;
  name: string;
  description: string;
  imageSrc: string;
}

const products: ProductOption[] = [
  {
    id: "classic",
    name: "Classic Tee",
    description: "100% Cotton",
    imageSrc: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=400&fit=crop"
  },
  {
    id: "v-neck",
    name: "V-Neck Tee",
    description: "95% Cotton, 5% Elastane",
    imageSrc: "https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=500&h=400&fit=crop"
  },
  {
    id: "long-sleeve",
    name: "Long Sleeve",
    description: "100% Cotton",
    imageSrc: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500&h=400&fit=crop"
  }
];

export default function ProductOptions() {
  const { design, updateTShirtStyle } = useDesign();
  
  return (
    <div className="my-6">
      <h2 className="text-xl font-bold mb-3">Select T-Shirt Style</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className={`bg-white rounded-lg shadow-md p-4 text-center cursor-pointer transition-transform hover:-translate-y-1 ${
              design.tshirtStyle === product.id ? "border-2 border-blue-500" : ""
            }`}
            onClick={() => updateTShirtStyle(product.id)}
          >
            <img
              src={product.imageSrc}
              alt={product.name}
              className="h-36 object-contain mx-auto mb-2"
            />
            <h3 className="font-semibold text-lg">{product.name}</h3>
            <p className="text-sm text-gray-600">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
