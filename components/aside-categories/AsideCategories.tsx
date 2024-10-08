"use client";
import AsideSubcategories from "../aside-subcategories/AsideSubcategories";
import React, { useState } from "react";
import { ICategory, ICategoryChild } from "@/interfaces/category";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

import {
  ChevronRight,
  Watch,
  Gamepad2,
  Headphones,
  Laptop,
  Mountain,
  ArrowLeft,
} from "lucide-react";
import { Separator } from "../ui/separator";
import { ShopName } from "@/constants";
import { useTranslations } from "next-intl";

type ICategoryIcons = {
  [key: string]: JSX.Element;
};

interface ICategoryState {
  categoryTitle: string;
  categoryChild: ICategoryChild[];
}

const AsideCategories = ({ categories }: { categories: ICategory[] }) => {
  const [isChild, setIsChild] = useState<ICategoryState | null>(null);
  let categoryIconClass = cn("opacity-70 text-primary");
  const t = useTranslations("Header.aside");

  const categoriesIcons: ICategoryIcons = {
    "Умные часы и фитнес браслеты": (
      <Watch size={24} className={categoryIconClass} />
    ),
    Игровое: <Gamepad2 size={24} className={categoryIconClass} />,
    "Наушники и аудиотехника": (
      <Headphones size={24} className={categoryIconClass} />
    ),
    "Компьютерная техника": <Laptop size={24} className={categoryIconClass} />,
  };

  const transitionVariants = {
    initial: { x: 200, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: -200, opacity: 0 },
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isChild === null ? (
          <motion.div
            key="categories"
            initial="exit"
            animate="animate"
            exit="exit"
            variants={transitionVariants}
            transition={{ duration: 0.2 }}
          >
            <div className="mt-4 mb-3 space-y-2">
              <div className="mb-0 flex text-primary items-end">
                <Mountain size={42} />
                <h2 className="text-3xl ml-1">{ShopName}</h2>
              </div>
              <p className="text-lg text-balance italic font-medium ">
                {t("title")}
              </p>
            </div>
            <ul className="mt-4 text-lg flex flex-col gap-3">
              {categories.map((category, i) => (
                <li
                  key={i}
                  onClick={() =>
                    setIsChild({
                      categoryChild: category.subcategories,
                      categoryTitle: category.title,
                    })
                  }
                  className="hover:opacity-75 ease-in-out duration-150 cursor-pointer flex items-center justify-between group"
                >
                  <span className="flex items-center text-balance justify-center gap-2">
                    {categoriesIcons[category.title]}
                    {category.title}
                  </span>
                  <ChevronRight
                    size={24}
                    className={cn(
                      "text-primary transition-transform duration-150 group-hover:translate-x-1"
                    )}
                  />
                </li>
              ))}
            </ul>
          </motion.div>
        ) : (
          <motion.div
            key="subcategories"
            initial="initial"
            animate="animate"
            exit="initial"
            variants={transitionVariants}
            transition={{ duration: 0.2 }}
          >
            <div className="flex py-2 items-center gap-2 mt-4">
              <ArrowLeft
                size={25}
                onClick={() => setIsChild(null)}
                className="cursor-pointer text-primary"
              />
              <h2 className="text-xl text-balance">Главное меню</h2>
            </div>
            <Separator />
            <h1 className="text-2xl text-balance mt-2 font-semibold italic">
              {isChild.categoryTitle}
            </h1>
            <AsideSubcategories subcategories={isChild.categoryChild} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AsideCategories;
