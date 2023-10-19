import { getLocalStorageOrder } from "@/services/orderService";
import { TOrder, TOrderContext } from "@/types/orderTypes";
import { createContext, useEffect, useState } from "react";

export const orderContext = createContext<TOrderContext>({
  orderList: undefined,
  setOrderList: undefined,
  fetchOrders: undefined,
});

export default function OrderProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [orderList, setOrderList] = useState<TOrder[]>([]);
  const fetchOrders = () => {
    const orders = getLocalStorageOrder();
    setOrderList?.(orders);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <orderContext.Provider value={{ orderList, setOrderList, fetchOrders }}>
      {children}
    </orderContext.Provider>
  );
}
