import { createContext, useEffect, useState } from "react";
import { getLocalStorageMenu } from "@/services/menuService";
import { TMenuContext, TMenuList } from "@/types/menuTypes";

export const menuContext = createContext<TMenuContext>({ menuList: undefined, setMenuList: undefined, fetchMenus: undefined })

export default function MenuProvider({ children }: { children: React.ReactNode }) {
    const [menuList, setMenuList] = useState<TMenuList[]>([])
    const fetchMenus = () => {
        const menus = getLocalStorageMenu()
        setMenuList?.(menus);
    };

    useEffect(() => {
        fetchMenus();
    }, []);

    return (
        <menuContext.Provider value={{ menuList, setMenuList, fetchMenus }}>
            {children}
        </menuContext.Provider>
    )
}