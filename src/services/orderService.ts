export const getLocalStorageOrder = () => {
    const storedData = localStorage.getItem('orders')
    return storedData ? JSON.parse(storedData) : []
}