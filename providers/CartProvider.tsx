"use client";

import React, { ReactNode, useEffect, useState } from "react";
import CartCheckoutCard from "@/components/cart-checkout-card/CartCheckoutCard";
import { ICartProduct } from "@/interfaces/product";
import CartItemsList from "@/components/cart-items-list/CartItemsList";
import CartDeliveryCard from "@/components/cart-delivery-card/CartDeliveryCard";
import EmptyCard from "@/components/empty-card/EmptyCard";

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<ICartProduct[]>([]);
  let isEmpty = cartItems.length === 0;

  useEffect(() => {
    let cart = localStorage.getItem("cart");
    if (cart) {
      try {
        let arr = JSON.parse(cart).map((item: ICartProduct) => ({
          ...item,
          cartQuantity: item.cartQuantity || 1,
        }));
        setCartItems(arr);
      } catch (error) {
        console.error("Failed to parse cart items:", error);
        setCartItems([]);
      }
    }
  }, []);

  if (isEmpty)
    return (
      <EmptyCard
        title="В корзине пока пусто"
        description="Начните с подборок на главной странице или найдите нужный товар через поиск"
      />
    );

  return (
    <div className="pt-8 pb-12 bg-muted">
      <section className="container px-8 grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
        <div className="lg:col-span-2 space-y-5 ">
          <CartItemsList cartItems={cartItems} setCartItems={setCartItems} />
          <CartDeliveryCard cartItems={cartItems} />
          {children}
        </div>
        <CartCheckoutCard cartItems={cartItems} />
      </section>
    </div>
  );
};

export default CartProvider;