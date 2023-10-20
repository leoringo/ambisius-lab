import { TMenuList } from "@/types/menuTypes";
import { TOrder } from "@/types/orderTypes";

export const getLocalStorageOrder = () => {
  const storedData = localStorage.getItem("orders");
  return storedData ? JSON.parse(storedData) : [];
};

export const addLocalStorageOrder = (
  selectedTab: number,
  selectedMenu: string,
  quantity: number
) => {
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
};

// -------------------------- Function for matching Menu name by ID in Order List --------------------------
export const mergeMenuWithOrders = (
  menuList?: TMenuList[],
  orderList?: TOrder[]
) => {
  if (orderList) {
    for (const order of orderList) {
      const menuMatch = menuList?.find((item) => item.id === order.menuId);
      if (menuMatch) {
        order.menu = menuMatch.name;
      }
    }
    return orderList;
  }
};
