import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Suman from "./pages/suman";
import BottomNav from "./components/BottomNav";
const App = () => {
  const location = useLocation();
  const hideHeaderRoutes = ["/cart", "/login","/suman"];

  return (
    <div>
      {!hideHeaderRoutes.includes(location.pathname) && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/suman" element={<Suman />} />
      </Routes>
      <BottomNav/>
    </div>
  );
};

export default App;
