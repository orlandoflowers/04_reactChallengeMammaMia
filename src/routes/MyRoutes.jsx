import { Route, Routes } from "react-router-dom";
import Carrito from "../pages/Carrito/Carrito";
import PizzaDetail from "../pages/PizzaDetail/PizzaDetail";
import Home from "../components/Home/Home";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/pizza/:id" element={<PizzaDetail />}></Route>
      <Route path="/carrito" element={<Carrito />}></Route>
    </Routes>
  );
};

export default MyRoutes;
