import { TOrder } from "@/types/orderTypes";

export const filteredTableAfterCheckOut = (
  orderList?: TOrder[],
  pickedTable?: number
): any => {
  const tableAfterFiltered = orderList?.filter(
    (order) => +order.tableId !== pickedTable
  );
  localStorage.setItem("orders", JSON.stringify(tableAfterFiltered));
  if (tableAfterFiltered) return tableAfterFiltered;
};
