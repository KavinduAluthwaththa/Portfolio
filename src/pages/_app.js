import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import LoadingScreen from "@/components/LoadingScreen";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Plasma from "@/components/ui/Plasma";

// If loading a variable font, you don't need to specify the font weight
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-mont" });

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    // Show loading screen only on initial load
    const timer = setTimeout(() => {
      setLoading(false);
      setIsInitialLoad(false);
    }, 2000); // 2 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://api.openweathermap.org"></link>
        <link rel="preconnect" href="https://cdnjs.cloudflare.com"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      </Head>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loading" />}
      </AnimatePresence>
      {!isInitialLoad && (
        <main
          className={`${montserrat.variable} font-mont w-full min-h-screen h-full relative`}
        >
          <div className="fixed top-0 left-0 w-full h-full z-0">
              <Plasma 
                color="#b7beff"
                speed={0.6}
                direction="forward"
                scale={1.1}
                opacity={0.8}
                mouseInteractive={true}
              />
          </div>
          <div className="relative z-10">
            <Navbar />
            <AnimatePresence initial={false} mode="wait">
              <Component key={router.asPath} {...pageProps} />
            </AnimatePresence>
            <Footer />
          </div>
        </main>
      )}
    </>
  );
}
