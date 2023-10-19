import { TMenuList } from "@/types/menuTypes";
import { TOrder } from "@/types/orderTypes";

interface TOrderKitchen {
  menuList?: TMenuList[];
  orderList?: TOrder[];
  table: number;
}

export default function OrderKitchen({
  menuList,
  orderList,
  table,
}: TOrderKitchen) {
  function mergeMenuWithOrders(menuItems: TMenuList[], orders: TOrder[]) {
    for (const order of orders) {
      const menuMatch = menuItems.find((item) => item.id === order.menuId);
      if (menuMatch) {
        order.menu = menuMatch.name;
      }
    }
    return orders;
  }

  return (
    <div className="w-1/3 space-y-4">
      <h3 className="font-semibold text-xl leading-none">Meja {table}</h3>
      <div className="space-y-1">
        {menuList &&
          orderList &&
          mergeMenuWithOrders(menuList, orderList)?.map((order) => {
            if (+order.tableId === table) {
              return (
                <div
                  key={order.id}
                  className="flex text-sm text-muted-foreground"
                >
                  <div className="w-[30px]">{order.quantity}x</div>
                  <div className="w-full">{order.menu}</div>
                </div>
              );
            }
          })}
      </div>
    </div>
  );
}
