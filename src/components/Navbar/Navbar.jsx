import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { PizzaPageContext } from "../../context/MyContext";

const NavBar = () => {
  const { cartItems } = useContext(PizzaPageContext);

  const totalSum = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <nav className="flex flex-row gap-5 justify-around items-center bg-green-400 bg-opacity-60 backdrop-blur-md flex-wrap px-5 nav_container fixed w-full z-10 py-2">
      <div>
        <NavLink className="text-2xl font-semibold" to={"/"}>
          🍕 Mamma Mia 🍕
        </NavLink>
      </div>
      <ul className="flex gap-6">
        <span>
          Total compra:{" "}
          <span className="font-bold">${totalSum.toFixed(0)}</span>
        </span>
        <span>
          Productos en Carrito:{" "}
          <span className="font-bold">{cartItems.length}</span>{" "}
        </span>
        <NavLink to={"/carrito"}>🛒Ir al Carrito</NavLink>
      </ul>
    </nav>
  );
};

export default NavBar;
