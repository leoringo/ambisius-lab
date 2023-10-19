import { useContext, useState } from "react";
import { menuContext } from "@/providers/MenuProvider";
import { TMenuList } from "@/types/menuTypes";
import MenuList from "@/components/MenuList";
import { getLocalStorageMenu } from "@/services/menuService";

export default function MenuTable() {
  const [newMenu, setNewMenu] = useState<string>("");
  const { menuList, fetchMenus } = useContext(menuContext);

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewMenu(event.target.value);
  };

  const newMenuSubmitted = (event: any) => {
    event.preventDefault();
    const menus = getLocalStorageMenu();
    const payload: TMenuList = {
      id: String(Math.floor(100000 + Math.random() * 900000)),
      name: newMenu,
    };
    menus.unshift(payload);
    localStorage.setItem("menus", JSON.stringify(menus));
    fetchMenus?.();
    setNewMenu("");
  };

  const deleteMenu = (id: string) => {
    const filteredMenu = menuList?.filter((menu) => menu.id !== id);
    localStorage.setItem("menus", JSON.stringify(filteredMenu));
    fetchMenus?.();
  };

  return (
    <div className="px-6 space-y-5 w-[650px]">
      <div>
        <div className="px-6 py-2 bg-[#f1f5f9] rounded-md min-h-[300px]">
          <section className="space-y-4">
            <div className="space-y-2">
              <div className="space-y-1">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="menu"
                >
                  Menu Makanan
                </label>
                <div className="flex space-x-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="menu"
                    placeholder="Tambahkan disini..."
                    value={newMenu}
                    onChange={inputHandler}
                  />
                  <button
                    disabled={!newMenu}
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-[120px] bg-black text-white"
                    onClick={newMenuSubmitted}
                  >
                    Tambah
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full overflow-auto">
              <table className="w-full caption-bottom text-sm">
                <caption className="mt-4 text-sm text-muted-foreground text-gray-500">
                  Daftar menu restoran Anda
                </caption>
                <thead className="[&amp;_tr]:border-b">
                  <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 w-[100px]">
                      ID
                    </th>
                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                      Menu
                    </th>
                    <th className="h-12 px-4 align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 text-right">
                      Hapus?
                    </th>
                  </tr>
                </thead>
                <tbody className="[&amp;_tr:last-child]:border-0">
                  {/* --------- Mapping for Menu's List --------- */}
                  {menuList?.map((menu) => (
                    <MenuList
                      key={menu.id}
                      id={menu.id}
                      name={menu.name}
                      deleteMenu={deleteMenu}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
