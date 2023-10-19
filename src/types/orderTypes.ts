import { TMenuList } from "./menuTypes";

export interface TOrder {
  id: string;
  tableId: string;
  menuId: string;
  quantity: number;
  menu?: string;
}

export interface TOrderKitchen {
  menuList?: TMenuList[];
  orderList?: TOrder[];
  table: number;
}

export interface TOrderContext {
  orderList?: TOrder[];
  setOrderList?: (value: TOrder[]) => void;
  fetchOrders?: () => void;
  mergeMenuWithOrders?: () => TOrder[];
}
