"use client";

import Image from "next/image";
import { useCart } from "../../context/CartContext";

export default function CartPage() {
const {
cart,
cartTotal,
updateQuantity,
removeFromCart,
} = useCart();

// Empty cart
if (cart.length === 0) {
return (
<main className="min-h-screen flex flex-col items-center justify-center">
<h1 className="text-4xl font-bold text-gray-800">
Your Cart is Empty
</h1>

    <p className="mt-4 text-gray-600">
      Add some delicious pizzas to your cart.
    </p>
  </main>
);


}

return (
<main className="min-h-screen flex flex-col items-center p-6">

  {/* =========================
      CART TITLE
  ========================== */}

  <h1 className="text-4xl font-bold mb-8">
    Your Cart
  </h1>


  {/* =========================
      CART + TOTALS
  ========================== */}

  <div className="w-full max-w-6xl flex flex-col gap-8">


    {/* =========================
        PIZZA CART
    ========================== */}

    <div className="w-full flex flex-col gap-4">

      {cart.map((item, index) => {

        const itemTotal =
          Number(item.price || 0) *
          Number(item.quantity || 0);

        return (
          <div
            key={`${item.id}-${item.size}-${index}`}
            className="
              w-full
              flex
              flex-col
              md:flex-row
              items-center
              gap-5
              p-5
              bg-orange-700
              text-white
              rounded-2xl
              shadow-md
            "
          >

            {/* CART # */}

            <div className="w-12 text-center">
              <span className="text-lg font-bold">
                #{index + 1}
              </span>
            </div>


            {/* IMAGE */}

            <div className="relative w-28 h-28 shrink-0">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover rounded-xl"
              />
            </div>


            {/* NAME + DETAILS */}

            <div className="flex-1 text-center md:text-left">

              <h2 className="text-2xl font-bold">
                {item.name}
              </h2>

              <p className="text-sm opacity-80 mt-1">
                {item.desc}
              </p>

              <p className="mt-2 font-semibold">
                Size: {item.sizeName}
              </p>


              {/* INGREDIENTS */}

              {item.selectedIngredients?.length > 0 && (
                <div className="mt-2">

                  <p className="font-semibold">
                    Extra Ingredients:
                  </p>

                  <div className="flex flex-wrap gap-2 mt-1">
                    {item.selectedIngredients.map(
                      (ingredient) => (
                        <span
                          key={ingredient.id}
                          className="
                            bg-blue-900
                            px-2
                            py-1
                            rounded-md
                            text-sm
                          "
                        >
                          {ingredient.name} +
                          ${ingredient.price}
                        </span>
                      )
                    )}
                  </div>

                </div>
              )}

            </div>


            {/* QUANTITY */}

            <div className="flex flex-col items-center">

              <label className="font-semibold mb-2">
                Quantity
              </label>

              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) =>
                  updateQuantity(
                    item.id,
                    item.size,
                    Number(e.target.value)
                  )
                }
                className="
                  w-20
                  p-2
                  text-center
                  text-black
                  rounded-md
                  outline-none
                "
              />

            </div>


            {/* PRICE */}

            <div className="flex flex-col items-center min-w-28">

              <p className="text-sm">
                Price
              </p>

              <p className="text-xl font-bold">
                ${Number(item.price).toFixed(2)}
              </p>

              <p className="text-sm mt-1">
                Total
              </p>

              <p className="text-2xl font-bold">
                ${itemTotal.toFixed(2)}
              </p>

            </div>


            {/* REMOVE */}

            <button
              onClick={() =>
                removeFromCart(item.id, item.size)
              }
              className="
                px-4
                py-2
                bg-red-600
                hover:bg-red-700
                rounded-lg
                font-semibold
              "
            >
              Remove
            </button>

          </div>
        );
      })}

    </div>


    {/* =========================
        TOTALS
    ========================== */}

    <div
      className="
        w-full
        flex
        flex-col
        items-end
        bg-blue-900
        text-white
        rounded-2xl
        p-6
        shadow-lg
      "
    >

      <div className="w-full md:w-96 flex flex-col gap-3">

        {/* TOTAL OF ALL PIZZAS */}

        <div className="flex justify-between text-xl">
          <span>
            Total of all pizzas:
          </span>

          <span className="font-bold">
            ${cartTotal.toFixed(2)}
          </span>
        </div>


        {/* SUBTOTAL */}

        <div className="flex justify-between text-xl">
          <span>
            Subtotal:
          </span>

          <span className="font-bold">
            ${cartTotal.toFixed(2)}
          </span>
        </div>


        <div className="border-t border-white/30 pt-3 mt-2 flex justify-between text-2xl">

          <span className="font-bold">
            Total:
          </span>

          <span className="font-bold text-orange-400">
            ${cartTotal.toFixed(2)}
          </span>

        </div>


        {/* CHECKOUT */}

        <button
          className="
            mt-4
            w-full
            bg-orange-600
            hover:bg-orange-500
            p-3
            rounded-xl
            text-xl
            font-bold
          "
        >
          Checkout
        </button>

      </div>

    </div>

  </div>

</main>


);
}