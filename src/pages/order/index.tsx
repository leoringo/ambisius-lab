import React, { useContext, useMemo, useState } from "react";
import { menuContext } from "@/providers/MenuProvider";
import Checklist from "@/assets/Checklist";

export default function OrderSystem() {
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const [selectedMenu, setSelectedMenu] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(0);
  const { menuList } = useContext(menuContext);

  const handleTabClick = (tab: number) => {
    setSelectedTab(tab);
  };

  const handleMenuChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMenu(event.target.value);
  };

  const handleQuantityChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setQuantity(+event.target.value);
  };

  const handleAddToOrder = () => {
    const payload = {
      id: String(Math.floor(Math.random() * 1000000 + 9000000)),
      tableId: String(selectedTab),
      menuId: selectedMenu,
      quantity: quantity,
    };

    if (!localStorage.getItem("orders")) {
      localStorage.setItem("orders", JSON.stringify([payload]));
    } else {
      const storedData = localStorage.getItem("orders");
      const orders: any[] = storedData ? JSON.parse(storedData) : [];
      orders.push(payload);
      localStorage.setItem("orders", JSON.stringify(orders));
    }
    setSelectedTab(0);
    setSelectedMenu("");
    setQuantity(0);
  };

  const tableList = useMemo(() => {
    return [1, 2, 3];
  }, []);

  return (
    <main className="px-6 space-y-5 w-[650px]">
      <div>
        <div className="px-6 py-4 bg-[#f1f5f9] rounded-md min-h-[300px]">
          <section className="space-y-3">
            <div className="flex border rounded-md">
              {/*---------- Mapping for table number ----------*/}
              {tableList.map((el, index) => {
                return (
                  <div
                    key={el}
                    onClick={() => handleTabClick(el)}
                    className={`flex-1 p-2 text-center cursor-pointer transition-colors text-sm h-[60px] flex items-center justify-center border-x ${
                      selectedTab === el
                        ? "bg-black  text-white hover:bg-black"
                        : "bg-white text-foreground hover:bg-gray-200 "
                    } ${index === 0 && "rounded-l-md"} ${
                      index === tableList.length - 1 && "rounded-r-md"
                    }`}
                  >
                    Meja {el}
                  </div>
                );
              })}
            </div>
            <div className="flex space-x-2">
              <div className="space-y-1 w-full">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                <Checklist />
                  Menu
                </label>

                <select
                  onChange={handleMenuChange}
                  className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-muted-foreground"
                >
                  {/*---------- Mapping for Menu ----------*/}
                  <option disabled selected={!selectedMenu}>
                    Pilih menu
                  </option>
                  {menuList?.map((el) => (
                    <option key={el.id} value={el.id}>
                      {el.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Jumlah
                </label>
                <select
                  onChange={handleQuantityChange}
                  className="flex h-10 items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-[140px] text-muted-foreground background-image"
                >
                  {/*---------- Options for Quantity ----------*/}
                  <option disabled selected={quantity === 0}>
                    Kuantitas
                  </option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                </select>
              </div>
            </div>
            <div className="text-right">
              <button
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black text-white hover:bg-gray-800 h-10 px-4 py-2 w-[100px]"
                disabled={!selectedMenu || quantity <= 0 || !selectedTab}
                onClick={handleAddToOrder}
              >
                Tambah
              </button>
            </div>
          </section>
        </div>
      </div>
      <p className="text-sm text-muted-foreground text-center text-gray-500">
        Semua data hanya disimpan di Local Storage browser Anda
      </p>
    </main>
  );
}
