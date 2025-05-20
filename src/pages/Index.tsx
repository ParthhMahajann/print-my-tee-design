
import { DesignProvider } from "../contexts/DesignContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import TShirtCanvas from "../components/TShirtCanvas";
import DesignTools from "../components/DesignTools";
import ProductOptions from "../components/ProductOptions";
import ColorOptions from "../components/ColorOptions";

export default function Index() {
  return (
    <DesignProvider>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Header />
        
        <main className="flex-grow container mx-auto px-4 py-8">
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-2">Create Your Custom T-Shirt</h1>
            <p className="text-gray-600">Design your perfect t-shirt with our easy-to-use tool.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-8">
            <div className="lg:col-span-3">
              <TShirtCanvas />
            </div>
            <div className="lg:col-span-2">
              <DesignTools />
            </div>
          </div>
          
          <ProductOptions />
          <ColorOptions />
          
          <div className="mt-8 bg-white rounded-lg shadow-md p-6">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <div>
                <h3 className="font-semibold text-lg">Your Custom T-Shirt</h3>
                <p className="text-sm text-gray-600">Estimated delivery: 5-7 business days</p>
              </div>
              <div className="text-right mt-4 sm:mt-0">
                <p className="text-lg">Total: <span className="font-bold text-2xl text-green-600">$24.99</span></p>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    </DesignProvider>
  );
}
