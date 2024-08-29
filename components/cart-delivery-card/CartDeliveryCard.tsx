import { ICartProduct } from "@/interfaces/product";
import Image from "next/image";
import { Button } from "../ui/button";
import { Edit2Icon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { MapProvider } from "@/providers/MapProvider";
import { useState } from "react";
import Map from "../map/Map";
import { useTranslations } from "next-intl";

interface props {
  cartItems: ICartProduct[];
}

interface ICoordinates {
  lat: number;
  lng: number;
}

const CartDeliveryCard = ({ cartItems }: props) => {
  const [location, setLocation] = useState<ICoordinates | null>(null);
  const t = useTranslations("Cart.cart-delivery");

  const handleLocationSelect = (lat: number, lng: number) => {
    setLocation({ lat, lng });
  };

  return (
    <MapProvider>
      <div className="p-6 rounded-xl bg-white shadow-md">
        <div className="flex justify-between">
          <h2 className="text-2xl font-medium">{t("deliveryMethod")}</h2>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant={"ghost"} size={"icon"}>
                <Edit2Icon color="#777777" size={20} />
              </Button>
            </DialogTrigger>

            <DialogContent className="w-1/2">
              <DialogHeader>
                <DialogTitle className="text-2xl font-medium">
                  {t("specifyLocation")}
                </DialogTitle>
              </DialogHeader>

              <Map onLocationSelect={handleLocationSelect} />
            </DialogContent>
          </Dialog>
        </div>

        <div className="mt-6 grid grid-cols-[280px_1fr] gap-2">
          <p className="text-zinc-500">{t("pickupPoint")}</p>
          <p className="text-zinc-800 font-medium text-balance">
            {t("pickupAddress")}
          </p>

          <p className="text-zinc-500">{t("deliveryCost")}</p>
          <p className="text-zinc-800 font-medium">{t("free")}</p>

          <p className="text-zinc-500">{t("deliveryTime")}</p>
          <p className="text-zinc-800 font-medium">{t("deliveryDuration")}</p>

          <div className="mt-4 flex gap-2">
            {cartItems?.map((item) => (
              <div key={item.id}>
                <Image
                  src={item.images_links[0]}
                  alt="product"
                  width={72}
                  height={108}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </MapProvider>
  );
};

export default CartDeliveryCard;
