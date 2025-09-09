import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function CartHeader() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Goes back to previous page in history
  };

  return (
    <div className="flex items-center justify-between px-4 py-3 bg-white">
      <div className="flex items-center justify-center space-x-2">
        <button 
          onClick={handleBackClick}
          className="text-lg mt-3 rounded-full p-1 shadow-lg bg-white hover:bg-gray-50 transition-colors"
        >
          <ChevronLeft />
        </button>
        <h1 className="font-semibold text-base md:pl-6 pt-3">Your Cart</h1>
        <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-1 mt-3 rounded">
          SAVED ₹12
        </span>
      </div>
    </div>
  );
}