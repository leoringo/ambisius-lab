import { orderContext } from "@/providers/OrderProvider";
import { TOrder } from "@/types/orderTypes";
import { useContext, useEffect, useState } from "react";

export default function Cashier() {
  const { mergeMenuWithOrders } = useContext(orderContext);
  const [tableDropdown, setTableDropdown] = useState<number[]>([]);
  const [pickedTable, setPickedTable] = useState<number>(0);

  const handleOnchange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPickedTable(+event.target.value);
  };

  const filteredNumberDropdown = () => {
    const tableNumber: number[] = [];
    const number: Set<number> = new Set();
    mergeMenuWithOrders?.().forEach((order) => number.add(+order.tableId));
    number.forEach((num) => tableNumber.push(num));

    setTableDropdown(tableNumber);
  };

  useEffect(() => {
    filteredNumberDropdown();
  }, []);

  return (
    <main className="px-6 space-y-5 w-[650px]">
      <div>
        <div className="px-6 py-4 bg-[#f1f5f9] bg-muted rounded-md min-h-[300px]">
          <section className="space-y-2">
            <div className="space-y-1">
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Meja
              </label>
              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  <select
                    onChange={() => handleOnchange}
                    className="flex h-10 items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-[180px]"
                  >
                    <option value={0} disabled selected>
                      Nomor meja
                    </option>
                    {tableDropdown.map((tableNumber) => (
                      <option key={tableNumber} value={tableNumber}>
                        {tableNumber}
                      </option>
                    ))}
                  </select>
                  <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                    Print struk
                  </button>
                </div>
                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-destructive text-destructive-foreground hover:bg-destructive/90 h-10 px-4 py-2">
                  Kosongkan meja
                </button>
              </div>
            </div>
            <div className="space-y-3">
              <div className="w-full overflow-auto">
                <table className="w-full caption-bottom text-sm">
                  <caption className="mt-4 text-sm text-muted-foreground text-gray-500">
                    Terima kasih sudah makan di <b>Restoran</b>
                  </caption>
                  <thead className="[&amp;_tr]:border-b">
                    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                      <th className="h-12 px-4 align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 text-right w-[100px]">
                        Jumlah
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                        Menu
                      </th>
                      <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0 w-[100px]">
                        Harga
                      </th>
                    </tr>
                  </thead>
                  <tbody className="[&amp;_tr:last-child]:border-0">
                    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium text-right">
                        1
                      </td>
                      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                        Ayam Kecap Manis
                      </td>
                      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                        Gratis
                      </td>
                    </tr>
                    <tr className="border-b transition-colors hover.bg-muted/50 data-[state=selected]:bg-muted">
                      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium text-right">
                        1
                      </td>
                      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                        Ayam Kecap Manis
                      </td>
                      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                        Gratis
                      </td>
                    </tr>
                    <tr className="border-b transition-colors hover.bg-muted/50 data-[state=selected]:bg-muted">
                      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium text-right">
                        2
                      </td>
                      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                        Nasi Goreng Spesial
                      </td>
                      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                        Gratis
                      </td>
                    </tr>
                    <tr className="border-b transition-colors hover.bg-muted/50 data-[state=selected]:bg-muted">
                      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 font-medium text-right">
                        1
                      </td>
                      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                        Ayam Kecap Manis
                      </td>
                      <td className="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                        Gratis
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
