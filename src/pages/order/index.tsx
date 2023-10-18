import React, { useState } from 'react';

const RestaurantSystem = () => {
    const [selectedTab, setSelectedTab] = useState('');
    const [selectedMenu, setSelectedMenu] = useState('');
    const [quantity, setQuantity] = useState(1);

    const handleTabClick = (tab: any) => {
        setSelectedTab(tab);
    };

    const handleMenuChange = (event: any) => {
        setSelectedMenu(event.target.value);
    };

    const handleQuantityChange = (event: any) => {
        setQuantity(event.target.value);
    };

    const handleAddToOrder = () => {
        // Add your logic to add the selected menu and quantity to the order
    };

    return (
        <main className="px-6 space-y-5 w-[650px]">
            <div>
                <div className="px-6 py-4 bg-[#f1f5f9] rounded-md min-h-[300px]">
                    <section className="space-y-3">
                        <div className="flex border rounded-md">
                            <div onClick={() => handleTabClick('1')} className="flex-1 p-2 text-center cursor-pointer transition-colors text-sm h-[60px] flex items-center justify-center rounded-l-md bg-black hover:bg-black text-white">Meja 1</div>
                            <div onClick={() => handleTabClick('2')} className="flex-1 p-2 text-center hover:bg-muted cursor-pointer transition-colors bg-white text-foreground text-sm h-[60px] flex items-center justify-center border-x">Meja 2</div>
                            <div onClick={() => handleTabClick('3')} className="flex-1 p-2 text-center hover-bg-muted cursor-pointer transition-colors bg-white text-foreground text-sm h-[60px] flex items-center justify-center rounded-r-md">Meja 3</div>
                        </div>
                        <div className="flex space-x-2">
                            <div className="space-y-1 w-full">
                                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Menu</label>
                                <button
                                    type="button"
                                    role="combobox"
                                    aria-controls="radix-:r8b:"
                                    aria-expanded="false"
                                    aria-autocomplete="none"
                                    dir="ltr"
                                    data-state="closed"
                                    className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-muted-foreground"
                                >
                                    <span style={{ pointerEvents: 'none' }}>Pilih menu</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        className="h-4 w-4 opacity-50"
                                        aria-hidden="true"
                                    >
                                        <path d="m6 9 6 6 6-6"></path>
                                    </svg>
                                </button>
                            </div>
                            <div className="space-y-1">
                                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Jumlah</label>
                                <button
                                    type="button"
                                    role="combobox"
                                    aria-controls="radix-:r8c:"
                                    aria-expanded="false"
                                    aria-autocomplete="none"
                                    dir="ltr"
                                    data-state="closed"
                                    className="flex h-10 items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-[140px] text-muted-foreground"
                                >
                                    <span style={{ pointerEvents: 'none' }}>Kuantitas</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        className="h-4 w-4 opacity-50"
                                        aria-hidden="true"
                                    >
                                        <path d="m6 9 6 6 6-6"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="text-right">
                            <button
                                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-[100px]"
                                disabled={!selectedMenu || quantity <= 0}
                                onClick={handleAddToOrder}
                            >
                                Tambah
                            </button>
                        </div>
                    </section>
                </div>
            </div>
            <p className="text-sm text-muted-foreground text-center">Semua data hanya disimpan di Local Storage browser Anda</p>
        </main>
    );
};

export default RestaurantSystem;
