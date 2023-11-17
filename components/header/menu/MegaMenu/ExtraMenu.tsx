import React from "react";
import Link from "next/link";
import { extraMenu } from "../../../../mock/menuItems";
import { useLanguage } from "../../../../hooks/useLanguage";

const ExtraMenu = () => {
  const { t } = useLanguage();
  return (
    <div className="flex items-center ltr:border-l-2 rtl:border-r-2 border-gray-300 grow rtl:mx-5 ltr:ml-4">
      {extraMenu.map((menuItem) => {
        return (
          <div
            className="flex items-center text-base/90 mx-4 hover:text-palette-primary transition-colors duration-500 ease-in-out"
            key={menuItem.title}
          >
            <menuItem.icon className="mx-2" />
            <Link href={menuItem.href}>
              <a>{t[`${menuItem.title}`]}</a>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ExtraMenu;
