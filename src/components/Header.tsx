
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-[#2c3e50] text-white py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">PrintMyTee</div>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:text-gray-300 transition">Home</Link></li>
            <li><Link to="/" className="hover:text-gray-300 transition">Design</Link></li>
            <li><Link to="/" className="hover:text-gray-300 transition">Products</Link></li>
            <li><Link to="/" className="hover:text-gray-300 transition">About</Link></li>
            <li><Link to="/" className="hover:text-gray-300 transition">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
