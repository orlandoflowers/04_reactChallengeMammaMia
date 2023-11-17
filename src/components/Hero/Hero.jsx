export const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="text-center py-24 flex flex-col justify-center items-center text-white"
    >
      <h1 className="text-6xl font-bold drop-shadow-md pt-0 mt-10 backdrop-blur">
        🍕 Pizzeria Mamma Mia 🍕
      </h1>
      <p className="text-xl mt-4 backdrop-blur">
        Las pizzas mas sabrosas al mejor precio
      </p>
    </div>
  );
};
