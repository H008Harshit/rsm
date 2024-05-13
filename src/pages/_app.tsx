import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const inter = Poppins({
  weight : ["100","900"],
  subsets : []
})
export default function App({ Component, pageProps }: AppProps) {
  return <Component className={inter.className} {...pageProps} />;
}