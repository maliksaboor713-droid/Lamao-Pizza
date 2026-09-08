import Pizzacard from "./Pizzacard";
import PizzaCard from "./PizzaCards";
import Image from "next/image";

export default function Pizzalist() {
  return (
    <>
    <div className="grid grid-cols-3 justify-around align-center gap-4 m-5">
      <Pizzacard />
      <Pizzacard />
      <Pizzacard />
      <Pizzacard />
      <Pizzacard />
      <Pizzacard />
      <Pizzacard />
      <Pizzacard />
      <Pizzacard />
      <Pizzacard />
    </div>

    <div className="grid grid grid-cols-4 gap-25 m-25 ">
      <PizzaCard />
      <PizzaCard />
      <PizzaCard />
      <PizzaCard />
      <PizzaCard />
      <PizzaCard />
      <PizzaCard />
      <PizzaCard />
    </div>
    </>
  )
}
