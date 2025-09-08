import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

import Footer from "./components/Footer";
import BottomNav from "./components/BottomNav";
import ProfilePage from "./pages/ProfilePage";
import Category from "./pages/Category";
const App = () => {
  const location = useLocation();
  const hideHeaderRoutes = ["/cart", "/login","/suman","/profile"];
  const bottomnavRoutes = ["/", "/cart", "/profile", "/category"];

  return (
    <div>
      {!hideHeaderRoutes.includes(location.pathname) && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/category" element={<Category />} />
      </Routes>
      <Footer/>
      {bottomnavRoutes.includes(location.pathname) && <BottomNav />}
    </div>
  );
};

export default App;
