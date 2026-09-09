"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const pizza = {
  id: 1,
  name: "Margherita Pizza",
  image: "/image/Pizza/pizza (1).jpg",
  price: [28, 35, 42],
  desc: "Classic Italian pizza with tomato sauce, fresh mozzarella, basil, and a drizzle of olive oil.",
  extraIngredients: [
    { id: "1-1", name: "Fresh Basil", price: 1 },
    { id: "1-2", name: "Buffalo Mozzarella", price: 4 },
    { id: "1-3", name: "Cherry Tomatoes", price: 2 },
  ],
};

const sizes = ["Small", "Medium", "Large"];

export default function OrderPage() {
  const [selectedSize, setSelectedSize] = useState("Medium");
  const [quantity, setQuantity] = useState(1);
  const [selectedExtras, setSelectedExtras] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [orderPlaced, setOrderPlaced] = useState(false);

  const sizeIndex = sizes.indexOf(selectedSize);

  const pizzaPrice = pizza.price[sizeIndex];

  const extrasPrice = useMemo(() => {
    return selectedExtras.reduce((total, id) => {
      const extra = pizza.extraIngredients.find((item) => item.id === id);
      return total + (extra?.price || 0);
    }, 0);
  }, [selectedExtras]);

  const itemTotal = (pizzaPrice + extrasPrice) * quantity;

  const deliveryFee = 5;

  const total = itemTotal + deliveryFee;

  const toggleExtra = (id) => {
    setSelectedExtras((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setOrderPlaced(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <main className="min-h-screen bg-[#fffaf5] text-[#24150e]">

      {/* Header */}
      <section className="bg-[#24150e] px-5 py-14 text-center text-white">
        <span className="inline-block rounded-full bg-[#e63946] px-5 py-2 text-sm font-semibold">
          🍕 Fresh & Hot
        </span>

        <h1 className="mt-5 text-4xl font-extrabold sm:text-5xl md:text-6xl">
          Complete Your <span className="text-[#f4a261]">Order</span>
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-gray-300">
          Customize your pizza, enter your delivery details, and
          enjoy your favorite pizza fresh from our kitchen.
        </p>
      </section>

      {/* Success Message */}
      {orderPlaced && (
        <div className="mx-auto mt-8 max-w-6xl px-5">
          <div className="rounded-2xl border border-green-200 bg-green-50 p-5 text-green-800">
            <div className="flex items-start gap-4">
              <div className="text-3xl">🎉</div>

              <div>
                <h2 className="font-bold">
                  Order placed successfully!
                </h2>

                <p className="mt-1 text-sm">
                  Thank you for your order. Your pizza is being prepared.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main */}
      <section className="px-5 py-12 sm:py-16">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.5fr_0.8fr]">

          {/* LEFT SIDE */}
          <div className="space-y-8">

            {/* Delivery Information */}
            <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">
              <div className="mb-7">
                <span className="text-xs font-bold tracking-[0.2em] text-[#e63946]">
                  STEP 01
                </span>

                <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">
                  Delivery Information
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                  Tell us where you want your delicious pizza delivered.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">

                <div>
                  <label
                    htmlFor="firstName"
                    className="mb-2 block text-sm font-semibold"
                  >
                    First Name
                  </label>

                  <input
                    id="firstName"
                    type="text"
                    placeholder="John"
                    required
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition focus:border-[#e63946] focus:bg-white focus:ring-4 focus:ring-[#e63946]/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Last Name
                  </label>

                  <input
                    id="lastName"
                    type="text"
                    placeholder="Doe"
                    required
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition focus:border-[#e63946] focus:bg-white focus:ring-4 focus:ring-[#e63946]/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition focus:border-[#e63946] focus:bg-white focus:ring-4 focus:ring-[#e63946]/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    placeholder="+92 300 1234567"
                    required
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition focus:border-[#e63946] focus:bg-white focus:ring-4 focus:ring-[#e63946]/10"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="address"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Delivery Address
                  </label>

                  <input
                    id="address"
                    type="text"
                    placeholder="House #, Street, Area"
                    required
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition focus:border-[#e63946] focus:bg-white focus:ring-4 focus:ring-[#e63946]/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="city"
                    className="mb-2 block text-sm font-semibold"
                  >
                    City
                  </label>

                  <input
                    id="city"
                    type="text"
                    placeholder="Gujranwala"
                    required
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition focus:border-[#e63946] focus:bg-white focus:ring-4 focus:ring-[#e63946]/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="postalCode"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Postal Code
                  </label>

                  <input
                    id="postalCode"
                    type="text"
                    placeholder="52250"
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition focus:border-[#e63946] focus:bg-white focus:ring-4 focus:ring-[#e63946]/10"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="notes"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Delivery Notes{" "}
                    <span className="font-normal text-gray-400">
                      (Optional)
                    </span>
                  </label>

                  <textarea
                    id="notes"
                    rows={4}
                    placeholder="Any special instructions for delivery?"
                    className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition focus:border-[#e63946] focus:bg-white focus:ring-4 focus:ring-[#e63946]/10"
                  />
                </div>

              </div>
            </div>

            {/* Pizza Customization */}
            <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">
              <div className="mb-7">
                <span className="text-xs font-bold tracking-[0.2em] text-[#e63946]">
                  STEP 02
                </span>

                <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">
                  Customize Your Pizza
                </h2>
              </div>

              {/* Pizza */}
              <div className="flex flex-col gap-5 sm:flex-row">

                <div className="relative h-48 w-full overflow-hidden rounded-2xl sm:h-40 sm:w-40">
                  <Image
                    src={pizza.image}
                    alt={pizza.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-extrabold">
                    {pizza.name}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    {pizza.desc}
                  </p>

                  <div className="mt-4 text-xl font-extrabold text-[#e63946]">
                    ${pizzaPrice}
                  </div>
                </div>

              </div>

              {/* Size */}
              <div className="mt-8">
                <h3 className="mb-3 font-bold">
                  Choose Size
                </h3>

                <div className="grid grid-cols-3 gap-3">
                  {sizes.map((size, index) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setSelectedSize(size)}
                      className={`rounded-xl border px-4 py-4 text-center transition ${
                        selectedSize === size
                          ? "border-[#e63946] bg-[#fff0e5] text-[#e63946]"
                          : "border-gray-200 bg-white hover:border-[#e63946]"
                      }`}
                    >
                      <span className="block font-bold">
                        {size}
                      </span>

                      <span className="mt-1 block text-sm text-gray-500">
                        ${pizza.price[index]}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Extras */}
              <div className="mt-8">
                <h3 className="mb-3 font-bold">
                  Extra Ingredients
                </h3>

                <div className="grid gap-3 sm:grid-cols-2">
                  {pizza.extraIngredients.map((extra) => {
                    const selected = selectedExtras.includes(extra.id);

                    return (
                      <button
                        key={extra.id}
                        type="button"
                        onClick={() => toggleExtra(extra.id)}
                        className={`flex items-center justify-between rounded-xl border p-4 text-left transition ${
                          selected
                            ? "border-[#e63946] bg-[#fff0e5]"
                            : "border-gray-200 hover:border-[#e63946]"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`flex h-5 w-5 items-center justify-center rounded border text-xs ${
                              selected
                                ? "border-[#e63946] bg-[#e63946] text-white"
                                : "border-gray-300"
                            }`}
                          >
                            {selected ? "✓" : ""}
                          </div>

                          <span className="text-sm font-medium">
                            {extra.name}
                          </span>
                        </div>

                        <span className="text-sm font-bold text-[#e63946]">
                          +${extra.price}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Quantity */}
              <div className="mt-8 flex items-center justify-between rounded-2xl bg-[#fffaf5] p-4">
                <div>
                  <h3 className="font-bold">Quantity</h3>
                  <p className="mt-1 text-xs text-gray-500">
                    How many pizzas?
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <button
                    type="button"
                    onClick={() =>
                      setQuantity((value) => Math.max(1, value - 1))
                    }
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl font-bold shadow-sm transition hover:bg-[#e63946] hover:text-white"
                  >
                    −
                  </button>

                  <span className="w-6 text-center text-lg font-bold">
                    {quantity}
                  </span>

                  <button
                    type="button"
                    onClick={() =>
                      setQuantity((value) => value + 1)
                    }
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e63946] text-xl font-bold text-white shadow-sm transition hover:bg-[#c92835]"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Payment */}
            <div className="rounded-3xl bg-white p-6 shadow-sm sm:p-8">
              <div className="mb-7">
                <span className="text-xs font-bold tracking-[0.2em] text-[#e63946]">
                  STEP 03
                </span>

                <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">
                  Payment Method
                </h2>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">

                <button
                  type="button"
                  onClick={() => setPaymentMethod("cash")}
                  className={`rounded-xl border p-5 text-left transition ${
                    paymentMethod === "cash"
                      ? "border-[#e63946] bg-[#fff0e5]"
                      : "border-gray-200 hover:border-[#e63946]"
                  }`}
                >
                  <div className="text-2xl">💵</div>
                  <h3 className="mt-3 font-bold">
                    Cash on Delivery
                  </h3>
                  <p className="mt-1 text-xs text-gray-500">
                    Pay when your pizza arrives.
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod("card")}
                  className={`rounded-xl border p-5 text-left transition ${
                    paymentMethod === "card"
                      ? "border-[#e63946] bg-[#fff0e5]"
                      : "border-gray-200 hover:border-[#e63946]"
                  }`}
                >
                  <div className="text-2xl">💳</div>
                  <h3 className="mt-3 font-bold">
                    Credit / Debit Card
                  </h3>
                  <p className="mt-1 text-xs text-gray-500">
                    Secure online payment.
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod("wallet")}
                  className={`rounded-xl border p-5 text-left transition ${
                    paymentMethod === "wallet"
                      ? "border-[#e63946] bg-[#fff0e5]"
                      : "border-gray-200 hover:border-[#e63946]"
                  }`}
                >
                  <div className="text-2xl">📱</div>
                  <h3 className="mt-3 font-bold">
                    Mobile Wallet
                  </h3>
                  <p className="mt-1 text-xs text-gray-500">
                    Pay with your wallet.
                  </p>
                </button>

              </div>
            </div>

          </div>

          {/* RIGHT SIDE - ORDER SUMMARY */}
          <aside className="lg:sticky lg:top-6 lg:self-start">
            <div className="overflow-hidden rounded-3xl bg-[#24150e] text-white shadow-xl">

              <div className="p-6 sm:p-7">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-extrabold">
                    Your Order
                  </h2>

                  <span className="rounded-full bg-[#e63946] px-3 py-1 text-xs font-bold">
                    {quantity} Item{quantity > 1 ? "s" : ""}
                  </span>
                </div>

                {/* Product */}
                <div className="mt-7 flex gap-4 border-b border-white/10 pb-6">
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl">
                    <Image
                      src={pizza.image}
                      alt={pizza.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold">
                      {pizza.name}
                    </h3>

                    <p className="mt-1 text-sm text-gray-400">
                      {selectedSize} × {quantity}
                    </p>

                    {selectedExtras.length > 0 && (
                      <p className="mt-1 text-xs text-gray-500">
                        + {selectedExtras.length} extra ingredient
                        {selectedExtras.length > 1 ? "s" : ""}
                      </p>
                    )}
                  </div>

                  <div className="font-bold">
                    ${itemTotal.toFixed(2)}
                  </div>
                </div>

                {/* Price Details */}
                <div className="space-y-4 border-b border-white/10 py-6">
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>Pizza</span>
                    <span>
                      ${(pizzaPrice * quantity).toFixed(2)}
                    </span>
                  </div>

                  <div className="flex justify-between text-sm text-gray-400">
                    <span>Extra Ingredients</span>
                    <span>
                      ${(extrasPrice * quantity).toFixed(2)}
                    </span>
                  </div>

                  <div className="flex justify-between text-sm text-gray-400">
                    <span>Delivery</span>
                    <span>${deliveryFee.toFixed(2)}</span>
                  </div>
                </div>

                {/* Total */}
                <div className="flex items-center justify-between py-6">
                  <span className="text-lg font-bold">
                    Total
                  </span>

                  <span className="text-3xl font-extrabold text-[#f4a261]">
                    ${total.toFixed(2)}
                  </span>
                </div>

                {/* Submit */}
                <form onSubmit={handleSubmit}>
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#e63946] px-5 py-4 font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#c92835] hover:shadow-lg"
                  >
                    Place Order
                    <span className="text-xl">→</span>
                  </button>
                </form>

                <p className="mt-4 text-center text-xs leading-5 text-gray-500">
                  By placing your order, you agree to our terms
                  and conditions.
                </p>
              </div>

              {/* Bottom */}
              <div className="bg-black/20 px-6 py-4 text-center text-sm text-gray-400">
                🍕 Estimated delivery:{" "}
                <span className="font-semibold text-white">
                  30–45 minutes
                </span>
              </div>
            </div>

            <Link
              href="/"
              className="mt-4 flex items-center justify-center rounded-xl border border-gray-200 bg-white px-5 py-3.5 text-sm font-bold transition hover:border-[#e63946] hover:text-[#e63946]"
            >
              ← Continue Shopping
            </Link>
          </aside>

        </div>
      </section>
    </main>
  );
}
