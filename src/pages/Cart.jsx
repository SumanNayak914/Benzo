import CartHeader from "../components/cart/CartHeader";
import CartItem from "../components/cart/CartItem";
import CartRecommendations from "../components/cart/CartRecommendations";
import CartSavings from "../components/cart/CartSavings";
import CartSummary from "../components/cart/CartSummary";



export default function Cart() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <CartHeader />
      <CartItem />
      <CartSavings />
     
      <CartRecommendations />
      <CartSummary />
      

     
    </div>
  );
}
