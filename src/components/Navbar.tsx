// src/components/Navbar.tsx

import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar: React.FC = () => {
    const router = useRouter();

    const isActive = (pathname: string) => {
        return router.pathname === pathname ? 'text-blue-500 bg-red-500' : 'text-gray-500';
    };

    return (
        <main className="p-6 space-y-5 w-[650px]">
            <div className="flex items-center justify-between">
                <div className="space-y-1">
                    <h1 className="text-3xl font-semibold">[Contoh] Sistem Restoran</h1>
                    <p className="text-muted-foreground text-sm">Ambisius Coding Challenge #230916H</p>
                </div><button type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:R9da:"
                    data-state="closed">
                    <div className="border rounded-full p-4 hover:bg-muted transition-colors cursor-pointer bg-background shadow"><svg
                        xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        className="lucide lucide-file">
                        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                    </svg></div>
                </button>
            </div>
            <div className="flex justify-between">
                <div className="inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground">
                    <Link href="/menu"
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#f1f5f9] text-[#64748b] min-h-[40px] min-w-[100px] ">Menu</Link>
                    <Link href="/order"
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#f1f5f9] text-[#64748b] min-h-[40px] min-w-[100px]">Order</Link>
                    <Link href="/dapur"
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#f1f5f9] text-[#64748b] min-h-[40px] min-w-[100px]">Dapur</Link>
                    <Link href="/kasir"
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#f1f5f9] text-[#64748b] min-h-[40px] min-w-[100px]">Kasir</Link>
                </div>
                <Link href="/menu"
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-[100px]"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        className="mr-2">
                        <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
                        <path d="M3 3v5h5"></path>
                        <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path>
                        <path d="M16 16h5v5"></path>
                    </svg>Reset</Link>
            </div>
        </main>
    );
};

export default Navbar;
