import type { AppProps } from "next/app";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });


export  function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
