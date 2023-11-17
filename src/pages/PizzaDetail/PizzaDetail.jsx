import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { PizzaPageContext } from "../../context/MyContext";
import { Hero } from "../../components/Hero/Hero";
import { Button } from "@nextui-org/react";

const PizzaDetail = () => {
  // Hooks and context
  const { pizzas, addToCart } = useContext(PizzaPageContext);
  const { id } = useParams();
  const navigate = useNavigate();

  // State
  const [pizzaDetalle, setPizzaDetalle] = useState(null);

  // Functions
  const backToLastPage = () => {
    navigate(-1);
  };

  // Effects
  useEffect(() => {
    const pizza = pizzas.find((pizza) => pizza.id == id);
    setPizzaDetalle(pizza);
  }, [pizzas, id]);

  // Loading state
  if (!pizzaDetalle) {
    return <p>Loading...</p>;
  }

  // Render
  return (
    <div className="pb-64">
      <Hero />
      <button className="p-8 pb-0 w-fit" onClick={backToLastPage}>
        ◀️ Volver a menú principal
      </button>
      <h2 className=" text-4xl text-center font-light pt-4 pb-4">
        Detalle de Pizza {pizzaDetalle.name}
      </h2>
      <div className="h-96 flex flex-wrap justify-center">
        <img
          src={pizzaDetalle.img}
          className=" h-128 w-96 object-cover border rounded-tl-2xl rounded-bl-2xl"
          alt={`pizza ${id}`}
        />
        <div className="flex flex-col px-3 py-3 justify-between w-96 gap-8 border rounded-tr-2xl rounded-br-2xl border-slate-400">
          <h1 className="text-2xl font-medium capitalize">
            {pizzaDetalle.name}
          </h1>
          <p>{pizzaDetalle.desc}</p>
          <ul className="">
            <h3 className="text-xl font-bold">Ingredientes:</h3>
            {pizzaDetalle.ingredients.map((ingredient, index) => (
              <li key={index}>🍕{ingredient}</li>
            ))}
          </ul>
          <div className="flex justify-between items-end">
            <p className="text-2xl font-normal">
              {" "}
              Precio:
              <span className="text-center text-3xl font-extrabold m-3 text-green-600">{`$${pizzaDetalle.price}`}</span>
            </p>
            <Button color="success" onClick={() => addToCart(pizzaDetalle)}>
              Agregar al Carrito
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzaDetail;
