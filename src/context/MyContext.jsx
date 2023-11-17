import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

export const PizzaPageContext = createContext();

export const PizzaPageProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  //apend item
  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeFromCart = (pizzaToRemove) => {
    setCartItems((prevItems) => {
      const index = prevItems.findIndex((item) => item.id === pizzaToRemove.id);
      if (index !== -1) {
        const newItems = [...prevItems];
        newItems.splice(index, 1);
        return newItems;
      }
      // If item not found, return the previous items
      return prevItems;
    });
  };

  //fetch from public json
  const getPizzas = async () => {
    try {
      const res = await fetch("/pizzas.json");
      const data = await res.json();
      setPizzas(data);
    } catch (error) {
      console.error("Error fetching pizzas:", error);
    }
  };

  useEffect(() => {
    getPizzas();
  }, []);

  //el provider
  const dataProvider = {
    pizzas,
    getPizzas,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <PizzaPageContext.Provider value={dataProvider}>
      {children}
    </PizzaPageContext.Provider>
  );
};

PizzaPageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
