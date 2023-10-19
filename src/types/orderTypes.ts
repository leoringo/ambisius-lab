export interface TOrder {
    id: string;
    tableId: string;
    menuId: string;
    quantity: number
}

export interface TOrderContext {
    orderList?: TOrder[];
    setOrderList?: (value: TOrder[]) => void;
    fetchOrders?: () => void
}