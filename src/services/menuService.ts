import { TMenuList } from "@/types/menuTypes";

export const menuDummy = [
  { id: "996756", name: "Ayam Kecap Manis" },
  { id: "362342", name: "Nasi Goreng Spesial" },
];

export const initialFetch = () => {
  localStorage.clear();
  localStorage.setItem("menus", JSON.stringify(menuDummy));
};

export const getLocalStorageMenu = () => {
  if (!localStorage.getItem("menus")) {
    initialFetch();
  }
  const storedData = localStorage.getItem("menus");
  return storedData ? JSON.parse(storedData) : [];
};

export const removeLocalStorageMenu = (menuList?: TMenuList[], id?: string) => {
  const filteredMenu = menuList?.filter((menu) => menu.id !== id);
  localStorage.setItem("menus", JSON.stringify(filteredMenu));
};

export const addLocalStorageMenu = (newMenu: string) => {
  const menus = getLocalStorageMenu();
  const payload: TMenuList = {
    id: String(Math.floor(100000 + Math.random() * 900000)),
    name: newMenu,
  };
  menus.unshift(payload);
  localStorage.setItem("menus", JSON.stringify(menus));
};
