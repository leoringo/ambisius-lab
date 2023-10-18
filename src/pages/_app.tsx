import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Navbar from '@/components/Navbar'
import MenuProvider from '@/providers/MenuProvider'
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <>
      <MenuProvider>
        <Navbar />
        <Component {...pageProps} />
      </MenuProvider>
    </>
  )
}
