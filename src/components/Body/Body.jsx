import { useContext, useState } from "react";

import { PizzaPageContext } from "../../context/MyContext";
import { Link, useParams } from "react-router-dom";
import {
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@nextui-org/react";

const MenuPizzas = () => {
  //needed from context
  const { pizzas, addToCart, removeFromCart, cartItems } =
    useContext(PizzaPageContext);
  const { id } = useParams();

  // State for button hover
  const [isHovered, setIsHovered] = useState(false);

  //for modal from nextui
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Function to check if pizza is in cart
  const isInCart = (pizza) => {
    return cartItems.some((item) => item.id === pizza.id);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4  px-4 md:px-8 py-8">
        {pizzas.map((pizza) => (
          <div
            key={pizza.id}
            className="border border-gray-300 rounded-2xl pb-0"
          >
            <img
              className="rounded-2xl h-48 rounded-bl-none rounded-br-none w-full object-cover"
              src={pizza.img}
              alt={`pizza ${id}`}
            />
            <div className="px-4">
              <div className="flex justify-between items-center pt-4 ">
                <h1 className="text-2xl font-bold capitalize text-gray-900 overflow-ellipsis overflow-hidden whitespace-nowrap">
                  {pizza.name}
                </h1>

                <p className="text-center text-3xl font-extrabold text-green-600">{`$${pizza.price}`}</p>
              </div>
              <h3 className="text-lg font-semibold mt-4 mb-2">Ingredientes:</h3>
              <ul className="ml-4 pb-8">
                {pizza.ingredients.map((ingredient, index) => (
                  <li className="font-light" key={index}>
                    🍕 {ingredient}
                  </li>
                ))}
              </ul>
              <div className="flex justify-end gap-4 items-center pb-4">
                <Link to={`/pizza/${pizza.id}`} className="card-link">
                  Ver mas
                </Link>

                <Button
                  color="success"
                  onClick={() => {
                    addToCart(pizza);
                    onOpen();
                    setTimeout(onClose, 2500); // close modal after 1 second
                  }}
                >
                  Agregar
                </Button>

                {isInCart(pizza) && (
                  <Button color="danger" onClick={() => removeFromCart(pizza)}>
                    Eliminar
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
        ;
      </div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalHeader>Genial</ModalHeader>
          <ModalBody>
            <img
              className="border rounded-2xl"
              src="https://cdn.dribbble.com/users/1787323/screenshots/9712559/cute_pizza-02.png"
              alt=""
            />
            <p className="pb-12">La pizza ha sido agregada a tu carrito.</p>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default MenuPizzas;
