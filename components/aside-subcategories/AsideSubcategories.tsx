import { ICategoryChild } from "@/interfaces/category";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { SheetTrigger } from "../ui/sheet";
import { addLocalePrefix } from "@/utils/addLocalePrefix";

const AsideSubcategories = ({
  subcategories,
}: {
  subcategories: ICategoryChild[];
}) => {
  const router = useRouter();
  const pathname = usePathname();

  const currentLocale = pathname.split("/")[1] || "en";

  return (
    <>
      <ul className="mt-3">
        {subcategories.map((subcategory, i) => (
          <li
            key={i}
            className="cursor-pointer flex items-center justify-between group"
          >
            <SheetTrigger>
              <button
                onClick={() =>
                  router.push(
                    addLocalePrefix(
                      `/filteredProducts/id/${subcategory.id}`,
                      currentLocale
                    )
                  )
                }
                className="flex items-center hover:opacity-75 ease-in-out duration-150 text-balance text-lg justify-center gap-3"
              >
                {subcategory.title}
              </button>
            </SheetTrigger>
          </li>
        ))}
      </ul>
    </>
  );
};

export default AsideSubcategories;
