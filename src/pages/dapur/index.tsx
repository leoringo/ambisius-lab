import OrderKitchen from "@/components/OrderKitchen";
import { menuContext } from "@/providers/MenuProvider";
import { orderContext } from "@/providers/OrderProvider";
import { useContext, useMemo } from "react";

export default function Kitchen() {
  const { orderList } = useContext(orderContext);
  const { menuList } = useContext(menuContext);

  const tableNumber = useMemo(() => {
    return [1, 2, 3];
  }, []);

  return (
    <main className="px-6 space-y-5 w-[650px]">
      <div>
        <div className="px-6 py-4 bg-muted rounded-md min-h-[300px] bg-[#f1f5f9]">
          <section>
            <div className="flex">
              {/*--------- Mapping for Order List with Table Number ---------  */}
              {tableNumber.map((table) => (
                <OrderKitchen
                  menuList={menuList}
                  orderList={orderList}
                  table={table}
                  key={table}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
