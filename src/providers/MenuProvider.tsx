import { createContext, useState } from "react";
import { menuDummy } from "@/services/menuService";
import { TMenuContext, TMenuList } from "@/types/menuTypes";

export const menuContext = createContext<TMenuContext>({ menuList: undefined, setMenuList: undefined })

export default function MenuProvider({ children }: { children: React.ReactNode }) {
    const [menuList, setMenuList] = useState<TMenuList[]>([])
    return (
        <menuContext.Provider value={{ menuList, setMenuList }}>
            {children}
        </menuContext.Provider>
    )
}