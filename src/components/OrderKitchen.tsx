import { mergeMenuWithOrders } from "@/services/orderService";
import { TOrderKitchen } from "@/types/orderTypes";

export default function OrderKitchen({
  menuList,
  orderList,
  table,
}: TOrderKitchen) {
  return (
    <div className="w-1/3 space-y-4">
      <h3 className="font-semibold text-xl leading-none">Meja {table}</h3>
      <div className="space-y-1">
        {menuList &&
          orderList &&
          mergeMenuWithOrders(menuList, orderList).map((order) => {
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
