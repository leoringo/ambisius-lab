export const menuDummy = [
    { id: "996756", name: "Ayam Kecap Manis" },
    { id: "362342", name: "Nasi Goreng Spesial" },
];

export const initialFetch = () => {
    localStorage.clear()
    localStorage.setItem("menus", JSON.stringify(menuDummy));
}

export const getLocalStorageMenu = () => {
    if (!localStorage.getItem("menus")) {
        initialFetch();
    }
    const storedData = localStorage.getItem("menus");
    return storedData ? JSON.parse(storedData) : [];
}