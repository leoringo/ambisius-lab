import { getLocalStorageOrder } from "@/services/orderService";
import { TMenuList } from "@/types/menuTypes";
import { TOrder, TOrderContext } from "@/types/orderTypes";
import { createContext, useContext, useEffect, useState } from "react";
import { menuContext } from "./MenuProvider";

export const orderContext = createContext<TOrderContext>({
  orderList: undefined,
  setOrderList: undefined,
  fetchOrders: undefined,
  mergeMenuWithOrders: undefined,
});

export default function OrderProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [orderList, setOrderList] = useState<TOrder[]>([]);
  const { menuList } = useContext(menuContext);

  const fetchOrders = () => {
    const orders = getLocalStorageOrder();
    setOrderList?.(orders);
  };

  // -------------------------- Function for matching Menu name by ID in Order List --------------------------
  function mergeMenuWithOrders(): TOrder[] {
    for (const order of orderList) {
      const menuMatch = menuList?.find((item) => item.id === order.menuId);
      if (menuMatch) {
        order.menu = menuMatch.name;
      }
    }
    return orderList;
  }

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <orderContext.Provider
      value={{ orderList, setOrderList, fetchOrders, mergeMenuWithOrders }}
    >
      {children}
    </orderContext.Provider>
  );
}
