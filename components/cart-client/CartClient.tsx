"use client";

import CartItemsList from "@/components/cart-items-list/CartItemsList";
import EmptyCard from "@/components/empty-card/EmptyCard";
import { useEffect, useState } from "react";
import { useMapContext } from "@/providers/MapProvider";
import { ICartProduct } from "@/interfaces/product";
import { IUser } from "@/interfaces/user";
import CartUserDataCard from "../cart-user-data-card/CartUserDataCard";
import CardPaymentCards from "../cart-payment-card/CartPaymentCard";
import CartCheckoutCard from "../cart-checkout-card/CartCheckoutCard";
import CartDeliveryCard from "../cart-delivery-card/CartDeliveryCard";
import { useTranslations } from "next-intl";

interface props {
  user: IUser;
}

const CartClient = ({ user }: props) => {
  const [cartItems, setCartItems] = useState<ICartProduct[]>([]);
  const [paymentCard, setPaymentCard] = useState<null>(null);
  const { address } = useMapContext();
  const t = useTranslations("Cart.cart-items-list");

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
  let isEmpty = cartItems.length === 0;
  if (isEmpty)
    return (
      <EmptyCard
        title={t("empty-cart.title")}
        description={t("empty-cart.description")}
      />
    );

  return (
    <section className="container px-8 grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
      <div className="lg:col-span-2 space-y-5 ">
        <CartItemsList cartItems={cartItems} setCartItems={setCartItems} />
        <CartDeliveryCard cartItems={cartItems} />

        <div className="flex gap-5">
          <CardPaymentCards />
          <CartUserDataCard name={user ? user.name : ""} surname={user ? user.name : ""} />
        </div>
      </div>
      <CartCheckoutCard
        cartItems={cartItems}
        setCartItems={setCartItems}
        address={address!}
        paymentCard={paymentCard}
        userId={user ? user.id : ""}
        userEmail={user ? user.email : ""}
      />
    </section>
  );
};

export default CartClient;
