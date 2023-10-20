import { useContext, useState } from "react";
import { menuContext } from "@/providers/MenuProvider";
import { TMenuList } from "@/types/menuTypes";
import MenuList from "@/components/MenuList";
import {
  addLocalStorageMenu,
  getLocalStorageMenu,
  removeLocalStorageMenu,
} from "@/services/menuService";

export default function MenuTable() {
  const [newMenu, setNewMenu] = useState<string>("");
  const { menuList, fetchMenus } = useContext(menuContext);

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewMenu(event.target.value);
  };

  const newMenuSubmitted = (event: any) => {
    event.preventDefault();
    addLocalStorageMenu(newMenu);
    fetchMenus?.();
    setNewMenu("");
  };

  const deleteMenu = (id: string) => {
    removeLocalStorageMenu(menuList, id);
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
                    className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                    id="menu"
                    placeholder="Tambahkan disini..."
                    value={newMenu}
                    onChange={inputHandler}
                  />
                  <button
                    disabled={!newMenu}
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:opacity-[0.85] h-10 px-4 py-2 w-[120px] bg-black text-white"
                    onClick={newMenuSubmitted}
                  >
                    Tambah
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full overflow-auto">
              <table className="w-full caption-bottom text-sm">
                <caption className="mt-4 text-sm text-gray-500">
                  Daftar menu restoran Anda
                </caption>
                <thead>
                  <tr className="border-b">
                    <th className="h-12 px-4 text-left align-middle font-medium w-[100px]">
                      ID
                    </th>
                    <th className="h-12 px-4 text-left align-middle font-medium">
                      Menu
                    </th>
                    <th className="h-12 px-4 align-middle font-medium text-right">
                      Hapus?
                    </th>
                  </tr>
                </thead>
                <tbody>
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
