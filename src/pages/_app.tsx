import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import MenuProvider from "@/providers/MenuProvider";
import OrderProvider from "@/providers/OrderProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <MenuProvider>
        <OrderProvider>
          <Navbar />
          <Component {...pageProps} />
        </OrderProvider>
      </MenuProvider>
    </>
  );
}
