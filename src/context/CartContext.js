"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");

    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (error) {
        console.error(
          "Error loading cart:",
          error
        );

        localStorage.removeItem("cart");
      }
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );
  }, [cart]);

  // ==========================================
  // ADD TO CART
  // ==========================================

  const addToCart = (
    product,
    quantity = 1,
    size = 0,
    selectedIngredients = []
  ) => {
    const basePrice = Number(
      product.price[size]
    );

    const ingredientsPrice =
      selectedIngredients.reduce(
        (total, ingredient) =>
          total + Number(ingredient.price),
        0
      );

    const finalPrice =
      basePrice + ingredientsPrice;

    if (Number.isNaN(basePrice)) {
      console.error(
        "Invalid product price:",
        product.price
      );

      return;
    }

    // Keep only selected ingredient data
    const cleanIngredients =
      selectedIngredients.map(
        (ingredient) => ({
          id: ingredient.id,
          name: ingredient.name,
          price: Number(
            ingredient.price
          ),
        })
      );

    setCart((currentCart) => {

      // Find same product + size + ingredients
      const existingProduct =
        currentCart.find((item) => {

          const sameProduct =
            item.id === product.id;

          const sameSize =
            item.size === size;

          const oldIngredients =
            item.selectedIngredients || [];

          const oldIds =
            oldIngredients
              .map(
                (ingredient) =>
                  ingredient.id
              )
              .sort();

          const newIds =
            cleanIngredients
              .map(
                (ingredient) =>
                  ingredient.id
              )
              .sort();

          const sameIngredients =
            oldIds.length ===
              newIds.length &&
            oldIds.every(
              (id, index) =>
                id === newIds[index]
            );

          return (
            sameProduct &&
            sameSize &&
            sameIngredients
          );
        });

      // ========================================
      // EXISTING ITEM
      // Increase quantity
      // ========================================

      if (existingProduct) {
        return currentCart.map(
          (item) => {

            const sameProduct =
              item.id === product.id;

            const sameSize =
              item.size === size;

            const oldIngredients =
              item.selectedIngredients ||
              [];

            const oldIds =
              oldIngredients
                .map(
                  (ingredient) =>
                    ingredient.id
                )
                .sort();

            const newIds =
              cleanIngredients
                .map(
                  (ingredient) =>
                    ingredient.id
                )
                .sort();

            const sameIngredients =
              oldIds.length ===
                newIds.length &&
              oldIds.every(
                (id, index) =>
                  id === newIds[index]
              );

            if (
              sameProduct &&
              sameSize &&
              sameIngredients
            ) {
              return {
                ...item,

                quantity:
                  Number(
                    item.quantity
                  ) +
                  Number(quantity),
              };
            }

            return item;
          }
        );
      }

      // ========================================
      // NEW ITEM
      // ========================================

      return [
        ...currentCart,

        {
          id: product.id,

          name: product.name,

          image: product.image,

          desc: product.desc,

          // Pizza price + selected ingredients
          price: finalPrice,

          // 0 = Small
          // 1 = Medium
          // 2 = Large
          size: size,

          sizeName:
            size === 0
              ? "Small"
              : size === 1
              ? "Medium"
              : "Large",

          quantity:
            Number(quantity),

          // ONLY selected ingredients
          selectedIngredients:
            cleanIngredients,
        },
      ];
    });
  };

  // ==========================================
  // REMOVE FROM CART
  // ==========================================

  const removeFromCart = (
    id,
    size
  ) => {
    setCart((currentCart) =>
      currentCart.filter(
        (item) =>
          !(
            item.id === id &&
            item.size === size
          )
      )
    );
  };

  // ==========================================
  // UPDATE QUANTITY
  // ==========================================

  const updateQuantity = (
    id,
    size,
    quantity
  ) => {
    const newQuantity =
      Number(quantity);

    if (
      Number.isNaN(newQuantity) ||
      newQuantity < 1
    ) {
      return;
    }

    setCart((currentCart) =>
      currentCart.map(
        (item) =>
          item.id === id &&
          item.size === size
            ? {
                ...item,
                quantity:
                  newQuantity,
              }
            : item
      )
    );
  };

  // ==========================================
  // CART COUNT
  // ==========================================

  const cartCount = cart.reduce(
    (total, item) =>
      total +
      Number(
        item.quantity || 0
      ),
    0
  );

  // ==========================================
  // CART TOTAL
  // ==========================================

  const cartTotal = cart.reduce(
    (total, item) =>
      total +
      Number(item.price || 0) *
        Number(
          item.quantity || 0
        ),
    0
  );

  // ==========================================
  // PROVIDER
  // ==========================================

  return (
    <CartContext.Provider
      value={{
        cart,

        addToCart,

        removeFromCart,

        updateQuantity,

        cartCount,

        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// ============================================
// USE CART
// ============================================

export function useCart() {
  const context =
    useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used inside CartProvider"
    );
  }

  return context;
}
