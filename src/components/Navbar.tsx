// src/components/Navbar.tsx
import Link from "next/link";
import { useRouter } from "next/router";
import { menuDummy, initialFetch } from "@/services/menuService";
import { useContext, useState } from "react";
import { menuContext } from "@/providers/MenuProvider";
import { orderContext } from "@/providers/OrderProvider";

const Navbar: React.FC = () => {
  const router = useRouter();
  const [isReset, setIsReset] = useState<boolean>(false);
  const { setMenuList } = useContext(menuContext);
  const { setOrderList } = useContext(orderContext);

  const resetNotificationHandler = () => {
    setIsReset(true);
    setTimeout(() => {
      setIsReset(false);
    }, 2000);
  };

  const handleReset = () => {
    initialFetch();
    setMenuList?.(menuDummy);
    setOrderList?.([]);
    resetNotificationHandler();
  };

  const isActive = (pathname: string) => {
    //-------- Style for navigation --------
    const notActiveTab =
      "inline-flex items-center justify-center rounded-sm px-3 py-1.5 text-sm font-medium text-[#7e8fa9] min-h-[35px] min-w-[100px] hover:opacity-70";
    const activeTab =
      "inline-flex items-center justify-center rounded-md px-3 py-1.5 text-sm font-medium bg-white text-black shadow min-h-[25px] min-w-[100px] hover:opacity-70";

    return router.pathname === pathname ? activeTab : notActiveTab;
  };

  return (
    <main className="p-6 space-y-5 w-[650px]">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="text-3xl font-semibold">[Contoh] Sistem Restoran</h1>
          <p className="text-sm">Ambisius Coding Challenge #230916H</p>
        </div>
        <button
          type="button"
          aria-haspopup="dialog"
          aria-expanded="false"
          aria-controls="radix-:R9da:"
          data-state="closed"
        >
          <div className="border rounded-full p-4 hover:bg-muted transition-colors cursor-pointer bg-background shadow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-file"
            >
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
            </svg>
          </div>
        </button>
      </div>
      <div className="flex justify-between">
        <div className="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground bg-[#f1f5f9]">
          <Link href="/menu" className={isActive("/menu")}>
            Menu
          </Link>
          <Link href="/order" className={isActive("/order")}>
            Order
          </Link>
          <Link href="/dapur" className={isActive("/dapur")}>
            Dapur
          </Link>
          <Link href="/kasir" className={isActive("/kasir")}>
            Kasir
          </Link>
        </div>
        <div className="flex justify-center">
          <div
            className={`absolute bg-green-600 text-white px-5 py-2 top-[60px] rounded-md transition-opacity ease-in duration-700 ${
              isReset ? "opacity-100" : "opacity-0"
            }`}
          >
            <h1>&#10003; Data telah direset ulang</h1>
          </div>
          <button
            onClick={handleReset}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium disabled:pointer-events-none disabled:opacity-50 border border-gray-300 h-10 px-4 py-2 w-[100px] hover:opacity-70"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2"
            >
              <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
              <path d="M3 3v5h5"></path>
              <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path>
              <path d="M16 16h5v5"></path>
            </svg>
            Reset
          </button>
        </div>
      </div>
    </main>
  );
};

export default Navbar;
