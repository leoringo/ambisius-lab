export const menuDummy = [
    { id: "996756", name: "Ayam Kecap Manis" },
    { id: "362342", name: "Nasi Goreng Spesial" },
];

export const resetMenu = () => {
    localStorage.clear()
    localStorage.setItem("menus", JSON.stringify(menuDummy));
}