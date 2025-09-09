import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Home, Grid, CircleUserRound, ShoppingCart } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function BottomNav() {
  const [show, setShow] = useState(true);
  const location = useLocation();
  let lastScrollY = 0;

  const navItems = [
    { id: "/", label: "Home", icon: <Home size={22} /> },
    { id: "/category", label: "Categories", icon: <Grid size={22} /> },
    { id: "/profile", label: "profile", icon: <CircleUserRound  size={22} /> },
    { id: "/cart", label: "Cart", icon: <ShoppingCart size={22} /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: show ? 0 : 100 }}
      transition={{ duration: 0.35 }}
      className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-xl rounded-t-2xl border-t border-gray-300 z-50 block md:hidden"
    >
      <div className="flex justify-around py-3">
        {navItems.map((item) => {
          const isActive = location.pathname === item.id;
          return (
            <Link
              key={item.id}
              to={item.id}
              className="flex flex-col items-center space-y-1 transition-all"
            >
              <motion.div
                animate={{ scale: isActive ? 1.2 : 1 }}
                transition={{ duration: 0.3 }}
                className={isActive ? "text-purple-600" : "text-black "}
              >
                {item.icon}
              </motion.div>
              <span
                className={`text-xs ${
                  isActive ? "text-purple-600 font-semibold" : "text-black font-semibold "
                }`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </motion.div>
  );
}
