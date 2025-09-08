export default function CartHeader() {
  return (
    <div className="flex items-center justify-between px-4 py-3 border-b bg-white">
      <div className="flex items-center space-x-2">
        <button className="text-lg">←</button>
        <h1 className="font-semibold text-base">Your Cart</h1>
        <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
          SAVED ₹12
        </span>
      </div>
    </div>
  );
}
