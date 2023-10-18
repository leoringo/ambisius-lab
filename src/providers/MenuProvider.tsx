import { createContext, useState } from "react";
import { menuDummy } from "@/services/menuService";

interface MenuList {
    id: string;
    name: string;
}

interface MenuContext {
    menuList: MenuList[];
    setMenuList: (value: MenuList[]) => void;
}

export const menuContext = createContext<MenuContext | undefined >(undefined)

export default function MenuProvider({ children }: { children: React.ReactNode }) {
    const [menuList, setMenuList] = useState<MenuList[]>(menuDummy)
    return (
        <menuContext.Provider value={{ menuList, setMenuList }}>
            {children}
        </menuContext.Provider>
    )
}