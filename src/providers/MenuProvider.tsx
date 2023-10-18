import { createContext } from "react";
import { menuDummy } from "@/services/menuService";

const menuContext = createContext(menuDummy)

export default function MenuProvider() {
    const [menu, setMenu] = useState
}