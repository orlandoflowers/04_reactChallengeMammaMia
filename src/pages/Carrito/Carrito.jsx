import { useContext, useState } from "react";

import { PizzaPageContext } from "../../context/MyContext";
import { Hero } from "../../components/Hero/Hero";
import { Link } from "react-router-dom";
import { Button } from "@nextui-org/react";

const Carrito = () => {
  const { pizzas, addToCart, removeFromCart, cartItems } =
    useContext(PizzaPageContext);

  const totalSum = cartItems.reduce((acc, item) => acc + item.price, 0);

  // Function to check if pizza is in cart
  const isInCart = (pizza) => {
    return cartItems.some((item) => item.id === pizza.id);
  };

  return (
    <div>
      <Hero />
      <section className="w-full px-64 pt-8 flex items-center flex-col">
        <h2 className="text-4xl text-left">Carrito</h2>

        <h3 className="pb-4">Detalles del pedido</h3>
        {cartItems.map((item, index) => (
          <section
            className="flex justify-between w-100 items-center bg-slate-200 p-4 mb-4"
            key={index}
          >
            <div className="flex items-center gap-2">
              <img className="w-32" src={item.img} alt={item.name} />
              <p className="text-xl font-semibold">Pizza {item.name}</p>
            </div>
            <div className="flex flex-col items-end gap-4">
              <p className="text-center text-3xl font-bold text-green-600">
                $ {item.price}
              </p>
              <div className="flex justify-end gap-4 items-center pb-4">
                <Link to={`/pizza/${item.id}`} className="card-link">
                  Ver detalle
                </Link>
                <Button color="success" onClick={() => addToCart(item)}>
                  Agregar
                </Button>
                <Button color="danger" onClick={() => removeFromCart(item)}>
                  Eliminar
                </Button>
              </div>
            </div>
          </section>
        ))}
        {cartItems.length === 0 && <p>No hay productos en el carrito :P</p>}
        <div className="flex flex-col items-end w-full">
          <p>Cantidad total de pizzas: {cartItems.length}</p>
          <span>
            Total compra:{" "}
            <span className="font-bold text-2xl">${totalSum.toFixed(0)}</span>
          </span>
        </div>
      </section>
    </div>
  );
};

export default Carrito;
