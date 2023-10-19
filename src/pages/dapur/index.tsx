import { orderContext } from "@/providers/OrderProvider";
import { useContext, useMemo } from "react";

export default function Kitchen() {
  const { orderList } = useContext(orderContext);

  const tableNumber = useMemo(() => {
    return [1, 2, 3];
  }, []);

  return (
    <main className="px-6 space-y-5 w-[650px]">
      <div>
        <div className="px-6 py-4 bg-muted rounded-md min-h-[300px] bg-[#f1f5f9]">
          <section>
            <div className="flex">
              <div className="w-1/3 space-y-4">
                {tableNumber.map((table) => (
                  <>
                    <h3 className="font-semibold text-xl leading-none">
                      Meja {table}
                    </h3>
                    <div className="space-y-1">
                      {orderList?.map((order) => (
                        <div className="flex text-sm text-muted-foreground">
                          <div className="w-[30px]">1x</div>
                          <div className="w-full">Ayam Kecap Manis</div>
                        </div>
                      ))}
                    </div>
                  </>
                ))}
              </div>
              {/* <div className="w-1/3 space-y-4">
                <h3 className="font-semibold text-xl leading-none">Meja 2</h3>
                <div className="space-y-1">
                  <div className="flex text-sm text-muted-foreground">
                    <div className="w-[30px]">1x</div>
                    <div className="w-full">Ayam Kecap Manis</div>
                  </div>
                  <div className="flex text-sm text-muted-foreground">
                    <div className="w-[30px]">1x</div>
                    <div className="w-full">Ayam Kecap Manis</div>
                  </div>
                </div>
              </div>
              <div className="w-1/3 space-y-4">
                <h3 className="font-semibold text-xl leading-none">Meja 3</h3>
                <div className="space-y-1"></div>
              </div> */}
            </div>
          </section>
        </div>
      </div>
      <p className="text-sm text-muted-foreground text-center">
        Semua data hanya disimpan di Local Storage browser Anda
      </p>
    </main>
  );
}
